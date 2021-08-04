import React, {useState, useEffect} from 'react';
import {Button, Container, Row, Col, Card, Form} from 'react-bootstrap';
import axios from 'axios';
import {
    Link
  } from "react-router-dom";
import ProgressBar from '../ProgressBar';
import Loader from '../Loader';

const MainCard = () => {

    const [loading, setLoading] = useState(true);
    const [counts, setCount] = useState({});

    useEffect(async () => {

        await axios.get('http://localhost:8000/api/volunteer-and-help-request/counts')
            .then(function (response) {
                setCount(response.data.data);
                setLoading(false);
            })
            .catch(function (error) {
                setLoading(false);
                console.log(error);
            });

    }, []);

    return (
        <>
            {loading === true ? <Loader/> : ''}
            { Object.keys(counts).length !== 0 ? 
            <Row style={{textAlign: "left"}} className="text-left px-5">
                <Col lg={12} md={12} sm={12} className="mb-3">
                    အကူအညီတောင်းခံသူ အရေအတွက် - <strong>({counts.help_request_count}) ဦး</strong>
                </Col>

                <Col lg={12} md={12} sm={12}>
                    အကူအညီပေးလိုသူ အရေအတွက် - <strong>({counts.volunteer_count}) ဦး</strong>
                </Col>
            </Row>
            : '' }

            <Row className="mt-3 mb-3">
                <Col>
                    <Link to="/help/request" className="btn btn-info">အကူအညီတောင်းမယ်</Link>
                </Col>
                <Col>
                    <Link to="/help/lists" className="btn btn-success">ကူညီပေးမယ်</Link>
                </Col>
            </Row>

            <hr/>
        </>
    );
}

export default MainCard;