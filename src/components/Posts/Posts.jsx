import styles from "./Posts.module.css";
import Post from "../Post/Post.jsx";
import {useRef, useState} from "react";
import { ACTIONS } from "../../data/store.js";
import { useSelector, useDispatch } from "react-redux";

function Posts() {
    const dispatch = useDispatch();
    const postArray = useSelector((state) => {
        return state.postArray;
    })

    const [number, setNumber] = useState(0);
    // console.log(number);

    const [text, setText] = useState("");

    const inputRef = useRef();
    function add() {
        dispatch({
            type: ACTIONS.ADD_MESSAGE,
            payload: {postText: text},
        });
        // setText("");
    }
    return (
        <div className={styles.posts}>
            <h2 className="title">Posts</h2>
            <textarea className="textarea" ref={inputRef} placeholder="What is happening!" value={text} onChange={function (event) {
                setText(event.target.value);
            }}></textarea>
            <button className="button" onClick={add}>Post</button>
            <ul className="list">
                {postArray.map((post, i) => {
                    return (<Post image={post.image} userName={post.userName} postText={post.postText} key={post.id}/>)
                })}
            </ul>
            <div>
                {number}
                <button onClick={function () {
                    setNumber(number + 1);
                }}>+</button>
            </div>
        </div>
    )
}

export default Posts;