import styles from "./Feed.module.css";
import FeedPost from "../FeedPost/FeedPost.jsx";

function Feed() {
    return (
        <div className={styles.feed}>
            <h2 className={styles.title}>Browse</h2>
            <FeedPost title="Lorem ipsum" location="Rome, Italy" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores iste aliquam, unde voluptas excepturi necessitatibus quas maxime quos saepe vitae fugiat deleniti in pariatur nostrum nam! Voluptatem excepturi asperiores voluptate."/>
            <FeedPost title="Ipsum Lorem" location="Buharest, Romania" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat est perspiciatis fuga quas, quasi voluptatum! Aut voluptatem a incidunt ad cupiditate exercitationem aliquid eaque natus quaerat non amet, quam aperiam!"/>
            <FeedPost title="Morel Muspi" location="Cape Town, South Africa" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, nesciunt perspiciatis quae ipsum cumque totam vel expedita error fugiat dolore laborum voluptatum deleniti eligendi quod, dignissimos, aliquam fugit! Cum, officia."/>
        </div>
    );
}

export default Feed;