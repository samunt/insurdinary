import {v4 as uuid} from "uuid";

const reducer = (state, action) => {
    switch(action.type){
        case "ADD_SPOUSE":
            return ([...state, {id: uuid(), spouse: action.spouse}]);
        default:
            return state

    }
};
export default reducer
