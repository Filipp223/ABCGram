import profileImg from "../../img/Gyllenhaal.webp";
import styles from "./Post.module.css";

console.log(styles);

function Post(props) {
    return (
        <li className={styles.post}>
            <img className="profileImage" src={props.image} alt={props.userName} width="100"/>
            <h3 className={styles.author}>{props.userName}</h3>
            <p className="text">{props.postText}</p>
        </li>
    );
}

export default Post;