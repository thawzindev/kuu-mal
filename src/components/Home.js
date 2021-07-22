import React from 'react';
import {Button, Container, Row, Col, Card, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/kuumal.png';
import '../styles/Home.css';


const Home = () => {
    return (
       <Container>
           <Row className="justify-content-center">
                <Col md={10} lg={8} sm={12} className="text-center">
                    <Card className="shadow p-3 mb-5 rounded">
                        <div>
                            <img src={logo} alt="Kuu Mal Logo"/>
                        </div>
                        <p>ယခုစာမျက်နှာသည် အကူအညီလိုသူများ အကူအညီပေးလိုသောသူများ အတွက်ဖွင့်လှစ်ထားခြင်းဖြစ်ပါတယ်။</p>

                        <hr/>

                        <Row style={{textAlign: "left"}} className="text-left px-5">
                            <Col lg={12} md={12} sm={12} className="mb-3">
                                အကူအညီတောင်းခံသူ အရေအတွက် - <strong>(၃) ဦး</strong>
                            </Col>

                            <Col lg={12} md={12} sm={12}>
                                အကူအညီတောင်းခံသူ အရေအတွက် - <strong>(၃) ဦး</strong>
                            </Col>
                        </Row>

                        <Row className="mt-3 mb-3">
                            <Col>
                                <a href="help.html" className="btn btn-info"><i className="fa fa-heartbeat"></i> အကူအညီတောင်းမယ်</a>
                            </Col>
                            <Col>
                                <a href="list.html" className="btn btn-success"><i className="fa fa-handshake"></i> ကူညီပေးမယ်</a>
                            </Col>
                        </Row>

                        <hr/>

                        <a className="mb-2" style={{textAlign: "right"}} href="#">Volunteer Login</a>
					    <p className="text-danger">အကူအညီပေးလိုသော volunteer များစာရင်းပေးရန်။ (volunteer အဖြစ်စာရင်းပေးသွင်းထားပါက login ဝင်ပြီး မိမိမြို့နယ်အတွင်းရှိ အကူအညီတောင်းထားသူများ စာရင်းကို အလွယ်တကူကြည့်ရှူနိုင်ပါသည်။)</p>

                        <Form className="">

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="2">
                                အမည်
                                </Form.Label>
                                <Col sm="8">
                                <Form.Control placeholder="အောင်အောင်" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="2">
                                ဖုန်းနံပါတ်
                                </Form.Label>
                                <Col sm="8">
                                <Form.Control autoComplete="off" type="number" placeholder="094250910490" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="2">
                                လျှိ့ဝှက်နံပါတ်
                                </Form.Label>
                                <Col sm="8">
                                <Form.Control autoComplete="off" type="password" placeholder="p@ssw0rD" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="2">
                                မြို့နယ်
                                </Form.Label>
                                <Col sm="8">
                                <Form.Select aria-label="Default select example">
                                    <option>All</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="2">
                                ကူညီပေးနိုင်မည့်အရာများ
                                </Form.Label>
                                <Col sm="8">
                                <Form.Control as="textarea" rows={2} placeholder="စျေးဝယ်ပေးနိုင်ပါသည်။"/>
                                </Col>
                            </Form.Group>

                            <Button variant="dark">Submit</Button>
                        </Form>

                        <hr/>


					<footer className="page-footer font-small blue">
                        <div className="footer-copyright text-center">© 2020 Copyright:
                            <a href="https://mdbootstrap.com/"> YC Group</a>
                            <br/>
                            <a href='https://www.freepik.com/vectors/abstract'>Abstract vector created by pch.vector - www.freepik.com</a>
                        </div>
					</footer>


                    </Card>
                </Col>
           </Row>
       </Container>
    )
}

export default Home;