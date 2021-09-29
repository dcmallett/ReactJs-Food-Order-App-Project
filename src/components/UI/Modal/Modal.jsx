import styles from './Modal.module.css';
import Card from '../Card/Card';
const Modal = (props) => {
    return (
        <div className={styles.backdrop}>
            <Card>
                <div className={styles.modal}>
                    <div>
                        <h2>{props.title}</h2>
                    </div>
                    <div>
                        <p>{props.content}</p>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Modal

