import styles from './Button.module.css';

function Button({children, onClick, type}) {
    return (
        <button onClick={onClick} type={`${styles.btn} {styles[type]}`}>
            
        </button>
    )
}

export default Button
