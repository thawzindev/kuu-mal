import {Button, Container, Row, Col, Card, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

const VolunteerRegisterForm = () => {

    const [stateId, setStateId] = useState('');

    const volunteer = () => {
        return {
            'name' : '',
            'phone' : '',
            'password' : '',
            'state_id' : '',
            'township_id' : '',
            'activities'  : '',
        }
    }

    const [volunteerForm, setVolunteerForm] = useState(volunteer());

    const states = JSON.parse(localStorage.getItem('states'))

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

        console.log(volunteerForm)

    }, [stateId]);

    const handleOnChange = (e) => {
        setVolunteerForm({
            ...volunteerForm,
            [e.target.name]: e.target.value
        });
    }

    const handleStateIdOnChange = (e) => {

        setStateId(e.target.value);

        setVolunteerForm({
            ...volunteerForm,
            [e.target.name]: e.target.value
        });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(volunteer);

        axios.post('http://localhost:8000/api/volunteer/create', volunteerForm)
          .then(function (response) {
            setVolunteerForm(volunteer());
            setStateId('');
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    return (
        <>
            <a className="mb-2 px-3" style={{textAlign: "right"}} href="#">Volunteer Login</a>
            <p className="text-danger">အကူအညီပေးလိုသော volunteer များစာရင်းပေးရန်။ (volunteer အဖြစ်စာရင်းပေးသွင်းထားပါက login ဝင်ပြီး မိမိမြို့နယ်အတွင်းရှိ အကူအညီတောင်းထားသူများ စာရင်းကို အလွယ်တကူကြည့်ရှူနိုင်ပါသည်။)</p>

                <Form className="" onSubmit={e => handleOnSubmit(e)}>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                        အမည်
                        </Form.Label>
                        <Col sm="8">
                        <Form.Control value={volunteerForm.name} name="name" placeholder="အောင်အောင်" onChange={e => handleOnChange(e)}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                        ဖုန်းနံပါတ်
                        </Form.Label>
                        <Col sm="8"> 
                        <Form.Control value={volunteerForm.phone} name="phone" autoComplete="off" type="number" placeholder="09425091049" onChange={e => handleOnChange(e)}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                        လျှိ့ဝှက်နံပါတ်
                        </Form.Label>
                        <Col sm="8">
                        <Form.Control value={volunteerForm.password} name="password" autoComplete="off" type="password" placeholder="p@ssw0rD" onChange={e => handleOnChange(e)}/>
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
                        <Form.Select value={volunteerForm.township_id} name="township_id" aria-label="Default select example" className="township" onChange={e => handleOnChange(e)}>
                            {/* <option defaultValue={volunteerForm.township_id}>ရွေးပါ</option> */}
                        </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                        ကူညီပေးနိုင်မည့်အရာများ
                        </Form.Label>
                        <Col sm="8">
                        <Form.Control value={volunteerForm.activities} name="activities" as="textarea" rows={3} placeholder="စျေးဝယ်ပေးနိုင်ပါသည်။" onChange={e => handleOnChange(e)}/>
                        </Col>
                    </Form.Group>

                    <Button variant="dark" type="submit">ပေးပို့မည်။</Button>
                </Form>
        </>
    )
}

export default VolunteerRegisterForm;