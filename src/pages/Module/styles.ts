import styled from "styled-components";

export const Container =styled.div`

    
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    

    @media(max-width: 767px){
        grid-template-columns: repeat(1, 1fr);
        gap: 3rem;
  }

  .module{
    background: white;
    border-radius: 0.45rem;
    min-height: 20rem;
    min-width: 3rem;
    
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 3rem;
    display: flex;
    
    a{
      padding:  0.5rem 1rem;
      background: #1c0c3f;
      color: white;
      font-weight: 500;
      text-decoration: none;
      border-radius: 0.4rem;
    }

  }
`;