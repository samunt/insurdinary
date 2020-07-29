import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from './SpouseForm.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function SpouseForm(props) {
    return (
        <div>
            <h1 className={styles.header}>Do you have a spouse or partner?</h1>
            <Container>
                <Row>
                    <Col xs={6} md={6} lg={6}>
                        <Button style={{width: '100%'}} variant="outline-primary" size="lg" >Yes</Button>{' '}
                    </Col>
                    <Col xs={6} md={6} lg={6}>
                        <Button style={{width: '100%'}} variant="outline-primary" size="lg" >No</Button>{' '}
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
