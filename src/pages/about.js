import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../components/layout'
import brent from '../images/brent.png'
import '../css/about.css'

const links = [
  { link: 'mailto:me@brentjanderson.com', icon: 'envelope-square' },
  {
    link: 'https://www.twitter.com/brentjanderson',
    icon: ['fab', 'twitter-square'],
  },
  {
    link: 'https://mastodon.social/@bja',
    icon: ['fab', 'mastodon'],
  },
  {
    link: 'https://www.linkedin.com/in/brentj84062/',
    icon: ['fab', 'linkedin'],
  },
  {
    link: 'https://www.github.com/brentjanderson',
    icon: ['fab', 'github-square'],
  },
  { link: 'https://gitlab.com/brentjanderson', icon: ['fab', 'gitlab'] },
].map(({ link, icon }, index) => (
  <a href={link} key={index}>
    <FontAwesomeIcon icon={icon} />
  </a>
))

const AboutPage = data => {
  console.log(data)
  return (
    <Layout>
      <Container>
        <Row>
          <Col md="3">
            <img
              style={{ width: '100%', marginBottom: '0rem' }}
              src={brent}
              alt="Brent Anderson"
            />

            <div class="contact-icons">{links}</div>

            <p class="text-muted">
              <small>
                I blog about topics in entreprenuership, business, and
                technology. You can check back here,{' '}
                <a href="/rss.xml">subscribe via RSS</a>, or sign up for my
                newsletter below. No spam, unsubscribe at any time.
              </small>
            </p>

            <form
              action="https://buttondown.email/api/emails/embed-subscribe/bja"
              method="post"
              target="popupwindow"
              onsubmit="window.open('https://buttondown.email/bja', 'popupwindow')"
              class="embeddable-buttondown-form"
            >
              <small>
                <input
                  type="email"
                  name="email"
                  id="bd-email"
                  placeholder="you@email.com"
                />
                <input type="hidden" value="1" name="embed" />
                <input type="submit" value="Subscribe" />
                <p>
                  <a
                    href="https://buttondown.email"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Powered by Buttondown
                  </a>
                </p>
              </small>
            </form>

            <p>
              <small>
                Built with <a href="https://www.gatsbyjs.org">Gatsby.js</a>
                <br />
                Last updated{' '}
                {new Date(data.data.site.buildTime).toLocaleDateString()}
                <br />
                Site Copyright {new Date().getFullYear()} Brent Anderson
                <br />
                This website is licensed under a{' '}
                <a
                  rel="license"
                  href="http://creativecommons.org/licenses/by-sa/4.0/"
                >
                  Creative Commons Attribution-ShareAlike 4.0 International
                  License
                </a>
                .
              </small>
            </p>
          </Col>
          <Col md="9">
            <p className="lead text-center">
              <span role="img" aria-label="Waving hand">
                👋
              </span>{' '}
              I'm an entrepreneur and software engineer. I work with startups
              and innovative companies to build great products that delight
              users.
            </p>

            <p>
              By day I'm a full-stack native iOS engineer at{' '}
              <a href="https://yours.co">Yours.co</a>. By night, I'm a dad,
              husband, <a href="https://lds.org">Latter-day Saint</a>, and
              co-founder at <a href="https://coriaria.com">Coriaria</a> where we
              develop products and services that strengthen homes and families.
            </p>

            <p>
              As an entrepreneur, I use{' '}
              <a href="https://www.theleanstartup.com">Lean Startup</a>{' '}
              techniques to quickly get to the root of the job to be done so
              that we can get value to customers as quickly as possible.
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
              With this playbook I have helped tiny early-stage startups,
              fortune 100 companies, and global brands achieve success.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      buildTime
    }
  }
`
