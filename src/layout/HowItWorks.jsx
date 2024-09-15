import s from './howItWorks.module.css'
import Button from "../components/button.jsx";

const HowItWorks = () => {
    return (
        <div className={s.wrap}>
            <h1 className={s.title}>Как работают арбитражники?</h1>
            <div className={s.steps}>
                <div className={s.step}>
                    <div className={s['step-img']}><img src="/step1.svg" alt=""/></div>
                    <div className={s['step-text']}>Выбираешь
                        биржу</div>
                </div>
                <div className={s.step}>
                    <div className={s['step-img']}><img src="/step2.svg" alt=""/></div>
                    <div className={s['step-text']}>Покупаешь
                        валюту</div>
                </div>
                <div className={s.step}>
                    <div className={s['step-img']}><img src="/step3.svg" alt=""/></div>
                    <div className={s['step-text']}>Сравниваешь
                        курсы</div>
                </div>
                <div className={s.step}>
                    <div className={s['step-img']}><img src="/step4.svg" alt=""/></div>
                    <div className={s['step-text']}>Перепродаешь
                        по лучшей цене</div>
                </div>
                <div className={s.step}>
                    <div className={s['step-img']}><img src="/step5.svg" alt=""/></div>
                    <div className={s['step-text']}>Получаешь
                        прибыль</div>
                </div>
            </div>
            <p className={s["points-title"]}>Почему P2P криптоарбитраж выгоден</p>
            <div className={s["points-container"]}>
                <img src="/points.svg" alt=""/>
            </div>
            <Button text={'Начать прямо сейчас'}/>
        </div>
    );
};

export default HowItWorks;