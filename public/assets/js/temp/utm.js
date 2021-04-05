document.addEventListener('DOMContentLoaded', () => {
  const queryString = window.location.search

  const urlParams = new URLSearchParams(queryString)

  const utmSource = urlParams.get('utm_source')
  const utmMedium = urlParams.get('utm_medium')
  const utmCampaign = urlParams.get('utm_campaign')
  const utmContent = urlParams.get('utm_content')
  const utmTerm = urlParams.get('utm_term')
  const utmWorker = urlParams.get('utm_worker')
  const utmCountry = urlParams.get('utm_country')

  // const txts = document.querySelectorAll('.countryBasedLocTxt')

  // if(utmCountry === 'uz'){
  //   txts.forEach(txt => {
  //     txt.innerHTML = 'из Узбекистана!'
  //   })
  // }

  // if(utmCountry === 'kz'){
  //   txts.forEach(txt => {
  //     txt.innerHTML = 'из Казахстана!'
  //   })
  // }
})
