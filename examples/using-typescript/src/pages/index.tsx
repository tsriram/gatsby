import { StaticQuery, graphql } from "gatsby"
import * as React from "react"
import Layout from "../layouts"

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string
      }
    }
  }
}

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  readonly hello = `Hello`
  public render() {
    return (
      <StaticQuery
        query={graphql`
          query IndexQuery {
            site {
              siteMetadata {
                siteName
              }
            }
          }
        `}
        render={data => {
          const { siteName } = data.site.siteMetadata
          return (
            <Layout>
              <h1>{this.hello} Typescript world!</h1>
              <p>
                This site is named <strong>{siteName}</strong>
              </p>
            </Layout>
          )
        }}
      />
    )
  }
}
