import styles from "./Post.module.css";

console.log(styles);

function Post({image, userName, postText}) {
    return (
        <li className={styles.post}>
            <img className="profileImage" src={image} alt={userName} width="100"/>
            <h3 className={styles.author}>{userName}</h3>
            <p className="text">{postText}</p>
        </li>
    );
}

export default Post;