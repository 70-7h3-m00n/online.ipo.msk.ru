import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Институт Профессионального Образования</title>
        <meta
          name='description'
          content='Профессиональная переподготовка и повышение квалификации. Дистанционно в Московском институте'
        ></meta>
      </Head>
      {/* intro-section */}
      <section className='intro-section'>
        <div className='container'>
          <div className='intro-content'>
            <h1>Профессиональная переподготовка и повышение квалификации</h1>
            <h2>Дистанционно в Московском институте</h2>
            <div className='intro-detail wow fadeInUp' data-wow-duration='1.2s'>
              <div className='title'>
                Подайте заявку на обучение или консультацию сейчас!
              </div>
              <div className='desc'>
                Менеджер подберет программу обучения и расскажет о возможных
                скидках
              </div>
              <div className='bottom-flex'>
                <a
                  href=''
                  className='button'
                  data-src='#orderModal'
                  data-fancybox=''
                >
                  Подать заявку
                </a>
                <div className='note'>
                  Скидка 40% на все программы <span>до 20 мая!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='intro-image'>
          <img
            src='/assets/images/intro-bg.jpg'
            alt='Фон'
            width='1326px'
            height='983px'
          />
          {/* <Image src='/assets/images/intro-bg.jpg' alt='' width={1326} height={983} layout='responsive'/> */}
        </div>
        <div className='intro-wave'>
          <img src='/assets/images/intro-wave.svg' alt='' />
        </div>
      </section>

      {/* why-me-section */}
      <section id='why-me' className='why-me-section'>
        <div className='container'>
          <h2>
            <span>Почему мы</span>
          </h2>
          <ul className='why-me-list'>
            <li
              className='wow fadeInRight'
              data-wow-duration='1.2s'
              data-wow-offset='120'
            >
              <div className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/why-me-1.svg'
                  alt=''
                />
              </div>
              <p>
                <strong>Более 2000 направлений</strong> <br />
                Гуманитарные, технические, а также медицина и психология
              </p>
            </li>
            <li
              className='wow fadeInRight'
              data-wow-duration='1.2s'
              data-wow-offset='120'
              data-wow-delay='0.3s'
            >
              <div className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/why-me-2.svg'
                  alt=''
                />
              </div>
              <p>
                <strong>Диплом</strong> с присвоением квалификации и бессрочным
                правом ведения
              </p>
            </li>
            <li
              className='wow fadeInRight'
              data-wow-duration='1.2s'
              data-wow-offset='120'
              data-wow-delay='0.6s'
            >
              <div className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/why-me-3.svg'
                  alt=''
                />
              </div>
              <p>
                <strong>Ежемесячное зачисление</strong> <br />
                круглый год
              </p>
            </li>
            <li
              className='wow fadeInRight'
              data-wow-duration='1.2s'
              data-wow-offset='120'
              data-wow-delay='0.9s'
            >
              <div className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/why-me-4.svg'
                  alt=''
                />
              </div>
              <p>
                <strong>Индивидуальные условия</strong> для корпоративных
                клиентов
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* profit-section */}
      <section id='profit' className='profit-section'>
        <div className='container'>
          <h2>
            <span>С нами выгодно и удобно обучаться</span>
          </h2>
          <div className='title-desc'>
            Мы сочетаем в себе широкий спектр программ и проверенных технологий
            дистанционного обучения, а также индивидуальный подход к каждому
            слушателю.
          </div>
          <ul className='profit-list'>
            <li>
              <div
                className='image wow zoomIn'
                data-wow-duration='0.8s'
                data-wow-offset='120'
              >
                <img
                  className='lazyload'
                  data-src='/assets/images/profit-1.png'
                  alt=''
                />
              </div>
              <p>
                <strong>13% можно вернуть</strong> в качестве налогового вычета
                за обучение
              </p>
            </li>
            <li>
              <div
                className='image wow zoomIn'
                data-wow-duration='0.8s'
                data-wow-offset='120'
              >
                <img
                  className='lazyload'
                  data-src='/assets/images/profit-2.png'
                  alt=''
                />
              </div>
              <p>
                <strong>24/7 поддержка куратора</strong> Мы всегда готовы
                проконсультировать по любым вопросам, на всех этапах обучения.
              </p>
            </li>
            <li>
              <div
                className='image wow zoomIn'
                data-wow-duration='0.8s'
                data-wow-offset='120'
              >
                <img
                  className='lazyload'
                  data-src='/assets/images/profit-3.png'
                  alt=''
                />
              </div>
              <p>
                <strong>Более 7 лет опыта</strong> Более 15 000 выданных
                дипломов
              </p>
            </li>
            <li>
              <div
                className='image wow zoomIn'
                data-wow-duration='0.8s'
                data-wow-offset='120'
              >
                <img
                  className='lazyload'
                  data-src='/assets/images/profit-4.png'
                  alt=''
                />
              </div>
              <p>
                <strong>Рассрочка без переплат</strong> вы не платите проценты
                за кредит и не тратите время на оформление документов для банка
              </p>
            </li>
            <li>
              <div
                className='image wow zoomIn'
                data-wow-duration='0.8s'
                data-wow-offset='120'
              >
                <img
                  className='lazyload'
                  data-src='/assets/images/profit-5.png'
                  alt=''
                />
              </div>
              <p>
                <strong>Индивидуальная цена</strong> для групп от 5 человек
              </p>
            </li>
            <li>
              <div
                className='image wow zoomIn'
                data-wow-duration='0.8s'
                data-wow-offset='120'
              >
                <img
                  className='lazyload'
                  data-src='/assets/images/profit-6.png'
                  alt=''
                />
              </div>
              <p>
                <strong>Совмещайте с работой</strong> дистанционное обучение и
                сдача сессий без отрыва от работы
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* specialties-section */}
      <section id='specialties' className='specialties-section'>
        <div className='container'>
          <div className='specialties-content'>
            <h2>
              <span>Огромный выбор</span> специальностей
            </h2>
            <ul className='specialties-list'>
              <li>Инженерное дело</li>
              <li>Строительство</li>
              <li>IT-специализации</li>
              <li>Юриспруденция</li>
              <li>Экономика</li>
              <li>Менеджмент</li>
              <li>Психология</li>
              <li>Гуманитарные науки</li>
              <li>Медицина</li>
              <li>Бизнес образование</li>
            </ul>
            <div className='note'>Узнайте о наличии своего направления</div>
            <a
              href=''
              className='button'
              data-src='#orderModal'
              data-fancybox=''
            >
              Узнать
            </a>
          </div>
        </div>
        <div className='specialties-images'>
          <div className='image'>
            <img
              className='lazyload'
              data-src='/assets/images/specialties-bg.png'
              alt=''
            />
          </div>

          <img
            className='lazyload specialties-icons left icon-1 wow zoomIn'
            data-src='/assets/images/specialties-icons/specialties-icons-1.svg'
            alt=''
            data-wow-duration='0.5s'
            data-wow-offset='300'
            data-wow-delay='1.5s'
          />
          <img
            className='lazyload specialties-icons right icon-2 wow zoomIn'
            data-src='/assets/images/specialties-icons/specialties-icons-2.svg'
            alt=''
            data-wow-duration='0.5s'
            data-wow-offset='300'
            data-wow-delay='1.7s'
          />
          <img
            className='lazyload specialties-icons right icon-3 wow zoomIn'
            data-src='/assets/images/specialties-icons/specialties-icons-3.svg'
            alt=''
            data-wow-duration='0.5s'
            data-wow-offset='300'
            data-wow-delay='0.7s'
          />
          <img
            className='lazyload specialties-icons left icon-4 wow zoomIn'
            data-src='/assets/images/specialties-icons/specialties-icons-4.svg'
            alt=''
            data-wow-duration='0.5s'
            data-wow-offset='300'
            data-wow-delay='1.9s'
          />
          <img
            className='lazyload specialties-icons left icon-5 wow zoomIn'
            data-src='/assets/images/specialties-icons/specialties-icons-5.svg'
            alt=''
            data-wow-duration='0.5s'
            data-wow-offset='300'
            data-wow-delay='0.5s'
          />
          <img
            className='lazyload specialties-icons right icon-6 wow zoomIn'
            data-src='/assets/images/specialties-icons/specialties-icons-6.svg'
            alt=''
            data-wow-duration='0.5s'
            data-wow-offset='300'
            data-wow-delay='2.1s'
          />
          <img
            className='lazyload specialties-icons left icon-7 wow zoomIn'
            data-src='/assets/images/specialties-icons/specialties-icons-7.svg'
            alt=''
            data-wow-duration='0.5s'
            data-wow-offset='300'
            data-wow-delay='1.1s'
          />
          <img
            className='lazyload specialties-icons left icon-8 wow zoomIn'
            data-src='/assets/images/specialties-icons/specialties-icons-8.svg'
            alt=''
            data-wow-duration='0.5s'
            data-wow-offset='300'
            data-wow-delay='0.3s'
          />
          <img
            className='lazyload specialties-icons right icon-9 wow zoomIn'
            data-src='/assets/images/specialties-icons/specialties-icons-9.svg'
            alt=''
            data-wow-duration='0.5s'
            data-wow-offset='300'
            data-wow-delay='0.9s'
          />
          <img
            className='lazyload specialties-icons left icon-10 wow zoomIn'
            data-src='/assets/images/specialties-icons/specialties-icons-10.svg'
            alt=''
            data-wow-duration='0.5s'
            data-wow-offset='300'
            data-wow-delay='1.3s'
          />
        </div>
        <div className='specialties-wave'>
          <img src='/assets/images/specialties-wave.svg' alt='' />
        </div>
      </section>

      {/* scheme-section */}
      <section id='scheme' className='scheme-section'>
        <div className='container'>
          <h2>
            <span>Схема нашей работы</span>
          </h2>
          <ul className='scheme-list'>
            <li
              className='wow fadeInBottomRight'
              data-wow-offset='120'
              data-wow-duration='1.4s'
            >
              <div className='number'>01</div>
              <div className='title'>Заявка</div>
              <p>Вы заинтересованы в обучении и оставляете заявку</p>
            </li>
            <li
              className='wow fadeInBottomRight'
              data-wow-offset='120'
              data-wow-duration='1.4s'
              data-wow-delay='0.3s'
            >
              <div className='number'>02</div>
              <div className='title'>Связываемся с вами</div>
              <p>
                Наши менеджеры связываются с Вами, уточняют текущий уровень
                образования и Ваши предпочтения
              </p>
            </li>
            <li
              className='wow fadeInBottomRight'
              data-wow-offset='120'
              data-wow-duration='1.4s'
              data-wow-delay='0.6s'
            >
              <div className='number'>03</div>
              <div className='title'>Подбор программы</div>
              <p>
                На основе уровня образования и предпочтений подбирают
                направление обучения
              </p>
            </li>
            <li
              className='wow fadeInBottomRight'
              data-wow-offset='120'
              data-wow-duration='1.4s'
              data-wow-delay='0.9s'
            >
              <div className='number'>04</div>
              <div className='title'>Составление договора</div>
              <p>
                Вы присылаете по электронной почте скан или фото необходимых
                документов. Специалист приемной комиссии составляет договор
              </p>
            </li>
            <li
              className='wow fadeInBottomRight'
              data-wow-offset='120'
              data-wow-duration='1.4s'
              data-wow-delay='1.2s'
            >
              <div className='number'>05</div>
              <div className='title'>Зачисляем</div>
              <p>
                Вы подаете документы и уже в следующем месяце приступаете к
                дистанционному обучению из своей страны / города. Да, зачисление
                ведется ежемесячно!
              </p>
            </li>
            <li
              className='wow fadeInBottomRight'
              data-wow-offset='120'
              data-wow-duration='1.4s'
              data-wow-delay='1.5s'
            >
              <div className='number'>06</div>
              <div className='title'>Получаете диплом</div>
              <p>
                Смотрите онлайн лекции, в личном кабинете проходите тесты,
                общаетесь с кураторами и в итоге получаете удостоверение или
                диплом установленного образца.
              </p>
            </li>
          </ul>
        </div>
        <img
          className='lazyload scheme-man'
          data-src='/assets/images/scheme-man.svg'
          alt=''
        />
      </section>

      {/* documents-section */}
      <section id='documents' className='documents-section'>
        <div className='container'>
          <h2>
            <span>Документы</span>
          </h2>
          <div className='documents-type'>Образцы дипломов</div>
          <ul className='documents-gallery'>
            <li className='width2'>
              <a
                className='documents-gallery-block'
                href='/assets/images/gallery/gallery-1-big.jpg'
                data-fancybox='documents-gallery'
              >
                <img src='/assets/images/gallery/gallery-1-small.jpg' alt='' />
              </a>
            </li>
            <li>
              <a
                className='documents-gallery-block'
                href='/assets/images/gallery/gallery-2-big.jpg'
                data-fancybox='documents-gallery'
              >
                <img src='/assets/images/gallery/gallery-2-small.jpg' alt='' />
              </a>
            </li>
            <li className='width2'>
              <a
                className='documents-gallery-block'
                href='/assets/images/gallery/gallery-3-big.jpg'
                data-fancybox='documents-gallery'
              >
                <img src='/assets/images/gallery/gallery-3-small.jpg' alt='' />
              </a>
            </li>
            <li>
              <a
                className='documents-gallery-block'
                href='/assets/images/gallery/gallery-4-big.jpg'
                data-fancybox='documents-gallery'
              >
                <img src='/assets/images/gallery/gallery-4-small.jpg' alt='' />
              </a>
            </li>
          </ul>

          <div className='documents-type'>Лицензии</div>
          <ul className='documents-gallery'>
            <li>
              <a
                className='documents-gallery-block'
                href='/assets/images/gallery/gallery-5-big.jpg'
                data-fancybox='documents-gallery'
              >
                <img src='/assets/images/gallery/gallery-5-small.jpg' alt='' />
              </a>
            </li>
            <li>
              <a
                className='documents-gallery-block'
                href='/assets/images/gallery/gallery-6-big.jpg'
                data-fancybox='documents-gallery'
              >
                <img src='/assets/images/gallery/gallery-6-small.jpg' alt='' />
              </a>
            </li>
            <li>
              <a
                className='documents-gallery-block'
                href='/assets/images/gallery/gallery-7-big.jpg'
                data-fancybox='documents-gallery'
              >
                <img src='/assets/images/gallery/gallery-7-small.jpg' alt='' />
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* wants-diplom-section */}
      <section className='wants-diplom-section'>
        <div className='container'>
          <h3>Хотите получить диплом?</h3>
          <a
            href=''
            className='button blue-button'
            data-src='#orderModal'
            data-fancybox=''
          >
            Получить диплом
          </a>
        </div>
        <img
          className='lazyload wants-diplom-image wow fadeInRight'
          data-src='/assets/images/wants-diplom-bg.png'
          alt=''
          data-wow-duration='1.5s'
          data-wow-offset='120'
        />
        <div className='wants-diplom-wave'>
          <img src='/assets/images/wants-diplom-wave.svg' alt='' />
        </div>
      </section>

      {/* who-study-section */}
      <section id='who-study' className='who-study-section'>
        <div className='container'>
          <h2>
            <span>Кому подойдет обучение</span>
          </h2>
          <ul className='who-study-list'>
            <li
              className='wow fadeInLeft'
              data-wow-offset='120'
              data-wow-duration='1.2s'
            >
              <div className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/icon-check-circle.svg'
                  alt=''
                />
              </div>
              <div className='title'>
                Специалистам для расширения своих профессиональных знаний
              </div>
              <p>
                Актуальный лекционный материал, опытные преподаватели-эксперты.
                Престижный диплом после завершения курса.
              </p>
            </li>
            <li
              className='wow fadeInRight'
              data-wow-offset='120'
              data-wow-duration='1.2s'
            >
              <div className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/icon-check-circle.svg'
                  alt=''
                />
              </div>
              <div className='title'>Желающим сменить род деятельности</div>
              <p>
                Если вы получили высшее образование, но не хотите работать по
                выбранной ранее специальности или не можете найти подходящую
                вакансию.
              </p>
            </li>
            <li
              className='wow fadeInLeft'
              data-wow-offset='120'
              data-wow-duration='1.2s'
              data-wow-delay='0.3s'
            >
              <div className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/icon-check-circle.svg'
                  alt=''
                />
              </div>
              <div className='title'>Корпоративным клиентам</div>
              <p>
                Наши преподаватели находят подход к каждому студенту. Обучение
                проходит в удобной форме без отрыва от работы.
              </p>
            </li>
            <li
              className='wow fadeInRight'
              data-wow-offset='120'
              data-wow-duration='1.2s'
              data-wow-delay='0.3s'
            >
              <div className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/icon-check-circle.svg'
                  alt=''
                />
              </div>
              <div className='title'>
                Тем, кто постоянно развивается и ищет новые знания
              </div>
              <p>
                Индивидуальный подход. Легкость обучения. <br />
                Доступ к пройденным лекциям в личном кабинете.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* admission-section */}
      <section id='admission' className='admission-section'>
        <div className='container'>
          <h2>
            <span>Для поступления нужно минимум документов</span>
          </h2>
          <div className='title-desc'>
            Необходимо подавать документы в скинированном виде.
          </div>
          <ul className='admission-list'>
            <li>
              <div className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/admission-1.png'
                  alt=''
                />
              </div>
              <div className='title'>Паспорт</div>
            </li>
            <li>
              <div className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/admission-2.png'
                  alt=''
                />
              </div>
              <div className='title'>Диплом</div>
              <p>Высшее образование или колледж</p>
            </li>
            <li>
              <div className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/admission-3.png'
                  alt=''
                />
              </div>
              <div className='title'>снилс</div>
            </li>
            <li
              className='image wow zoomIn'
              data-wow-duration='1s'
              data-wow-offset='200'
            >
              <div className='admission-consult'>
                <div className='note'>
                  <strong>Возникли вопросы?</strong>
                  Напишите нам
                </div>
                <a
                  href=''
                  className='button'
                  data-src='#orderModal'
                  data-fancybox=''
                >
                  Консультация
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* clients-section */}
      <section id='clients' className='clients-section'>
        <div className='container'>
          <h2>
            <span>Нам доверяют обучение</span>
          </h2>
          <div className='clients-swipe'>
            Для просмотра всех клиентов
            <img src='/assets/images/icon-swipe.png' alt='' />
          </div>
          <ul className='clients-list'>
            <li>
              <img
                className='lazyload'
                data-src='/assets/images/clients/clients-1.png'
                alt=''
              />
            </li>
            <li>
              <img
                className='lazyload'
                data-src='/assets/images/clients/clients-2.png'
                alt=''
              />
            </li>
            <li>
              <img
                className='lazyload'
                data-src='/assets/images/clients/clients-3.png'
                alt=''
              />
            </li>
            <li>
              <img
                className='lazyload'
                data-src='/assets/images/clients/clients-4.png'
                alt=''
              />
            </li>
            <li>
              <img
                className='lazyload'
                data-src='/assets/images/clients/clients-5.png'
                alt=''
              />
            </li>
            <li>
              <img
                className='lazyload'
                data-src='/assets/images/clients/clients-6.png'
                alt=''
              />
            </li>
            <li>
              <img
                className='lazyload'
                data-src='/assets/images/clients/clients-7.png'
                alt=''
              />
            </li>
            <li>
              <img
                className='lazyload'
                data-src='/assets/images/clients/clients-8.png'
                alt=''
              />
            </li>
            <li>
              <img
                className='lazyload'
                data-src='/assets/images/clients/clients-9.png'
                alt=''
              />
            </li>
            <li>
              <img
                className='lazyload'
                data-src='/assets/images/clients/clients-10.png'
                alt=''
              />
            </li>
            <li>
              <img
                className='lazyload'
                data-src='/assets/images/clients/clients-11.png'
                alt=''
              />
            </li>
            <li>
              <img
                className='lazyload'
                data-src='/assets/images/clients/clients-12.png'
                alt=''
              />
            </li>
            <li>
              <img
                className='lazyload'
                data-src='/assets/images/clients/clients-13.png'
                alt=''
              />
            </li>
            <li>
              <img
                className='lazyload'
                data-src='/assets/images/clients/clients-14.png'
                alt=''
              />
            </li>
            <li>
              <img
                className='lazyload'
                data-src='/assets/images/clients/clients-15.png'
                alt=''
              />
            </li>
            <li>
              <img
                className='lazyload'
                data-src='/assets/images/clients/clients-16.png'
                alt=''
              />
            </li>
            <li>
              <img
                className='lazyload'
                data-src='/assets/images/clients/clients-17.png'
                alt=''
              />
            </li>
            <li>
              <img
                className='lazyload'
                data-src='/assets/images/clients/clients-18.png'
                alt=''
              />
            </li>
            <li>
              <img
                className='lazyload'
                data-src='/assets/images/clients/clients-19.png'
                alt=''
              />
            </li>
          </ul>
        </div>
      </section>

      {/* contacts-section */}
      <section id='contacts' className='contacts-section'>
        <div className='container'>
          <div className='contacts-content'>
            <h2>
              <span>Остались вопросы?</span> Поможем!
            </h2>
            <div className='title-desc'>
              Подайте заявку на бесплатную консультацию, менеджер подберет
              программу обучения на основе Ваших предпочтений!
            </div>
            <form
              action='#'
              method='post'
              className='simple-form white-form contacts-form wow fadeInLeft'
              data-wow-offset='120'
              data-wow-duration='1.2s'
            >
              <div className='input-block'>
                <input type='text' placeholder='Имя' />
              </div>
              <div className='inputs-flex'>
                <div className='input-block width-50'>
                  <input type='text' placeholder='E-mail' />
                </div>
                <div className='input-block width-50'>
                  <input type='text' placeholder='Телефон' />
                </div>
              </div>
              <button type='submit' className='button'>
                Отправить
              </button>
            </form>
          </div>
        </div>
        <img
          className='lazyload contacts-image wow fadeInUp'
          data-wow-offset='200'
          data-wow-duration='1.2s'
          data-src='/assets/images/contacts-bg.png'
          alt=''
        />
        <div className='contacts-wave'>
          <img src='/assets/images/contacts-wave.svg' alt='' />
        </div>
      </section>
    </>
  )
}
