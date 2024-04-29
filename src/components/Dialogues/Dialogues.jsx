import Dialogue from "../Dialogue/Dialogue";
import "./Dialogues.css";

function Dialogues() {
    return (
        <div className="dialogues">
            <h2 className="title">Dialogues</h2>
            <textarea className="textarea" placeholder="Ask questions!"/>
            <button className="button">Send</button>
            <ul className="list">
                <Dialogue userName="Michael Smith" postText="Lorem, ipsum dolor sit amet consectetur adipisicing elit???" userNamePage="Jake Gyllenhaal" postTextPage="Ullam nulla fuga laudantium"/>
            </ul>
        </div>
    );
}

export default Dialogues;