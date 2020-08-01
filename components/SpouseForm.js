import React, {useContext, useState, Component} from 'react';
import Button from 'react-bootstrap/Button';
import styles from './SpouseForm.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {DispatchContext} from "../contexts/FormContext";
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import { withRouter } from 'next/router'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';

class SpouseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasSpouse: false,
            spouseAge: null
        };

    }
    static contextType = DispatchContext;
    render() {
        // const dispatch = useContext(DispatchContext);
        // let [hasSpouse, updateHasSpouse] = useState(false);
        // const router = useRouter();
        const {router} = this.props;
        console.log(this.context)
        return (
            <div>
                <br/>
                <Row>
                    <Col xs={{span:6, offset: 3}} md={{span:6, offset: 3}} lg={{span:6, offset: 3}}>
                        <ProgressBar variant="success" now={10} />
                    </Col>
                </Row>
                <br/>

                <Form onSubmit={(e) => {
                    console.log(e)
                    router.push('/children')
                }}>

                <br/>
                <h2 className={styles.header}>Do you have a spouse or partner?</h2>
                <Container>
                    <Row>
                        <Col xs={6} md={{span:6, offset: 3}} lg={{span:6, offset: 3}}>
                            <Button
                                className="align-button"
                                onClick={() => {
                                    this.setState({hasSpouse: true})
                                    // dispatch({type: "ADD_SPOUSE", spouse: true});
                                    // updateHasSpouse(true);
                                }}
                                style={{width: '100%'}}
                                variant="outline-primary"
                                size="lg" >Yes</Button>{' '}
                        </Col>
                        <Col xs={6} md={{span:6, offset: 3}} lg={{span:6, offset: 3 }}>
                            <Button
                                className="align-button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.setState({hasSpouse: false});
                                    this.context.dispatch({type: "ADD_SPOUSE", spouse: false});
                                    // router.push('/children')
                                }}
                                style={{width: '100%'}}
                                variant="outline-primary"
                                type="submit"
                                size="lg" >No</Button>{' '}
                        </Col>
                    </Row>
                </Container>
                </Form>
                    {this.state.hasSpouse === true ?
                        <Container>
                            <Row>
                                <Col xs={12} md={12} lg={{span:6, offset: 3}}>
                                    <br/><br/>
                                    <h3 className={styles.header}>How old is your spouse or partner?</h3>
                                </Col>
                            </Row>
                            <Form onSubmit={(e) => {
                                e.preventDefault();
                                this.context.dispatch({type: "SPOUSE_AGE", spouseAge: this.state.spouseAge})
                                router.push('/children');
                            }}>
                            <Row>
                                <Col xs={12} md={12} lg={{span:6, offset: 3}}>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>Age</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl onChange={(e) => {
                                            this.setState({spouseAge: e.target.value})

                                        }}/>
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={12} lg={{span:6, offset: 3}}>
                                    <Button
                                        style={{width: '100%'}}
                                        type="submit"
                                        variant="outline-primary"
                                        size="lg" >Next</Button>{' '}
                                </Col>
                            </Row>
                            </Form>
                     </Container>

                        : null}

            </div>
        )
    }
}

export default withRouter(SpouseForm)
