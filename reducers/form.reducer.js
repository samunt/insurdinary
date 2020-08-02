const reducer = (state, action) => {
    switch(action.type){
        case "ADD_SPOUSE":
            return ([...state, {spouse: action.spouse}]);
        case "SPOUSE_AGE":
            return ([...state, {spouseAge: action.spouseAge}]);
        case "HAS_CHILDREN":
            return ([...state, {hasChildren: action.hasChildren}]);
        case "NUMBER_OF_CHILDREN":
            return ([...state, {numberOfChildren: action.numberOfChildren}])
        default:
            return state
    }
};
export default reducer
