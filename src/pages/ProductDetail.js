import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {Button, Card, Col, Container, Form, ListGroup, Row} from "react-bootstrap";

const ProductDetail = () => {

    const params = useParams();

    const [product, setProducts] = useState({});
    const [qty, setQty] = useState(0);

    const getProduct = async () => {

        try {

            const productResult = await axios.get(`http://localhost:9090/api/products/${params.productId}`)

            console.log('%%%%%%%%%%%%%%', productResult)

            if (productResult.status === 200) {
                setProducts(productResult.data)
            }

        } catch (err) {
            console.log(err.massage)
        }

    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <Container>
            <Row>
                <Col>

                    <Link className={'btn btn-light my-3'} to={'/'}>
                        Go back
                    </Link>

                    <>

                    {/*    product info    */}

                        <Row>
                            <Col>
                                <image src={product.image} alt={product.name} fluid />
                            </Col>

                            <Col>
                                <ListGroup>
                                    <ListGroup.Item>
                                        <h3>{product.name}</h3>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <h3>{product.rating}</h3>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <h3>{product.price}</h3>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <h3>{product.description}</h3>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>

                            <Col>
                                <Card>
                                    <ListGroup>

                                        <ListGroup.Item>
                                            <Row>
                                                <Col>price : </Col>
                                                <Col>
                                                    <strong>${product.price}</strong>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Status</Col>
                                                <Col>
                                                    {product.countInStock > 0 ? "In stock" : "Out of Stock"}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>

                                        {product.countInStock > 0 && (

                                            <ListGroup.Item>

                                                <Row>

                                                    <Col>
                                                        QTY
                                                    </Col>

                                                    <Col>
                                                        <Form.Control
                                                            as={'select'}
                                                            value={qty}
                                                            onChange={e => setQty(e.target.value)}
                                                        >
                                                            {[...Array(product.countInStock).keys()].map(
                                                                (x) => (
                                                                    <option key={x+1} value={x+1}>
                                                                        {x+1}
                                                                    </option>
                                                                )
                                                            )}
                                                        </Form.Control>
                                                    </Col>

                                                </Row>

                                            </ListGroup.Item>

                                        )}

                                        <ListGroup.Item>
                                            <Button
                                                className={'btn-block'}
                                                type={'button'}
                                                disabled={product.countInStock === 0}
                                            >
                                                Add to Cart
                                            </Button>
                                        </ListGroup.Item>

                                    </ListGroup>
                                </Card>
                            </Col>

                        </Row>

                    </>

                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;