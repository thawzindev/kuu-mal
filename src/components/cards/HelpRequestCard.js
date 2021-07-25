import {Button, Container, Row, Col, Card, Form, FormGroup} from 'react-bootstrap';

const HelpRequestCard = () => {
    return (
        <>
            <Card className="mb-3 shadow">
                <Card.Body>
                    <div className="d-flex w-100 justify-content-between">
                            <h6 className="mb-1">အင်းစိန်</h6>
							<small>3 days ago</small>
                    </div>
                    <p className="mb-1">တအိမ်လုံးနေမကောင်းဖြစ်နေပါသဖြင့် စျေးဝယ်ပေးရန်အကူအညီလိုအပ်ပါသည်။</p>
					<small>အန်တီမြင့် ( 09425025593 )</small>
                </Card.Body>
            </Card>
        </>
    )
}

export default HelpRequestCard;