import React, { useContext, useState, useEffect } from "react";
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
    const [hasChildren, updateHasChildren] = useState(false);
    const [numberOfChildren, updateNumberOfChildren] = useState([
        { id: 1, age: undefined }
    ]);
    const now = 15;
    const progressInstance = <ProgressBar style={{height: '0.5rem'}} now={now} />;
    const dispatch = useContext(DispatchContext);
    const router = useRouter();

    useEffect(() => {
        console.log("numberOfChildren", numberOfChildren);
        dispatch({ type: "CHILDREN_AGE_ARRAY", childrenAgeArray: numberOfChildren });
        dispatch({ type: "NUMBER_OF_CHILDREN", numberOfChildren: numberOfChildren.length });
    }, [numberOfChildren]);

    // Update numberOfChildren state
    function updateData(e) {
        // Grab the id of the input element and the typed value
        const { id, value } = e.target;
        // Find the item in the array that has the same id
        // Convert the grabed id from string to Number
        const itemIndex = numberOfChildren.findIndex(
            item => item.id === Number(id)
        );

        // If the itemIndex is -1 that means it doesn't exist in the array
        if (itemIndex !== -1) {
            // Make a copy of the state
            const children = [...numberOfChildren];
            // The child item
            const child = children[itemIndex];
            // Update the child's age
            children.splice(itemIndex, 1, { ...child, age: value });
            // Update the state
            updateNumberOfChildren(children);
        }
    }

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
            <Form
                onSubmit={e => {
                    e.preventDefault();
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
                                onClick={async e => {
                                    e.preventDefault();
                                    updateHasChildren(false);
                                    router.push('/dob')
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
                <Form
                    onSubmit={e => {
                        e.preventDefault();
                        router.push('/secondaryEducation')
                    }}
                >
                    <br />
                    <Row>
                        <Col
                            xs={{ span: 12 }}
                            md={{ span: 6, offset: 3 }}
                            lg={{ span: 6, offset: 3 }}
                        >
                            <h2 className={styles.header}>How old are your children?</h2>
                        </Col>
                    </Row>
                    <Row>
                        {numberOfChildren.map((child, index) => (
                            <React.Fragment>
                                    <Col
                                        xs={{ span: 4, offset: 2 }}
                                        md={{ span: 3, offset: 3 }}
                                        lg={{ span: 3, offset: 3 }}
                                    >
                                        <h5 className={styles.header}>Child #{index + 1}</h5>
                                    </Col>
                                    <Col
                                        xs={{ span: 4 }}
                                        md={{ span: 3 }}
                                        lg={{ span: 3 }}
                                        key={index + 20}
                                    >
                                        <InputGroup className="mb-3">
                                            <FormControl
                                                id={index + 1}
                                                placeholder="Age"
                                                aria-label="Age"
                                                aria-describedby="basic-addon2"
                                                onChange={e => updateData(e)}
                                            />
                                        </InputGroup>
                                    </Col>
                            </React.Fragment>
                        ))}
                    </Row>
                    <Row>
                        <Col
                            xs={{ span: 8, offset: 2 }}
                            md={{ span: 6, offset: 3 }}
                            lg={{ span: 6, offset: 3 }}
                        >
                            <Button
                                className="align-button"
                                onClick={e => {
                                    e.preventDefault();
                                    updateNumberOfChildren([
                                        ...numberOfChildren,
                                        { id: numberOfChildren.length + 1, age: undefined }
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
                    <br />
                    <Row>
                        <Col
                            xs={{ span: 8, offset: 2 }}
                            md={{ span: 6, offset: 3 }}
                            lg={{ span: 6, offset: 3 }}
                        >
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
            )}
        </div>
    );
}
