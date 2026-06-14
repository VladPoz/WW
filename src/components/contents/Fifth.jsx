import { forwardRef } from 'react';

const Fifth = forwardRef((props, ref) => {
    return (
        <section className={'main'}>
            <div className="contents" ref={ref}>
                <h3 className="contents-title">05. Обучение</h3>
                <div>
                    <div className="content-item">
                        <span className="contents-text">Обучение аккредитациям</span>
                        <span className="contents-price">50.000</span>
                    </div>
                    <div className="content-item">
                        <span className="contents-text">Обучение в сфере юридических услуг (только юристы, окончившие университет по профилю: юриспруденция)</span>
                        <span className="contents-price">50.000</span>
                    </div>
                    <div className="content-item">
                        <span className="contents-text">Обучение персонала</span>
                        <span className="contents-price">50.000</span>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Fifth;