import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CNPJFaker from "../components/fakers/cnpj-faker"

const CNPJ = () => (
  <Layout>
    <SEO title="CNPJ" />
    <h1>Gerador de CNPJ</h1>
    <CNPJFaker />
  </Layout>
)

export default CNPJ
