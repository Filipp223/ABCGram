import profileImg1 from "../img/Gyllenhaal.webp";
import profileImg2 from "../img/aaronpaul.jpg";
import profileImg3 from "../img/jeffbezos.jpg";
import anonymousProfile from "../img/anonymous.png";

export const ACTIONS = {
    ADD_MESSAGE: "ADD_MESSAGE",
    ADD_DIALOGUE: "ADD_DIALOGUE",
}

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
                id: 213,
                userName: "Michael Smith",
                message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit???",
            },
    
            {
                id: 214,
                userName: "Jake Gyllenhaal",
                message: "Ullam nulla fuga laudantium",
            },
        ],
    },
    
    getState: function () {
        return {...this._state};
    },

    dispatch: function (action) {
        if (action.type === ACTIONS.ADD_MESSAGE) {
            const lastID = this._state.postArray[this._state.postArray.length - 1].id; 
            this._state.postArray.push({id: lastID + 1, image: anonymousProfile, userName: "Anonymous", postText: action.payload.postText})
        }

        if (action.type === ACTIONS.ADD_DIALOGUE) {
            const lastID = this._state.dialogueArray[this._state.dialogueArray.length - 1].id;
            this._state.dialogueArray.push({id: lastID + 1, userName: action.payload.userName, message: action.payload.message})
        }
    },

}

export default data;