import  { createGlobalStyle} from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
export const GlobalStyle  =createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
          color: #555555;
  }
*:focus{
    outline:0;
  }

  html{
     @media (max-width: 1080px) {
    font-size: 93.75%; //15px
    /* 16 * 0.9375 = 15 */

  }
  @media (max-width: 720px) {
    font-size: 87.5%; //14px
    /* 16 * 0.875 = 14 */
  }
  }
  html, body, #root{
    font-family: 'Rubik', sans-serif;
    min-height: 100vh;
    
  }
  button{
    cursor: pointer;
  }
  body{
    -webkit-font-smoothing: antialiased;
    background: #ecf0f5;
  }

  .btn{
    border: none;
    text-decoration: none;
    color: #ecf0f5;
    padding: 0.3rem 0.5rem;
    background-color: blue;
    border-radius: 0.2rem;
  
  }
  button.btn {
    padding: 0 1.5rem;
    height: 2.75rem;
    font-size: 1rem;
  }
.content{
padding-top: 2rem;
}

.options{
  button, a{
    border: none;
    font-size: 1rem;
    text-decoration: none;
    &:not(:first-child){
    margin-left:0.2rem ;

  }
  }
  
}
`;