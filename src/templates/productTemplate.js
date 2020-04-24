import React from "react"
import {graphql} from "gatsby"

export const query = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: {path: {eq:$path}}) {
            frontmatter {
                title
            }
        }
    }
`

export default ({data}) => {
    return (
      <div>
        <h1>
          {data.markdownRemark.frontmatter.title}
        </h1>
      </div>
    )
}
