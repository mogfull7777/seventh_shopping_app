import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Button, Card, Col, Container, Form, Image, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import axios from "axios";

const Order = () => {

    const params = useParams();

    const [productInfo, setProductInfo] = useState({});
    const [productQty, setProductQty]  = useState(0);

    const getProductData = async () => {

        try {

            const productResult = await axios.get(`http://localhost:9090/api/products/${params.productId}`)

            setProductInfo(productResult.data)

            console.log('%%%%%%%%%%%%%', productResult.data)

        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        getProductData()
    }, [])


    return (
        <Container>
            <h1>Order</h1>
            <Row>
                <Col md={8}>
                    <ListGroup variant={"flush"}>
                        <ListGroup.Item>
                            <Row>
                                <Col md={2}>
                                    <Image src={productInfo.image} alt={productInfo.name} fluid rounded />
                                </Col>
                                <Col md={3}>
                                    {productInfo.name}
                                </Col>
                                <Col md={2}>
                                    {productInfo.price}
                                </Col>
                                <Col md={2}>
                                    <Form.Control
                                        as={'select'}
                                        value={productInfo.qty}
                                        onChange={(e => setProductQty(e.target.value))}
                                    >
                                        {[...Array(productInfo.countInStock).keys()].map(
                                            (x) => (
                                                <option key={x+1} value={x+1}>
                                                    {x+1}
                                                </option>
                                            )
                                        )}

                                    </Form.Control>
                                </Col>
                                <Col md={2}>
                                    <Button>
                                        <i className={'fas fa-trash'} />
                                    </Button>
                                </Col>

                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant={'flush'}>
                            <ListGroup.Item>
                                <h2>
                                    Subtotal : ??

                                    {/*Subtotal ({productQty} * {productInfo.price})*/}
                                    {/*  상태관리 후에 적용  */}

                                </h2>
                                $ {}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button
                                    type={'button'}
                                    className={'btn-block'}
                                >
                                    Proceed To Chackout
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
};

export default Order;