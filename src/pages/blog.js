import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'

import PostSnippet from '../components/postSnippet'
import Layout from '../components/layout'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostSnippet key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <div>{Posts}</div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
