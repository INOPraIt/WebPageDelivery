import React from 'react';
import './style.scss';
import veloYandex from '../../assets/images/veloYandex.png'

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
    <div className='containerThreeBlock'>
      <p className='textHeader'>
        преимущества курьеров<br /> на личном или арендованном<br /> транспорте
      </p>
      <div className='advantagesBlocks'>
        <div className='oneBlockadvantages'>
          <div className='textOneBlockadvantages'>
            <p className='minimumConnectTextPOne'>
              выше доход
            </p>
            <p className='minimumConnectTextPTwo'>
              доход велокурьера больше на 35%
            </p>
            <p className='minimumConnectTextPTwo'>
              доход автокурьера больше на 60%
            </p>
          </div>
          <div className='oneBlockadvantagesImage'>
            <img
              className='oneBlockadvantagesImg'
              src={veloYandex}
            />
          </div>
        </div>

        {screenWidth < 500 ?
          <div style={{ marginTop: '100px' }}>
            <div className='twoBlockadvantages'>
              <div className='textTwoBlockadvantages'>
                <p className='minimumConnectTextPOne'>
                  приоритет
                </p>
                <p className='minimumConnectTextPTwo'>
                  на транспорте вы можете<br /> чаще получать заказы
                </p>
              </div>
            </div>
            <div className='twoBlockadvantages'>
              <div className='textTwoBlockadvantages'>
                <p className='minimumConnectTextPOne'>
                  скорость
                </p>
                <p className='minimumConnectTextPTwo'>
                  успевайте доставлять<br /> больше заказов
                </p>
              </div>
            </div>
          </div>
          :
          <div style={{display: 'flex', width: '70%', justifyContent: 'space-between', marginLeft: '10px'}}>
            <div className='twoBlockadvantages' style={{width: '49.5%'}}>
              <div className='textTwoBlockadvantages'>
                <p className='minimumConnectTextPOne'>
                  приоритет
                </p>
                <p className='minimumConnectTextPTwo'>
                  на транспорте вы можете<br /> чаще получать заказы
                </p>
              </div>
            </div>
            <div className='twoBlockadvantages' style={{width: '49.5%'}}>
              <div className='textTwoBlockadvantages'>
                <p className='minimumConnectTextPOne'>
                  скорость
                </p>
                <p className='minimumConnectTextPTwo'>
                  успевайте доставлять<br /> больше заказов
                </p>
              </div>
            </div>
          </div>
        }

      </div>
      <button className='btnBecomeACourier'>
        <a style={{ textDecoration: "none", color: "white" }} href='https://reg.eda.yandex.ru/?advertisement_campaign=seo_eda'>
          стать курьером
        </a>
      </button>
    </div>
  )
}
