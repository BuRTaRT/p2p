import s from './button.module.css'

const Button = ({text, className,onIsVisible}) => {
    return (
        <>
            <div onClick={onIsVisible} className={`${s.button} ${className}`}>
                {text}
            </div>
        </>
    );
};
export default Button;