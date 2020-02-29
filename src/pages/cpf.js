import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CPFFaker from "../components/fakers/cpf-faker"

const CPF = () => (
  <Layout>
    <SEO title="CPF" />
    <h1>Gerador de CPF</h1>
    <CPFFaker />
  </Layout>
)

export default CPF
