import styled from "styled-components";


export const Wrapper = styled.div`
 min-height: 100vh;
  display: flex;
  /* flex-direction: column;
  justify-content: center;
  align-items: center; */

`;
export const Sidebar = styled.div`
width:20rem;
padding: 1rem;
background-color: #f1f1f1;

a, button{
  display: block;
  padding: 0.3rem;
  text-decoration: none;
  border:none;
&:hover{
  text-decoration: underline;
}


}


`;

export const Content = styled.div`
  padding: 1rem;
  margin: 0 auto;
  max-width: 1636px;
  width: 100%;
  padding-bottom: 0.5rem;

  .title{
    font-size: 2rem;
    color: white;
  }
`;