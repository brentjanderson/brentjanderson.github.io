import React from 'react'
import { Link } from 'gatsby'

const PostSnippet = ({ post }) => (
  <div>
    <h1>
      <Link to={post.frontmatter.path}>
        {post.frontmatter.title} ({post.frontmatter.date})
      </Link>
    </h1>
    <p>{post.excerpt}</p>
  </div>
)

export default PostSnippet
