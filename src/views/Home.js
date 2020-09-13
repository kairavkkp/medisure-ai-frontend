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
          <Row lg="6" className="justify-content-lg-center">
            <Col lg="5">
              <Card className="mx-auto">
                <CardHeader>
                  <CardTitle tag="h3">MedInsure.ai</CardTitle>
                </CardHeader>
                <hr />
                <CardBody>
                  MedInsure provides a suite of NLP-powered tools to help
                  demystify medical insurance and help word legal claim appeals.
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row lg="6" className="justify-content-lg-center">
            <Col lg="12">
              <CardDeck lg="12">
                <Card className="mx-2">
                  <CardHeader>
                    <CardTitle tag="h3">
                      Personalized Medical Insurance Plan Assistant
                    </CardTitle>
                  </CardHeader>
                  <hr />
                  <CardBody>
                    <ul>
                      <li>
                        Upload a plan document (e.g. Aetna Bronze, Cigma MD PPO)
                      </li>
                      <li>Google Cloud Vision API extracts tables</li>
                      <li>
                        Google DialogFlow enables users to query in natural
                        language, GPT-3 extracts response
                      </li>
                    </ul>
                  </CardBody>
                </Card>
                <Card className="mx-2">
                  <CardHeader>
                    <CardTitle tag="h3">
                      Insurance Claim Appeal Letter Generation
                    </CardTitle>
                  </CardHeader>
                  <hr />
                  <CardBody>
                    Enter your treatment details and reason of claim denial.
                    Based on your condition, we generate a customized insurance
                    claim denial appeal letter with correct legal language
                  </CardBody>
                </Card>
                <Card className="mx-2">
                  <CardHeader>
                    <CardTitle tag="h3" style={{ marginBottom: "1.9em" }}>
                      Chrome Extension
                    </CardTitle>
                  </CardHeader>
                  <hr />
                  <CardBody>
                    Medical insurance policy documents are often highly
                    convoluted and full of uncommon legal vocabulary. Sometimes,
                    you may need to dive deep into these to gain more
                    information. We simplify this for you, enabling people
                    without the domain knowledge or exposure to understand the
                    clauses and make informed decisions, or argue their case for
                    an appeal if they need to.
                  </CardBody>
                </Card>
              </CardDeck>
            </Col>
          </Row>
          <Row lg="6" className="justify-content-lg-center mt-3">
            <Col lg="5">
              <Card className="mx-auto">
                <CardHeader>
                  <CardTitle tag="h3">MedInsure.ai</CardTitle>
                </CardHeader>
                <hr />
                <CardBody>
                  MedInsure provides a suite of NLP-powered tools to help
                  demystify medical insurance and help word legal claim appeals.
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
