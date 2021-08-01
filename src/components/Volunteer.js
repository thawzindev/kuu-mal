import { useEffect, useState } from 'react';
import Header from './includes/Header';
import Footer from './includes/Footer';
import HelpRequestCard from './cards/HelpRequestCard'
import {Button, Container, Row, Col, Card, Form, FormGroup, Pagination} from 'react-bootstrap';
import VolunteerCard from './cards/VolunteerCard';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ProgressBar from './ProgressBar';
import Loader from './Loader';

const styles = {
    pagination : {
        cursor: "pointer"  
    },
    disablePagination : {
        onPointerEnter: "none",
        color: "red"
    }
}

const Volunteer = () => {

    const states = JSON.parse(localStorage.getItem('states'))

    const search = () => {
        return {
            'state_id' : '',
            'township_id' : '',
        }
    }
    
    const [loading, setLoading] = useState(true);
    const [searchForm, setSearchForm] = useState(search());
    const [stateId, setStateId] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [volunteers, setVolunteer] = useState({});

    useEffect(async () => {

        const townshipElement = document.querySelector('.township');
        townshipElement.length = 0;

        if (stateId !== '') {
            setLoading(true);
            await axios.get(`http://localhost:8000/api/townships?state_id=${stateId}`)
            .then(function (response) {
                setLoading(false);
                townshipElement.add(new Option('All', ''))
                response.data.data.map(township => (
                    townshipElement.add(new Option(township.name, township.id))
                ))
            })
            .catch(function (error) {
                console.log(error);
            });
        }

    }, [stateId]);

    useEffect(async () => {
        await axios.get(`http://localhost:8000/api/volunteers?page=${currentPage}`)
          .then(function (response) {
              setLoading(false)
              setVolunteer(response)
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
        setLoading(true);

        const url = `http://localhost:8000/api/volunteers?state_id=${searchForm.state_id}&township=${searchForm.township_id}&page=${currentPage}`;

        await axios.get(url)
            .then(function (response) {
                setLoading(false)
                setVolunteer(response.data)
                setCurrentPage(response.data.meta.current_page)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    console.log(volunteers.data)

    return (
        <>
            <ProgressBar isAnimating={loading}/>
            <Container>
                <Row className="justify-content-center">
                        <Col md={10} lg={8} sm={12} className="text-center">
                            <Card className="shadow p-3 mb-5 rounded">

                                <Header/>

                                <h4 className="text-left px-1 mt-2" style={{textAlign: 'left'}}><strong>Volunteer အရေအတွက် - (၁၆) ဦး</strong></h4>

                                <hr/>


                                {/* start of form */}
                                <Form className="mb-3" onSubmit={e => handleOnSubmit(e)}>

                                    <FormGroup as={Row}>
                                        {/* <Form.Label column sm="1" className="px-1"> အမျိုးအစား - </Form.Label>
                                        <Col sm="2">
                                            <Form.Select aria-label="Default select example" defaultValue="1">
                                                <option value="1">Latest</option>
                                                <option value="2">Newest</option>
                                            </Form.Select>
                                        </Col> */} 

                                        <Form.Label column sm="2"> ပြည်နယ်/တိုင်း - </Form.Label>
                                        <Col sm="2">
                                            <Form.Select value={stateId} name="state_id" aria-label="Default select example" onChange={e => handleStateIdOnChange(e)}>
                                                <option value=''>All</option>
                                                {states.data.map(state => (
                                                    <option key={state.id} value={state.id}>{state.name}</option>
                                                ))}
                                            </Form.Select>
                                        </Col>

                                        <Form.Label column sm="2"> မြို့နယ် - </Form.Label>
                                        <Col sm="2">
                                            <Form.Select value={searchForm.township_id} name="township_id" aria-label="Default select example" className="township" onChange={e => handleOnChange(e)}>
                                                {/* <option defaultValue={volunteerForm.township_id}>ရွေးပါ</option> */}
                                            </Form.Select>
                                        </Col>

                                        <Col sm="3">
                                        <Button variant='primary' type="submit">
                                            ရှာမယ်။ 
                                        </Button>
                                        </Col>
                                        
                                    </FormGroup>

                                </Form> 
                                {/* end of form */}

                                {loading === true ? <Loader/> : ''}

                                {Object.keys(volunteers).length !== 0 ? volunteers.data.data.map(volunteer => (
                                    <VolunteerCard volunteer={volunteer} key={volunteer.id}/>
                                )) : ''}

                                    <div className="d-flex w-100 flex-row-reverse px-2">

                                    <Pagination>

                                    { Object.keys(volunteers).length !== 0 ? 
                                    <>
                                        <Pagination.Item className={currentPage === 1 ? 'disabled' : ''} onClick={(e => paginationOnChangeHandler(e, 'prev'))}>
                                            <FontAwesomeIcon icon={ faChevronLeft }/> Prev
                                        </Pagination.Item>

                                        <Pagination.Item className={currentPage === volunteers.data.meta.last_page ? 'disabled' : ''} onClick={(e => paginationOnChangeHandler(e, 'next'))}>
                                            Next <FontAwesomeIcon icon={ faChevronRight }/>
                                        </Pagination.Item>
                                        
                                    </> : '' }

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

export default Volunteer;