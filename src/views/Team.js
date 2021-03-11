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

*/ /*!

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
// reactstrap components
import {
    Card,
    CardDeck,
    CardHeader,
    CardTitle,
    CardBody,
    Col,
    Row,
    ListGroup,
    ListGroupItem,
} from "reactstrap";

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
                    <Row lg="6" className="justify-content-lg-center mt-4">
                        <Col lg="6">
                            <Card className="mx-auto">
                                <CardHeader className="justify-content-center">
                                    <CardTitle tag="h3" className="text-center">
                                        Founding Team
                                    </CardTitle>
                                </CardHeader>

                                <CardBody className="text-center">
                                    <ListGroup>
                                        <ListGroupItem>
                                            Jaidev Shah
                                        </ListGroupItem>
                                        <ListGroupItem>Kevin Chu</ListGroupItem>
                                        <ListGroupItem>
                                            Nikhil Shah
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Kairav Pithadia
                                        </ListGroupItem>
                                    </ListGroup>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card className="mx-auto">
                                <CardHeader className="justify-content-center">
                                    <CardTitle tag="h3" className="text-center">
                                        Engineering Team
                                    </CardTitle>
                                </CardHeader>
                                <hr />
                                <CardBody className="text-center">
                                    <ListGroup>
                                        <ListGroupItem>
                                            Vishvajeet Ramanuj
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Aman Sutariya
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Pinank Doshi
                                        </ListGroupItem>
                                        <ListGroupItem>Sana</ListGroupItem>
                                    </ListGroup>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card className="mx-auto">
                                <CardHeader className="justify-content-center">
                                    <CardTitle tag="h3" className="text-center">
                                        Credits To
                                    </CardTitle>
                                </CardHeader>

                                <CardBody className="text-center">
                                    <ListGroup>
                                        <ListGroupItem>
                                            Abhijit Gupta
                                        </ListGroupItem>
                                        <ListGroupItem>Gram Liu</ListGroupItem>
                                        <ListGroupItem>
                                            Shivay Lamba
                                        </ListGroupItem>
                                    </ListGroup>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card className="mx-auto">
                                <CardHeader className="justify-content-center">
                                    <CardTitle tag="h3" className="text-center">
                                        Medical Insurance Advisor
                                    </CardTitle>
                                </CardHeader>
                                <hr />
                                <CardBody className="text-center">
                                    <ListGroup>
                                        <ListGroupItem>
                                            Anyaa Shah
                                        </ListGroupItem>
                                    </ListGroup>
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
