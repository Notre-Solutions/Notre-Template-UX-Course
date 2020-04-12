import React from "react"
import "../css/main.css"
import Markdown from "../components/markdown"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ReactModal from "../components/modal"
import "@fortawesome/fontawesome-free/css/all.css"
import { Link } from "gatsby"
import Img from "gatsby-image"
import ProductCard from "../components/productCards"
import Form from "../components/form"

const Landing = ({ data }) => {
  const image = data.images.edges[0].node.childImageSharp
  const testimonialImages = data.testimonialImages1.edges
  console.log(testimonialImages)
  return (
    <>
      <Layout current={"Home"}>
        <div className="landing-page">
          <header className="landing-page-header">
            <div className="landing-page-header-img-container">
              <Img fluid={image.fluid} className="landing-page-header-img" />
            </div>
            <h1 className="landing-page-header-title">
              Web Hosting, Web Design, UX Design and More
            </h1>
            <h2 className="landing-page-header-title-sub">
              Get your business online
            </h2>
            <i className="landing-page-header-scroll-down fa fa-caret-down"></i>
          </header>
          <section className="landing-page-out-mission ">
            <div className="landing-page-out-mission-container">
              <div className="landing-page-out-mission-grid-container">
                <i className="landing-page-out-mission-icon fa fa-bullseye"></i>
                <div className="landing-page-out-mission-header">
                  Our Mission
                </div>
                <div className="landing-page-out-mission-text-box">
                  The quick, brown fox jumps over a lazy dog. DJs flock by when
                  MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds
                  jog, flick quartz, vex nymphs. Waltz
                </div>
              </div>
              <div className="landing-page-out-mission-grid-container">
                <i className="landing-page-out-mission-icon fa fa-heart"></i>
                <div className="landing-page-out-mission-header">
                  Our Promis
                </div>
                <div className="landing-page-out-mission-text-box">
                  The quick, brown fox jumps over a lazy dog. DJs flock by when
                  MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds
                  jog, flick quartz, vex nymphs. Waltz
                </div>
              </div>
              <div className="landing-page-out-mission-grid-container">
                <i className="landing-page-out-mission-icon fa fa-check"></i>
                <div className="landing-page-out-mission-header">Our Style</div>
                <div className="landing-page-out-mission-text-box">
                  The quick, brown fox jumps over a lazy dog. DJs flock by when
                  MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds
                  jog, flick quartz, vex nymphs. Waltz
                </div>
              </div>
            </div>
          </section>
          <section className="landing-page-testimonials">
            {testimonialImages.map(testimonial => {
              return (
                <>
                  <div className="landing-page-testimonials-card">
                    <div className="landing-page-testimonials-img-container">
                      <Img
                        fluid={testimonial.node.childImageSharp.fluid}
                        className="landing-page-testimonials-img"
                      />
                    </div>
                    <div className="landing-page-testimonials-text-box">
                      The quick, brown fox jumps over a lazy dog. DJs flock by
                      when MTV ax quiz prog. Junk MTV quiz graced by fox{" "}
                      <div className="landing-page-testimonials-name">
                        - Mark
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </section>
          <section className="landing-page-product">
            <div className="landing-page-product-title">Products</div>
            <div className="landing-page-product-cards">
              <div className="landing-page-product-cards-card">
                <div className="landing-page-product-cards-card-title">
                  Bronze
                </div>
                <div className="landing-page-product-cards-card-money">
                  £350
                </div>
                <ul className="landing-page-product-cards-card-list">
                  <li className="landing-page-product-cards-card-list-item">
                    Feature One
                  </li>
                  <li className="landing-page-product-cards-card-list-item">
                    Feature Two
                  </li>
                  <li className="landing-page-product-cards-card-list-item">
                    Feature Three
                  </li>
                  <li className="landing-page-product-cards-card-list-item">
                    Feature Four
                  </li>
                  <li className="landing-page-product-cards-card-list-item">
                    Feature Five
                  </li>
                </ul>
                <div className="landing-page-product-cards-card-btn-gb">
                  <div className="landing-page-product-cards-card-btn">
                    Learn More
                  </div>
                </div>
              </div>
              <div className="landing-page-product-cards-card">
                <div className="landing-page-product-cards-card-title">
                  Bronze
                </div>
                <div className="landing-page-product-cards-card-money">
                  £350
                </div>
                <ul className="landing-page-product-cards-card-list">
                  <li className="landing-page-product-cards-card-list-item">
                    Feature One
                  </li>
                  <li className="landing-page-product-cards-card-list-item">
                    Feature Two
                  </li>
                  <li className="landing-page-product-cards-card-list-item">
                    Feature Three
                  </li>
                  <li className="landing-page-product-cards-card-list-item">
                    Feature Four
                  </li>
                  <li className="landing-page-product-cards-card-list-item">
                    Feature Five
                  </li>
                </ul>
                <div className="landing-page-product-cards-card-btn-gb">
                  <div className="landing-page-product-cards-card-btn">
                    Learn More
                  </div>
                </div>
              </div>
              <div className="landing-page-product-cards-card">
                <div className="landing-page-product-cards-card-title">
                  Bronze
                </div>
                <div className="landing-page-product-cards-card-money">
                  £350
                </div>
                <ul className="landing-page-product-cards-card-list">
                  <li className="landing-page-product-cards-card-list-item">
                    Feature One
                  </li>
                  <li className="landing-page-product-cards-card-list-item">
                    Feature Two
                  </li>
                  <li className="landing-page-product-cards-card-list-item">
                    Feature Three
                  </li>
                  <li className="landing-page-product-cards-card-list-item">
                    Feature Four
                  </li>
                  <li className="landing-page-product-cards-card-list-item">
                    Feature Five
                  </li>
                </ul>
                <div className="landing-page-product-cards-card-btn-gb">
                  <div className="landing-page-product-cards-card-btn">
                    Learn More
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="landing-page-our-services">
            <div className="landing-page-our-services-title">Our Services</div>
            <div className="landing-page-our-services-gird">
              <div className="landing-page-our-services-card">
                <i className="landing-page-our-services-card-icon fa fa-chart-line"></i>
                <div className="landing-page-our-services-card-title">
                  Analytics
                </div>
                <div className="landing-page-our-services-card-text-box">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                  maiores reprehenderit in dicta dolorem! Lorem ipsum dolor sit,
                  amet consectetur adipisicing elit. Vero maiores reprehenderit
                  in dicta dolorem!
                </div>
              </div>
              <div className="landing-page-our-services-card">
                <i className="landing-page-our-services-card-icon fa fa-chart-pie"></i>
                <div className="landing-page-our-services-card-title">
                  Analytics
                </div>
                <div className="landing-page-our-services-card-text-box">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                  maiores reprehenderit in dicta dolorem! Lorem ipsum dolor sit,
                  amet consectetur adipisicing elit. Vero maiores reprehenderit
                  in dicta dolorem!
                </div>
              </div>
              <div className="landing-page-our-services-card">
                <i className="landing-page-our-services-card-icon fa fa-pencil-alt"></i>
                <div className="landing-page-our-services-card-title">
                  Analytics
                </div>
                <div className="landing-page-our-services-card-text-box">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                  maiores reprehenderit in dicta dolorem! Lorem ipsum dolor sit,
                  amet consectetur adipisicing elit. Vero maiores reprehenderit
                  in dicta dolorem!
                </div>
              </div>
              <div className="landing-page-our-services-card">
                <i className="landing-page-our-services-card-icon fa fa-laptop-code"></i>
                <div className="landing-page-our-services-card-title">
                  Analytics
                </div>
                <div className="landing-page-our-services-card-text-box">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                  maiores reprehenderit in dicta dolorem! Lorem ipsum dolor sit,
                  amet consectetur adipisicing elit. Vero maiores reprehenderit
                  in dicta dolorem!
                </div>
              </div>
              <div className="landing-page-our-services-card">
                <i className="landing-page-our-services-card-icon fa fa-server"></i>
                <div className="landing-page-our-services-card-title">
                  Analytics
                </div>
                <div className="landing-page-our-services-card-text-box">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                  maiores reprehenderit in dicta dolorem! Lorem ipsum dolor sit,
                  amet consectetur adipisicing elit. Vero maiores reprehenderit
                  in dicta dolorem!
                </div>
              </div>
            </div>
          </section>
          <section className="landing-page-meet-the-team">
            <div className="landing-page-meet-the-team-title">
              Meet the team
            </div>
            <div className="landing-page-meet-the-team-grid">
              {testimonialImages.map((people, i) => {
                if (i % 2) {
                  return (
                    <div className="landing-page-meet-the-team-card">
                      <Img
                        fluid={people.node.childImageSharp.fluid}
                        className="landing-page-meet-the-team-card-img"
                      />
                      <div className="landing-page-meet-the-team-card-text-box">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Soluta reiciendis animi ab iusto tenetur quod.
                        Unde voluptas hic, inventore obcaecati exercitationem
                        debitis consequatur dolores numquam eum, architecto
                        ullam, pariatur at? Lorem, ipsum dolor sit amet
                      </div>
                    </div>
                  )
                } else {
                  return (
                    <div className="landing-page-meet-the-team-card">
                      <div className="landing-page-meet-the-team-card-text-box">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Soluta reiciendis animi ab iusto tenetur quod.
                        Unde voluptas hic, inventore obcaecati exercitationem
                        debitis consequatur dolores numquam eum, architecto
                        ullam, pariatur at? Lorem, ipsum dolor sit amet
                      </div>
                      <Img
                        fluid={people.node.childImageSharp.fluid}
                        className="landing-page-meet-the-team-card-img"
                      />
                    </div>
                  )
                }
              })}
            </div>
          </section>
          <section className="landing-page-contact-form"></section>
          {/* <section>
            <ProductCard></ProductCard>
          </section> */}
        </div>
      </Layout>
    </>
  )
}

export default Landing

export const pageQuery = graphql`
  query LandingPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        landingPage {
          sectionD {
            title
          }
        }
      }
    }
    images: allFile(filter: { relativePath: { eq: "Main Image.png" } }) {
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
    testimonialImages1: allFile(
      filter: { relativeDirectory: { eq: "testimonialImages" } }
    ) {
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
