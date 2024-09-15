import s from './PopUp.module.css'
import 'react-phone-input-2/lib/style.css'
import PhoneInput from "react-phone-input-2";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";


let submitted = false;
const PopUp = ({onIsInvisible}) => {


    const {
        register,
        trigger,
        setValue,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const onSubmit = (data) => {
        submitted = true;

        const res = fetch('https://udemy-react-f6ba3-default-rtdb.europe-west1.firebasedatabase.app/lid.json', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
    return (
        <div onMouseDown={onIsInvisible} className={s.wrap}>
            <div onMouseDown={(e) => e.stopPropagation()} className={s.popup}>
                <h2>Оставь заявку</h2>
                <p>Наш специалист свяжется и присоединит к Вас закрытой бесплатной группе</p>

                <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.input}>
                        <input {...register('name', {
                            required: 'Имя обязательно',
                            pattern: {
                                value: /^[a-zA-Zа-яА-Я]{3,20}$/i,
                                message: 'Введите корректное имя',
                            }
                        })} type="text"
                               placeholder={'Имя'}/>
                        {errors.name && <p className={s.error}>{errors.name.message}</p>}
                    </div>
                    <div className={s.input}>
                        <PhoneInput
                            country={'ru'}
                            onChange={(phone) => {
                                setValue('phone', phone)
                                trigger('phone');
                            }}
                            inputClass={s['phone-input']}
                            inputProps={{
                                name: 'phone',
                                required: true,
                                autoFocus: true
                            }}
                        />
                        {errors.phone && <p className={s.error}>{errors.phone.message}</p>}
                    </div>
                    <input
                        type="hidden"
                        {...register('phone', {
                            required: 'Телефон обязателен',
                            validate: (value) => value.length >= 10 || 'Номер телефона должен быть не менее 10 цифр',
                        })}
                    />
                    <div className={s.input}>
                        <input type="text" placeholder={'Email'}
                               {...register('email', {
                                   required: 'Email обязателен',
                                   pattern: {
                                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                       message: 'Введите корректный email',
                                   },
                               })}

                        />
                        {errors.email && <p className={s.error}>{errors.email.message}</p>}
                    </div>
                    <button>submit</button>
                </form>
            </div>
        </div>
    );
};

export default PopUp;