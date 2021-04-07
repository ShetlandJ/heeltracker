import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PromotionCard(props) {
    const wrestlerUrl = `/${props.promotion.alias.toLowerCase()}/wrestlers`

    return (
        <Container className="promotion-card">
            <Row>
                <Col lg="2" className="d-flex align-self-center">
                    <img
                        src={`${process.env.PUBLIC_URL}${props.promotion.image_url}`}
                        alt="Logo"
                        class="promotion-logo img-fluid align-self-center"
                    />
                </Col>

                <Col lg="7">
                    <h3>
                        {props.promotion.alias}
                    </h3>

                    <div>{props.promotion.description}</div>
                </Col>

                <Col lg="3" className="d-flex align-self-center justify-content-center">
                    <Button className="my-2" variant="dark">
                        <Link to={wrestlerUrl} className="white-text">
                            View wrestlers
                        </Link>
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default PromotionCard;