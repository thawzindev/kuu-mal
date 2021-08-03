import Header from './includes/Header';
import Footer from './includes/Footer';
import {Button, Container, Row, Col, Card, Form} from 'react-bootstrap';
import notFound from '../images/notfound.png'


const NotFound = () => {
    return (
        <>
            <Container>
                <Row className="justify-content-center">
                        <Col md={10} lg={8} sm={12} className="text-center">
                            <Card className="shadow p-3 mb-5 rounded">

                                <Header/>

                                <div className="text-center mt-5">
                                    <img className="img-fluid" src={notFound} alt="Page not found" />
                                </div>

                                <Footer/>

                                

                            </Card>
                        </Col>
                </Row>
            </Container>
       </>
    )
}

export default NotFound;