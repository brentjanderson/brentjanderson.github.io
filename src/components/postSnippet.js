import React from 'react'
import { Link } from 'gatsby'

const PostSnippet = ({ post }) => {
  return (
    <div>
      <h1>
        <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
      </h1>
      <p>
        <strong>{post.frontmatter.date}</strong>
      </p>
      <p>{post.excerpt}</p>
    </div>
  )
}

export default PostSnippet
