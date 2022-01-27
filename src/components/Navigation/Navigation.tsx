import { useState } from 'react';
import Link from 'next/link';
import { Navbar, Hamburger, Sidebar, MenuLinks, Header,MenuContainer, MenuIconBadge } from './Navigation.styles';
import { Row, Col } from 'antd';
import { useMediaQuery } from '@util/mediaQuery';
import { useRouter } from 'next/router';

const Navigation = (props) => {
  const [toggle, setToggle] = useState(false);
  const toggleSidebar = () => setToggle(!toggle);
  const isBreakpoint = useMediaQuery(768);
  const router = useRouter();

  return (
    <Row>
      <Col sm='24'>
        <Navbar>
          {/* is BreakPoint  will separate our desktop code from mobile */}
          { isBreakpoint ? (
            <>
              <Hamburger onClick={toggleSidebar} className='hamburger'>
                <li></li>
                <li></li>
                <li></li>
              </Hamburger>
              <Sidebar className={['sidebar', toggle ? 'active' : null]}>
                <MenuLinks className={'menu'}>
                  <Link href="/">
                    <li>Home</li>
                  </Link>
                  <Link href="/cart">
                  <MenuContainer>
                  
                  </MenuContainer>
                </Link>
                </MenuLinks>
              </Sidebar>
            </>
          ) : (
            <>
              <MenuLinks className={'menu'}>
                <Link href="/">
                  <li>Home</li>
                </Link>
                <Link href="/cart">
                  <MenuContainer>
                  </MenuContainer>
                </Link>
              </MenuLinks>
            </>
          )}
        </Navbar>
      </Col>
    </Row>
  );
};

export default Navigation;