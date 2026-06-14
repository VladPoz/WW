import { forwardRef } from 'react';

const First = forwardRef((props, ref) => {
    return (
        <section className={'main'}>
            <div className="contents" ref={ref}>
                <h3 className="contents-title">01. Аккредитация</h3>
                <div>
                    <div className="content-item">
                        <span className="contents-text">Аккредитация младшего среднего профессионала</span>
                        <span className="contents-price">15.000</span>
                    </div>
                    <div className="content-item">
                        <span className="contents-text">Аккредитация высшего персонала</span>
                        <span className="contents-price">25.000</span>
                    </div>
                    <div className="content-item">
                        <span className="contents-text">Аккредитация врачебных специальностей</span>
                        <span className="contents-price">15.000</span>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default First;
