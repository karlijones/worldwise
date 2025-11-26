import styles from './Button.module.css';

function Button({children, onClick, type}) {
    return (
        <button onClick={onClick} type={type} >
            
        </button>
    )
}

export default Button
