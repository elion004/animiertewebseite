import './App.css';
import image1 from './images/DALL-E_Img1.png'
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {Card, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import LoremIpsum from "react-lorem-ipsum";

function App() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <Container fluid>
            <div className="App">
                <header className="App-header">
                    <Row className="justify-content-center">
                        <div style={{fontSize: 40}}>
                            <text>BANANA</text>
                            <br/>
                            <text>SHOES</text>
                        </div>
                        <div>
                            <hr
                                style={{
                                    background: 'lime',
                                    color: 'lime',
                                    borderColor: 'lime',
                                    height: '3px',
                                }}
                            />
                        </div>
                    </Row>
                    <Row className="justify-content-center">
                        <div>
                            <Card style={{width: '18rem', border: 'primary'}}>
                                <Card.Img variant="top" src={image1} width={200} height={200}/>
                                <Card.Body>
                                    <Card.Title>Banana shoe 1</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>


                        <div>
                            <text>Banana shoe number 1</text>
                            <hr
                                style={{
                                    background: 'lime',
                                    color: 'lime',
                                    borderColor: 'lime',
                                    height: '3px',
                                }}
                            />
                        </div>
                        <div>
                            <LoremIpsum/>
                        </div>

                        <div data-aos="fade-up">
                            <img width={200} height={200} src={image1} alt={"first banana shoe image"}/>
                        </div>
                    </Row>
                </header>
            </div>
        </Container>
    )
        ;
}

export default App;
