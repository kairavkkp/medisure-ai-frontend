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
// nodejs library that concatenates classes
import classNames from "classnames"
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2"

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
  FormGroup,
  Form
} from "reactstrap"

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js"

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
            <Col lg="6">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Input</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-double-right text-success" /> 
                    Sample Title Input
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <Input type="textarea" name="text" id="inputText" />
                    </FormGroup>
                    <Button className="btn btn-success">Submit</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Output</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-double-right text-primary" />{" "}
                    Sample Title Output
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="border border-primary rounded p-3 text-light">
                    Lorem ipsum dolor sit amet
                  </div>
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
