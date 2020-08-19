import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import styles from "./FamilyIncomeForm.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {DispatchContext, FormContext} from "../contexts/FormContext";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";
import {QuestionCircle} from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";

export default function FamilyIncomeForm() {
    const now = 55;
    const progressInstance = <ProgressBar style={{height: '0.5rem'}} now={now} />;
    const dispatch = useContext(DispatchContext);
    const form = useContext(FormContext);
    const router = useRouter();
    const [yourIncome, setYourIncome] = useState('');
    const [spouseIncome, setSpouseIncome] = useState('');
    const [showFamilyIncome, setShowFamilyIncome] = useState(false);
    const handleCloseFamilyIncome = () => setShowFamilyIncome(false);
    const [showWhatAboutYourOtherIncome, setShowWhatAboutYourOtherIncome] = useState(false);
    const handleCloseWhatAboutYourOtherIncome = () => setShowWhatAboutYourOtherIncome(false);
    const [showWhyDoWeAsk, setShowWhyDoWeAsk] = useState(false);
    const handleCloseWhyDoWeAsk = () => setShowWhyDoWeAsk(false);

    // setShowWhatAboutYourOtherIncome
    useEffect(() => {
        dispatch({ type: "YOUR_INCOME", yourIncome: yourIncome });
    }, [yourIncome]);
    useEffect(() => {
        dispatch({ type: "SPOUSE_INCOME", spouseIncome: spouseIncome });
    }, [spouseIncome]);

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
            <br />

            <Row>
                <Col xs={{span: 8, offset: 2}} md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }}>
                    <h2 className={styles.header}>What is your family's annual income (before taxes)?</h2>
                </Col>
                <Col xs={1} md={1} lg={1}>
                    <QuestionCircle
                        size={30}
                        onClick={() => {setShowFamilyIncome(true)}}
                        style={{position: 'relative', top: '18px', right: '100%'}}
                    />
                </Col>
            </Row>
            <Form>
                <Row>
                    <Col
                        xs={{ span: 4 }}
                        md={{ span: 2, offset: 2 }}
                        lg={{ span: 2, offset: 2 }}
                    >
                        <h5 className={styles.h5}>You</h5>
                    </Col>
                    <Col
                        xs={{ span: 5 }}
                        md={{ span: 5 }}
                        lg={{ span: 5 }}
                    >
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>$</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Your Income"
                                aria-label="Your Income"
                                aria-describedby="basic-addon2"
                                onChange={(e) => {setYourIncome(parseInt(e.target.value))}}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <br/>
                { form.spouse ?
                <Row>
                    <Col
                        xs={{ span: 4 }}
                        md={{ span: 2, offset: 2 }}
                        lg={{ span: 2, offset: 2 }}
                    >
                        <h5 className={styles.h5}>Spouse</h5>
                    </Col>
                    <Col
                        xs={{ span: 5 }}
                        md={{ span: 5 }}
                        lg={{ span: 5 }}
                    >
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>$</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Spouse Income"
                                aria-label="Spouse Income"
                                aria-describedby="basic-addon2"
                                onChange={(e) => {setSpouseIncome(parseInt(e.target.value))}}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                    : null }
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
                            onClick={(e) => {
                                e.preventDefault;
                                router.push("/rentOrOwn")
                            }}
                        >
                            Next
                        </Button>{" "}
                    </Col>
                </Row>
                <Row>
                    <Col
                        xs={{ span: 11 }}
                        md={{ span: 6, offset: 3 }}
                        lg={{ span: 6, offset: 3 }}
                        onClick={() => {setShowWhatAboutYourOtherIncome(true)}}
                    >
                        <h5 className={styles.header}><u>What about investments and other income?</u></h5>
                    </Col>
                    <Col xs={1} md={1} lg={1}>
                        <QuestionCircle
                            size={25}
                            onClick={() => {setShowWhatAboutYourOtherIncome(true)}}
                            style={{position: 'relative', top: '12px', right: '35px'}}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col
                        xs={{ span: 11 }}
                        md={{ span: 6, offset: 3 }}
                        lg={{ span: 6, offset: 3 }}
                        onClick={() => {setShowWhyDoWeAsk(true)}}
                    >
                        <h5 className={styles.header}><u>Why do we ask about your income?</u></h5>
                    </Col>
                    <Col xs={1} md={1} lg={1}>
                        <QuestionCircle
                            size={25}
                            onClick={() => {setShowWhyDoWeAsk(true)}}
                            style={{position: 'relative', top: '12px', right: '35px'}}
                        />
                    </Col>
                </Row>
            </Form>
            {/*ask about family income*/}
            <Modal show={showFamilyIncome} onHide={handleCloseFamilyIncome}>
                <Modal.Body>Give us a ballpark estimate of your annual pre-tax income. Don’t include investments — we’ll get to that soon</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseFamilyIncome}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*ask about other income*/}
            <Modal show={showWhatAboutYourOtherIncome} onHide={handleCloseWhatAboutYourOtherIncome}>
                <Modal.Body>Please don’t include income that you generate from investments. We will cover your investments in the “savings” section. Some examples of income generated from investments are dividends, interest payments and capital gains collected from the sale of an asset.

                    Similarly, don’t include any income that isn’t tied to your work and would still be generated if you passed away. Some examples of non-employment income are rental income on a property you own or even income you make off a business that isn’t tied to your time.</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseWhatAboutYourOtherIncome}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*ask about other income*/}
            <Modal show={showWhyDoWeAsk} onHide={handleCloseWhyDoWeAsk}>
                <Modal.Body>It’s important for us to have an accurate understanding of your finances, and your income is a key aspect of your financial situation. Our calculations will use your income (along with many other factors) to evaluate how much life insurance protection your family needs. The same goes for your partner’s income.

                    We never recommend more coverage than you need. This prevents you from becoming “overprotected,” keeping your costs low and freeing up money for you and your family. There are many features in our calculation that help us do this. We include your partner’s future income as money that will be available to pay for some of your family’s future expenses.</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseWhyDoWeAsk}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
