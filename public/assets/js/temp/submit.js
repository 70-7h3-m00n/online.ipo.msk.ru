document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form')
  const formsInputs = []

  const getUtms = () => {
    const queryString = window.location.search

    const urlParams = new URLSearchParams(queryString)

    const utmSource = urlParams.get('utm_source')
    const utmMedium = urlParams.get('utm_medium')
    const utmCampaign = urlParams.get('utm_campaign')
    const utmContent = urlParams.get('utm_content')
    const utmTerm = urlParams.get('utm_term')
    const utmWorker = urlParams.get('utm_worker')
    const utmCountry = urlParams.get('utm_country')

    return {
      utmSource,
      utmMedium,
      utmCampaign,
      utmContent,
      utmTerm,
      utmWorker,
      utmCountry,
    }
  }
  const utms = getUtms()

  const appIsSentEvent = new Event('appIsSent')
  window.addEventListener('appIsSent', () => {
    dataLayer.push({ event: 'appIsSent' })
  })

  const submitToEmail = async (data) => {
    const req = await fetch('send-mail.php', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    window.dispatchEvent(appIsSentEvent)
    // const res = await req.text();
    // console.log(res);
  }

  // the last param should be submit btn
  const disableInputs = (...inpts) => {
    inpts.forEach((inpt, idx) => {
      inpt.disabled = true
      inpt.style.cursor = 'not-allowed'

      // if not last inpt
      if (inpts[idx + 1]) {
        // remove input labels
        // inpt.parentElement.childNodes[3].innerHTML = ''
        inpt.value = ''
      } else {
        // last inpt
        inpt.style.paddingLeft = '1rem'
        inpt.style.paddingRight = '1rem'
        inpt.style.backgroundColor = '#F2F2F2'
        inpt.style.color = '#bfbfd0'
        inpt.innerHTML = 'Спасибо! Мы скоро с Вами свяжемся'
      }
    })
  }

  const tellUserToFillIn = (inpt, btn) => {
    helper = {
      inptBorder: inpt.style.border,
      btnInnerHtml: btn.innerHTML,
      btnPudding: btn.style.padding,
      btnCursor: btn.style.cursor,
      btnBg: btn.style.backgroundColor,
      btnColor: btn.style.color,
    }

    inpt.style.border = '2px solid #FE334A'
    btn.innerHTML = 'Пожалуйста, введите Ваш номер'
    btn.style.padding = '0 1rem'
    btn.style.cursor = 'not-allowed'
    btn.style.backgroundColor = '#FE334A'
    btn.style.color = '#fff'
    btn.disabled = true

    setTimeout(() => {
      inpt.style.border = helper.inptBorder
      btn.innerHTML = helper.btnInnerHtml
      btn.style.padding = helper.btnPudding
      btn.style.cursor = helper.btnCursor
      btn.style.backgroundColor = helper.btnBg
      btn.style.color = helper.btnColor
      btn.disabled = false
    }, 3000)
  }

  forms.forEach((form, idx) => {
    const name = form.childNodes[0].childNodes[0]
    let email, phone, btn

    if (idx === 0) {
      email = form.childNodes[1].childNodes[0].childNodes[0]
      phone = form.childNodes[1].childNodes[1].childNodes[0]
      btn = form.childNodes[2]
    }

    if (idx === 1) {
      email = form.childNodes[1].childNodes[0]
      phone = form.childNodes[2].childNodes[0]
      btn = form.childNodes[3]
    }

    formsInputs.push({ name, email, phone, btn })
  })

  formsInputs.forEach((formInputs) => {
    formInputs.btn.addEventListener('click', (e) => {
      e.preventDefault()

      if (formInputs.phone.value.length <= 4) {
        tellUserToFillIn(formInputs.phone, formInputs.btn)
      } else {
        let data = {
          name: formInputs.name.value,
          email: formInputs.email.value,
          phone: formInputs.phone.value,
          utmSource: utms.utmSource,
          utmMedium: utms.utmMedium,
          utmCampaign: utms.utmCampaign,
          utmContent: utms.utmContent,
          utmTerm: utms.utmTerm,
          utmWorker: utms.utmWorker,
          utmCountry: utms.utmCountry,
        }
        console.log(data)
        submitToEmail(data)
        disableInputs(
          formInputs.name,
          formInputs.phone,
          formInputs.email,
          formInputs.btn
        )
        // show_popup('thank')
      }
    })
  })
})
