import React, {useContext, useEffect, useState} from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import styles from "./MonthlyExpensesForm.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DispatchContext } from "../contexts/FormContext";
import ProgressBar from "react-bootstrap/ProgressBar";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default function MonthlyExpensesForm() {
    // localstorage keys
    let form;
    let rent;
    let mortgageCurr;
    let mortgageMonthly;
    let mortgageCombined;
    let startVal;

    // hooks definitions
    const router = useRouter();
    const dispatch = useContext(DispatchContext);

    // progress
    const now = 95;
    const progressInstance = <ProgressBar style={{height: '0.5rem'}} now={now} />;
    form = JSON.parse(window.localStorage.getItem('form'));
    mortgageCurr = form.mortgageCurrentBalance;
    mortgageMonthly = form.mortgageMonthlyPayment;
    rent = form.monthlyRent;
    mortgageCombined = mortgageCurr + mortgageMonthly;


    const [expenseMortgageAndRent, setExpenseMortgageAndRent] = useState(rent > 0 ? rent : mortgageCombined);
    const [expenseGroceriesRestaurantsAlcohol, setExpenseGroceriesRestaurantsAlcohol] = useState('');
    const [expenseShoppingFitnessGrooming, setExpenseShoppingFitnessGrooming] = useState('');
    const [expenseCarsTaxisPublicTransit, setExpenseCarsTaxisPublicTransit] = useState('');
    const [expenseChildcareEducation, setExpenseChildcareEducation] = useState('');
    const [expenseDiscretionaryTravelRecGifts, setExpenseDiscretionaryTravelRecGifts] = useState('');

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
                    <h2 className={styles.header}>What are your monthly expenses</h2>
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
                                setExpenseMortgageAndRent(e.target.value);
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
                            defaultValue={1000}
                            onChange={(e) => {
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
                            defaultValue={100}
                            onChange={(e) => {
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
                            defaultValue={700}
                            onChange={(e) => {
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
                            defaultValue={700}
                            onChange={(e) => {
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
                            defaultValue={450}
                            onChange={(e) => {
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
                            defaultValue={0}
                            onChange={(e) => {
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
                            defaultValue={450}
                            onChange={(e) => {
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
                            defaultValue={0}
                            onChange={(e) => {
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
                            onChange={(e) => {
                            }}
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
        </div>
    )
}
