import React from "react"
import "../css/main.css"
import "@fortawesome/fontawesome-free/css/all.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Footer = () => {
  // const image = data.images.edges[0].node.childImageSharp

  const query = useStaticQuery(
    graphql`
      query {
        images: allFile(filter: { relativePath: { eq: "logo/Icon.png" } }) {
          edges {
            node {
              id
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
              name
            }
          }
        }
      }
    `
  )
  const img = query.images.edges[0].node.childImageSharp.fluid
  return (
    <div>
      <section className="footer">
        <div>
          <Img className="logo" fluid={img}></Img>
          <div className="notre-icon">
            Notre<span className="studio">Studio</span>
          </div>
          <div className="contact">Contact Number: +44 (0) 7484241871</div>
          <div className="email">Email Address: info@notre-studio.co.uk</div>
          <ul className="links">
            <li className="links-items">Home</li>
            <li className="links-items">Resource</li>
            <li className="links-items">Contact</li>
          </ul>
          <div className="line"></div>
          <div className="social-icons">
            <a href="#!">
              <i className="fab fa-twitter icon"></i>
            </a>
            <a href="#!">
              <i className="fab fa-facebook icon"></i>
            </a>
            <a href="#!">
              <i className="fab fa-instagram icon"></i>
            </a>
            <a href="#!">
              <i className="fab fa-youtube icon"></i>
            </a>
            <a href="#!">
              <i className="fab fa-linkedin icon"></i>
            </a>
          </div>
          <div className="copy-right">
            &copy; {new Date().getFullYear()} Notre Studio
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
