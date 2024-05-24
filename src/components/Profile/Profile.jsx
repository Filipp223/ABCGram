import Posts from "../Posts/Posts.jsx";
import gyllenhaal from "./img/Gyllenhaal.webp";
import "./Profile.css";

function Profile({postArray, addMessage}) {
    return (
        <section className="profile">
            <img className="profile__img" src={gyllenhaal} alt="Jake Gyllenhaal"/>
            Name: Jake Gyllenhaal

            <Posts postArray={postArray} addMessage={addMessage}/>
        </section>
    );
}

export default Profile;