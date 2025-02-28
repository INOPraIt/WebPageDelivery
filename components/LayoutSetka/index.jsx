import React from 'react';
import './style.scss';
import sumka from '../../assets/images/sumka.png';
import wallet from '../../assets/images/wallet.png';
import veloRent from '../../assets/images/veloRent.png';
import coins from '../../assets/images/coins.png';
import arrow from '../../assets/images/arrow.png';
import programReferal from '../../assets/images/programReferal.png';
import calendar from '../../assets/images/calendar.png';
import chat from '../../assets/images/chat.png';
import insurance from '../../assets/images/insurance.png';

export default ({ open, isOpen }) => {
  // const [isOpen, setIsOpen] = React.useState(false);

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
    <div className='containerLayoutSetka'>
      <div className='groupOneLayoutSetka'>
        <div className='blockOnesLayoutSetcka'>
          <div className='blockText'>
            <p className='textZabota'>
              с заботой <br />о вас
            </p>
          </div>
          <div className='minimumConnect'>
            <div className='textMinimumConnect'>
              <p className='minimumConnectTextPOne'>
                быстрое<br />
                подключение<br />
                к сервису
              </p>
              <p className='minimumConnectTextPTwo'>
                Доставьте первый заказ сразу
                после регистрации
              </p>
            </div>
            <div>
              <img
                className='imgMinimumConnect'
                src={sumka}
              />
            </div>
          </div>
        </div>
        <div className='bigBlockGroupOne'>
          <div className='imgWallet'>
            <img
              className='imgWallet'
              src={wallet}
            />
          </div>
          <div className='divTextBigBlockGroupOne'>
            <p className='minimumConnectTextPOne'>
              выплаты<br />
              каждый день
            </p>
            <p className='minimumConnectTextPTwo'>
              Удобно, если нужно быстро на что-то накопить
            </p>
          </div>
        </div>
      </div>
      <div className='groupTwoLayoutSetka'>
        <div className='leftBlockgroupTwoLayoutSetka'>
          {screenWidth < 500 ?
            <div>
              <div className='discountsInEat' style={{ marginTop: "0px", height: '100px' }}>
                <p className='minimumConnectTextPOne'>
                  скидка на еду
                </p>
                <p className='minimumConnectTextPTwo'>
                  Заказывайте обеды в ресторанах-партнёрах
                </p>
              </div>

              <div className='rentalDiscountsBlock' style={{ marginTop: "10px" }}>
                <div className='textRentalDiscountsBlock'>
                  <p className='minimumConnectTextPOne'>
                    скидки<br /> на аренду<br /> транспорта
                  </p>
                  <p className='minimumConnectTextPTwo'>
                    Арендуйте самокаты и велосипеды со скидкой
                  </p>
                </div>
                <div className='rentalDiscountsBlockImg'>
                  <img
                    className='rentalDiscountsBlockImgImage'
                    src={veloRent}
                  />
                </div>
              </div>
            </div>
            : <div>
              <div className='rentalDiscountsBlock'>
                <div className='textRentalDiscountsBlock'>
                  <p className='minimumConnectTextPOne'>
                    скидки<br /> на аренду<br /> транспорта
                  </p>
                  <p className='minimumConnectTextPTwo'>
                    Арендуйте самокаты и велосипеды со скидкой
                  </p>
                </div>
                <div className='rentalDiscountsBlockImg'>
                  <img
                    className='rentalDiscountsBlockImgImage'
                    src={veloRent}
                  />
                </div>
              </div>

              <div className='discountsInEat'>
                <p className='minimumConnectTextPOne'>
                  скидка на еду
                </p>
                <p className='minimumConnectTextPTwo'>
                  Заказывайте обеды в ресторанах-партнёрах
                </p>
              </div>
            </div>
          }


        </div>
        <div className='rightBlockgroupTwoLayoutSetka'>
          <div className='tipsBlock'>
            <p className='minimumConnectTextPOne'>
              чаевые
            </p>
            <p className='minimumConnectTextPTwo'>
              Все чаевые от клиентов — ваши
            </p>
          </div>
          <div className='bonusReferalBlock'>
            <div className='textBonusReferal'>
              <p className='minimumConnectTextPOne'>
                бонусы за<br />приглашённых<br />курьеров
              </p>
              <p className='minimumConnectTextPTwo'>
                Приводите новых курьеров<br /> и получайте вознаграждение
              </p>
            </div>
            <div className='referalImage'>
              <img
                className='referalImg'
                src={coins}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='groupThreeLayoutSetka'>
        <div className='leftBlockgroupThreeLayoutSetka'>
          <div className='blockleftBlockgroupThreeLayoutSetka'>
            <p className='minimumConnectTextPOne'>
              доплата{screenWidth < 500 ? <></> : <br />} за тяжелые заказы
            </p>
            <p className='minimumConnectTextPTwo'>
              Для заказов от 10 кг. А ещё бесплатное такси,<br />если заказ большой и не помещается в термосумку
            </p>
          </div>
        </div>
        <div className='rightBlockgroupThreeLayoutSetka'>
          <div className='blockrightBlockgroupThreeLayoutSetka'>
            <p className='minimumConnectTextPOne'>
              оплата ожидания
            </p>
            <p className='minimumConnectTextPTwo'>
              Если вы приехали в ресторан, а заказ ещё не готов —
              вам оплатят до 20 минут ожидания
            </p>
          </div>
        </div>
      </div>
      <button
        className='btnMoreAdvantages'
        onClick={() => open(prev => !prev)}
      >
        <p className='textBtnMore'>
          ещё больше преимуществ
        </p>
        <span className="spanMoreBtnIcon">
          <img
            className='imgArrow'
            src={arrow}
            style={isOpen ? { transform: "rotate(270deg)", transition: "0.2s" } : { transition: "0.2s" }}
          />
        </span>
      </button>
      {isOpen &&
        <div className='groupFourLayoutSetka'>
          <div className='leftBlockgroupFourLayoutSetka'>
            {screenWidth < 500 ?
              <div>
                <div className='programReferal'>
                  <div className='textBlockProgramReferal'>
                    <p className='minimumConnectTextPOne'>
                      программа<br />лояльности
                    </p>
                    <p className='minimumConnectTextPTwo'>
                      Для курьеров действует программа лояльности «Прогресс».<br />
                      Чем больше доставок — тем больше бонусов
                    </p>
                  </div>
                  <button className='moreBtnProgramReferal'>
                    подробнее
                  </button>
                  <div className='imageBlockProgramReferal'>
                    <img
                      className='imgProgramReferal'
                      src={programReferal}
                    />
                  </div>
                </div>
              </div>
              :
              <div>
                <div className='programReferal'>
                  <div className='imageBlockProgramReferal'>
                    <img
                      className='imgProgramReferal'
                      src={programReferal}
                    />
                  </div>
                  <div className='textBlockProgramReferal'>
                    <p className='minimumConnectTextPOne'>
                      программа<br />лояльности
                    </p>
                    <p className='minimumConnectTextPTwo'>
                      Для курьеров действует программа лояльности «Прогресс».<br />
                      Чем больше доставок — тем больше бонусов
                    </p>
                  </div>
                  <button className='moreBtnProgramReferal'>
                    подробнее
                  </button>
                </div>
              </div>
            }

            <div className='flexibleScheduleBlock'>
              <div className='textFlexibleScheduleBlock'>
                <p className='minimumConnectTextPOne'>
                  гибкое<br />расписание
                </p>
                <p className='minimumConnectTextPTwo'>
                  Доставляйте заказы когда удобно.<br />Район тоже выбираете вы
                </p>
              </div>
              <div className='flexibleScheduleBlockImage'>
                <img
                  className='imgflexibleScheduleBlockImage'
                  src={calendar}
                />
              </div>
            </div>
          </div>
          <div className='rightBlockgroupFourLayoutSetka'>
            <div className='blockSupport'>
              <div className='textblockSupport'>
                <p className='minimumConnectTextPOne'>
                  поддержка
                </p>
                <p className='minimumConnectTextPTwo'>
                  У курьеров есть чаты, где можно<br /> попросить совет.<br />
                  По самым разным вопросам помогут<br /> служба поддержки или наши юристы
                </p>
              </div>
              <div className='blockSupportImage'>
                <img
                  className='blockSupportImg'
                  src={chat}
                />
              </div>
            </div>
            {screenWidth < 500 ?
              <div>
                <div className='blockCouch'>
                  <div className='textblockCouch'>
                    <p className='minimumConnectTextPOne'>
                      обучение
                    </p>
                    <p className='minimumConnectTextPTwo'>
                      Объясним, как доставлять заказ,<br />
                      складывать продукты в сумку и общаться с клиентами
                    </p>
                  </div>
                </div>
                <div className='blockInsurance'>
                  <div className='textblockInsurance'>
                    <p className='minimumConnectTextPOne' style={screenWidth < 500 ? {width: '90%'} : {}}>
                      страхование<br /> во время доставок
                    </p>
                    <p className='minimumConnectTextPTwo' style={screenWidth < 500 ? {width: '90%'} : {}}>
                      Одна программа действует во время доставок,<br /> другая — после них:<br />
                      в случае травмы или болезни вам положены выплаты
                    </p>
                  </div>
                  <div className='blockInsuranceImage'>
                    <img
                      className='blockInsuranceImg'
                      src={insurance}
                    />
                  </div>
                </div>
              </div> :
              <div>
                <div className='blockInsurance'>
                  <div className='textblockInsurance'>
                    <p className='minimumConnectTextPOne'>
                      страхование<br /> во время доставок
                    </p>
                    <p className='minimumConnectTextPTwo'>
                      Одна программа действует во время доставок,<br /> другая — после них:<br />
                      в случае травмы или болезни вам положены выплаты
                    </p>
                  </div>
                  <div className='blockInsuranceImage'>
                    <img
                      className='blockInsuranceImg'
                      src={insurance}
                    />
                  </div>
                </div>
                <div className='blockCouch' style={{width: '100%', marginLeft: '0%', height: '160px'}}>
                  <div className='textblockCouch'>
                    <p className='minimumConnectTextPOne'>
                      обучение
                    </p>
                    <p className='minimumConnectTextPTwo'>
                      Объясним, как доставлять заказ,<br />
                      складывать продукты в сумку и общаться с клиентами
                    </p>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      }
    </div>
  )
}
