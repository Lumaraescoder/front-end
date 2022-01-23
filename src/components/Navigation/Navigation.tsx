import { useState } from 'react';
import Link from 'next/link';
import { Navbar, Hamburger, Sidebar, MenuLinks, Header } from './Navigation.styles';
import { Row, Col } from 'antd';
import { useMediaQuery } from '@util/mediaQuery';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const Navigation = (props) => {
  const pages = Object.values(props);
  const { t } = useTranslation('common');
  const [toggle, setToggle] = useState(false);
  const toggleSidebar = () => setToggle(!toggle);
  const isBreakpoint = useMediaQuery(768);
  const router = useRouter();
  const isLinkActive = (pathname: string) => router.pathname === pathname;

  const renderMenu = (page, index) => {
    return (
      <li  key={index} onClick={() => toggleSidebar()}>
        <Link href={ page.URL }>
          <a>{ t(page.LABEL) }</a>
        </Link>
      </li>
    );
  };

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
                  <li>link 1</li>
                  <li>link 2</li>
                </MenuLinks>
              </Sidebar>
            </>
          ) : (
            <>
              <MenuLinks className={'menu'}>
                <li>link 1</li>
                <li>link 2</li>
              </MenuLinks>
            </>
          )}
        </Navbar>
      </Col>
    </Row>

  );
};

export default Navigation;