import styled from "styled-components";

const Logo = () => {
  return (
    <Wrapper>
      <span>Case Up </span>Co.
    </Wrapper>
  );
};

const Wrapper = styled.h3`
  margin-bottom: 0;
  color: var(--clr-white);
  span {
    color: var(--clr-primary-5);
  }
`;

export default Logo;
