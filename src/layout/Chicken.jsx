import s from './chicken.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../components/Button.jsx";

const Chicken = ({onIsVisible}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: true,
        appendDots: dots => (
            <ul style={{margin: "0px"}}> {dots} </ul>
        ),

    };
    return (
        <>
            <div className={s.wrap}>
                <p className={s.title}> Денис Агапов</p>
                <div className={s.block}>
                    <img className={s.photo} src="/photo_2024-04-24_146.png" alt=""/>
                    <ul>
                        <li>Один из один из самых известных P2P и OTC-трейдеров в СНГ с <span>6 летним опытом</span>
                        </li>
                        <li>Руководитель команды разработчиков криптовалютных арбитражных роботов и сервиса по
                            автоматизации
                            P2P/OTC торговли
                            <span> Satoshkin</span></li>
                        <li>Предприниматель, инвестор, трейдер с реальным опытом торговли на P2P и OTC-площадках
                            с <span>2017 года</span>
                        </li>
                    </ul>
                </div>
                <div className={s.title2}>Сомневаетесь?</div>
                <p className={s['title2-text']}>Выберите свой вариант развития событий</p>
                <div className={s.block}>
                    <div className={s['img-container']}>
                        <img src="/Group_18.png" alt=""/>
                        <img src="/Group_19.png" alt=""/>
                    </div>
                </div>
                <div className={s.slider}>
                    <Slider {...settings}>
                        <div>
                            <img className={s.sliderImg} src="/Frame_10.png" alt=""/>

                        </div>
                        <div>
                            <img className={s.sliderImg} src="/Frame_11.png" alt=""/>
                        </div>
                        <div>
                            <img className={s.sliderImg} src="/Frame_12.png" alt=""/>
                        </div>
                    </Slider>
                </div>
                <div className={s.footer}>
                    <div className={s.title2}>ХОЧЕШЬ ТАКИЕ ЖЕ РЕЗУЛЬТАТЫ?</div>
                    <div className={s['title2-text']}>ЕСТЬ СВЯЗКА ДЛЯ ТЕБЯ!</div>
                    <Button onIsVisible={onIsVisible} text={"Бесплатная консультация"}/>
                </div>

            </div>
        </>

    );
};

export default Chicken;