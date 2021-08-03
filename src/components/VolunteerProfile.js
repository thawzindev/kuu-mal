import React, {useState, useEffect} from 'react';
import Header from './includes/Header';
import Footer from './includes/Footer';
import HelpRequestCard from './cards/HelpRequestCard'
import {Button, Container, Row, Col, Card, Form, FormGroup} from 'react-bootstrap';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import ProgressBar from './ProgressBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CryptoJS from 'crypto-js';
import { Redirect } from 'react-router-dom';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'


const VolunteerProfile = () => {

    let history = useHistory();

    const updateForm = () => {
        return {
            'name' : '',
            'phone' : '',
            'password' : '',
            'state_id' : '',
            'township_id' : '',
            'activities'  : '',
        }
    }

    const [loading, setLoading] = useState(false);
    const [volunteer, setVolunteer] = useState({});
    // const [updateForm, setUpdateForm] = useState(volunteer);

    const ciphertext = localStorage.getItem('volunteer');

    if (!ciphertext) {
        history.push('/404')
    }

    const bytes  = CryptoJS.AES.decrypt(ciphertext, "Z5W9g0HSfC6414U2");

    // Decrypt
    try {
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (error) {
        console.log(error)
        history.push('/404')
    }

    useEffect(async () => {

        if (decryptedData) {
            await axios.get('http://localhost:8000/api/volunteer/profile', {
                headers: {
                        'Authorization': `bearer ${decryptedData.access_token}`,
                        'Content-Type' : 'application/json'
                    }
                })
                .then(function (response) {
                    setVolunteer(response.data.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }, []);
    
    const handleOnChange = (e) => {
        setVolunteer({
            ...volunteer,
            [e.target.name]: e.target.value
        });
    }

    const activeHandleOnChange = (e) => {
        setVolunteer({
            ...volunteer,
            "active" : !volunteer.active
        });
    }

    const handleOnSubmit = (e) => {
        setLoading(true);
        e.preventDefault();

        console.log(volunteer);

        axios.post('http://localhost:8000/api/volunteer/profile/update', volunteer, {
            headers: {
                    'Authorization': `bearer ${decryptedData.access_token}`,
                    'Content-Type' : 'application/json'
                }
            })
          .then(function (response) {
            console.log(response)
            setLoading(false);
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
                                        <h4 className="text-left px-1 mt-2" style={{textAlign: 'left'}}><strong>Profile</strong></h4>
                                    </Col>
                                    <Col style={{textAlign: 'right'}}>
                                        <a className="btn btn-warning" >Logout</a>
                                    </Col>
                                </Row>

                                <hr/>

                                <Form className="" onSubmit={e => handleOnSubmit(e)}>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2">
                                        အမည် <span className="text-danger">*</span>
                                        </Form.Label>
                                        <Col sm="8">
                                        <Form.Control required defaultValue ={volunteer.name} name="phone" placeholder="Eg. 09426659201" onChange={e => handleOnChange(e)}/>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2">
                                        ဖုန်းနံပါတ် <span className="text-danger">*</span>
                                        </Form.Label>
                                        <Col sm="8">
                                        <Form.Control required type="number" defaultValue ={volunteer.phone} name="phone" onChange={e => handleOnChange(e)}/>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2">
                                        အကူအညီတောင်းလိုသောအရာများ
                                        </Form.Label>
                                        <Col sm="8">
                                        <Form.Control defaultValue={volunteer.activities} name="activities" as="textarea" rows={3} onChange={e => handleOnChange(e)}/>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2">
                                        နေရပ်လိပ်စာ
                                        </Form.Label>
                                        <Col sm="8">
                                        <Form.Control defaultValue={volunteer.address} name="address" as="textarea" rows={3} onChange={e => handleOnChange(e)}/>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2">
                                        အခြေအနေ
                                        </Form.Label>
                                        <Col sm="8" style={{textAlign: "left"}}>
                                        <BootstrapSwitchButton checked={volunteer.active === 1 ? true : false} onChange={e => activeHandleOnChange(e)}/>

                                        </Col>
                                    </Form.Group> 


                                    <Button type="submit" variant="dark">ပေးပို့မည်။</Button>
                                </Form>

                                <Footer/>

                            </Card>
                        </Col>
                </Row>
            </Container>
        </>
    )
}

export default VolunteerProfile;