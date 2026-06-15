import {Link} from "react-router-dom";

export function Contact() {
    return (
        <section className="contact">
            <div className="logo-form">
                <img className={'logo-img'} src="/images/logo.svg" alt=""/>
            </div>
            <div className={'contact-form'}>
                <a href="https://www.instagram.com/maksumova966?igsh=ejdqdnVxbHl6cG5t">INSTAGRAM</a>
                <Link to={'/catalog'}>ПРАЙС</Link>
            </div>
            <div className="bg-form">
                <img className={'bg-img'} src="/images/bg.png" alt=""/>
            </div>
        </section>
    )
}