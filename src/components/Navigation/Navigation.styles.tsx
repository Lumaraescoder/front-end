import styled from 'styled-components';
export const Header =  styled.header`

`;


export const Navbar = styled.nav`
  background: red;
  position: relative;
  display: flex;
  align-items:center;
  justify-content: flex-end;
  height: 90px;
  width: 100%;
`;


export const Hamburger = styled.ul`
  display: flex;
  list-style:none;
  flex-direction: column;
  margin-right: 15px;
  li {
    width: 30px;
    height: 3px;
    background: #000;
    margin-bottom: 5px;
  }
`;


export const Sidebar = styled.div`
  background: #f1f1f1;
  height: 100vh;
  width: 250px;
  position: absolute;
  left:-250px;
  top:0;
  transition: all .3s; 

  &.active {
    left: 0;
    transition: all .3s; 
  }

`;


export const MenuLinks = styled.ul`
  padding: 10px;
  display: flex;
  flex-direction: column;
  li {
    margin:5px;
  }
/* On screens that are 600px or less, set the background color to olive */
@media screen and (min-width: 768px) {
  flex-direction: row;
}
`;