import { updateCartProducts } from '@/context'
import { handleQuantityChangeProps } from './handleQuantityChange.types'

export const handleQuantityChange = ({
  dispatch,
  setQuantity,
  newQuantity,
  item,
  user_id
}: handleQuantityChangeProps) => {
  setQuantity(newQuantity)
  dispatch(
    updateCartProducts({ product: item, quantity: newQuantity, user_id })
  )
}
