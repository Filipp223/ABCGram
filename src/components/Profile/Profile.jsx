import Posts from "../Posts/Posts.jsx";
import Dialogues from "../Dialogues/Dialogues.jsx";
import gyllenhaal from "./img/Gyllenhaal.webp";
import "./Profile.css";

function Profile() {
    return (
        <section className="profile">
            <img className="profile__img" src={gyllenhaal} alt="Jake Gyllenhaal"/>
            Name: Jake Gyllenhaal

            <Posts/>
            <Dialogues/>
        </section>
    );
}

export default Profile;