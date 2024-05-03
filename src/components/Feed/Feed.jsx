import styles from "./Feed.module.css";
import FeedPost from "../FeedPost/FeedPost.jsx";
const feedArray = [

    {
        title: "Lorem Ipsum",
        location: "Rome, Italy",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores iste aliquam, unde voluptas excepturi necessitatibus quas maxime quos saepe vitae fugiat deleniti in pariatur nostrum nam! Voluptatem excepturi asperiores voluptate.",
    },

    {
        title: "Ipsum Lorem",
        location: "Buharest, Romania",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat est perspiciatis fuga quas, quasi voluptatum! Aut voluptatem a incidunt ad cupiditate exercitationem aliquid eaque natus quaerat non amet, quam aperiam!",
    },

    {
        title: "Morel Muspi",
        location: "Cape Town, South Africa",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, nesciunt perspiciatis quae ipsum cumque totam vel expedita error fugiat dolore laborum voluptatum deleniti eligendi quod, dignissimos, aliquam fugit! Cum, officia.",
    }
];

function Feed() {
    return (
        <div className={styles.feed}>
            <h2 className={styles.title}>Browse</h2>
            {feedArray.map((feed, i) => {
                return (<FeedPost title={feed.title} location={feed.location} text={feed.text} key={i}/>)
            })}
            {/* <FeedPost title={feedArray[0].title} location={feedArray[0].location} text={feedArray[0].text}/>
            <FeedPost title={feedArray[1].title} location={feedArray[1].location} text={feedArray[1].text}/>
            <FeedPost title={feedArray[2].title} location={feedArray[2].location} text={feedArray[2].text}/> */}
        </div>
    );
}

export default Feed;