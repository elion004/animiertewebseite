import './App.css';
import image1 from './images/dalle-e/DALL-E_Img1.png'
import gif1 from './images/output-onlinegiftools.gif'
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
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
                    <h1 style={{fontSize:'500%', fontStyle:'italic'}} className="text-center">
                        <Typist typingDelay={100} cursor={<span className='cursor'>|</span>}>
                            Banana shoes are simple, boring and lame.
                            <Typist.Delay ms={1000}/>
                            <Typist.Backspace count={24}/>
                            <Typist.Delay ms={1000}/>
                            <p style={{color: 'red'}}>UNSURPASSABLE, STYLISH AND SIMPLY THE BEST!!!</p>
                        </Typist>
                    </h1>
                </div>

                <div className="text-center vh-100">
                    <h2 data-aos='fade-up' className="fw-normal display-2">
                        BananaMax 97
                    </h2>
                    <br/>
                    <div className="text-center align-middle">

                        <Row>
                            <Col>
                                <div data-aos="fade-up">
                                    <img src={image1} alt={'shoe number one'} style={{height: '300px', borderRadius:'10px'}}/>
                                </div>
                            </Col>
                            <Col>
                                <p data-aos="fade-up" className="lead">
                                    The BananaMax 97 shoes are a unique and eye-catching footwear option for those who
                                    want to make a statement. These shoes feature a bright yellow banana design on the
                                    exterior, complete with black spots to mimic the fruit's natural appearance. In
                                    addition, the shoes are infused with a sweet banana scent that will leave you
                                    feeling energized and refreshed all day long. The BananaMax 97 shoes are perfect for
                                    those who want to stand out in a crowd and add a touch of fun to their everyday
                                    look.
                                </p>
                            </Col>
                        </Row>
                    </div>

                </div>
            </Container>
            <footer className={'fixed-bottom'}>
                <img src={gif1} alt="a dancing banana" style={{maxWidth: '125px', maxHeight: '125px'}}/>
            </footer>
        </div>
    );
}

export default App;
