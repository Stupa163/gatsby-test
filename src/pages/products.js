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
    <div>
      {
        data.allMarkdownRemark.edges.map((product) => {
          return <div>
              <div>{product.node.frontmatter.title}</div>
              <div>{product.node.frontmatter.price} €</div>
              <div>{product.node.frontmatter.description}</div>
              <div><img src={product.node.frontmatter.image} alt=""/></div>
            ---------------------------
          </div>
        })
      }
    </div>
  )
}

Products.propTypes = {}

export default Products
