import styles from "./User.module.css";

function User(props) {
    return (
        <li className={styles.userItem}>
            <img className={styles.img} src={props.img} alt={props.profileImg}/>
            <h3 className={styles.userName}>{props.userName}</h3>
        </li>
    );
}

export default User;