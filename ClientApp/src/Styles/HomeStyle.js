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

export const CardDiv = styles.div`
  background-color:#9A9EB3;
  border: 2px solid black;
  width:90%;
  margin-top: 10px;
  display:block;
  margin-left: auto;
  margin-right: auto 
 
`;

export const Search = styles.input`
  display:block;
  width:50%;
  text-align:center;
  margin-top: 2%;
  margin-left: auto;
  margin-right: auto 
  
`;

export const Footer = styles.div`
  height:70px;
  width:100%;
  margin-top:10px;
  background-color:#566097;
`;