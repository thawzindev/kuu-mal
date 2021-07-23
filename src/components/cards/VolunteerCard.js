import {Button, Container, Row, Col, Card, Form, FormGroup} from 'react-bootstrap';

const VolunteerCard = () => {
    return (
        <>
            <Card className="mb-3 shadow">
                <Card.Body>
                    <div className="d-flex w-100 justify-content-between">
                            <h6 className="mb-1">အင်းစိန်</h6>
							<small>09425025593</small>
                    </div>
                    <p className="mb-1">ကျွန်တော့်ကို စျေးဝယ်ရန်အတွက် အကူအညီတောင်းနိုင်ပါတယ်ခင်ဗျ။</p>
					<small>မောင်မောင်</small>
                </Card.Body>
            </Card>
        </>
    )
}

export default VolunteerCard;