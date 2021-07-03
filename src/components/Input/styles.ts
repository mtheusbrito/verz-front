import styled from "styled-components";
interface ConteinerProps{
  checkbox?: boolean;
}
export const Container = styled.div<ConteinerProps>`
    display: flex;
    flex-direction: column;
    margin-bottom: ${props => props.checkbox ? '0': '1.5rem'} ;

    label{
      text-align: left;
    }
    input{
      margin-top:0.5rem;
      margin-bottom: 0.4rem;
      width: 100%;
      padding: 0 1.5rem;
      height: ${props => props.checkbox ? '1.2rem' : '2.75rem'} ;
      border-radius: 0.25rem;
      border: 1px solid #d7d7d7;
      background: #e7e9ee;
      font-weight: 400;
      font-size: 1rem;
      &::placeholder {
        color: var(--text-body);
      }
      & + input {
        margin-top: 1rem;
      }
      :focus{
        border-color: var(--purple);
      }
    }
    span{
      color: red;
      font-size: 0.8rem;
    }
`;