const reducer = (state, action) => {
    switch(action.type){
        case "ADD_SPOUSE":
            console.log(action.spouse)
            return ([...state, {spouse: action.spouse}]);
        case "SPOUSE_AGE":
            return ([...state, {spouseAge: action.spouseAge}])
        default:
            return state
    }
};
export default reducer
