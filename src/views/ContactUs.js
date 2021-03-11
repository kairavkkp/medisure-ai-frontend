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
            <Col lg="12">
              <Card className="mx-auto">
                <CardHeader>
                  <CardTitle tag="h3" className="text-left">
                    Contact Info
                  </CardTitle>
                </CardHeader>
                <hr />
                <CardBody className="text-left">
                  <table className="table">
                    <tbody>
                    <tr>
                      <th>Support Email</th>
                      <td>info.medisureai@gmail.com</td>
                    </tr>
                    <tr>
                      <th>US</th>
                      <td>+1 (603) 921-3957</td>
                    </tr><tr>
                      <th>India</th>
                      <td>+91 (999) 88 22287</td>
                    </tr>
                    </tbody>
                  </table>
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
