import React from 'react';
import './style.scss';
import Navbar from '../../components/Navbar';
import logo from '../../assets/images/logo.png';
import sumka from '../../assets/images/sumkaD.png';
import LayoutSetka from '../../components/LayoutSetka';
import WhiteThreeBlock from '../../components/WhiteThreeBlock';
import BecomingCourierIsEasy from '../../components/BecomingCourierIsEasy';
import Marquee from "react-fast-marquee";
import { Bell } from 'lucide-react';

export default () => {

  const [isOpen, setIsOpen] = React.useState(false);

  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = React.useState(window.innerHeight);
  
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
    <div className='containerHome'>
      <div className='oneBlock'>
        <div className='navbarBlock'>
          <Navbar />
        </div>
        <div className='indexOne'>
          <div className='textsZpIndexOne'>
            <p className='textZp'>
              до 230 000 ₽<br />
              в месяц
            </p>
            <p className='textZpTwo'>
              станьте курьером<br />
              и получайте деньги
              каждый день
            </p>
          </div>
          <div className='btnsLink'>
            <button className='btnTextLink'>
              заполнить анкету
            </button>
          </div>
        </div>
        <div className="yellowBlock">
          <div className='leftBlock'>
            <img
              src={logo}
              className='logoClass'
            />
            <p className='textZp'>
              до 230 000 ₽<br />
              в месяц
            </p>
            <p className='textZpTwo'>
              станьте курьером<br />
              и получайте деньги<br />
              каждый день
            </p>
            <button className='addedAnket'>
              заполнить анкету
            </button>
          </div>
          <div className='rightBlock'>
            <div className='rightPodBlock'>
              dawd
            </div>
          </div>
        </div>
      </div>
      <div className='twoBlock'>
        <div id="preimush"className='blockZabota'>
          <LayoutSetka 
            open={setIsOpen}
            isOpen={isOpen}
          />
        </div>
      </div>
      <div className='threeBlock' style={{
          marginTop: screenWidth < 500 
            ? (isOpen ? '1900px' : '1100px') 
            : (isOpen ? '2100px' : '1350px')
        }}>
        <div className='blockThree' >
          <WhiteThreeBlock />
        </div>
        <div className='blockString'>
            <Marquee speed={250} gradient={false} style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
              <img className="imgSumka" src={sumka} />
              <span className='spanText'>станьте курьером</span>
              <img className="imgSumka" src={sumka} />
              <span className='spanText'>станьте курьером</span>
              <img className="imgSumka" src={sumka} />
              <span className='spanText'>станьте курьером</span>
            </Marquee>
          </div>
      </div>
      <div className='fourBlock' style={{
          marginTop: screenWidth < 500 
            ? (isOpen ? '3200px' : '2400px') 
            : (isOpen ? '3200px' : '2400px')
        }}>
        <div className='blockFour'>
          <BecomingCourierIsEasy />
        </div>
        
      </div>
      <div className='fiveBlock'  style={{
          marginTop: screenWidth < 500 
            ? (isOpen ? '4100px' : '3300px') 
            : (isOpen ? '4200px' : '3500px')
        }}>
        <div className='blockFives'>
          <div className='blockString'>
            <Marquee speed={250} gradient={false} style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
              <img className="imgSumka" src={sumka} />
              <span className='spanText'>этому городу нужен курьер</span>
              <img className="imgSumka" src={sumka} />
              <span className='spanText'>этому городу нужен курьер</span>
            </Marquee>
          </div>
        </div>
        {screenWidth < 500 ? 
        <div>
        <div className='citisBlock' style={{flexWrap: 'wrap', marginLeft: "5%"}}>
          <div className='blockBig' style={{width: '49%', marginTop: '10px'}}>
            <p className='textBlock'>
              Москва
            </p>
          </div>
          <div className='blockBig' style={{width: '49%', marginTop: '10px'}}>
            <p className='textBlock'>
              Санкт-Петербург
            </p>
          </div>
          <div className='blockBig' style={{width: '49%', marginTop: '10px'}}>
            <p className='textBlock'>
              Нижний Новгород
            </p>
          </div>
          <div className='blockBig' style={{width: '49%', marginTop: '10px'}}>
            <p className='textBlock'>
              Пермь
            </p>
          </div>
          <div className='blockBig' style={{width: '49%', marginTop: '10px'}}>
            <p className='textBlock'>
              Екатеринбург
            </p>
          </div>
          <div className='blockBig' style={{width: '49%', marginTop: '10px'}}>
            <p className='textBlock'>
              Красноярск
            </p>
          </div>
          <div className='blockBig' style={{width: '49%', marginTop: '10px'}}>
            <p className='textBlock'>
              Челябинск
            </p>
          </div>
          <div className='blockBig' style={{width: '49%', marginTop: '10px'}}>
            <p className='textBlock'>
              Новосибирск
            </p>
          </div>
          <div style={{width: '100%', marginTop: '40px'}}>
            <a href='https://eda.yandex.ru/partner/rabota/courier_city'>
            <button className='btnAllCitys'>
              все города
            </button>
            </a>
            
          </div>
        </div>
        </div> : 
        <div>
        <div className='citisBlock'>
          <div className='blockBig' style={{width: '150px'}}>
            <p className='textBlock'>
              Москва
            </p>
          </div>
          <div className='blockBig' style={{width: '270px'}}>
            <p className='textBlock'>
              Санкт-Петербург
            </p>
          </div>
          <div className='blockBig' style={{width: '160px'}}>
            <p className='textBlock'>
              Воронеж
            </p>
          </div>
          <div className='blockBig' style={{width: '270px'}}>
            <p className='textBlock'>
              Нижний Новгород
            </p>
          </div>
        </div>
        <div className='citisBlock' style={{marginTop: 10}}>
          <div className='blockBig' style={{width: '230px'}}>
            <p className='textBlock'>
              Екатеринбург
            </p>
          </div>
          <div className='blockBig' style={{width: '190px'}}>
            <p className='textBlock'>
              Казань
            </p>
          </div>
          <div className='blockBig' style={{width: '230px'}}>
            <p className='textBlock'>
              Ростов-на-Дону
            </p>
          </div>
          <div className='blockBig' style={{width: '190px'}}>
            <p className='textBlock'>
              Перьмь
            </p>
          </div>
        </div>
        <div className='citisBlock' style={{marginTop: 10}}>
          <div className='blockBig' style={{width: '230px'}}>
            <p className='textBlock'>
              Красноярск
            </p>
          </div>
          <div className='blockBig' style={{width: '190px'}}>
            <p className='textBlock'>
              Челябинск
            </p>
          </div>
          <div className='blockBig' style={{width: '230px'}}>
            <p className='textBlock'>
              Новосибирск
            </p>
          </div>
          <div className='blockBig' style={{width: '190px'}}>
            <p className='textBlock'>
              Самара
            </p>
          </div>
        </div>
        <div className='citisBlock' style={{marginTop: 10}}>
          <div className='blockBig' style={{width: '135px'}}>
            <p className='textBlock'>
              Омск
            </p>
          </div>
          <div className='blockBig' style={{width: '115px'}}>
            <p className='textBlock'>
              Уфа
            </p>
          </div>
          <div className='blockBig' style={{width: '240px'}}>
            <p className='textBlock'>
              Волгоград
            </p>
          </div>
          <div className='blockBig' style={{width: '360px', backgroundColor: "rgb(34, 15, 9)", color: "white"}}>
            <p className='textBlock'>
            <a style={{ textDecoration: "none", color: "white" }} href='https://eda.yandex.ru/partner/rabota/courier_city'>
                заполнить анкету
            </a>
            </p>
          </div>
        </div>
        </div>
        }
       
      </div>
    </div>
  )
};
