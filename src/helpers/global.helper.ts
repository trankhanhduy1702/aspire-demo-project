export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

export const randomNumber = (start = 0) =>
  Math.floor(Math.random() * 10) + start

export const generateCardNumber = () => {
  let cardNumber = ''

  for (let index = 0; index < 16; index++) {
    cardNumber = cardNumber + randomNumber().toString()
  }

  return cardNumber
}

export const generateCVV = () => {
  let cvvNumber = ''

  for (let index = 0; index < 3; index++) {
    cvvNumber = cvvNumber + randomNumber().toString()
  }

  return cvvNumber
}

export const generateCurrentAmount = () => {
  return Math.floor(Math.random() * 999999)
}

export const generateSpendingLimit = () => {
  const randomLength = randomNumber(3)
  const arraySpendingLimit = []

  for (let index = 1; index < randomLength; index++) {
    arraySpendingLimit.push(2000 * index)
  }

  return arraySpendingLimit
}

export const generateAlreadySpend = () => {
  return Math.floor(Math.random() * 2000)
}
