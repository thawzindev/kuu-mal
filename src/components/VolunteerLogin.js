import React, {useState, useEffect} from 'react';
import Header from './includes/Header';
import Footer from './includes/Footer';
import HelpRequestCard from './cards/HelpRequestCard'
import {Button, Container, Row, Col, Card, Form, FormGroup} from 'react-bootstrap';
import {Link} from "react-router-dom";
import axios from "axios";
import ProgressBar from './ProgressBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import CryptoJS from 'crypto-js';


const VolunteerLogin = () => {

    // var CryptoJS = require('crypto-js');

    const form = () => {
        return {
            'phone' : '',
            'password' : '',
        }
    }

    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [loginForm, setLoginForm] = useState(form());

    const handleOnChange = (e) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value
        });
    }

    const setVolunteerLoggedIn = (response) => {

        const data = {...response.data, "isLoggedIn" : true};

        const key = "Z5W9g0HSfC6414U2";
        const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
        localStorage.setItem('volunteer', ciphertext);
    }

    const handleOnSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        axios.post('http://localhost:8000/api/volunteer/login', loginForm)
          .then(function (response) {
            console.log(response)
            setVolunteerLoggedIn(response);

            setLoading(false);
            toast.info("redirecting ...");
            history.push("/volunteer/profile");
          })
          .catch(function (error) {
            toast.error(error.response.data.message);
            setLoading(false);
          });
    }

    return (
        <>
            <ProgressBar isAnimating={loading}/>
            <Container>
                <ToastContainer
                    position="top-right"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <Row className="justify-content-center">
                        <Col md={10} lg={8} sm={12} className="text-center">
                            <Card className="shadow p-3 mb-5 rounded">

                                <Header/>

                                {/* <Link to="/" className="px-1 back"><i className="fa fa-arrow-left back" aria-hidden="true"></i>Back</Link> */}


                                <Row>
                                    <Col>
                                        <h4 className="text-left px-1 mt-2" style={{textAlign: 'left'}}><strong>Volunteer Login ဝင်ရန်</strong></h4>
                                    </Col>
                                    {/* <Col>
                                        <Link to="/volunteers" className="btn btn-success text-right px-3" style={{textAlign: 'right'}}>Volunteer စာရင်းကြည့်ရန်။</Link>
                                    </Col> */}
                                </Row>

                                <hr/>

                                <Form className="" onSubmit={e => handleOnSubmit(e)}>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2">
                                        ဖုန်းနံပါတ် <span className="text-danger">*</span>
                                        </Form.Label>
                                        <Col sm="8">
                                        <Form.Control required value={loginForm.phone} name="phone" placeholder="Eg. 09426659201" onChange={e => handleOnChange(e)}/>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2">
                                        လျှိ့ဝှက်နံပါတ် <span className="text-danger">*</span>
                                        </Form.Label>
                                        <Col sm="8">
                                        <Form.Control required type="password" value={loginForm.password} name="password" placeholder="*******" onChange={e => handleOnChange(e)}/>
                                        </Col>
                                    </Form.Group>

                                    <Button type="submit" variant="dark">ဝင်ရောက်မည်။</Button>
                                </Form>


                                <Footer/>

                            </Card>
                        </Col>
                </Row>
            </Container>
        </>
    )
}

export default VolunteerLogin;