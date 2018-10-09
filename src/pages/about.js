import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import Layout from '../components/layout'
import brent from '../images/brent.png'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/layout.css'

const IndexPage = () => (
  <Layout>
    <Container>
      <Row>
        <Col md="3">
          <img style={{ width: '100%' }} src={brent} alt="Brent Anderson" />
        </Col>
        <Col xs="9">
          <p className="lead text-center">
            <span role="img" aria-label="Waving hand">
              👋
            </span>{' '}
            I'm an entrepreneur and software engineer. I work with startups and
            innovative companies to build great products that delight users.
          </p>

          <p>
            As an entrepreneur, I use Lean Startup techniques to quickly get to
            the root of the job to be done so that we can get value to customers
            as quickly as possible.
          </p>

          <p>
            As an engineer, I specialize in full-stack web and mobile
            applications engineering using React & React Native, iOS/Swift,
            Elixir, and NodeJS. I also help teams build the best process for
            rapid innovation across the stack.
          </p>

          <p>My playbook is simple:</p>

          <ol>
            <li>Start small and iterate</li>
            <li>Focus on people and their needs</li>
            <li>Help others become more excellent</li>
          </ol>
          <p>
            I have worked directly with or contracted for tiny, early stage
            startups, fortune 100 companies, and global brands.
          </p>

          <p>
            By day I'm a full-stack native iOS engineer at{' '}
            <a href="https://yours.co">Yours.co</a>. By night, I'm a dad,
            husband, <a href="https://lds.org">Latter-day Saint</a>, and
            co-founder at <a href="https://coriaria.com">Coriaria</a> where we
            test products and ideas that strengthen homes and families.
          </p>

          <p>
            I blog weekly about topics in entreprenuership, business, and
            technology. You can check back here, or sign up for my newsletter
            below. No spam, unsubscribe at any time.
          </p>

          <form
            action="https://buttondown.email/api/emails/embed-subscribe/bja"
            method="post"
            target="popupwindow"
            onsubmit="window.open('https://buttondown.email/bja', 'popupwindow')"
            class="embeddable-buttondown-form"
          >
            <label for="bd-email">Enter your email:</label>{' '}
            <input type="email" name="email" id="bd-email" />{' '}
            <input type="hidden" value="1" name="embed" />
            <input type="submit" value="Subscribe" />
            <p>
              <a
                href="https://buttondown.email"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by Buttondown.
              </a>
            </p>
          </form>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
