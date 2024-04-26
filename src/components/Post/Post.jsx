import profileImg from "../../img/Gyllenhaal.webp";

function Post() {
    return (
        <li className="post">
            <img className="profileImage" src={profileImg} alt="Jake Gyllenhaal" width="100"/>
            <h3 className="author">Jake Gyllenhaal</h3>
            <p className="text">3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ullam praesentium distinctio? Impedit aspernatur placeat hic iure voluptatum dolor officiis est adipisci magni mollitia incidunt, ab nostrum odio magnam omnis!</p>
        </li>
    );
}

export default Post;