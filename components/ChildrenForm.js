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
import {QuestionCircle, Trash} from 'react-bootstrap-icons';
import Modal from "react-bootstrap/Modal";


export default function ChildrenForm() {
    const [hasChildren, updateHasChildren] = useState();
    const [numberOfChildren, updateNumberOfChildren] = useState([
        { id: 1, age: undefined }
    ]);
    // modal stuff
    const [showTitle, setShowTitle] = useState(false);
    const handleCloseTitle = () => setShowTitle(false);
    const [showHowOld, setShowHowOld] = useState(false);
    const handleCloseHowOld = () => setShowHowOld(false);
    const [showAskAboutChildren, setShowAskAboutChildren] = useState(false);
    const handleCloseAskAboutChildren = () => setShowAskAboutChildren(false);
    const [showPlanningOnKids, setShowPlanningOnKids] = useState(false);
    const handleClosePlanningOnKids = () => setShowPlanningOnKids(false);

    const now = 15;
    const progressInstance = <ProgressBar style={{height: '0.5rem'}} now={now} />;
    const dispatch = useContext(DispatchContext);
    const router = useRouter();

    useEffect(() => {
        dispatch({ type: "CHILDREN_AGE_ARRAY", childrenAgeArray: numberOfChildren });
        dispatch({ type: "NUMBER_OF_CHILDREN", numberOfChildren: numberOfChildren.length - 1 });
    }, [numberOfChildren]);

    useEffect(() => {
        dispatch({ type: "HAS_CHILDREN", hasChildren: false });
    }, [hasChildren]);

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

    function deleteChild(e) {
        const { id } = e.target;
        // Find the item in the array that has the same id
        // Convert the grabed id from string to Number
        const itemIndex = numberOfChildren.findIndex(
            item => item.id === Number(id)
        );
        console.log('ITEM INDEX', itemIndex);
        // Make a copy of the state
        const children = [...numberOfChildren];
        // remove the child from the array
        children.splice(itemIndex, 1);
        // Update the state
        updateNumberOfChildren(children);
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
                <Row>
                    <Col xs={{span: 6, offset: 3}} md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }}>
                        <h2 className={styles.header}>Do you have children?</h2>
                    </Col>
                    <Col xs={1} md={1} lg={1}>
                        <QuestionCircle
                            size={30}
                            onClick={() => {setShowTitle(true)}}
                            style={{position: 'relative', top: '15px', right: '100%'}}
                        />
                    </Col>
                </Row>
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
                                onClick={() => {
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
                    <Row>
                        <Col xs={{span: 8, offset: 2}} md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }}
                             onClick={() => {setShowAskAboutChildren(true)}}>
                            <h5 className={styles.header}><u>Why do we ask about your children?</u></h5>
                        </Col>
                        <Col xs={1} md={1} lg={1}>
                            <QuestionCircle
                                size={30}
                                onClick={() => {setShowAskAboutChildren(true)}}
                                style={{position: 'relative', top: '15px', right: '100%'}}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{span: 8, offset: 2}} md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }}
                             onClick={() => {setShowPlanningOnKids(true)}}>
                            <h5 className={styles.header}><u>What if I'm planning on having kids?</u></h5>
                        </Col>
                        <Col xs={1} md={1} lg={1}>
                            <QuestionCircle
                                size={30}
                                onClick={() => {setShowPlanningOnKids(true)}}
                                style={{position: 'relative', top: '15px', right: '100%'}}
                            />
                        </Col>
                    </Row>
                </Container>
            </Form>
            {hasChildren === true && (
                <Form
                    onSubmit={e => {
                        console.log('SUBMIT')
                        e.preventDefault();
                        dispatch({ type: "HAS_CHILDREN", hasChildren: true });
                        dispatch({ type: "NUMBER_OF_CHILDREN", numberOfChildren: numberOfChildren.length });
                        dispatch({ type: "CHILDREN_AGE_ARRAY", childrenAgeArray: numberOfChildren });
                        router.push('/secondaryEducation')
                    }}
                >
                    <br />
                    <Row>
                        <Col
                            xs={{ span: 11 }}
                            md={{ span: 6, offset: 3 }}
                            lg={{ span: 6, offset: 3 }}
                        >
                            <h3 className={styles.header}>How old are your children?</h3>
                        </Col>
                        <Col xs={1} md={1} lg={1}>
                            <QuestionCircle
                                size={30}
                                onClick={() => {setShowHowOld(true)}}
                                style={{position: 'relative', top: '15px', right: '50px'}}
                            />
                        </Col>
                    </Row>
                    <Row>
                        {numberOfChildren.map((child, index) => (
                            <React.Fragment key={index + 40}>
                                    <Col
                                        xs={{ span: 4, offset: 2 }}
                                        md={{ span: 3, offset: 3 }}
                                        lg={{ span: 3, offset: 3 }}
                                        key={index + 30}
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
                                                key={index + 60}
                                                placeholder="Age"
                                                aria-label="Age"
                                                aria-describedby="basic-addon2"
                                                onChange={e => updateData(e)}
                                            />
                                        </InputGroup>
                                    </Col>
                                {index > 0 ? (
                                    <Col
                                        xs={{ span: 1 }}
                                        md={{ span: 1 }}
                                        lg={{ span: 1 }}
                                        key={index + 50}
                                    >
                                        <Trash
                                            size={30}
                                            id={index + 1}
                                            onClick={(e) => {
                                                deleteChild(e);
                                                console.log('delete')
                                        }}/>
                                    </Col>
                                ) : (
                                    <Col>
                                    </Col>
                                )}


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
                                Add Additional Child
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
            {/*title modal*/}
            <Modal show={showTitle} onHide={handleCloseTitle}>
                <Modal.Body>Select “Yes” if you have children or are currently expecting. Select “No” if you don’t have children or all of your children are out of your household and more or less financially independent.</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseTitle}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*how odla re ur children modal*/}
            <Modal show={showHowOld} onHide={handleCloseHowOld}>
                <Modal.Body>Only include children who you are financially supporting (usually 25 and younger). Make sure to incorporate your children when we ask about your finances and expenses.</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseHowOld}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*ask about children*/}
            <Modal show={showAskAboutChildren} onHide={handleCloseHowOld}>
                <Modal.Body>Life insurance is all about protecting the people you love. If there are people who rely on you for financial support, a life insurance policy will make sure they have enough money if something unexpected happens to you and your income is no longer there.</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseAskAboutChildren}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*ask about children*/}
            <Modal show={showPlanningOnKids} onHide={handleClosePlanningOnKids}>
                <Modal.Body>If you’re expecting, first off, congratulations! You should include your expected child (or children if you’re having twins or triplets) and specify “0” when we ask for your children’s ages.

                    However, if you’re merely planning on having children in the future, don’t include them. Until you are certain about if and when you’ll be having children, it’s best to not include them in your needs assessment to ensure you are not paying for coverage that you might not ultimately need.

                    When your family does grow, we recommend revisiting the PolicyMe life insurance checkup to get updated advice and understand how your coverage needs may have changed.</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleClosePlanningOnKids}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
