import {Button, Container, Row, Col, Card, Form, FormGroup} from 'react-bootstrap';

const VolunteerCard = (props) => {
    return (
        <>
            <Card className="mb-3 shadow">
                <Card.Body>
                    <div className="d-flex w-100 justify-content-between">
                            <h6 className="mb-1">{props.volunteer.township}</h6>
							<small>
                                <a href={`tel:${props.volunteer.phone}}`}>
                                    {props.volunteer.phone}
                                </a>
                            </small>
                    </div>
                    <p className="mb-1">{props.volunteer.activities}</p>
					<small className="font-weight-bold">{props.volunteer.name}</small>
                </Card.Body>
            </Card>
        </>
    )
}

export default VolunteerCard;