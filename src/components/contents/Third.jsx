import { forwardRef } from 'react';

const Third = forwardRef((props, ref) => {
    return (
        <section className={'main'}>
            <div className="contents" ref={ref}>
                <h3 className="contents-title">03. Договоры</h3>
                <div>
                    <div className="content-item">
                        <span className="contents-text">Договор аренды и акт к нему</span>
                        <span className="contents-price">5.000</span>
                    </div>
                    <div className="content-item">
                        <span className="contents-text">Договор трудового найма</span>
                        <span className="contents-price">5.000</span>
                    </div>
                    <div className="content-item">
                        <span className="contents-text">Договор с пациентом и ИДС</span>
                        <span className="contents-price">5.000</span>
                    </div>
                    <div className="content-item">
                        <span className="contents-text">Договор аренды имущества</span>
                        <span className="contents-price">5.000</span>
                    </div>
                    <div className="content-item">
                        <span className="contents-text">Договор подряда</span>
                        <span className="contents-price">5.000</span>
                    </div>
                    <div className="content-item">
                        <span className="contents-text">Разбор договора</span>
                        <span className="contents-price">3.000</span>
                    </div>
                    <div className="content-item">
                        <span className="contents-text">Юридическая консультация</span>
                        <span className="contents-price">2.500</span>
                    </div>
                    <div className="contents-note">Лицам мужского пола очных консультаций не провожу</div>
                </div>
            </div>
        </section>
    );
});

export default Third;