import {Button, Container, Row, Col, Card, Form, FormGrou, Badge} from 'react-bootstrap';

const HelpRequestCard = (props) => {
    return (
        <>
            <Card className="mb-3 shadow">
                <Card.Body>
                    <div className="d-flex w-100 justify-content-between">
                            <h6 className="mb-1">{props.help.township}</h6>
                            <Badge className="mb-3" bg="success">ID : {props.help.uuid}</Badge> 
							<small>{props.help.created_date}</small>
                    </div>
                    <p className="mb-1">အကြောင်းအရာ - {props.help.activities}</p>
                    <p>နေရပ်လိပ်စာ - {props.help.address}</p>
					<small>ဆက်သွယ်ရန် - {props.help.name} ( {props.help.phone} )</small>
                </Card.Body>
            </Card>
        </>
    )
}

export default HelpRequestCard;