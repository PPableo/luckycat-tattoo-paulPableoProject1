import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';

const Home = () => {
  const scrollRef = React.createRef();

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      direction: "horizontal",
    });

    let blocks = document.querySelectorAll(".block[data-block-section]");
    scroll.on("scroll", (args) => {
      blocks.forEach((block) => {
        let attr = block.getAttribute("data-block-section");
        let section = document.querySelector(
          `section[data-block-section='${attr}']`
        );
  
        if (section.getBoundingClientRect().left <= block.offsetWidth * attr) {
          block.classList.add("fixed");
          block.classList.remove("init");
          block.classList.remove("active");
          block.style.left = "";
        } else if (
          section.getBoundingClientRect().left >=
          window.innerWidth - block.offsetWidth * (blocks.length - attr)
        ) {
          block.classList.add("init");
          block.classList.remove("active");
          block.classList.remove("fixed");
          block.style.left = "";
        } else {
          block.classList.add("active");
          block.classList.remove("init");
          block.classList.remove("fixed");
        }
  
        if (block.classList.contains("active")) {
          block.style.left = section.getBoundingClientRect().left + "px";
        }
      });
    });
  });

  return (
    <>
    <div className="blocks">
      <div className="block init" data-block-section="1" data-href="home">
        <div className="block__title">Home</div>
        <div className="block__number">01</div>
      </div>
      <div className="block init" data-block-section="2" data-href="collection">
        <div className="block__title">book</div>
        <div className="block__number">02</div>
      </div>
      <div className="block init" data-block-section="3" data-href="material">
        <div className="block__title">contact</div>
        <div className="block__number">03</div>
      </div>
      {/* <div className="block init" data-block-section="4" data-href="production">
        <div className="block__title">Production</div>
        <div className="block__number">04</div>
      </div>
      <div className="block init" data-block-section="5" data-href="journal">
        <div className="block__title">Journal</div>
        <div className="block__number">05</div>
      </div> */}
    </div>
    <main data-scroll-container>
      <div className="wrap" data-scroll-section>
        <section className="section home" data-block-section="1" id="home">
          Luckycat Tattoo <br />
          Private Studio <br />
          Black & Grey <br /> Coming Soon.
          {/* <img src='../assests/images/' /> */}
        </section>
        <section
          className="section collection"
          data-block-section="2"
          id="collection"
        >
          Collection Lorem Ipsum is <br />
          simply dummy text of the <br />
          printing and typesetting <br />industry.
        </section>
        <section className="section material" data-block-section="3" id="material">
          Material Lorem Ipsum is <br />
          simply dummy text of the <br />
          printing and typesetting <br />industry.
        </section>
        {/* <section
          className="section production"
          data-block-section="4"
          id="production"
        >
          Production Lorem Ipsum is <br />
          simply dummy text of the <br />
          printing and typesetting <br />industry.
        </section>
        <section className="section journal" data-block-section="5" id="journal">
          Journal Lorem Ipsum is <br />
          simply dummy text of the <br />
          printing and typesetting <br />industry.
        </section> */}
      </div>
    </main>
    </>
  )
}

export default Home