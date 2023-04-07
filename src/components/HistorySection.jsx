import React from "react";
import SectionHeading from "./SectionHeading";
import firstImage from "../assets/carousel-img-1.png";
import secondImage from "../assets/carousel-img-2.png";

export default function HistorySection() {
  return (
    <section id="history">
      <div className="container">
        <div>
          <SectionHeading
            number={"01."}
            heading={"history"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus totam libero! Doloribus libero maiores architecto voluptatem voluptate cupiditate, debitis eaque illum, magni voluptas saepe vero distinctio fugiat itaque quasi voluptatum? Hic similique fuga quos vero eum, nemo esse velit voluptates quidemautem recusandae, nesciunt accusamus. Itaque similique"
            }
          />
        </div>
      </div>
      <div className="carousel">
        <div className="carousel-container">
          <img src={firstImage} alt="carousel-img" />
          <img src={secondImage} alt="carousel-img" />
          <img src={firstImage} alt="carousel-img" />
          <img src={secondImage} alt="carousel-img" />
        </div>
      </div>
    </section>
  );
}
