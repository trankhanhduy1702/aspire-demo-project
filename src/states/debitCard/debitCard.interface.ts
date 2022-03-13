import { DebitCardInfoType } from '@interfaces/debitCard/debitCard.interface'

export interface DebitCardStateType {
  isLoading: boolean
  error?: Error | null
  debitCardInfo: DebitCardInfoType
}
