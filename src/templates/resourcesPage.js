import React from "react"
import "../css/main.css"
import Layout from "../components/layout"

const Resources = ({ data }) => {
  // const {} = data.markdownRemark.frontmatter.resourcesPage
  return (
    <>
      <Layout current={"Resources"}>
        <div className="resources">
          <header className="resources-header"></header>
          <section className="resources-body container"></section>
        </div>
      </Layout>
    </>
  )
}

export default Resources

export const pageQuery = graphql`
  query ResourcesQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        resourcesPage {
          title
        }
      }
    }
  }
`
