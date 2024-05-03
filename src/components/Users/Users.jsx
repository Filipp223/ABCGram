import styles from "./Users.module.css";
import User from "../User/User.jsx";
import img1 from "../../img/Gyllenhaal.webp";
import img2 from "../../img/aaronpaul.jpg";
import img3 from "../../img/jeffbezos.jpg";

function Users() {
    return (
        <div className={styles.users}>
            <h2 className={styles.title}>Users</h2>
            <ul className={styles.list}>
                <User img={img1} userName="Jake Gyllenhaal"/>
                <User img={img2} userName="Aaron Paul"/>
                <User img={img3} userName="Jeff Bezos"/>
            </ul>
        </div>
    );
}

export default Users;