import s from './button.module.css'

const Button = (props) => {
    const {text, className, onIsVisible} = props
    return (
        <>
            <div onClick={onIsVisible} className={`${s.button} ${className}`}>
                {text}
            </div>
        </>
    );
};
export default Button;