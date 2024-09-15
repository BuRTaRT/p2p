import React from 'react';
import s from './indsiderInfo.module.css'
import Button from "../components/button.jsx";

const InsiderInfo = ({onIsVisible}) => {
    return (
        <div className={s.wrap}>
            <p className={s.title}>Хочешь в группу с инсайдерской инфой?</p>
            <div className={s.blocks}>
                <div className={s.left}>
                    <p className={s.what}>Что такое наша приватная группа?</p>
                    <p className={s.description}>Это бесконечный поток <span className={s.bold}>бесплатных связок, советов и идей по заработку</span> в сфере P2P криптоарбитража,
                        эксклюзивная информация и личный опыт арбитражников.
                        И все это бесплатно, все, что тебе нужно сделать — подписаться на нас!</p>
                    <Button className={s.desktop} text={'Начать сейчас'}/>
                </div>
                <div className={s.right}>
                    <img src="/robot_1png.svg" alt="robot"/>
                </div>
            </div>
            <Button onIsVisible={onIsVisible} className={s.mobile} text={'Начать сейчас'}/>
        </div>
    );
};

export default InsiderInfo;