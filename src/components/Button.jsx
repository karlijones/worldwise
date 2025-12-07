import styles from './Button.module.css';

function Button({children, onClick, type}) {
    return (
        <button onClick={onClick} type={styles.btn} >
            
        </button>
    )
}

export default Button
