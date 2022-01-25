import styled from 'styled-components';
export const Header =  styled.header`

`;

export const Navbar = styled.nav`
  position: fixed;
  display: flex;
  align-items:center;
  justify-content: flex-end;
  height: 90px;
  width: 100%;
  border: solid 1px;
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
@media screen and (min-width: 768px) {
  flex-direction: row;
}
`;


export const MenuContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.625rem;
  justify-content: center;
  transition: all 0.2s;
  &:hover {
    opacity: 0.75;
  }
`;

export const MenuIconBadge = styled.span`
  position: absolute;
  top: 7px;
  border-radius: 50%;
  margin-left: 26px;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  background-color: #e50b20;
  -moz-border-radius: 0.5rem;
  -webkit-border-radius: 0.5rem;
  display: inline-block;
  width: 1.1rem;
  height: 1.1rem;
  padding-top: 0.15rem;
`;
