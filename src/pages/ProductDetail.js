import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Button, Card, Col, Container, Form, Image, ListGroup, Row} from "react-bootstrap";

const ProductDetail = () => {

    const params = useParams();
    const navigate = useNavigate();

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
                                <Image src={product.image} alt={product.name} fluid />
                            </Col>

                            <Col md={4}>
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
                                                                    // 데이터 사이사이에 , 를 달아서 배열완성
                                                                    // 컴퓨터는 0부터 카운트 하는 것을 까먹지 말기.
                                                                )
                                                            )}
                                                        </Form.Control>
                                                    </Col>

                                                </Row>

                                            </ListGroup.Item>

                                        )}

                                        <ListGroup.Item>
                                            <Button
                                                onClick={() => navigate(`/cart/${product._id}`)}
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