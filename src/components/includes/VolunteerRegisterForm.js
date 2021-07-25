import {Button, Container, Row, Col, Card, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

const VolunteerRegisterForm = () => {

    const [stateId, setStateId] = useState('');

    const states = JSON.parse(localStorage.getItem('states'))

    useEffect(async () => {

        const townshipElement = document.querySelector('.township');

        townshipElement.length = 0;
       
        if (stateId !== '') {
            const result = await axios.get(`http://localhost:8000/api/townships?state_id=${stateId}`);

            console.log(result.data);
            
            result.data.data.map(township => (
                townshipElement.add(new Option(township.name, township.id))
            ))
        }

    }, [stateId]);

    const fetchTownship = async(e) => {

        const stateId = e.target.value;
        setStateId(stateId);

    }


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
                        <Form.Control autoComplete="off" type="number" placeholder="09425091049" />
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
                        ပြည်နယ်/တိုင်း 
                        </Form.Label>
                        <Col sm="8">
                        <Form.Select value={stateId} aria-label="Default select example" onChange={e => fetchTownship(e)}>
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
                        <Form.Select aria-label="Default select example" className="township">
                            <option disabled>ရွေးပါ</option>
                            
                        </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                        ကူညီပေးနိုင်မည့်အရာများ
                        </Form.Label>
                        <Col sm="8">
                        <Form.Control as="textarea" rows={3} placeholder="စျေးဝယ်ပေးနိုင်ပါသည်။"/>
                        </Col>
                    </Form.Group>

                    <Button variant="dark">ပေးပို့မည်။</Button>
                </Form>
        </>
    )
}

export default VolunteerRegisterForm;