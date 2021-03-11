/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
    Alert,
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Col,
    Row,
} from "reactstrap";
import CardText from "reactstrap/lib/CardText";
import Container from "reactstrap/lib/Container";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bigChartData: "data1",
        };
    }
    setBgChartData = (name) => {
        this.setState({
            bigChartData: name,
        });
    };
    render() {
        return (
            <>
                <div className="content">
                    <div className="hero-image">
                        <div className="hero-text">
                            <h1>Medisure.ai</h1>
                            <p>The GPS of medical insurance.</p>
                            <Link
                                to="/summary"
                                className="btn btn-success mx-2"
                            >
                                Get Started
                            </Link>
                            <Link to="/contactUs" className="btn btn-info mx-2">
                                Contact
                            </Link>
                        </div>
                    </div>

                    <Row lg="6" className="justify-content-lg-center">
                        <Col lg="12">
                            <Card>
                                <CardHeader className="text-center">
                                    <CardTitle tag="h3">About Us</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <CardText
                                        tag="h4"
                                        className="text-center  about-text"
                                    >
                                        Medisure.ai aims to provide a suite of
                                        machine learning powered services that
                                        enable patients to demystify and better
                                        understand their medical insurance.
                                    </CardText>
                                    <Alert color="info">
                                        Our current MVP is a suite of
                                        deep-learning powered NLP tools, which
                                        includes:
                                    </Alert>

                                    <Container>
                                        <Row>
                                            <Col className="service-box">
                                                <div className="d-flex justify-content-center">
                                                    <img
                                                        alt="service"
                                                        className="service-icon"
                                                        src="/icons/assist.svg"
                                                    />
                                                </div>
                                                <p className="text-center service-text">
                                                    Personalized Medical
                                                    Insurance Plan Assistant
                                                </p>
                                            </Col>
                                            <Col className="service-box">
                                                <div className="d-flex justify-content-center">
                                                    <img
                                                        alt="service"
                                                        className="service-icon"
                                                        src="/icons/heart.svg"
                                                    />
                                                </div>
                                                <p className="text-center service-text">
                                                    Insurance Claim Appeal
                                                    Letter Generation
                                                </p>
                                            </Col>
                                            <Col className="service-box">
                                                <div className="d-flex justify-content-center">
                                                    <img
                                                        alt="service"
                                                        className="service-icon"
                                                        src="/icons/chrome.svg"
                                                    />
                                                </div>
                                                <p className="text-center service-text">
                                                    Chrome Extension
                                                </p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </CardBody>
                                <br />
                            </Card>
                            <Card className="mx-2 info-section">
                                <CardHeader>
                                    <CardTitle tag="h3">
                                        Personalized Medical Insurance Plan
                                        Assistant
                                    </CardTitle>
                                </CardHeader>
                                <hr />
                                <CardBody className="">
                                    <ul>
                                        <li style={{ color: "#525f7f" }}>
                                            Upload a Statement of Benefits and
                                            Coverage Document (e.g. Aetna
                                            Bronze, Cigma MD PPO)
                                        </li>
                                        <li style={{ color: "#525f7f" }}>
                                            Google Cloud Document API extracts
                                            text and tables from document
                                        </li>
                                        <li style={{ color: "#525f7f" }}>
                                            We enable users in natural language
                                            and get responses customized for
                                            their insurance policy
                                        </li>
                                    </ul>
                                </CardBody>
                            </Card>
                            <Card className="mx-2 info-section">
                                <CardHeader>
                                    <CardTitle tag="h3">
                                        Insurance Claim Appeal Letter Generation
                                    </CardTitle>
                                </CardHeader>
                                <hr />
                                <CardBody className="">
                                    Medisure.ai asks the user to upload the
                                    denial notice they received from their
                                    insurance provider. Leveraging the Google
                                    Cloud Document API, from the converted text,
                                    we use a combination of tf-idf summarization
                                    and our language model to mine the denial
                                    argument along with details about the
                                    patient, plan and procedure. Using these
                                    fields, we generate a professional,
                                    detailed, human-like claim denial appeal
                                    letter for the patient to use.
                                </CardBody>
                            </Card>
                            <Card className="mx-2 info-section">
                                <CardHeader>
                                    <CardTitle tag="h3">
                                        Chrome Extension
                                    </CardTitle>
                                </CardHeader>
                                <hr />
                                <CardBody className="">
                                    Medical insurance policy documents are often
                                    highly convoluted and full of uncommon legal
                                    vocabulary. Sometimes, you may need to dive
                                    deep into these to gain more information. We
                                    simplify this for you, enabling people
                                    without the domain knowledge or exposure to
                                    understand the clauses and make informed
                                    decisions, or argue their case for an appeal
                                    if they need to.
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default Home;
