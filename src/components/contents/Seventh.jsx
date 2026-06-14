import { forwardRef } from 'react';

const Seventh = forwardRef((props, ref) => {
    return (
        <section className={'main'}>
            <div className="contents" ref={ref}>
                <h3 className="contents-title">07. Годовое юридическое обслуживание</h3>
                <div>
                    <div className="content-item">
                        <span className="contents-text">Юридических лиц в сфере здравоохранения (выездное, 12 выездов в год)</span>
                        <span className="contents-price">150.000</span>
                    </div>
                    <div className="content-item">
                        <span className="contents-text">Удаленное</span>
                        <span className="contents-price">40.000 в год</span>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Seventh;