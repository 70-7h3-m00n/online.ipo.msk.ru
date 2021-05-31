const DynamicDicsDate = () => {
  const currentDate = new Date()
  const currentDay = currentDate.getDate()
  console.log(currentDay)
  let currentMonth = currentDate.getMonth()

  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'Мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
  ]

  return (
    <>
      {currentDay < 20 ? '20' : '5'}{' '}
      {(() => {
        let output
        if (currentDay < 20) {
          output = months[currentMonth]
        } else {
          currentMonth === 11
            ? (output = months[0])
            : (output = months[currentMonth + 1])
        }
        return output
      })()}
    </>
  )
}

export default DynamicDicsDate
