import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import Slider, { CX, CY, R, R_LABEL, TOTAL, STEP } from './Slider.jsx';
import Logo from './Logo.jsx';
import First from './contents/First.jsx';
import Second from "./contents/Second.jsx";
import Third from "./contents/Third.jsx";
import Fourth from "./contents/Fourth.jsx";
import Fifth from "./contents/Fifth.jsx";
import Sixth from "./contents/Sixth.jsx";
import Seventh from "./contents/Seventh.jsx";
import Eighth from "./contents/Eighth.jsx";
// ... остальные импорты

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
                gsap.set(el, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 40 });
            });

            const proxy = { progress: 0 };

            gsap.to(proxy, {
                progress: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: document.documentElement,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 0.8,
                    snap: {
                        snapTo: 1 / (TOTAL - 1),
                        duration: 0.4,
                        ease: 'power2.inOut',
                    },

                    onUpdate(self) {
                        const progress = self.progress;
                        const index = Math.round(progress * (TOTAL - 1));

                        if (state.index !== index) {
                            state.index = index;
                        }

                        // Угол поворота всего колеса
                        const rot = -progress * (TOTAL - 1) * STEP;

                        // DOTS — позиция + размер активной точки
                        dotRefs.current.forEach((dot, i) => {
                            if (!dot) return;
                            const { dx, dy } = getPos(i, rot);
                            gsap.set(dot, {
                                attr: {
                                    cx: dx,
                                    cy: dy,
                                    r: i === index ? 14 : 6,   // ← вот ключевое
                                },
                            });
                        });

                        // LABELS — позиция + активный класс
                        textRefs.current.forEach((text, i) => {
                            if (!text) return;
                            const { lx, ly } = getPos(i, rot);
                            gsap.set(text, { attr: { x: lx, y: ly } });
                            text.classList.toggle('active', i === index);
                        });

                        // CONTENT FADE
                        contentRefs.current.forEach((el, i) => {
                            if (!el) return;
                            gsap.to(el, {
                                opacity: i === index ? 1 : 0,
                                y: i === index ? 0 : 40,
                                duration: 0.35,
                                ease: 'power2.out',
                                overwrite: true,
                            });
                        });
                    },
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="App">
            <Logo />
            <Slider dotRefs={dotRefs} textRefs={textRefs} />
            <First  ref={el => contentRefs.current[0] = el} />
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