import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'

import Layout from '../components/layout'

export default function Template(props) {
  const {
    data, // this prop will be injected by the GraphQL query below.
  } = props
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <article>
              <h1>{frontmatter.title}</h1>
              <p>{frontmatter.date}</p>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </article>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
      fields {
        slug
      }
    }
  }
`
