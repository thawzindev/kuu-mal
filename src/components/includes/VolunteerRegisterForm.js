import {Button, Container, Row, Col, Card, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const VolunteerRegisterForm = () => {
    return (
        <>
                    <a className="mb-2 px-3" style={{textAlign: "right"}} href="#">Volunteer Login</a>
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

                            <Button variant="dark">ပေးပို့မည်။</Button>
                        </Form>
        </>
    )
}

export default VolunteerRegisterForm;