import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  /* flex-direction: column;
  justify-content: center;
  align-items: center; */
  background: #1c0c3f; 
`;
export const Content = styled.div`
  padding: 0 15px;
  margin: 0 auto;
  max-width: 1636px;
  width: 100%;
  padding-bottom: 0.5rem;

  .title{
    font-size: 2rem;
    color: white;
  }
`;