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
import axios from 'axios';
import {QuestionCircle} from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";

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

    // modal
    const [showWhyExpensesLookHigh, setShowWhyExpensesLookHigh] = useState(false);
    const handleCloseWhyExpensesLookHigh = () => setShowWhyExpensesLookHigh(false);
    const [showExpenseMortgage, setShowExpenseMortgage] = useState(false);
    const handleCloseShowExpenseMortgage = () => setShowExpenseMortgage(false);
    const [showExpenseHousing, setShowExpenseHousing] = useState(false);
    const handleCloseShowExpenseHousing = () => setShowExpenseHousing(false);
    const [showExpensePhone, setShowExpensePhone] = useState(false);
    const handleCloseShowExpensePhone = () => setShowExpensePhone(false);
    const [showExpenseGroceries, setShowExpenseGroceries] = useState(false);
    const handleCloseShowExpenseGroceries = () => setShowExpenseGroceries(false);
    const [showExpenseShopping, setShowExpenseShopping] = useState(false);
    const handleCloseShowExpenseShopping = () => setShowExpenseShopping(false);
    const [showExpenseCars, setShowExpenseCars] = useState(false);
    const handleCloseShowExpenseCars = () => setShowExpenseCars(false);
    const [showChildcare, setShowChildcare] = useState(false);
    const handleCloseShowChildcare = () => setShowChildcare(false);
    const [showExpenseDiscretionary, setShowExpenseDiscretionary] = useState(false);
    const handleCloseShowExpenseDiscretionary = () => setShowExpenseDiscretionary(false);
    const [showExpenseOther, setShowExpenseOther] = useState(false);
    const handleCloseShowExpenseOther = () => setShowExpenseOther(false);

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
        setExpenseTotal(expenseMortgageAndRent + expenseHousingBillsUtilities + expenseGroceriesRestaurantsAlcohol + expensePhoneInternetCable + expenseShoppingFitnessGrooming + expenseCarsTaxisPublicTransit + expenseChildcareEducation + expenseDiscretionaryTravelRecGifts + expenseOther);
    },[expenseOther,
        expenseDiscretionaryTravelRecGifts,
        expenseChildcareEducation,
        expenseCarsTaxisPublicTransit,
        expenseShoppingFitnessGrooming,
        expensePhoneInternetCable,
        expenseGroceriesRestaurantsAlcohol,
        expenseHousingBillsUtilities,
        expenseMortgageAndRent]);

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
        <div style={{overflowX: "hidden"}}>
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
                    xs={{ span: 4 }}
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
                    <InputGroup className="mb-3" bsPrefix="">
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
                <Col xs={1} md={1} lg={1}>
                    <QuestionCircle
                        size={25}
                        onClick={() => {setShowExpenseMortgage(true)}}
                        style={{position: 'relative', top: '5px', right: '20px'}}
                    />
                </Col>
            </Row>
            <br/>
            <Row>
                <Col
                    xs={{ span: 4 }}
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
                            defaultValue={form.expenseHousingBillsUtilities}
                            onChange={(e) => {
                                setExpenseHousingBillsUtilities(parseInt(e.target.value))
                            }}
                        />
                    </InputGroup>
                </Col>
                <Col xs={1} md={1} lg={1}>
                    <QuestionCircle
                        size={25}
                        onClick={() => {setShowExpenseHousing(true)}}
                        style={{position: 'relative', top: '5px', right: '20px'}}
                    />
                </Col>
            </Row>
            <br/>
            <Row>
                <Col
                    xs={{ span: 4 }}
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
                            defaultValue={form.expensePhoneInternetCable}
                            onChange={(e) => {
                                setExpensePhoneInternetCable(parseInt(e.target.value))
                            }}
                        />
                    </InputGroup>
                </Col>
                <Col xs={1} md={1} lg={1}>
                    <QuestionCircle
                        size={25}
                        onClick={() => {setShowExpensePhone(true)}}
                        style={{position: 'relative', top: '5px', right: '20px'}}
                    />
                </Col>
            </Row>
            <br/>
            <Row>
                <Col
                    xs={{ span: 4 }}
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
                            defaultValue={form.expenseGroceriesRestaurantsAlcohol}
                            onChange={(e) => {
                                setExpenseGroceriesRestaurantsAlcohol(parseInt(e.target.value))
                            }}
                        />
                    </InputGroup>
                </Col>
                <Col xs={1} md={1} lg={1}>
                    <QuestionCircle
                        size={25}
                        onClick={() => {setShowExpenseGroceries(true)}}
                        style={{position: 'relative', top: '5px', right: '20px'}}
                    />
                </Col>
            </Row>
            <br/>
            <Row>
                <Col
                    xs={{ span: 4 }}
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
                            defaultValue={form.expenseShoppingFitnessGrooming}
                            onChange={(e) => {
                                setExpenseShoppingFitnessGrooming(parseInt(e.target.value))
                            }}
                        />
                    </InputGroup>
                </Col>
                <Col xs={1} md={1} lg={1}>
                    <QuestionCircle
                        size={25}
                        onClick={() => {setShowExpenseShopping(true)}}
                        style={{position: 'relative', top: '5px', right: '20px'}}
                    />
                </Col>
            </Row>
            <br/>
            <Row>
                <Col
                    xs={{ span: 4 }}
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
                            defaultValue={form.expenseCarsTaxisPublicTransit}
                            onChange={(e) => {
                                setExpenseCarsTaxisPublicTransit(parseInt(e.target.value))
                            }}
                        />
                    </InputGroup>
                </Col>
                <Col xs={1} md={1} lg={1}>
                    <QuestionCircle
                        size={25}
                        onClick={() => {setShowExpenseCars(true)}}
                        style={{position: 'relative', top: '5px', right: '20px'}}
                    />
                </Col>
            </Row>
            <br/>
            <Row>
                <Col
                    xs={{ span: 4 }}
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
                            defaultValue={form.expenseChildcareEducation}
                            onChange={(e) => {
                                setExpenseChildcareEducation(parseInt(e.target.value))
                            }}
                        />
                    </InputGroup>
                </Col>
                <Col xs={1} md={1} lg={1}>
                    <QuestionCircle
                        size={25}
                        onClick={() => {setShowChildcare(true)}}
                        style={{position: 'relative', top: '5px', right: '20px'}}
                    />
                </Col>
            </Row>
            <br/>
            <Row>
                <Col
                    xs={{ span: 4 }}
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
                            defaultValue={form.expenseDiscretionaryTravelRecGifts}
                            onChange={(e) => {
                                setExpenseDiscretionaryTravelRecGifts(parseInt(e.target.value))
                            }}
                        />
                    </InputGroup>
                </Col>
                <Col xs={1} md={1} lg={1}>
                    <QuestionCircle
                        size={25}
                        onClick={() => {setShowExpenseDiscretionary(true)}}
                        style={{position: 'relative', top: '5px', right: '20px'}}
                    />
                </Col>
            </Row>
            <br/>
            <Row>
                <Col
                    xs={{ span: 4 }}
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
                <Col xs={1} md={1} lg={1}>
                    <QuestionCircle
                        size={25}
                        onClick={() => {setShowExpenseOther(true)}}
                        style={{position: 'relative', top: '5px', right: '20px'}}
                    />
                </Col>
            </Row>
            <br/>
            <Row>
                <Col
                    xs={{ span: 4 }}
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
                    xs={{ span: 11 }}
                    md={{ span: 6, offset: 3 }}
                    lg={{ span: 6, offset: 3 }}
                    onClick={() => {setShowWhyExpensesLookHigh(true)}}
                >
                    <h5 className={styles.header}><u>Why do these expenses look high?</u></h5>
                </Col>
                <Col xs={1} md={1} lg={1}>
                    <QuestionCircle
                        size={25}
                        onClick={() => {setShowWhyExpensesLookHigh(true)}}
                        style={{position: 'relative', top: '12px', right: '35px'}}
                    />
                </Col>
            </Row>
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
                        onClick={()=> {
                            axios({
                                method: 'post',
                                url: '/form',
                                data: {
                                    form: form
                                }
                            })
                                .then(function (res) {
                                    router.push('/quotes');
                                })
                                .catch(function (error) {
                                    router.push('/quotes');
                                });
                        }}
                    >
                        Next
                    </Button>{" "}
                </Col>
            </Row>
            <br/>
            {/*ask about other income*/}
            <Modal show={showWhyExpensesLookHigh} onHide={handleCloseWhyExpensesLookHigh}>
                <Modal.Body>The truth is, most people tend to underestimate their monthly expenses. When estimating monthly expenses, it’s common for people to remember large recurring items, like mortgage or rent payments, hydro bills, auto payments, cell phone bills, and childcare costs. However, it’s quite common for people to leave out the non-recurring “one-time” costs, like gifts (weddings, birthdays, anniversaries), vacations, recreational activities, tickets to concerts and sports games, taxis/Ubers and nights out with your friends or family.

                    If your expenses looks off, click on the info buttons beside each category to see a description of the items included in that category. Then, feel free to adjust the numbers as you see fit to update your monthly expenses.</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseWhyExpensesLookHigh}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*mortgage and rent*/}
            <Modal show={showExpenseMortgage} onHide={handleCloseShowExpenseMortgage}>
                <Modal.Body>We have pre-calculated your rent or mortgage expenses from the previous form.</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseShowExpenseMortgage}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*housing expense*/}
            <Modal show={showExpenseHousing} onHide={handleCloseShowExpenseHousing}>
                <Modal.Body>Property tax, condo fees, repairs and maintenance, home insurance, gas/electricity/hydro</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseShowExpenseHousing}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*phone expense*/}
            <Modal show={showExpensePhone} onHide={handleCloseShowExpensePhone}>
                <Modal.Body>Cell phones, cable, internet, Netflix, other subscriptions</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseShowExpensePhone}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*grocieres expense*/}
            <Modal show={showExpenseGroceries} onHide={handleCloseShowExpenseGroceries}>
                <Modal.Body>Groceries, restaurants, coffee shops, alcohol</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseShowExpenseGroceries}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*shopping expense*/}
            <Modal show={showExpenseShopping} onHide={handleCloseShowExpenseShopping}>
                <Modal.Body>Clothes, shoes, salons & hair care, personal hygiene, gym memberships/classes, drycleaning, health, eyeglasses/contacts, dental</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseShowExpenseShopping}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*cars expense*/}
            <Modal show={showExpenseCars} onHide={handleCloseShowExpenseCars}>
                <Modal.Body>Car payments, auto insurance, gas, parking, maintenance/repairs, taxis/Ubers, public transit.</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseShowExpenseCars}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*childcare expense*/}
            <Modal show={showChildcare} onHide={handleCloseShowChildcare}>
                <Modal.Body>Daycare, nannies, private schools, tutors.</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseShowChildcare}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*discretionary expense*/}
            <Modal show={showExpenseDiscretionary} onHide={handleCloseShowExpenseDiscretionary}>
                <Modal.Body>Vacations, entertainment, recreational activities, sports, electronics, gifts (birthdays, holidays, weddings).</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseShowExpenseDiscretionary}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*other expense*/}
            <Modal show={showExpenseOther} onHide={handleCloseShowExpenseOther}>
                <Modal.Body>Any monthly expenses you have that don’t fit into one of the above categories.</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseShowExpenseOther}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
