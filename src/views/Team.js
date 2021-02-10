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
import React from "react"
// reactstrap components
import {
  Card,
  CardDeck,
  CardHeader,
  CardTitle,
  CardBody,
  Col,
  Row,
} from "reactstrap"

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bigChartData: "data1",
    }
  }
  setBgChartData = (name) => {
    this.setState({
      bigChartData: name,
    })
  }
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
                <hr />
                <CardBody className="text-center">
                  <strong>Jaidev Shah</strong>
                  <br />
                  <strong>Kevin Chu</strong>
                  <br />
                  <strong>Nikhil Shah</strong>
                  <br />
                  <strong>Kairav Pithadia</strong>
                  <br />
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
                  <strong>Vishvajeet Ramanuj</strong>
                  <br />
                  <strong>Aman Sutariya</strong>
                  <br />
                  <strong>Pinank Doshi</strong>
                  <br />
                  <strong>Sana</strong>
                  <br />
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
                <hr />
                <CardBody className="text-center">
                  <strong>Abhijit Gupta</strong>
                  <br />
                  <strong>Gram Liu</strong>
                  <br />
                  <strong>Jaidev Shah</strong>
                  <br />
                  <strong>Shivay Lamba</strong>
                  <br />
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
                  <strong>Anyaa Shah</strong>
                  <br />
                  <br />
                  <br />
                  <br />
                </CardBody>
              </Card>
            </Col>
          </Row>

        </div>
      </>
    )
  }
}

export default Home
