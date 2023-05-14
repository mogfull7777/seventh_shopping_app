import React from 'react';
import {Col, Row} from "react-bootstrap";

const Footer = () => {
    return (
        <div>
            <Row>
                <Col className={'text-center py-3'}>
                    copyright &copy; Junyoung An
                </Col>
            </Row>
        </div>
    );
};

export default Footer;