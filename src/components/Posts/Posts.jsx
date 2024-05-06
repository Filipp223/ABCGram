import styles from "./Posts.module.css";
import Post from "../Post/Post.jsx";
import profileImg1 from "../../img/Gyllenhaal.webp";
import profileImg2 from "../../img/aaronpaul.jpg";
import profileImg3 from "../../img/jeffbezos.jpg";

const postArray = [
    {
        image: profileImg1,
        userName: "Jake Gyllenhaal",
        postText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ullam praesentium distinctio? Impedit aspernatur placeat hic iure voluptatum dolor officiis est adipisci magni mollitia incidunt, ab nostrum odio magnam omnis!",
    },

    {
        image: profileImg2,
        userName: "Aaron Paul",
        postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, earum voluptate! Ullam nulla fuga laudantium, rerum optio porro delectus amet, minima sed, quia praesentium atque deleniti? Recusandae atque obcaecati sequi.",
    },

    {
        image: profileImg3,
        userName: "Jeff Bezos",
        postText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores maxime excepturi debitis. Illo id magnam sint repellendus ad exercitationem in ipsum. Perspiciatis laborum hic voluptatibus reprehenderit ex fuga quam labore!",
    }
]

function Posts() {
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