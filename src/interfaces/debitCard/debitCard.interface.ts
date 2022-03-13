export interface CardInfoType {
  firstName: string
  lastName: string
  cardNumber: string
  endDate: string
  cvv: string
}

export interface DebitCardInfoType {
  cardInfo: CardInfoType
  currentAmount: number
  spendingLimit: number
  alreadySpend: number
  activeSpendingLimit: boolean
}
