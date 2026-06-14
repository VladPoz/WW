import { forwardRef } from 'react';

const Second = forwardRef((props, ref) => {
    return (
        <section className={'main'}>
            <div className="contents" ref={ref}>
                <h3 className="contents-title">02. Без названия пока</h3>
                <div>
                    <div className="content-item">
                        <span className="contents-text">Переподготовка с сертификатом для лиц, закончивших обучение до 2019 года (через партнеров)</span>
                        <span className="contents-price">20.000</span>
                    </div>
                    <div className="content-item">
                        <span className="contents-text">УПК</span>
                        <span className="contents-price">5.000</span>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Second;