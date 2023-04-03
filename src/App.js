import './App.css';
import image1 from './images/dalle-e/DALL-E_Img1.png'
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {Card, Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import LoremIpsum from "react-lorem-ipsum";
import Typist from "react-typist-component";

function App() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <div style={{backgroundColor: "lightgoldenrodyellow"}}>
            <Container>
                <div className="vh-100 d-flex justify-content-center align-items-center">
                    <h1 style={{fontSize:'500%', fontStyle:'italic'}}>
                        <Typist typingDelay={100} cursor={<span className='cursor'>|</span>}>
                            Banana shoes are simple, boring and lame.
                            <Typist.Delay ms={1000}/>
                            <Typist.Backspace count={24}/>
                            <Typist.Delay ms={1000}/>
                            <p style={{color:'red'}}>UNSURPASSABLE, STYLISH AND SIMPLY THE BEST!!!</p>
                        </Typist>
                    </h1>
                </div>

                <div className="text-center vh-100">
                    <h2 className="fw-normal display-2">
                        Banana shoe 01
                    </h2>
                    <br/>
                    <div className="text-center align-middle">

                        <Row>
                            <Col style={{width: '200px'}}>
                                <div data-aos="fade-up">
                                    <img src={image1} alt={'shoe number one'} style={{height: '200px'}}/>
                                </div>
                            </Col>
                            <Col>
                                <p data-aos="fade-down" className="lead">
                                    <LoremIpsum>
                                    </LoremIpsum>
                                </p>
                            </Col>
                        </Row>
                    </div>

                </div>
            </Container>
        </div>

    )
        ;
}

export default App;
