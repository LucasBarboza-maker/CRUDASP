import styles from 'styled-components'

export const Body = styles.div`
  width:100%;
`;
export const Header = styles.div`
  
  background-color:#566097;
  border: 2px solid black;

  h2{
    text-align: center;
    color:white;
  }

`;

export const SignUpLabel = styles.label`
  width:100%;

  input{
      margin-top:10px;
  }
`;

export const Footer = styles.div`
  height:70px;
  width:100%;
  margin-top:10px;
  background-color:#566097;
`;