import React from 'react';
import './style.scss';
import logo from '../../assets/images/logo.png';
import menu from '../../assets/images/menu.png';
import { motion, AnimatePresence } from 'framer-motion';

export default () => {
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = React.useState(window.innerHeight);

  const [menus, setMenus] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className='containerNav'>
        {screenWidth < 500 ?
          <div className='newBlockNew'>
            <div className='containerMobileNav'>
              <div className='imgLogo'>
                <img
                  className='imageLogo'
                  src={logo}
                />
              </div>
              <div className='imgMenu' onClick={() => setMenus(prev => !prev)}>
                <img
                  className='imageMenu'
                  src={menu}
                />
              </div>
            </div>
          </div>
          :
          <>
            <div className='cointainerNavLink'>
              <p className='linkNavbar'>
                <a href="#preimush" style={{ textDecoration: "none", color: "black" }}>
                  преимущества
                </a>
              </p>
              <p className='linkNavbar'>
                <a style={{ textDecoration: "none", color: "black" }} href='https://forms.yandex.ru/surveys/13473027.d9624a4d2f23983de8292d18a8f1eda70cd24de3/'>
                  свяжитесь с нами
                </a>
              </p>
            </div>
            <div className='buttonBlock'>
              <button className='btnDelivery'>
                <a style={{ textDecoration: "none", color: "black" }} href='https://reg.eda.yandex.ru/?advertisement_campaign=seo_eda'>
                  стать курьером
                </a>
              </button>
            </div>
          </>
        }


      </div>

      <div className='newNavbarOpenIsMenu'>
        <AnimatePresence>
          {menus &&

            <div className='openMenuNur' onClick={() => setMenus(false)}>

              <motion.div
                className='openMenu'
                initial={{
                  x: 100,
                  opacity: 0
                }}
                animate={{
                  x: 0,
                  opacity: 1
                }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ type: 'tween' }}
              >
                <a href='#preimush' style={{ textDecoration: 'none', color: 'black' }}>
                  <div className='blockOne' onClick={() => setMenus(false)}>
                    преимущества
                  </div>
                </a>
                <a href='https://forms.yandex.ru/surveys/13473027.d9624a4d2f23983de8292d18a8f1eda70cd24de3/' style={{ textDecoration: 'none', color: 'black' }}>
                  <div className='blockOne' onClick={() => setMenus(false)}>
                    свяжитесь с нами
                  </div>
                </a>
              </motion.div>
            </div>
          }
        </AnimatePresence>
      </div>
    </>

  )
}
