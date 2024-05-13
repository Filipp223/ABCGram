import Posts from "../Posts/Posts.jsx";
import gyllenhaal from "./img/Gyllenhaal.webp";
import "./Profile.css";

function Profile({postArray}) {
    return (
        <section className="profile">
            <img className="profile__img" src={gyllenhaal} alt="Jake Gyllenhaal"/>
            Name: Jake Gyllenhaal

            <Posts postArray={postArray}/>
        </section>
    );
}

export default Profile;