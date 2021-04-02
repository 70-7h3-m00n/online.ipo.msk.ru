const PopUpForm = () => {
  return (
    <>
      {/* Отправить заявку */}
      <div id='orderModal' className='simple-modal'>
        <div className='modal-inner'>
          <div className='modal-image'>
            <img src='/assets/images/modal-pic.jpg' alt='' />
          </div>
          <div className='modal-content'>
            <h4>Заполните форму</h4>
            <div className='desc'>
              Менеджер подберет программу обучения и расскажет о возможных
              скидках
            </div>
            <form action='#' method='post' className='simple-form modal-form'>
              <div className='input-block'>
                <input type='text' placeholder='Имя' />
              </div>
              <div className='input-block'>
                <input type='text' placeholder='E-mail' />
              </div>
              <div className='input-block'>
                <input type='text' placeholder='Телефон' />
              </div>
              <button type='submit' className='button blue-button'>
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopUpForm
