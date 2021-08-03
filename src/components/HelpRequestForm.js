import {useState, useEffect} from 'react';
import Header from './includes/Header';
import Footer from './includes/Footer';
import HelpRequestCard from './cards/HelpRequestCard'
import {Button, Container, Row, Col, Card, Form, FormGroup} from 'react-bootstrap';
import {Link} from "react-router-dom";
import axios from "axios";
import ProgressBar from './ProgressBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HelpRequestForm = () => {

    const [stateId, setStateId] = useState('');

    const request = () => {
        return {
            'name' : '',
            'phone' : '',
            'state_id' : '',
            'township_id' : '',
            'address' : '',
            'activities'  : '',
        }
    }

    const [loading, setLoading] = useState(false);
    const [requestForm, setRequestForm] = useState(request());

    const states = JSON.parse(localStorage.getItem('states'));

    useEffect(async () => {

        const townshipElement = document.querySelector('.township');

        townshipElement.length = 0;
       
        if (stateId !== '') {
            const result = await axios.get(`http://localhost:8000/api/townships?state_id=${stateId}`);

            console.log(result.data);
            townshipElement.add(new Option('All', ''))

            result.data.data.map(township => (
                townshipElement.add(new Option(township.name, township.id))
            ))
        }

    }, [stateId]);

    const handleStateIdOnChange = (e) => {

        setStateId(e.target.value);

        setRequestForm({
            ...requestForm,
            [e.target.name]: e.target.value
        });
    }

    const handleOnChange = (e) => {
        setRequestForm({
            ...requestForm,
            [e.target.name]: e.target.value
        });
    }

    const handleOnSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        console.log(requestForm);
        axios.post('http://localhost:8000/api/help/request', requestForm)
          .then(function (response) {
            setRequestForm(request());
            setStateId('');

            toast.success("အကူအညီတောင်းခြင်း အောင်မြင်ပါသည်။");
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
                    autoClose={3000}
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
                                        <h4 className="text-left px-1 mt-2" style={{textAlign: 'left'}}><strong>အကူအညီတောင်းရန်။</strong></h4>
                                    </Col>
                                    <Col>
                                        <Link to="/volunteers" className="btn btn-success text-right px-3" style={{textAlign: 'right'}}>Volunteer စာရင်းကြည့်ရန်။</Link>
                                    </Col>
                                </Row>

                                <hr/>

                                <Form className="" onSubmit={e => handleOnSubmit(e)}>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2">
                                        အမည်
                                        </Form.Label>
                                        <Col sm="8">
                                        <Form.Control value={requestForm.name} name="name" placeholder="ဦးမောင်မောင်"  onChange={e => handleOnChange(e)}/>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2">
                                        ဖုန်းနံပါတ်
                                        </Form.Label>
                                        <Col sm="8"> 
                                        <Form.Control value={requestForm.phone} name="phone" autoComplete="off" type="number" placeholder="094250910490" onChange={e => handleOnChange(e)}/>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2">
                                        ပြည်နယ်/တိုင်း 
                                        </Form.Label>
                                        <Col sm="8">
                                        <Form.Select value={stateId} name="state_id" aria-label="Default select example" onChange={e => handleStateIdOnChange(e)}>
                                            <option defaultValue={stateId} >ရွေးပါ</option>
                                            {states.data.map(state => (
                                                <option key={state.id} value={state.id}>{state.name}</option>
                                            ))}
                                        </Form.Select>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2">
                                        မြို့နယ်
                                        </Form.Label>
                                        <Col sm="8">
                                        <Form.Select value={requestForm.township_id} name="township_id" aria-label="Default select example" className="township" onChange={e => handleOnChange(e)}>
                                            {/* <option defaultValue={requestForm.township_id}>ရွေးပါ</option> */}
                                        </Form.Select>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2">
                                        အကူအညီတောင်းလိုသောအရာများ
                                        </Form.Label>
                                        <Col sm="8">
                                        <Form.Control value={requestForm.activities} name="activities" as="textarea" rows={2} placeholder="နေမကောင်းပါသဖြင့် စျေးဝယ်ပေးရန် ... " onChange={e => handleOnChange(e)}/>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="2">
                                        နေရပ်လိပ်စာ
                                        </Form.Label>
                                        <Col sm="8">
                                        <Form.Control value={requestForm.address} name="address" as="textarea" rows={2} placeholder="၁၂/က အနော်ရထာလမ်း ..." onChange={e => handleOnChange(e)}/>
                                        </Col>
                                    </Form.Group>


                                    <p className="text-danger text-center px-1">အကူအညီလိုသူများအတွက် ဖွင့်လှစ်ထားခြင်းဖြစ်ပါသဖြင့် မှန်ကန်သောအချက်အလက်များဖြည့်သွင်းရန်လိုအပ်ပါသည်။</p>

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

export default HelpRequestForm;