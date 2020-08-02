import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import styles from "./SpouseForm.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DispatchContext } from "../contexts/FormContext";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";

function SpouseForm() {
    let [hasSpouse, updateHasSpouse] = useState(false);
    let [spouseAge, updateSpouseAge] = useState("");
    const router = useRouter();
    const dispatch = useContext(DispatchContext);

    return (
        <div>
            <br />
            <Row>
                <Col
                    xs={{ span: 6, offset: 3 }}
                    md={{ span: 6, offset: 3 }}
                    lg={{ span: 6, offset: 3 }}
                >
                    <ProgressBar variant="success" now={10} />
                </Col>
            </Row>
            <br />

            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log(e);
                    router.push("/children");
                }}
            >
                <br />
                <h2 className={styles.header}>Do you have a spouse or partner?</h2>
                <Container>
                    <Row>
                        <Col xs={6} md={{ span: 6 }} lg={{ span: 3, offset: 3 }}>
                            <Button
                                className="align-button"
                                onClick={async () => {
                                    await updateHasSpouse(true);
                                    dispatch({ type: "ADD_SPOUSE", spouse: hasSpouse });
                                }}
                                style={{ width: "100%" }}
                                variant="outline-primary"
                                size="lg"
                            >
                                Yes
                            </Button>{" "}
                        </Col>
                        <Col xs={6} md={{ span: 6 }} lg={{ span: 3 }}>
                            <Button
                                className="align-button"
                                onClick={async (e) => {
                                    e.preventDefault();
                                    await updateHasSpouse(false);
                                    dispatch({ type: "ADD_SPOUSE", spouse: hasSpouse });
                                    router.push("/children");
                                }}
                                style={{ width: "100%" }}
                                variant="outline-primary"
                                type="submit"
                                size="lg"
                            >
                                No
                            </Button>{" "}
                        </Col>
                    </Row>
                </Container>
            </Form>
            {hasSpouse === true && (
                <Container>
                    <Row>
                        <Col xs={12} md={12} lg={{ span: 6, offset: 3 }}>
                            <br />
                            <br />
                            <h3 className={styles.header}>
                                How old is your spouse or partner?
                            </h3>
                        </Col>
                    </Row>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            dispatch({ type: "SPOUSE_AGE", spouseAge: spouseAge });
                            router.push("/children");
                        }}
                    >
                        <Row>
                            <Col xs={12} md={12} lg={{ span: 6, offset: 3 }}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Age</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        onChange={(e) => {
                                            updateSpouseAge(e.target.value);
                                        }}
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12} lg={{ span: 6, offset: 3 }}>
                                <Button
                                    style={{ width: "100%" }}
                                    type="submit"
                                    variant="outline-primary"
                                    size="lg"
                                >
                                    Next
                                </Button>{" "}
                            </Col>
                        </Row>
                    </Form>
                </Container>
            )}
        </div>
    );
}

export default SpouseForm;
