import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'

const IndexPage = () => (
  <Layout>
    <Container fluid>
      <Row>
        <Col>
          <h1>Contact Page</h1>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
