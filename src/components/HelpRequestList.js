import React from 'react';
import Header from './includes/Header';
import Footer from './includes/Footer';
import HelpRequestCard from './cards/HelpRequestCard'
import {Button, Container, Row, Col, Card, Form, FormGroup} from 'react-bootstrap';

const HelpRequestList = () => {
    return (
        <>
            <Container>
                <Row className="justify-content-center">
                        <Col md={10} lg={8} sm={12} className="text-center">
                            <Card className="shadow p-3 mb-5 rounded">

                                <Header/>

                                <h4 className="text-left px-1 mt-2" style={{textAlign: 'left'}}><strong>အကူအညီတောင်းထားသူများ - (၁၆) ဦး</strong></h4>
                                <p className="text-danger text-left px-1" style={{textAlign: 'left'}}>အကူအညီပေးပြီးပါက ID နဲ့တကွ Kuumal Facebook Page တွင်အကြောင်းကြားပေးပါရန်။</p>

                                <hr/>


                                {/* start of form */}
                                <Form className="mb-3">

                                    <FormGroup as={Row}>
                                        <Form.Label column sm="2" className="px-1"> အမျိုးအစား - </Form.Label>
                                        <Col sm="3">
                                            <Form.Select aria-label="Default select example">
                                                <option>All</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Col>

                                        <Form.Label column sm="2"> မြို့နယ် - </Form.Label>
                                        <Col sm="3">
                                            <Form.Select aria-label="Default select example">
                                                <option>All</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Col>

                                        <Col sm="2">
                                        <Button variant='primary' type="submit">
                                            ရှာမယ်။
                                        </Button>
                                        </Col>
                                        
                                    </FormGroup>

                                </Form> 
                                {/* end of form */}

                                <HelpRequestCard/>
                                <HelpRequestCard/>
                                <HelpRequestCard/>
                                <HelpRequestCard/>
                                <HelpRequestCard/>
                                <HelpRequestCard/>


                                <Footer/>

                            </Card>
                        </Col>
                </Row>
            </Container>
        </>
    )
}

export default HelpRequestList;