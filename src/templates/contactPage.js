import React from "react"
import "../css/main.css"
import MyForm from "../components/form"
import Layout from "../components/layout"
import "@fortawesome/fontawesome-free/css/all.css"
const Contact = ({ data }) => {
  const { contactPage } = data.markdownRemark.frontmatter

  return (
    <>
      <Layout current={"Contact"}>
        <div className="contact-page">
          <header className="contact"></header>
          <div className="container">
            <section className="section-a">
              <div className="cards">
                <div className="card">
                  <h1 className="title">Test</h1>
                  <i className={`fas fa-icon icon`}></i>
                  <div className="addressContainer">
                    <div className="address">
                      <div>TEst</div>
                      <div>TEst</div>
                      <div>TEst</div>
                      <div>TEst</div>
                      <div>TEst</div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  {" "}
                  <h1 className="title">TYEST</h1>
                  <i className={`fas fa-phone icon`}></i>
                  <a href="tel:+353 1 556 3499" className="phone-number">
                    TEST
                  </a>
                </div>
                <div className="card">
                  {" "}
                  <h1 className="title">TEST</h1>
                  <i className={`fas fa-email icon`}></i>
                  <a
                    href="mailto:info@inship.ie?subject=From InShip APS Website"
                    className="email"
                  >
                    TEST
                  </a>
                </div>
              </div>
            </section>

            <section className="section-b">
              <MyForm formTitle={"General Inquiry"}></MyForm>
            </section>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Contact

export const contactQuery = graphql`
  query ContactQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        contactPage {
          title
        }
      }
    }
  }
`
