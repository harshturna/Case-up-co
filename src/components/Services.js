import React from "react";
import styled from "styled-components";
import { services } from "../utils/constants";

const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>
            Why Choose <br />
            <span>Case Up Co.</span>
          </h3>
        </article>
        <div className="services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article key={id} className="service">
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-white);
    text-align: center;
  }
  padding: 5rem 0;

  background: var(--clr-black);
  border-block: 1px solid var(--clr-white);

  .header h3 {
    margin-bottom: 2rem;
  }

  .header h3 span {
    color: var(--clr-primary-5);
  }

  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-white);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-5);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-white);
    }
  }
  span.icon {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    border: 1px solid var(--clr-white);
    background: var(--clr-white);
    color: var(--clr-primary-5);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default Services;
