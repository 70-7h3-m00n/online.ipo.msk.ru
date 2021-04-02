const Header = () => {
  return (
    <>
      <header>
        <div className='header-top'>
          <div className='container'>
            <div className='header-top-content'>
              <a href='/' className='main-logo'>
                <img src='/assets/images/main-logo.png' alt='' />
                <span>Институт Профессионального образования</span>
              </a>
              <div className='header-detail'>
                <img src='/assets/images/icon-marker.svg' alt='' />
                <div>
                  <div className='title'>Москва</div>
                  <p>Дербеневская набережная 11</p>
                </div>
              </div>
              <div className='header-detail'>
                <img src='/assets/images/icon-headset.svg' alt='' />
                <div>
                  <div className='title'>Приемная комиссия</div>
                  <p>пн-пт с 9-00 до 19-00</p>
                </div>
              </div>
              <div className='header-phone'>
                <a href='tel:+7-499-110-72-48' className='tel'>
                  +7 (499) 110-72-48
                </a>
                <p>Есть вопросы? Звоните</p>
              </div>
              <div className='mobile-buter'>
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>
          </div>
        </div>
        <div className='header-bottom'>
          <div className='container'>
            <ul className='header-menu scroll-anchor'>
              <li>
                <a href='#why-me'>Почему мы</a>
              </li>
              <li>
                <a href='#profit'>Выгода</a>
              </li>
              <li>
                <a href='#specialties'>Специальности</a>
              </li>
              <li>
                <a href='#scheme'>Схема работы</a>
              </li>
              <li>
                <a href='#documents'>Документы</a>
              </li>
              <li>
                <a href='#who-study'>Кому подойдет</a>
              </li>
              <li>
                <a href='#admission'>Поступление</a>
              </li>
              <li>
                <a href='#clients'>Нам доверяют</a>
              </li>
              <li>
                <a href='#contacts'>Контакты</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className='mobile-overlay'></div>
      <div className='header-mobile'>
        <div className='header-phone'>
          <a href='tel:+7-499-110-72-48' className='tel'>
            +7 (499) 110-72-48
          </a>
          <p>Есть вопросы? Звоните</p>
        </div>
        <ul className='mobile-header-menu scroll-anchor'>
          <li>
            <a href='#why-me'>Почему мы</a>
          </li>
          <li>
            <a href='#profit'>Выгода</a>
          </li>
          <li>
            <a href='#specialties'>Специальности</a>
          </li>
          <li>
            <a href='#scheme'>Схема работы</a>
          </li>
          <li>
            <a href='#documents'>Документы</a>
          </li>
          <li>
            <a href='#who-study'>Кому подойдет</a>
          </li>
          <li>
            <a href='#admission'>Поступление</a>
          </li>
          <li>
            <a href='#clients'>Нам доверяют</a>
          </li>
          <li>
            <a href='#contacts'>Контакты</a>
          </li>
        </ul>
        <ul className='header-contacts'>
          <li>
            <div className='title'>Москва</div>
            <p>Дербеневская набережная 11</p>
          </li>
          <li>
            <div className='title'>Приемная комиссия</div>
            <p>пн-пт с 9-00 до 19-00</p>
          </li>
        </ul>
        <div className='header-mobile-close'>
          <img src='/assets/images/close.svg' alt='' />
        </div>
      </div>
    </>
  );
};

export default Header;
