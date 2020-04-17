import React, { Component } from "react"
import PropTypes from "prop-types"
import { graphql } from 'gatsby'

export const query = graphql`
    query MyQuery {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        description
                        image
                        price
                        title
                    }
                }
            }
        }
    }
`

const Products = ({data}) => {
  return (
    <table>
      <tr>
        <th>Title</th>
        <th>Price</th>
        <th>Description</th>
        <th>Preview</th>
      </tr>
      {
        data.allMarkdownRemark.edges.map((product) => {
          return <tr>
              <td>{product.node.frontmatter.title}</td>
              <td>{product.node.frontmatter.price} €</td>
              <td>{product.node.frontmatter.description}</td>
              <td><img src={product.node.frontmatter.image} alt=""/></td>
          </tr>
        })
      }
    </table>
  )
}

Products.propTypes = {}

export default Products
