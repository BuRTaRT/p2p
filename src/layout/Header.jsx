import s from './header.module.css'
import Button from "../components/button.jsx";

const Header = ({onIsVisible}) => {
    return (
        <div className={s.header}>
            <div className={s['promo-info']}>
                <p className={s['promo-title']}>P2P | АРБИТРАЖ КРИПТОВАЛЮТ</p>
                <p className={s.promo}>Начни <span className={s.important}>бесплатно</span> сейчас с нами
                    и получи <span
                        className={s.important}>первую профитную связку</span></p>
                <div className={s['promo-info-advantages-list']}>
                    <div className={s.advantage}><span></span>Быстро</div>
                    <div className={s.advantage}><span></span>Доступно</div>
                    <div className={s.advantage}><span></span>Легко</div>
                </div>
                 <Button onIsVisible={onIsVisible} text={'Начать прямо сейчас'}/>
            </div>
            <div className={s['promo-img']}>
                <img src="/Grourfrp_1-minpng.svg" alt=""/>
            </div>
        </div>
    );
};

export default Header;