import styles from "./FeedPost.module.css";

function FeedPost(props) {
    return (
        <div className={styles.post}>
            <h3 className={styles.subtitle}>{props.title}</h3>
            <p className={styles.location}>{props.location}</p>
            <p className={styles.text}>{props.text}</p>
        </div>
    );
}

export default FeedPost;