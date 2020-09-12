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
  Button,
  Card,
  CardBody,
  CardDeck,
  CardHeader,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Input,
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
          <Row lg="12">
            <Col lg="12">
              <CardDeck lg="6">
                <Card>
                  <CardHeader>
                    <h5 className="card-category">Input</h5>
                    <CardTitle tag="h3">
                      <i className="tim-icons icon-double-right text-success" />
                      Source Text
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <FormGroup>
                        <Input
                          type="textarea"
                          name="text"
                          id="inputText"
                          size="50vh"
                          className="border border-dark"
                        />
                        <Button className="btn btn-success">Generate</Button>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
                <Card>
                  <CardHeader>
                    <h5 className="card-category">Output</h5>
                    <CardTitle tag="h3">
                      <i className="tim-icons icon-double-right text-primary" />{" "}
                      Insurance Claim / Appeal Letter
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <div className="border border-primary rounded p-3 text-light">
                      Lorem ipsum dolor sit amet
                    </div>
                  </CardBody>
                </Card>
              </CardDeck>
            </Col>
          </Row>
        </div>
      </>
    )
  }
}

export default Home
