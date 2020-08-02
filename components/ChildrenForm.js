import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import styles from "./ChildrenForm.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DispatchContext } from "../contexts/FormContext";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";

export default function ChildrenForm() {
    const router = useRouter();
    const dispatch = useContext(DispatchContext);
    const [hasChildren, updateHasChildren] = useState(false);
    const [numberOfChildren, updateNumberOfChildren] = useState([
        { childAge: undefined },
    ]);

    return (
        <div>
            <br />
            <Row>
                <Col
                    xs={{ span: 6, offset: 3 }}
                    md={{ span: 6, offset: 3 }}
                    lg={{ span: 6, offset: 3 }}
                >
                    <ProgressBar variant="success" now={20} />
                </Col>
            </Row>
            <br />
            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    // router.push("/children");
                }}
            >
                <br />
                <h2 className={styles.header}>Do you have children?</h2>
                <Container>
                    <Row>
                        <Col xs={6} md={{ span: 6 }} lg={{ span: 3, offset: 3 }}>
                            <Button
                                className="align-button"
                                onClick={async () => {
                                    await updateHasChildren(true);
                                    dispatch({ type: "HAS_CHILDREN", hasChildren: true });
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
                                    await dispatch({ type: "HAS_CHILDREN", hasChildren: false });
                                    await dispatch({
                                        type: "NUMBER_OF_CHILDREN",
                                        numberOfChildren: 0,
                                    });
                                    // router.push("/children");
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
            {hasChildren === true && (
                <Form>
                    <br />
                    <Row>
                        <Col
                            xs={{ span: 6, offset: 3 }}
                            md={{ span: 6, offset: 3 }}
                            lg={{ span: 6, offset: 3 }}
                        >
                            <h2 className={styles.header}>How old are your children?</h2>
                        </Col>
                    </Row>
                    <Row>
                        {numberOfChildren.map((child, index) => (
                            <Col
                                xs={{ span: 6, offset: 3 }}
                                md={{ span: 6, offset: 3 }}
                                lg={{ span: 6, offset: 3 }}
                                key={index}
                            >
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Child's Age"
                                        aria-label="Child's Age"
                                        aria-describedby="basic-addon2"
                                    />
                                </InputGroup>
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        <Col
                            xs={{ span: 6, offset: 3 }}
                            md={{ span: 6, offset: 3 }}
                            lg={{ span: 6, offset: 3 }}
                        >
                            <Button
                                className="align-button"
                                onClick={async (e) => {
                                    e.preventDefault();
                                    updateNumberOfChildren((children) => [
                                        ...children,
                                        { childAge: undefined },
                                    ]);
                                }}
                                style={{ width: "100%" }}
                                variant="outline-primary"
                                type="submit"
                                size="lg"
                            >
                                Add Child
                            </Button>{" "}
                        </Col>
                    </Row>
                </Form>
            )}
        </div>
    );
}
