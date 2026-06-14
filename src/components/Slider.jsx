export const TOTAL = 8;
export const STEP = 360 / TOTAL;
export const CX = -200;
export const CY = 350;
export const R = 380;
export const R_LABEL = R + 52;

function getInitPos(i) {
    const angleRad = (i * STEP * Math.PI) / 180;
    return {
        dx: CX + R * Math.cos(angleRad),
        dy: CY + R * Math.sin(angleRad),
        lx: CX + R_LABEL * Math.cos(angleRad),
        ly: CY + R_LABEL * Math.sin(angleRad),
    };
}

export default function Slider({ dotRefs, textRefs }) {
    const VW = 280, VH = 700;

    return (
        <div className="slider">
            <svg viewBox={`0 0 ${VW} ${VH}`} style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                <circle cx={CX} cy={CY} r={R} fill="none" stroke="black" opacity="0.15" />

                {Array.from({ length: TOTAL }).map((_, i) => {
                    const { dx, dy } = getInitPos(i);
                    return (
                        <circle
                            key={i}
                            ref={el => dotRefs.current[i] = el}
                            cx={dx}
                            cy={dy}
                            r={i === 0 ? 14 : 6}
                            fill="black"
                        />
                    );
                })}

                {Array.from({ length: TOTAL }).map((_, i) => {
                    const { lx, ly } = getInitPos(i);
                    return (
                        <text
                            key={i}
                            ref={el => textRefs.current[i] = el}
                            x={lx}
                            y={ly}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="slider-number"
                        >
                            {String(i + 1).padStart(2, '0')}
                        </text>
                    );
                })}
            </svg>
        </div>
    );
}