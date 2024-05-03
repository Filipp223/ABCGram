import styles from "./FeedPost.module.css";

function FeedPost({title, location, text}) {
    /*let array = [1, 2, 3];
    const [num1, num2, num3] = array;
    console.log(num1, num2, num3);
    const obj = {
        name: "John",
        age: 24
    };
    const {name, age} = obj;
    console.log(name, age);*/
    return (
        <div className={styles.post}>
            <h3 className={styles.subtitle}>{title}</h3>
            <p className={styles.location}>{location}</p>
            <p className={styles.text}>{text}</p>
        </div>
    );
}

export default FeedPost;