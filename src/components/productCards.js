import React, { Component } from "react"
import "@fortawesome/fontawesome-free/css/all.css"
import "../css/main.css"
import AnchorLink from "react-anchor-link-smooth-scroll"

export default class ProductCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div className="product-cards">
          <div class="title">
            <h1>
              <span style={{ color: "#ff9f43" }}>Tou</span>
              <span style={{ color: "#0abde3" }}>rist</span>
              <span style={{ color: "#ee5253" }}>Attr</span>
              <span style={{ color: " #00d2d3" }}>acti</span>
              <span style={{ color: " #5f27cd" }}>ons</span>
            </h1>
          </div>
          <div class="card1">
            <img
              src="http://www.pngmart.com/files/5/Pyramids-PNG-HD.png"
              alt=""
            />
            <h3>Pyramids</h3>
            <p>
              The Egyptian pyramids are ancient pyramid-shaped masonry
              structures located in Egypt. As of November 2008, sources cite
              either 118 or 138 as the number of identified Egyptian pyramids.
            </p>
          </div>

          <div class="card2">
            <img
              src="https://wallazee.global.ssl.fastly.net/images/dynamic/items/383-1024.png"
              alt="Eiffel Tower"
            />
            <h3>Statue of Liberty</h3>
            <p>
              The Statue of Liberty is a colossal neoclassical sculpture on
              Liberty Island in New York Harbor in New York City, in the United
              States.
            </p>
          </div>

          <div class="card3">
            <img
              src="http://pluspng.com/img-png/download-taj-mahal-png-images-transparent-gallery-advertisement-1185.png"
              alt=""
            />
            <h3>Taj Mahal</h3>
            <p>
              The Taj Mahal is an ivory-white marble mausoleum on the south bank
              of the Yamuna river in the Indian city of Agra. It was
              commissioned in 1632 by the Mughal emperor.
            </p>
          </div>
          <div class="footer"></div>
        </div>
      </>
    )
  }
}
