import { forwardRef } from 'react';

const Fourth = forwardRef((props, ref) => {
    return (
        <section className={'main'}>
            <div className="contents" ref={ref}>
                <h3 className="contents-title">04. Патентное право</h3>
                <div>
                    <div className="content-item">
                        <span className="contents-text">Консультация в сфере патента</span>
                        <span className="contents-price">2.500</span>
                    </div>
                    <div className="content-item">
                        <span className="contents-text">Регистрация товарного знака и сопровождение</span>
                        <span className="contents-price">20.000</span>
                    </div>
                </div>
            </div>
        </section>
    );
});
export default Fourth;