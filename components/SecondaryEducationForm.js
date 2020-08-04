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

export default function SecondaryEducationForm() {
    const router = useRouter();
    const dispatch = useContext(DispatchContext);
    const [hasChildren, updateHasChildren] = useState(false);
    // const [numberOfChildren, updateNumberOfChildren] = useState([
    //     { childAge: undefined },
    // ]);
    const now = 20;
    const progressInstance = <ProgressBar now={now} />;

    return (
        <div>
            <br />
            <Row>
                <Col
                    xs={{ span: 6, offset: 3 }}
                    md={{ span: 6, offset: 3 }}
                    lg={{ span: 6, offset: 3 }}
                >
                    {progressInstance}
                </Col>
            </Row>
            <br />
        </div>
    )
}
