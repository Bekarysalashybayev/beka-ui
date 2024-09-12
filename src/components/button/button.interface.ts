export type SizeType = 's' | 'm' | 'l'
export type VariantType = 'primary' | 'secondary'

export interface ButtonProps {
    variant?: VariantType,
    size?: SizeType,
}
