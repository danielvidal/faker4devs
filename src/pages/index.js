import React from "react"

import Typography from "@material-ui/core/Typography"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MenuTools from "../components/shared/menu-tools"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Typography component="p">Aqui você pode gerar diversos tipos de documentos de forma totalmente aleatória!</Typography>

    <MenuTools />
  </Layout>
)

export default IndexPage
