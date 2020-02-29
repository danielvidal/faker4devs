import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PersonFaker from "../components/fakers/person-faker"

const CPF = () => (
  <Layout>
    <SEO title="Dados pessoais" />
    <h1>Gerador de dados pessoais</h1>
    <PersonFaker />
  </Layout>
)

export default CPF
