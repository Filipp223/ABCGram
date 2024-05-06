import "./Dialogue.css"

function Dialogue({userName, message}) {
    return (
        <li className="dialogue">
            <h3 className="author">{userName}</h3>
            <p className="text">{message}</p>
        </li>
    );
}

export default Dialogue;