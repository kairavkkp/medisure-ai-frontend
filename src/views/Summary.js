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
  Form,
  FormText,
  CardDeck,
} from "reactstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      srcText: "",
    }
    this.onChange.bind(this)
    this.onFileUpload.bind(this)
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  onFileUpload = e => {
    this.setState({
      srcFile: e.target.files[0]
    })
  }
  inputSubmit(e) {
    e.preventDefault()
    console.log(this.state)
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
                    <Form onSubmit={this.inputSubmit.bind(this)}>
                      <FormGroup>
                        <Input
                          type="textarea"
                          name="srcText"
                          id="inputText"
                          size="50vh"
                          className="border border-dark"
                          onChange={this.onChange}
                        />
                        <Input
                          type="file"
                          name="srcFile"
                          id="srcFile"
                          className="mt-2"
                          onChange={this.onFileUpload}
                        />
                        <Button type="submit" className="btn btn-success">
                          Submit
                        </Button>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
                <Card>
                  <CardHeader>
                    <h5 className="card-category">Output</h5>
                    <CardTitle tag="h3">
                      <i className="tim-icons icon-double-right text-primary" />{" "}
                      GPT-3 Summary
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
          <Row lg="12" className="mt-3">
            <Col lg="12">
              <CardDeck lg="6">
                <Card>
                  <CardHeader>
                    <h5 className="card-category">Input</h5>
                    <CardTitle tag="h3">
                      <i className="tim-icons icon-double-right text-success" />
                      Ask GPT-3
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <div className="border border-dark rounded p-3 text-light mb-2">
                      Previous input
                    </div>
                    <Form>
                      <FormGroup className="has-feedback">
                        <Input
                          type="text"
                          name="text"
                          id="inputText"
                          placeholder="Ask GPT-3 anything!"
                        />
                        <FontAwesomeIcon
                          icon={faPaperPlane}
                          className="form-control-feedback"
                        />
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
                <Card>
                  <CardHeader>
                    <h5 className="card-category">Output</h5>
                    <CardTitle tag="h3">
                      <i className="tim-icons icon-double-right text-primary" />{" "}
                      GPT-3 Answers
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
