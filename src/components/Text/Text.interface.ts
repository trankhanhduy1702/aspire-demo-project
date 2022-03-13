import { ReactNode } from 'react'
import { TextProps as RNTextProps } from 'react-native'

export type TextType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body4'
  | 'body3'
  | 'body3_Demi'
  | 'body2'
  | 'body2_Medium'
  | 'body2_Demi'
  | 'body2_Bold'
  | 'body1'
  | 'body1_Demi'
  | 'body1_Bold'
  | 'small'

export interface TextProps extends Partial<RNTextProps> {
  type?: TextType
  bold?: boolean
  uppercase?: boolean
  children?: ReactNode
  center?: boolean
}
