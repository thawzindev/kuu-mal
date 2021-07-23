import React from 'react';
import {Button, Container, Row, Col, Card, Form} from 'react-bootstrap';
import logo from '../images/kuumal.png';
import Header from './includes/Header';
import Footer from './includes/Footer';
import MainCard from './includes/MainCard';
import VolunteerRegisterForm from './includes/VolunteerRegisterForm';


const Home = () => {
    return (
        <>
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