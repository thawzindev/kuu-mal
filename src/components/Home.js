import React, {useState, useEffect} from 'react';
import {Button, Container, Row, Col, Card, Form} from 'react-bootstrap';
import logo from '../images/kuumal.png';
import Header from './includes/Header';
import Footer from './includes/Footer';
import MainCard from './includes/MainCard';
import VolunteerRegisterForm from './includes/VolunteerRegisterForm';
import axios from 'axios';
import ProgressBar from './ProgressBar'

const Home = () => {

    const [loading, setLoading] = useState(false);

    const states = localStorage.getItem('states');

    if (!states) {
        axios.get('http://localhost:8000/api/states')
            .then(function (response) {
                localStorage.setItem('states', JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <ProgressBar isAnimating={loading}/>
            <Container>
                <Row className="justify-content-center">
                        <Col md={10} lg={8} sm={12} className="text-center">
                            <Card className="shadow p-3 mb-5 rounded">

                                <Header/>
                                <p>ယခုစာမျက်နှာသည် အကူအညီလိုသူများ အကူအညီပေးလိုသောသူများ အတွက်ဖွင့်လှစ်ထားခြင်းဖြစ်ပါတယ်။</p>

                                <MainCard/>

                                <VolunteerRegisterForm/>

                                <Footer/>

                            </Card>
                        </Col>
                </Row>
            </Container>
       </>
    )
}

export default Home;