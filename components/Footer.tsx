const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='footer-content'>
          <div className='footer-detail'>
            <img src='/assets/images/icon-marker.svg' alt='' />
            <p>
              <strong>Москва</strong> Дербеневская набережная 11
            </p>
          </div>
          <div className='footer-detail'>
            <img src='/assets/images/icon-headset.svg' alt='' />
            <p>
              <strong>Приемная комиссия</strong> пн-пт с 9-00 до 19-00
            </p>
          </div>
          <a href='tel:+7-499-110-72-48' className='footer-phone'>
            +7 (499) 110-72-48
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
