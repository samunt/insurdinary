const reducer = (state, action) => {
    switch(action.type){
        case "ADD_SPOUSE":
            console.log(action.spouse)
            return ([...state, {spouse: action.spouse}]);
        case "SPOUSE_AGE":
            console.log(action.spouseAge)
            return ([...state, {spouseAge: action.spouseAge}]);
        case "HAS_CHILDREN":
            console.log(action.hasChildren)
            return ([...state, {hasChildren: action.hasChildren}]);
        case "NUMBER_OF_CHILDREN":
            console.log(action.numberOfChildren)
            return ([...state, {numberOfChildren: action.numberOfChildren}])
        default:
            return state
    }
};
export default reducer
