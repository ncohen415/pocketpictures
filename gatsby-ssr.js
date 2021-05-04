import React from "react"
require("./src/components/layout.css")

//Components
import Layout from "./src/components/layout"

//Context
import { StoreProvider } from "./src/context/StoreContext"

export const wrapRootElement = ({ element }) => (
  <StoreProvider>{element}</StoreProvider>
)

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
