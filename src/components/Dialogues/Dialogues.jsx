import Dialogue from "../Dialogue/Dialogue";
import styles from "./Dialogues.module.css";

const dialogueArray = [
    {
        userName: "Michael Smith",
        message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit???",
    },

    {
        userName: "Jake Gyllenhaal",
        message: "Ullam nulla fuga laudantium",
    },
]

function Dialogues() {
    return (
        <div className={styles.dialogues}>
            <h2 className="title">Dialogues</h2>
            <textarea className="textarea" placeholder="Ask questions!"/>
            <button className="button">Send</button>
            <ul className="list">
                {dialogueArray.map((dialogue, i) => {
                    return <Dialogue userName={dialogue.userName} message={dialogue.message}/>;
                })}
            </ul>
        </div>
    );
}

export default Dialogues;