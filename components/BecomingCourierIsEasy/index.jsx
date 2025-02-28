import React from 'react';
import './style.scss';
import sumkaS from '../../assets/images/sumkaS.png';
import { motion } from 'framer-motion';

export default () => {
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
    <div className='containerBecomingCourierIsEasy'>
      {screenWidth < 500 ? 
        <p className='headerBecomingCourierIsEasy'>
          стать курьером —<br />
          просто
        </p> :
        <p className='headerBecomingCourierIsEasy'>
          стать курьером —<br />
          быстро и просто
        </p>
      }
      
      <div className='blocksPunkts'>
        <div className='groupOne'>
          <div className='blockOnesPunkts' >
            <p className='numberIndexCard'
              style={{
                marginLeft: '30px',
                paddingTop: '20px'
              }}
            >
              1
            </p>
            <p className='minimumConnectTextPOne'
              style={{
                marginLeft: '30px',
                paddingTop: '5px'
              }}
            >
              заполните<br />
              анкету
            </p>
            <p className='greytext'
              style={{
                marginLeft: '30px',
                paddingTop: '5px'
              }}
            >
              это займёт 2–3 минуты
            </p>

            <div className='blockImagePunkts'>
              <img 
                className='blockImgPunkts'
                src={sumkaS}
              />
            </div>
          </div>
          <div className='blockTwoPunkts'>
            <p className='numberIndexCard'
              style={{
                marginLeft: '30px',
                paddingTop: '20px'
              }}
            >
              3
            </p>
            <p className='minimumConnectTextPOne'
              style={screenWidth < 800 ? {
                marginLeft: '30px',
                paddingTop: '20px'
              } : {
                marginLeft: '30px',
                paddingTop: '10px'
              }}
            >
              выберите адрес{screenWidth < 500 ?  <></> : <br />} и день, чтобы<br /> получить сумку
            </p>
          </div>
        </div>

        <div className='groupTwo'>
          <div className='blockThreePunkts'>
            <p className='numberIndexCard'
              style={screenWidth < 800 ?{
                marginLeft: '30px',
                paddingTop: '20px',
              } : {
                marginLeft: '90%',
                paddingTop: '20px',
              }}
            >
              2
            </p>
            <p
              className='minimumConnectTextPOne'
              style={screenWidth < 800 ?{
                marginLeft: '30px',
                paddingTop: '10px',
              } : {
                marginLeft: '220px',
                paddingTop: '20px',
              }}
            >
              пройдите{screenWidth < 500 ?  <></> : <br />} короткое{screenWidth < 500 ?  <></> : <br />} обучение
            </p>
            <p className='greytext'
              style={screenWidth < 800 ?{
                marginLeft: '30px',
                paddingTop: '10px',
              } : {
                marginLeft: '220px',
                paddingTop: '20px',
              }}
            >
              это ещё пара минут
            </p>
          </div>
          <div className='blockFoutPunkts'>
            <p className='numberIndexCard'
              style={screenWidth < 800 ?{
                marginLeft: '30px',
                paddingTop: '20px',
              } : {
                marginLeft: '90%',
                paddingTop: '20px',
              }}
            >
              4
            </p>
            <p className='minimumConnectTextPOne'
              style={screenWidth < 800 ?{
                marginLeft: '30px',
                paddingTop: '10px',
              } : {
                marginLeft: '220px',
                paddingTop: '90px',
              }}
            >
              вы готовы<br /> к доставкам!
            </p>
          </div>
        </div>
      </div>
      <button className='btnBecomingCouriers'>
        <a style={{ textDecoration: "none", color: "black" }} href='https://reg.eda.yandex.ru/?advertisement_campaign=seo_eda'>
          заполнить анкету
        </a>
      </button>
    </div>
  )
}
