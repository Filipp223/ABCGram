import profileImg1 from "../img/Gyllenhaal.webp";
import profileImg2 from "../img/aaronpaul.jpg";
import profileImg3 from "../img/jeffbezos.jpg";
import anonymousProfile from "../img/anonymous.png";

const data = {
    _state: {
        postArray: [
            {
                id: 17,
                image: profileImg1,
                userName: "Jake Gyllenhaal",
                postText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ullam praesentium distinctio? Impedit aspernatur placeat hic iure voluptatum dolor officiis est adipisci magni mollitia incidunt, ab nostrum odio magnam omnis!",
            },
          
            {
                id: 18,
                image: profileImg2,
                userName: "Aaron Paul",
                postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, earum voluptate! Ullam nulla fuga laudantium, rerum optio porro delectus amet, minima sed, quia praesentium atque deleniti? Recusandae atque obcaecati sequi.",
            },
          
            {
                id: 19,
                image: profileImg3,
                userName: "Jeff Bezos",
                postText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores maxime excepturi debitis. Illo id magnam sint repellendus ad exercitationem in ipsum. Perspiciatis laborum hic voluptatibus reprehenderit ex fuga quam labore!",
            },
          ],
    
        
        dialogueArray: [
            {
                userName: "Michael Smith",
                message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit???",
            },
    
            {
                userName: "Jake Gyllenhaal",
                message: "Ullam nulla fuga laudantium",
            },
        ],
    },
    
    getState: function () {
        return {...this._state};
    },

    addMessage: function (postText) {
        const lastID = this._state.postArray[this._state.postArray.length - 1].id; 
        this._state.postArray.push({id: lastID + 1, image: anonymousProfile, userName: "Anonymous", postText: postText})
        console.log(this._state);
    },

}

export default data;