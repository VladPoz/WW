import { forwardRef } from 'react';

const Eighth = forwardRef((props, ref) => {
    return (
        <section className={'main'}>
            <div className="contents" ref={ref}>
                <h3 className="contents-title">08. Отдельные позиции для заказа услуг</h3>
                <div>
                    <div className="content-item">
                        <span className="contents-text">Роскомнадзор от регистрации к подготовке документов</span>
                        <span className="contents-price">10.000</span>
                    </div>
                    <div className="content-item">
                        <span className="contents-text">Честный знак</span>
                        <span className="contents-price">10.000</span>
                    </div>
                    <div className="content-item">
                        <span className="contents-text">ФРМО и ФРМР от регистрации до заполнения системы</span>
                        <span className="contents-price">15.000</span>
                    </div>
                    <div className="content-item">
                        <span className="contents-text">ФОМС подготовка документов для подачи на будущий год</span>
                        <span className="contents-price">20.000</span>
                    </div>
                    <div className="content-item">
                        <span className="contents-text">Оборотная ведомость</span>
                        <span className="contents-price">5.000</span>
                    </div>
                    <div className="content-item">
                        <span className="contents-text">Сведение баланса</span>
                        <span className="contents-price">25.000</span>
                    </div>
                    <div className="content-item">
                        <span className="contents-text">Аудит (только тендерная основа)</span>
                        <span className="contents-price">100.000</span>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Eighth;