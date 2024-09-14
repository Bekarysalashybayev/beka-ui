const types = ['s', 'm', 'l'] as const
export type SizeType =  (typeof types)[number]
export type VariantType = 'primary' | 'secondary'

export interface ButtonProps {
    variant?: VariantType,
    size?: SizeType,
}
