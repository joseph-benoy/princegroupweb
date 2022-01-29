import { Col, Container, Row,Card,Button } from "react-bootstrap";
import Header from "../../components/Header/Header";
import "./product.css"


const Product = () => {
    return ( 
        <>
        <header>
            <Header/>
        </header>
        <main>
            <Container fluid>
                <Row>
                    <Col>
                        <h3>Dogs</h3>
                    </Col>
                </Row>
                <Row className="card-container">
                <Card style={{ width: '20rem',marginLeft:"20rem !important" }} id="first">
  <Card.Img variant="top" src="https://tailybuddy.com/products/8960/VEAL_SHANKS.jpg" />
  <Card.Body>
    <Card.Title>ZEAL Veal Shanks (Cow) Roasted</Card.Title>
    <Card.Text>
    New Zealand Calf Calves are roasted calf calves to preserve their calcium. and high protein to help build strong bones Suitable for dogs aged 9 months weighing 1.5 kg or more.

    </Card.Text>
    <Button variant="primary">Know more</Button>
  </Card.Body>
</Card>
<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="https://tailybuddy.com/products/8960/VEAL_SHANKS.jpg" />
  <Card.Body>
    <Card.Title>ZEAL Veal Shanks (Cow) Roasted</Card.Title>
    <Card.Text>
    New Zealand Calf Calves are roasted calf calves to preserve their calcium. and high protein to help build strong bones Suitable for dogs aged 9 months weighing 1.5 kg or more.

    </Card.Text>
    <Button variant="primary">Know more</Button>
  </Card.Body>
</Card>
<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="https://tailybuddy.com/products/8960/VEAL_SHANKS.jpg" />
  <Card.Body>
    <Card.Title>ZEAL Veal Shanks (Cow) Roasted</Card.Title>
    <Card.Text>
    New Zealand Calf Calves are roasted calf calves to preserve their calcium. and high protein to help build strong bones Suitable for dogs aged 9 months weighing 1.5 kg or more.

    </Card.Text>
    <Button variant="primary">Know more</Button>
  </Card.Body>
</Card>
<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="https://tailybuddy.com/products/8960/VEAL_SHANKS.jpg" />
  <Card.Body>
    <Card.Title>ZEAL Veal Shanks (Cow) Roasted</Card.Title>
    <Card.Text>
    New Zealand Calf Calves are roasted calf calves to preserve their calcium. and high protein to help build strong bones Suitable for dogs aged 9 months weighing 1.5 kg or more.

    </Card.Text>
    <Button variant="primary">Know more</Button>
  </Card.Body>
</Card>

                </Row>
            </Container>
        </main>
        </>
     );
}
 
export default Product;