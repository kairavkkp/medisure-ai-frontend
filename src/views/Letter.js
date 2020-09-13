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
  Label,
  Spinner,
} from "reactstrap";
import axios from "axios";
import FormData from "form-data";

// const URL = "http://localhost:5000/denial";
const URL = "https://backend-nlstr4buia-uc.a.run.app/denial";

class Letter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
    this.onFileUpload.bind(this);
  }
  onFileUpload = (e) => {
    const file = e.target.files[0];
    this.inputSubmit(file);
  };
  async inputSubmit(file) {
    this.setState({
      loading: true,
    });
    // Send file
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post(URL, formData);
      const data = response.data;
      console.log(data);
      this.setState({
        loading: false,
      });
      // this.setState({
      //   responseHash: hash,
      //   loading: false,
      // })
      // console.log(hash)
      // this.getSummary(hash)
    } else {
      this.setState({
        loading: false,
      });
    }
    console.log("Done");
  }
  render() {
    const labelSize = 4;
    const inputSize = 8;
    return (
      <>
        <div className='content'>
          <Row lg='12'>
            <Col lg='12'>
              <CardDeck lg='6'>
                <Card>
                  <CardHeader>
                    <CardTitle tag='h3'>
                      <i className='tim-icons icon-double-right text-success' />
                      Information
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Form onSubmit={this.inputSubmit.bind(this)}>
                      <FormGroup row>
                        <Label for='input-name' tag='h4' lg={labelSize}>
                          Upload denial letter
                        </Label>
                        <Col lg={6}>
                          <Input
                            type='file'
                            name='srcFile'
                            id='srcFile'
                            className='mt-2'
                            onChange={this.onFileUpload}
                          />
                        </Col>
                        <Col lg={1}>
                          {this.state.loading ? (
                            <Spinner color='light' className='mt-2' />
                          ) : null}
                        </Col>
                      </FormGroup>
                    </Form>
                    <Form>
                      <FormGroup row>
                        <Label for='input-name' tag='h4' lg={labelSize}>
                          Patient Name
                        </Label>
                        <Col lg={inputSize}>
                          <Input
                            type='text'
                            name='name'
                            id='input-name'
                            placeholder='Alice Smith'
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for='input-age' tag='h4' lg={labelSize}>
                          Patient Age
                        </Label>
                        <Col lg={inputSize}>
                          <Input
                            type='text'
                            name='age'
                            id='input-age'
                            placeholder='34'
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label
                          for='input-date-diagnosis'
                          tag='h4'
                          lg={labelSize}
                        >
                          Date of Diagnosis
                        </Label>
                        <Col lg={inputSize}>
                          <Input
                            type='date'
                            name='dateDiagnosis'
                            id='input-date-diagnosis'
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for='input-treatment' tag='h4' lg={labelSize}>
                          Treatment
                        </Label>
                        <Col lg={inputSize}>
                          <Input
                            type='text'
                            name='treatment'
                            id='input-treatment'
                            placeholder='Complete Decongestive Therapy CDT (Therapy), Specialized Liposuction (Surgery)'
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label
                          for='input-treatment-start'
                          tag='h4'
                          lg={labelSize}
                        >
                          Start of Treatment
                        </Label>
                        <Col lg={inputSize}>
                          <Input
                            type='date'
                            name='treatmentStart'
                            id='input-treatment-start'
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for='input-surgery-date' tag='h4' lg={labelSize}>
                          Surgery Date
                        </Label>
                        <Col lg={inputSize}>
                          <Input
                            type='date'
                            name='surgeryDate'
                            id='input-surgery-date'
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for='input-condition' tag='h4' lg={labelSize}>
                          Condition
                        </Label>
                        <Col lg={inputSize}>
                          <Input
                            type='text'
                            name='condition'
                            id='input-condition'
                            placeholder='Lipedema'
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label
                          for='input-insurance-plan'
                          tag='h4'
                          lg={labelSize}
                        >
                          Insurance Plan
                        </Label>
                        <Col lg={inputSize}>
                          <Input
                            type='text'
                            name='insurancePlan'
                            id='input-insurance-plan'
                            placeholder='Aetna MD Bronze PPO'
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label
                          for='input-treatment-hospital'
                          tag='h4'
                          lg={labelSize}
                        >
                          Treatment Hospital
                        </Label>
                        <Col lg={inputSize}>
                          <Input
                            type='text'
                            name='treatmentHospital'
                            id='input-treatment-hospital'
                            placeholder='San Francisco General Hospital'
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label
                          for='input-treatment-doctor'
                          tag='h4'
                          lg={labelSize}
                        >
                          Treatment Doctor
                        </Label>
                        <Col lg={inputSize}>
                          <Input
                            type='text'
                            name='treatmentDoctor'
                            id='input-treatment-doctor'
                            placeholder='Dr. John Smith'
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for='input-in-network' tag='h4' lg={labelSize}>
                          In network treatment provider?
                        </Label>
                        <Col lg={inputSize} className='my-3'>
                          <Input
                            type='checkbox'
                            name='inNetwork'
                            id='input-in-network'
                            className='ml-2'
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for='input-state' tag='h4' lg={labelSize}>
                          State
                        </Label>
                        <Col lg={inputSize}>
                          <Input
                            type='text'
                            name='state'
                            id='input-state'
                            placeholder='CA'
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label
                          for='input-life-threatening'
                          tag='h4'
                          lg={labelSize}
                        >
                          Life-threatening Condition?
                        </Label>
                        <Col lg={inputSize} className='my-3'>
                          <Input
                            type='checkbox'
                            name='lifeThreatening'
                            id='input-life-threatening'
                            className='ml-2'
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label
                          for='input-reason-denial'
                          tag='h4'
                          lg={labelSize}
                        >
                          Reason for Denial
                        </Label>
                        <Col lg={inputSize}>
                          <Input
                            type='text'
                            name='reasonDenial'
                            id='input-reason-denial'
                            placeholder='Considered cosmetic treatment'
                          />
                        </Col>
                      </FormGroup>
                      <Button className='btn btn-success'>Generate</Button>
                    </Form>
                  </CardBody>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle tag='h3'>
                      <i className='tim-icons icon-double-right text-primary' />{" "}
                      Denial Appeal Letter
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <div className='border border-primary rounded p-3 text-light'>
                      Lorem ipsum dolor sit amet
                    </div>
                  </CardBody>
                </Card>
              </CardDeck>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Letter;
