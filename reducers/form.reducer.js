const reducer = (state, action) => {
    switch(action.type){
        case "ADD_SPOUSE":
            console.log(action.spouse);
            return ([...state, {spouse: action.spouse}]);
        case "SPOUSE_AGE":
            console.log(action.spouseAge);
            return ([...state, {spouseAge: action.spouseAge}]);
        case "HAS_CHILDREN":
            console.log(action.hasChildren);
            return ([...state, {hasChildren: action.hasChildren}]);
        case "NUMBER_OF_CHILDREN":
            console.log(action.numberOfChildren);
            return ([...state, {numberOfChildren: action.numberOfChildren}]);
        case "CHILDREN_AGE_ARRAY":
            console.log('children age array',action.childrenAgeArray);
            return ([...state, {childrenAgeArray: action.childrenAgeArray}]);
        case "PAY_FOR_COLLEGE":
            console.log('pay for college', action.payForCollege);
            return ([...state, {payForCollege: action.payForCollege}]);
        case "DATE_OF_BIRTH":
            console.log('pay for college', action.dob);
            return ([...state, {dob: action.dob}]);
        case "SEX":
            console.log('sex', action.sexForm);
            return ([...state, {sex: action.sexForm}]);
        case "TOBACCO":
            console.log('tobacco', action.tobacco);
            return ([...state, {tobacco: action.tobacco}]);
        case "HEALTH_CONDITION":
            console.log('health', action.health);
            return ([...state, {health: action.health}]);
        default:
            return state
    }
};
export default reducer
