import Posts from "../Posts/Posts.jsx";
import gyllenhaal from "./img/Gyllenhaal.webp";
import "./Profile.css";

function Profile() {
    return (
        <section className="profile">
            <img src={gyllenhaal} alt="Jake Gyllenhaal"/>
            Name: Jake Gyllenhaal

            <Posts/>
        </section>
    );
}

export default Profile;