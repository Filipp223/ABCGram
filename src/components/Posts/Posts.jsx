import styles from "./Posts.module.css";
import Post from "../Post/Post.jsx";
import profileImg from "../../img/Gyllenhaal.webp";

function Posts() {
    return (
        <div className={styles.posts}>
            <h2 className="title">Posts</h2>
            <textarea className="textarea" placeholder="What is happening!"/>
            <button className="button">Post</button>
            <ul className="list">
                <Post image={profileImg} userName="Jake Gyllenhaal" postText="1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ullam praesentium distinctio? Impedit aspernatur placeat hic iure voluptatum dolor officiis est adipisci magni mollitia incidunt, ab nostrum odio magnam omnis!"/>
                <Post image={profileImg} userName="Jake Gyllenhaal" postText="2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ullam praesentium distinctio? Impedit aspernatur placeat hic iure voluptatum dolor officiis est adipisci magni mollitia incidunt, ab nostrum odio magnam omnis!"/>
                <Post image={profileImg} userName="Jake Gyllenhaal" postText="3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ullam praesentium distinctio? Impedit aspernatur placeat hic iure voluptatum dolor officiis est adipisci magni mollitia incidunt, ab nostrum odio magnam omnis!"/>
            </ul>
        </div>
    )
}

export default Posts;