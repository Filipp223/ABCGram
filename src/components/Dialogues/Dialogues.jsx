import Dialogue from "../Dialogue/Dialogue";
import styles from "./Dialogues.module.css";
import {useRef, useState} from "react";
import { ACTIONS } from "../../data/store";
import { useSelector, useDispatch} from "react-redux";

function Dialogues() {
    const dispatch = useDispatch();
    const dialogueArray = useSelector((state) => {
        return state.dialogueArray;
    })

    const [text, setText] = useState("");
    const inputRef = useRef();

    const [userName, setUserName] = useState("");

    function add() {
        dispatch({
            type: ACTIONS.ADD_DIALOGUE,
            payload: {
                userName: userName,
                message: text,
            }
        });
        setText("");
        console.log(userName);
    }
    return (
        <div className={styles.dialogues}>
            <h2 className="title">Dialogues</h2>
            <select className={styles.select} value={userName} onChange={function (event) {
                setUserName(event.target.value);
            }}>
                <option value="Michael Smith">Michael Smith</option>
                <option value="Jake Gyllenhaal">Jake Gyllenhaal</option>
            </select>
            <textarea className="textarea" ref={inputRef} placeholder="Ask questions!" value={text} onChange={function (event) {
                setText(event.target.value);
            }}/>
            <button className="button" onClick={add}>Send</button>
            <ul className="list">
                {dialogueArray.map((dialogue, i) => {
                    return <Dialogue userName={dialogue.userName} message={dialogue.message} key={dialogue.id}/>;
                })}
            </ul>
        </div>
    );
}

export default Dialogues;