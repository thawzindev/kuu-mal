import {useEffect, useState} from 'react';
import Header from './includes/Header';
import Footer from './includes/Footer';
import HelpRequestCard from './cards/HelpRequestCard'
import {Button, Container, Row, Col, Card, Form, FormGroup, Pagination} from 'react-bootstrap';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const HelpRequestList = () => {

    const states = JSON.parse(localStorage.getItem('states'))

    const search = () => {
        return {
            'state_id' : '',
            'township_id' : '',
        }
    }
    
    const [searchForm, setSearchForm] = useState(search());
    const [stateId, setStateId] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [helpRequests, setHelpRequest] = useState({});

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

    useEffect(async () => {
        await axios.get(`http://localhost:8000/api/help/requests/list?page=${currentPage}`)
            .then(function (response) {
                console.log(response.data)
                setHelpRequest(response.data)
                setCurrentPage(response.data.meta.current_page)
          })
          .catch(function (error) {
            console.log(error);
          });
    }, [currentPage]);

    const handleStateIdOnChange = (e) => {

        setStateId(e.target.value);

        setSearchForm({
            ...searchForm,
            [e.target.name]: e.target.value
        });
    }

    const paginationOnChangeHandler = (e, action='') => {
        switch (action) {
            case 'next':
                setCurrentPage(currentPage+1);
                break;
            case 'prev':
                setCurrentPage(currentPage-1);
                break;
            default:
                setCurrentPage(1);
                break;
        }
    }

    const handleOnChange = (e) => {
        setSearchForm({
            ...searchForm,
            [e.target.name]: e.target.value
        });
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        await axios.get(`http://localhost:8000/api/help/requests/list?state_id=${searchForm.state_id}&township=${searchForm.township_id}&page=${currentPage}`)
            .then(function (response) {
                console.log(response.data)
                setHelpRequest(response.data)
                setCurrentPage(response.data.meta.current_page)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

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
                                <Form className="mb-3" onSubmit={e => handleOnSubmit(e)}>

                                    <FormGroup as={Row}>
                                        <Form.Label column sm="2" className="px-1"> အမျိုးအစား - </Form.Label>
                                        <Col sm="3">
                                            <Form.Select value={stateId} name="state_id" aria-label="Default select example" onChange={e => handleStateIdOnChange(e)}>
                                                <option defaultValue={stateId} >ရွေးပါ</option>
                                                {states.data.map(state => (
                                                    <option key={state.id} value={state.id}>{state.name}</option>
                                                ))}
                                            </Form.Select>
                                        </Col>

                                        <Form.Label column sm="2"> မြို့နယ် - </Form.Label>
                                        <Col sm="3">
                                            <Form.Select value={searchForm.township_id} name="township_id" aria-label="Default select example" className="township" onChange={e => handleOnChange(e)}>
                                                {/* <option defaultValue={volunteerForm.township_id}>ရွေးပါ</option> */}
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

                                {Object.keys(helpRequests).length !== 0 ? helpRequests.data.map(help => (
                                    <HelpRequestCard help={help} key={help.id}/>
                                )) : ''}

                                
                                <div className="d-flex w-100 flex-row-reverse px-2">

                                <Pagination>

                                    <Pagination.Item onClick={(e => paginationOnChangeHandler(e, 'prev'))}>
                                        <FontAwesomeIcon icon={ faChevronLeft }/> Prev
                                    </Pagination.Item>

                                    <Pagination.Item onClick={(e => paginationOnChangeHandler(e, 'next'))}>
                                        Next <FontAwesomeIcon icon={ faChevronRight }/>
                                    </Pagination.Item>

                                </Pagination>

                                </div>

                                <Footer/>

                            </Card>
                        </Col>
                </Row>
            </Container>
        </>
    )
}

export default HelpRequestList;