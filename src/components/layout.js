/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => {
  const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

  function handleClick() {
    try {
      window.netlifyIdentity.open();
    } catch (e) {
      console.error(e);
    }
  }

  function loggedOrNot() {
    try {
      if (window.netlifyIdentity.store.user === null) {
        return <button onClick={handleClick} style={{float: `right`}}>Login</button>;
      } else {
        return <span style={{float: `right`}}>{'welcome' + window.netlifyIdentity.store.user.user_metadata.full_name}</span>
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>MySweetSite</h3>
        </Link>
        {loggedOrNot()}
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/contact">Contact</ListLink>
          <ListLink to="/products">Products</ListLink>
        </ul>
      </header>
      <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
