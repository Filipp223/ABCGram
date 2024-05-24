import styles from "./Posts.module.css";
import Post from "../Post/Post.jsx";
import {useRef} from "react";

function Posts({postArray, addMessage}) {
    const inputRef = useRef();
    function add() {
        addMessage(inputRef.current.value);
    }
    return (
        <div className={styles.posts}>
            <h2 className="title">Posts</h2>
            <textarea className="textarea" ref={inputRef} placeholder="What is happening!"/>
            <button className="button" onClick={add}>Post</button>
            <ul className="list">
                {postArray.map((post, i) => {
                    return (<Post image={post.image} userName={post.userName} postText={post.postText} key={i}/>)
                })}
            </ul>
        </div>
    )
}

export default Posts;