import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/layout.css'

const IndexPage = () => (
  <Layout>
    <Container fluid>
      <Row>
        <Col>
          <h1 className={'display-2 text-center'}>Brent J. Anderson</h1>
          <p className="lead text-center">
            <span role="img" aria-label="Waving hand">
              👋
            </span>{' '}
            I'm an entrepreneur and software engineer. I work with startups and
            innovative companies to build great products that delight users.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="home-icons">
            <ul>
              <li>
                <a href="https://github.com/brentjanderson">
                  <FontAwesomeIcon
                    style={{ width: '120px', height: '120px' }}
                    icon="code-branch"
                  />
                  Github
                </a>
              </li>
              <li>
                <a href="http://buttondown.email/bja">
                  <FontAwesomeIcon
                    style={{ width: '120px', height: '120px' }}
                    icon="envelope-open"
                  />
                  Newsletter
                </a>
              </li>
              <li>
                <a href="/blog">
                  <FontAwesomeIcon
                    style={{ width: '120px', height: '120px' }}
                    icon="book-reader"
                  />
                  Blog
                </a>
              </li>
              <li>
                <a href="https://github.com/brentjanderson/ama">
                  <FontAwesomeIcon
                    style={{ width: '120px', height: '120px' }}
                    icon="hand-paper"
                  />
                  AMA
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
