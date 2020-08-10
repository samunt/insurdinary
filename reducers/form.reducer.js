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
            return {...state, healthCondition: action.healthCondition};
        case "YOUR_INCOME":
            return {...state, yourIncome: action.yourIncome};
        case "SPOUSE_INCOME":
            return {...state, spouseIncome: action.spouseIncome};
        case "RENT_OR_OWN":
            return {...state, rentOrOwn: action.rentOrOwn};
        case "MONTHLY_RENT":
            return {...state, monthlyRent: action.monthlyRent};
        case "MORTGAGE_CURRENT_BALANCE":
            return {...state, mortgageCurrentBalance: action.mortgageCurrentBalance};
        case "MORTGAGE_MONTHLY_PAYMENT":
            return {...state, mortgageMonthlyPayment: action.mortgageMonthlyPayment};
        case "LIFE_INSURANCE":
            return {...state, lifeInsurance: action.lifeInsurance};
        case "LIFE_INSURANCE_EMPLOYER":
            return {...state, lifeInsuranceEmployer: action.lifeInsuranceEmployer};
        case "LIFE_INSURANCE_PERSONAL":
            return {...state, lifeInsurancePersonal: action.lifeInsurancePersonal};
        case "HAS_SAVINGS":
            return {...state, hasSavings: action.hasSavings};
        case "HAS_RETIREMENT_SAVINGS":
            return {...state, hasRetirementSavings: action.hasRetirementSavings};
        case "HAS_NON_RETIREMENT_SAVINGS":
            return {...state, hasNonRetirementSavings: action.hasNonRetirementSavings};
        default:
            return state
    }
};
export default reducer
