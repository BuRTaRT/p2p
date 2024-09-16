import Button from "../components/Button.jsx";
import s from './manageLife.module.css'

const ManageLife = ({onIsVisible}) => {
    return (
        <div className={s.wrap}>
            <div className={s["manage-block"]}>
                <div className={s.left}>
                    <div className={s.title}>УПРАВЛЯЙТЕ СВОЕЙ ЖИЗНЬЮ</div>
                    <img className={s.img} src="/manage.svg" alt=""/>
                    <p className={s['manage-text']}>Бесплатно только 25 мест /</p>
                    <p className={`${s['manage-text']} ${s.color}`}>Осталось: 7 мест</p>
                    <Button onIsVisible={onIsVisible} className={s['btn-desktop']} text={'Регистрация в один клик'}/>
                </div>
                <div className={s.right}>
                    <div className={s.points}>
                        <div className={s.point}>
                            <p className={s['point-text']}>Разобраться в сфере после неудачных самостоятельных
                                попыток</p>
                        </div>
                        <div className={s.point}>
                            <p className={s['point-text']}>Получить структурированые глубокие знания от опытных
                                наставником</p>
                        </div>
                        <div className={s.point}>
                            <p className={s['point-text']}>Выработать собственную стратегию, а не покупать связки в
                                Telegram</p>
                        </div>

                        <img className={s['img-mobile']} src="/manage.svg" alt=""/>
                    </div>
                    <p className={`${s['manage-text']} ${s.mobile}`}>Бесплатно только 25 мест /</p>
                    <p className={`${s['manage-text']} ${s.color} ${s.mobile}`}>Осталось: 7 мест</p>
                    <Button onIsVisible={onIsVisible} className={s.mobile} text={'Регистрация в один клик'}/>
                </div>
            </div>
        </div>
    );
};

export default ManageLife;