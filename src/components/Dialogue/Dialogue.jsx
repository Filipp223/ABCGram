import "./Dialogue.css"

function Dialogue(props) {
    return (
        <li className="dialogue">
            <h3 className="author">{props.userName}</h3>
            <p className="text">{props.postText}</p>
            <h3 className="author">{props.userNamePage}</h3>
            <p className="text">{props.postTextPage}</p>
        </li>
    );
}

export default Dialogue;