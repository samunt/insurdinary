const reducer = (state, action) => {
    switch(action.type){
        case "ADD_SPOUSE":
            return {...state, spouse: action.spouse};
        case "SPOUSE_AGE":
            return {...state, spouseAge: action.spouseAge};
        case "HAS_CHILDREN":
            return {...state, hasChildren: action.hasChildren};
        case "NUMBER_OF_CHILDREN":
            return {...state, numberOfChildren: action.numberOfChildren};
        case "CHILDREN_AGE_ARRAY":
            return {...state, childrenAgeArray: action.childrenAgeArray};
        case "PAY_FOR_COLLEGE":
            return {...state, payForCollege: action.payForCollege};
        case "DOB":
            return {...state, dob: action.dob};
        case "SEX":
            return {...state, sex: action.sex};
        case "TOBACCO":
            return {...state, tobacco: action.tobacco};
        case "HEALTH_CONDITION":
            return {...state, health: action.health};
        case "YOUR_INCOME":
            return {...state, yourIncome: action.yourIncome};
        case "SPOUSE_INCOME":
            return {...state, spouseIncome: action.spouseIncome};
        default:
            return state
    }
};
export default reducer
