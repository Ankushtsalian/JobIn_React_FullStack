import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 4rem;
  text-align: center;
  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    /* color: var(--primary-500); */
    font-size: 2rem;
    cursor: pointer;
  }
  h4 {
    text-align: center;
    margin-bottom: 0.75rem;
  }
  @media (max-width: 992px) {
    .chart {
      font-size: 1.7rem;
    }
    .chartActive {
      font-size: 1.7rem;
    }
  }
`;

export default Wrapper;
