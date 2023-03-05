import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="A desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Welcome to Case Up Co., where we believe that protecting your phone
            should be stylish and affordable. Our passion for technology and
            fashion inspired us to create a brand that offers unique and robust
            phone cases that won't break the bank. Our online store offers a
            range of cases that are designed to fit your unique style, from
            sleek and minimalistic to bold and colorful. We use high-quality
            materials to ensure that our cases provide superior protection
            against damage from drops, scratches, and other impacts. At Case Up
            Co., we are committed to providing our customers with the best value
            for their money without sacrificing quality or style. Thank you for
            choosing us to keep your phone safe and fashionable!
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-white);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
