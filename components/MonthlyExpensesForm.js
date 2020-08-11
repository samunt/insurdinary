import React, {useContext, useEffect, useState} from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import styles from "./MonthlyExpensesForm.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DispatchContext } from "../contexts/FormContext";
import { FormContext } from "../contexts/FormContext";
import ProgressBar from "react-bootstrap/ProgressBar";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default function MonthlyExpensesForm() {
    // localstorage keys
    let rent;
    let mortgageCurr;
    let mortgageMonthly;
    let mortgageCombined;

    // hooks definitions
    const router = useRouter();
    const dispatch = useContext(DispatchContext);
    const form = useContext(FormContext);

    // progress
    const now = 95;
    const progressInstance = <ProgressBar style={{height: '0.5rem'}} now={now} />;
    mortgageCurr = parseInt(form.mortgageCurrentBalance);
    mortgageMonthly = parseInt(form.mortgageMonthlyPayment);
    rent = form.monthlyRent;
    mortgageCombined = mortgageCurr + mortgageMonthly;

    // local state setup
    const [expenseMortgageAndRent, setExpenseMortgageAndRent] = useState(rent > 0 ? rent : mortgageCombined);
    const [expenseHousingBillsUtilities, setExpenseHousingBillsUtilities] = useState(1000);
    const [expenseGroceriesRestaurantsAlcohol, setExpenseGroceriesRestaurantsAlcohol] = useState(700);
    const [expensePhoneInternetCable, setExpensePhoneInternetCable] = useState(100);
    const [expenseShoppingFitnessGrooming, setExpenseShoppingFitnessGrooming] = useState(700);
    const [expenseCarsTaxisPublicTransit, setExpenseCarsTaxisPublicTransit] = useState(450);
    const [expenseChildcareEducation, setExpenseChildcareEducation] = useState(0);
    const [expenseDiscretionaryTravelRecGifts, setExpenseDiscretionaryTravelRecGifts] = useState(450);
    const [expenseOther, setExpenseOther] = useState(0);

    // calculate total expenses
    let total = expenseMortgageAndRent + expenseHousingBillsUtilities + expenseGroceriesRestaurantsAlcohol + expensePhoneInternetCable + expenseShoppingFitnessGrooming + expenseCarsTaxisPublicTransit + expenseChildcareEducation + expenseDiscretionaryTravelRecGifts + expenseOther;
    // use total as default state
    const [expenseTotal, setExpenseTotal] = useState(total);

    //effects for context api
    useEffect(() => {
        setExpenseTotal(expenseMortgageAndRent + expenseHousingBillsUtilities + expenseGroceriesRestaurantsAlcohol + expensePhoneInternetCable + expenseShoppingFitnessGrooming + expenseCarsTaxisPublicTransit + expenseChildcareEducation + expenseDiscretionaryTravelRecGifts + expenseOther);
    });

    useEffect(() => {
        dispatch({ type: "EXPENSE_MORTGAGE_RENT", expenseMortgageAndRent: expenseMortgageAndRent });
    }, [expenseMortgageAndRent]);

    useEffect(() => {
        dispatch({ type: "EXPENSE_HOUSING_BILLS_UTILITIES", expenseHousingBillsUtilities: expenseHousingBillsUtilities });
    }, [expenseHousingBillsUtilities]);

    useEffect(() => {
        dispatch({ type: "EXPENSE_GROCERIES_RESTAURANTS_ALCOHOL", expenseGroceriesRestaurantsAlcohol: expenseGroceriesRestaurantsAlcohol });
    }, [expenseGroceriesRestaurantsAlcohol]);

    useEffect(() => {
        dispatch({ type: "EXPENSE_PHONE_INTERNET_CABLE", expensePhoneInternetCable: expensePhoneInternetCable });
    }, [expensePhoneInternetCable]);

    useEffect(() => {
        dispatch({ type: "EXPENSE_SHOPPING_FITNESS_GROOMING", expenseShoppingFitnessGrooming: expenseShoppingFitnessGrooming });
    }, [expenseShoppingFitnessGrooming]);

    useEffect(() => {
        dispatch({ type: "EXPENSE_CARS_TAXIS_TRANSIT", expenseCarsTaxisPublicTransit: expenseCarsTaxisPublicTransit });
    }, [expenseCarsTaxisPublicTransit]);

    useEffect(() => {
        dispatch({ type: "EXPENSE_CHILDCARE_EDUCATION", expenseChildcareEducation: expenseChildcareEducation });
    }, [expenseChildcareEducation]);

    useEffect(() => {
        dispatch({ type: "EXPENSE_DISCRETIONARY_TRAVEL_REC_GIFTS", expenseDiscretionaryTravelRecGifts: expenseDiscretionaryTravelRecGifts });
    }, [expenseDiscretionaryTravelRecGifts]);

    useEffect(() => {
        dispatch({ type: "EXPENSE_OTHER", expenseOther: expenseOther });
    }, [expenseOther]);

    useEffect(() => {
        dispatch({ type: "EXPENSE_TOTAL", expenseTotal: expenseTotal });
    }, [expenseTotal]);

    return (
        <div>
            <br />
            <Row>
                <Col
                    xs={{ span: 10, offset: 1 }}
                    md={{ span: 10, offset: 1 }}
                    lg={{ span: 10, offset: 1 }}
                >
                    {progressInstance}
                </Col>
            </Row>
            <br/>
            <Row>
                <Col
                    xs={{ span: 8, offset: 2 }}
                    md={{ span: 8, offset: 3 }}
                    lg={{ span: 8, offset: 2 }}
                >
                    <h2 className={styles.header}>What are your monthly expenses?</h2>
                    <br/>
                    <h4>Below, we’ve estimated your family’s expenses based on the spending patterns of millions of Canadians.
                        If any of these estimates seem too high or too low, please edit them.</h4>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col
                    xs={{ span: 4, offset: 1 }}
                    md={{ span: 2, offset: 2 }}
                    lg={{ span: 2, offset: 2 }}
                >
                    <h5 className={styles.h5}>Mortgage and rent</h5>
                </Col>
                <Col
                    xs={{ span: 6 }}
                    md={{ span: 6 }}
                    lg={{ span: 6 }}
                >
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Mortgage and rent"
                            defaultValue={expenseMortgageAndRent}
                            aria-label="Mortgage and rent"
                            aria-describedby="basic-addon2"
                            onChange={(e) => {
                                setExpenseMortgageAndRent(parseInt(e.target.value));
                            }}
                        />
                    </InputGroup>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col
                    xs={{ span: 4, offset: 1 }}
                    md={{ span: 2, offset: 2 }}
                    lg={{ span: 2, offset: 2 }}
                >
                    <h5 className={styles.h5}>Housing bills & utilities</h5>
                </Col>
                <Col
                    xs={{ span: 6 }}
                    md={{ span: 6 }}
                    lg={{ span: 6 }}
                >
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Housing/utilities"
                            aria-label="Housing/utilities"
                            aria-describedby="basic-addon2"
                            defaultValue={expenseHousingBillsUtilities}
                            onChange={(e) => {
                                setExpenseHousingBillsUtilities(parseInt(e.target.value))
                            }}
                        />
                    </InputGroup>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col
                    xs={{ span: 4, offset: 1 }}
                    md={{ span: 2, offset: 2 }}
                    lg={{ span: 2, offset: 2 }}
                >
                    <h5 className={styles.h5}>Phone, Internet, Cable</h5>
                </Col>
                <Col
                    xs={{ span: 6 }}
                    md={{ span: 6 }}
                    lg={{ span: 6 }}
                >
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Home Internet Cable"
                            aria-label="Home Internet Cable"
                            aria-describedby="basic-addon2"
                            defaultValue={expensePhoneInternetCable}
                            onChange={(e) => {
                                setExpensePhoneInternetCable(parseInt(e.target.value))
                            }}
                        />
                    </InputGroup>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col
                    xs={{ span: 4, offset: 1 }}
                    md={{ span: 2, offset: 2 }}
                    lg={{ span: 2, offset: 2 }}
                >
                    <h5 className={styles.h5}>Groceries, restaurants & alcohol</h5>
                </Col>
                <Col
                    xs={{ span: 6 }}
                    md={{ span: 6 }}
                    lg={{ span: 6 }}
                >
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Groceries"
                            aria-label="Groceries"
                            aria-describedby="basic-addon2"
                            defaultValue={expenseGroceriesRestaurantsAlcohol}
                            onChange={(e) => {
                                setExpenseGroceriesRestaurantsAlcohol(parseInt(e.target.value))
                            }}
                        />
                    </InputGroup>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col
                    xs={{ span: 4, offset: 1 }}
                    md={{ span: 2, offset: 2 }}
                    lg={{ span: 2, offset: 2 }}
                >
                    <h5 className={styles.h5}>Shopping, fitness & grooming</h5>
                </Col>
                <Col
                    xs={{ span: 6 }}
                    md={{ span: 6 }}
                    lg={{ span: 6 }}
                >
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Shopping, fitness & grooming"
                            aria-label="Shopping, fitness & grooming"
                            aria-describedby="basic-addon2"
                            defaultValue={expenseShoppingFitnessGrooming}
                            onChange={(e) => {
                                setExpenseShoppingFitnessGrooming(parseInt(e.target.value))
                            }}
                        />
                    </InputGroup>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col
                    xs={{ span: 4, offset: 1 }}
                    md={{ span: 2, offset: 2 }}
                    lg={{ span: 2, offset: 2 }}
                >
                    <h5 className={styles.h5}>Cars, taxis, public transit</h5>
                </Col>
                <Col
                    xs={{ span: 6 }}
                    md={{ span: 6 }}
                    lg={{ span: 6 }}
                >
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Cars, taxis, public transit"
                            aria-label="Cars, taxis, public transit"
                            aria-describedby="basic-addon2"
                            defaultValue={expenseCarsTaxisPublicTransit}
                            onChange={(e) => {
                                setExpenseCarsTaxisPublicTransit(parseInt(e.target.value))
                            }}
                        />
                    </InputGroup>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col
                    xs={{ span: 4, offset: 1 }}
                    md={{ span: 2, offset: 2 }}
                    lg={{ span: 2, offset: 2 }}
                >
                    <h5 className={styles.h5}>Childcare & education</h5>
                </Col>
                <Col
                    xs={{ span: 6 }}
                    md={{ span: 6 }}
                    lg={{ span: 6 }}
                >
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Childcare & education"
                            aria-label="Childcare & education"
                            aria-describedby="basic-addon2"
                            defaultValue={expenseChildcareEducation}
                            onChange={(e) => {
                                setExpenseChildcareEducation(parseInt(e.target.value))
                            }}
                        />
                    </InputGroup>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col
                    xs={{ span: 4, offset: 1 }}
                    md={{ span: 2, offset: 2 }}
                    lg={{ span: 2, offset: 2 }}
                >
                    <h5 className={styles.h5}>Discretionary, travel, rec & gifts</h5>
                </Col>
                <Col
                    xs={{ span: 6 }}
                    md={{ span: 6 }}
                    lg={{ span: 6 }}
                >
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Discretionary"
                            aria-label="Discretionary"
                            aria-describedby="basic-addon2"
                            defaultValue={expenseDiscretionaryTravelRecGifts}
                            onChange={(e) => {
                                setExpenseDiscretionaryTravelRecGifts(parseInt(e.target.value))
                            }}
                        />
                    </InputGroup>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col
                    xs={{ span: 4, offset: 1 }}
                    md={{ span: 2, offset: 2 }}
                    lg={{ span: 2, offset: 2 }}
                >
                    <h5 className={styles.h5}>Other</h5>
                </Col>
                <Col
                    xs={{ span: 6 }}
                    md={{ span: 6 }}
                    lg={{ span: 6 }}
                >
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Other"
                            aria-label="Other"
                            aria-describedby="basic-addon2"
                            defaultValue={expenseOther}
                            onChange={(e) => {
                                setExpenseOther(parseInt(e.target.value))
                            }}
                        />
                    </InputGroup>
                </Col>
            </Row>
            <br/>
            <br/>
            <Row>
                <Col
                    xs={{ span: 4, offset: 1 }}
                    md={{ span: 2, offset: 2 }}
                    lg={{ span: 2, offset: 2 }}
                >
                    <h5 className={styles.h5}>Total</h5>
                </Col>
                <Col
                    xs={{ span: 6 }}
                    md={{ span: 6 }}
                    lg={{ span: 6 }}
                >
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-addon2"
                            defaultValue={form.expenseTotal}
                        />
                    </InputGroup>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col
                    xs={{ span: 8, offset: 2 }}
                    md={{ span: 6, offset: 3 }}
                    lg={{ span: 6, offset: 3 }}
                >
                    <Button
                        style={{ width: "100%" }}
                        variant="outline-primary"
                        size="lg"
                        onClick={()=> {}}
                    >
                        Next
                    </Button>{" "}
                </Col>
            </Row>
            <br/>
        </div>
    )
}
