import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const FindEmail = () => {

    const [phoneNumber, setPhoneNumber] = useState(0);

    const phoneNumberSubmitHendle = async (e) => {

        e.preventDefault()

        try {

            const loginList = {phoneNumber}

            console.log(loginList)


        } catch (err) {
            console.log(err)
        }

    }

    return (
        <Container>
            <Row className={"justify-content-center"}>
                <Col xs={12} md={6} className={"mt-5"}>

                    <h1>Find Email</h1>

                    <Form onSubmit={phoneNumberSubmitHendle}>

                        <Form.Group>
                            <Form.Text className="text-muted mt-3">
                                가입 시 사용한 핸드폰 번호를 입력해주세요. (- 포함)
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="phonenumber"
                                placeholder="000-0000-0000"
                                value={phoneNumber}
                                onChange={e => setPhoneNumber(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="dark" type="submit">
                            Submit
                        </Button>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default FindEmail;