import Slider, { CX, CY, R, R_LABEL, TOTAL, STEP } from '../components/Slider.jsx';

import Logo from '../components/Logo.jsx';
import First from '../components/contents/First.jsx';
import Second from '../components/contents/Second.jsx';
import Third from '../components/contents/Third.jsx';
import Fourth from '../components/contents/Fourth.jsx';
import Fifth from '../components/contents/Fifth.jsx';
import Sixth from '../components/contents/Sixth.jsx';
import Seventh from '../components/contents/Seventh.jsx';
import Eighth from '../components/contents/Eighth.jsx';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function getPos(i, rotDeg) {
    const angleDeg = i * STEP + rotDeg;
    const angleRad = (angleDeg * Math.PI) / 180;

    return {
        dx: CX + R * Math.cos(angleRad),
        dy: CY + R * Math.sin(angleRad),
        lx: CX + R_LABEL * Math.cos(angleRad),
        ly: CY + R_LABEL * Math.sin(angleRad),
    };
}

export default function Catalog() {
    const dotRefs = useRef([]);
    const textRefs = useRef([]);
    const contentRefs = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            const state = { index: 0 };

            // INIT
            contentRefs.current.forEach((el, i) => {
                gsap.set(el, {
                    opacity: i === 0 ? 1 : 0,
                    y: i === 0 ? 0 : 40,
                });
            });

            dotRefs.current.forEach((dot, i) => {
                gsap.set(dot, {
                    attr: { r: i === 0 ? 14 : 6 }
                });
            });

            textRefs.current.forEach((text, i) => {
                text.classList.toggle('active', i === 0);
            });

            const proxy = { progress: 0 };

            gsap.to(proxy, {
                progress: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: document.documentElement,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.8,
                    snap: {
                        snapTo: 1 / (TOTAL - 1),
                        duration: 0.4,
                        ease: "power2.inOut"
                    },

                    onUpdate(self) {
                        const progress = self.progress;

                        const index = Math.round(progress * (TOTAL - 1));
                        if (state.index !== index) state.index = index;

                        // ROTATION (главная связь с кругом)
                        const rot = -progress * (TOTAL - 1) * STEP;

                        // DOTS
                        dotRefs.current.forEach((dot, i) => {
                            if (!dot) return;

                            const { dx, dy } = getPos(i, rot);

                            gsap.set(dot, {
                                attr: { cx: dx, cy: dy }
                            });
                        });

                        // TEXT POSITION + ACTIVE
                        textRefs.current.forEach((text, i) => {
                            if (!text) return;

                            const { lx, ly } = getPos(i, rot);

                            gsap.set(text, {
                                attr: { x: lx, y: ly }
                            });

                            text.classList.toggle('active', i === index);
                        });

                        // CONTENT FADE
                        contentRefs.current.forEach((el, i) => {
                            if (!el) return;

                            const active = i === index;

                            gsap.to(el, {
                                opacity: active ? 1 : 0,
                                y: active ? 0 : 40,
                                duration: 0.35,
                                ease: "power2.out",
                                overwrite: true
                            });
                        });
                    }
                }
            });

        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="App">
            <Logo />

            <Slider
                dotRefs={dotRefs}
                textRefs={textRefs}
            />

            <First ref={el => contentRefs.current[0] = el} />
            <Second ref={el => contentRefs.current[1] = el} />
            <Third ref={el => contentRefs.current[2] = el} />
            <Fourth ref={el => contentRefs.current[3] = el} />
            <Fifth ref={el => contentRefs.current[4] = el} />
            <Sixth ref={el => contentRefs.current[5] = el} />
            <Seventh ref={el => contentRefs.current[6] = el} />
            <Eighth ref={el => contentRefs.current[7] = el} />
        </div>
    );
}