const TOTAL = 8;
const STEP = 360 / TOTAL;

const VW = 280;
const VH = 700;

const CX = -200;
const CY = VH / 2;

const R = 380;
const R_LABEL = R + 52;

function Slider({ dotRefs, textRefs, circleRef }) {
    const marks = Array.from({ length: TOTAL }).map((_, i) => {
        const angleDeg = i * STEP;
        const angleRad = (angleDeg * Math.PI) / 180;

        return {
            dx: CX + R * Math.cos(angleRad),
            dy: CY + R * Math.sin(angleRad),
            lx: CX + R_LABEL * Math.cos(angleRad),
            ly: CY + R_LABEL * Math.sin(angleRad),
        };
    });

    return (
        <div className="slider">
            <svg
                viewBox={`0 0 ${VW} ${VH}`}
                style={{ width: '100%', height: '100%' }}
            >
                <circle
                    ref={circleRef}
                    cx={CX}
                    cy={CY}
                    r={6}
                    fill="none"
                    stroke="black"
                    opacity="0.15"
                />

                {marks.map(({ dx, dy }, i) => (
                    <circle
                        key={i}
                        ref={(el) => (dotRefs.current[i] = el)}
                        cx={dx}
                        cy={dy}
                        r={6}
                        fill="black"
                    />
                ))}

                {marks.map(({ lx, ly }, i) => (
                    <text
                        key={i}
                        ref={(el) => (textRefs.current[i] = el)}
                        x={lx}
                        y={ly}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="slider-number"
                    >
                        {String(i + 1).padStart(2, '0')}
                    </text>
                ))}
            </svg>
        </div>
    );
}

export {
    CX, CY, R, R_LABEL, TOTAL, STEP
};

export default Slider;