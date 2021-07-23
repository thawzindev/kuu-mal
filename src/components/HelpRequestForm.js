import React from 'react';
import Header from './includes/Header';
import Footer from './includes/Footer';
import HelpRequestCard from './cards/HelpRequestCard'
import {Button, Container, Row, Col, Card, Form, FormGroup} from 'react-bootstrap';
import {Link} from "react-router-dom";


const HelpRequestForm = () => {
    return (
        <>
            <Container>
                <Row className="justify-content-center">
                        <Col md={10} lg={8} sm={12} className="text-center">
                            <Card className="shadow p-3 mb-5 rounded">

                                <Header/>

                                {/* <Link to="/" className="px-1 back"><i className="fa fa-arrow-left back" aria-hidden="true"></i>Back</Link> */}


                                <Row>
                                    <Col>
                                        <h4 className="text-left px-1 mt-2" style={{textAlign: 'left'}}><strong>အကူအညီတောင်းရန်။</strong></h4>
                                    </Col>
                                    <Col>
                                        <Link to="/volunteers" className="btn btn-success text-right px-3" style={{textAlign: 'right'}}>Volunteer စာရင်းကြည့်ရန်။</Link>
                                    </Col>
                                </Row>

                                <hr/>

                                <Form className="">

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2">
                                        အမည်
                                        </Form.Label>
                                        <Col sm="8">
                                        <Form.Control placeholder="ဦးမောင်မောင်" />
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
                                        အကူအညီတောင်းလိုသောအရာများ
                                        </Form.Label>
                                        <Col sm="8">
                                        <Form.Control as="textarea" rows={2} placeholder="နေမကောင်းပါသဖြင့် စျေးဝယ်ပေးရန် ... "/>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2">
                                        နေရပ်လိပ်စာ
                                        </Form.Label>
                                        <Col sm="8">
                                        <Form.Control as="textarea" rows={2} placeholder="၁၂/က အနော်ရထာလမ်း ..."/>
                                        </Col>
                                    </Form.Group>


                                    <p className="text-danger text-center px-1">အကူအညီလိုသူများအတွက် ဖွင့်လှစ်ထားခြင်းဖြစ်ပါသဖြင့် မှန်ကန်သောအချက်အလက်များဖြည့်သွင်းရန်လိုအပ်ပါသည်။</p>

                                    <Button variant="dark">ပေးပို့မည်။</Button>
                                </Form>


                                <Footer/>

                            </Card>
                        </Col>
                </Row>
            </Container>
        </>
    )
}

export default HelpRequestForm;