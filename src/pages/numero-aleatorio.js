import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NumberFaker from "../components/fakers/number-faker"

const Number = () => (
  <Layout>
    <SEO title="Número aleatório" />
    <h1>Gerador de número aleatório</h1>
    <NumberFaker />
  </Layout>
)

export default Number
