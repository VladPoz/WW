import { forwardRef } from 'react';

const Sixth = forwardRef((props, ref) => {
    return (
        <section className={'main'}>
            <div className="contents" ref={ref}>
                <h3 className="contents-title">06. Лицензирование</h3>
                <div>
                    <div className="content-item">
                        <span className="contents-text">Подготовка документов к лицензированию отдельных видов медицинской деятельности для ООО</span>
                        <span className="contents-price">50.000</span>
                    </div>
                    <div className="content-item">
                        <span className="contents-text">Для ИП</span>
                        <span className="contents-price">20.000</span>
                    </div>
                </div>
            </div>
        </section>
    )
});

export default Sixth;