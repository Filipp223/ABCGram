import "./Posts.css";
import Post from "../Post/Post.jsx";
import profileImg from "../../img/Gyllenhaal.webp";

function Posts() {
    return (
        <div className="posts">
            <h2 className="title">Posts</h2>
            <textarea className="textarea" placeholder="What is happening!"/>
            <button className="button">Post</button>
            <ul className="list">
                <Post/>
                <Post/>
                <Post/>
            </ul>
        </div>
    )
}

export default Posts;