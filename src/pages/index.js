import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div data-netlify-identity-menu></div>
    <div data-netlify-identity-button>Login with Netlify Identity</div>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
  </Layout>
)

export default IndexPage
