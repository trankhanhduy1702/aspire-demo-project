import { generateSpendingLimit } from '@helpers/global.helper'

export const getSpendingLimitApi = (): Promise<number[]> => {
  return Promise.resolve(generateSpendingLimit())
}
