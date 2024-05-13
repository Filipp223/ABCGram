import styles from "./Posts.module.css";
import Post from "../Post/Post.jsx";

function Posts({postArray}) {
    return (
        <div className={styles.posts}>
            <h2 className="title">Posts</h2>
            <textarea className="textarea" placeholder="What is happening!"/>
            <button className="button">Post</button>
            <ul className="list">
                {postArray.map((post, i) => {
                    return (<Post image={post.image} userName={post.userName} postText={post.postText} key={i}/>)
                })}
            </ul>
        </div>
    )
}

export default Posts;