import {Button, Container, Row, Col, Card, Form} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

const MainCard = () => {
    return (
        <div>
            <Row style={{textAlign: "left"}} className="text-left px-5">
                <Col lg={12} md={12} sm={12} className="mb-3">
                    အကူအညီတောင်းခံသူ အရေအတွက် - <strong>(၃) ဦး</strong>
                </Col>

                <Col lg={12} md={12} sm={12}>
                    အကူအညီတောင်းခံသူ အရေအတွက် - <strong>(၃) ဦး</strong>
                </Col>
            </Row>

            <Row className="mt-3 mb-3">
                <Col>
                    <Link to="/help/request" className="btn btn-info">အကူအညီတောင်းမယ်</Link>
                </Col>
                <Col>
                    <Link to="/help/lists" className="btn btn-success">ကူညီပေးမယ်</Link>
                </Col>
            </Row>

            <hr/>
        </div>
    );
}

export default MainCard;