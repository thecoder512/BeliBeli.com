import { CartProduct } from '@/components/Pages/Cart/Cart.types'
import { User } from '@/context/Data/Data.types'
import { addProductToCart } from '@/context/utils/Utils'
import { supabase } from '@/supabase/supabase'
import { PostgrestSingleResponse } from '@supabase/supabase-js'
import { toast } from 'sonner'
import { PushProductCartProps } from './PushProductCart.types'

const PushProductCart = async ({
  products,
  product,
  dispatch
}: PushProductCartProps) => {
  const promise = new Promise((resolve, reject) => {
    const cb = async () => {
      try {
        const { data: user, error: usererror } = await supabase.auth.getUser()

        if (usererror) {
          reject(usererror)
          return
        } else {
          if (products.find((item) => item.art_no === product.art_no)) {
            toast.error('Product already in cartsss')
            reject(false)
          } else {
            const finalProducts: CartProduct[] = [...products, product]

            const { data, error } = (await supabase
              .from('users')
              .update({
                user_cart: finalProducts
              })
              .eq('id', user.user.id)
              .select()) as PostgrestSingleResponse<User[]>

            if (error) {
              reject(usererror)
              throw new Error('Failed to add product to cart')
            } else {
              dispatch(addProductToCart({ product }))
              resolve(data![0].user_cart)
            }
          }
        }
      } catch (error) {
        reject(error)
        throw new Error('something went wrong in adding product to cart')
      }
    }
    cb()
  })

  toast.promise(promise, {
    success: 'Product added to cart!',
    loading: 'Adding product to cart...',
    error: 'Something went wrong!'
  })
}

export { PushProductCart }
