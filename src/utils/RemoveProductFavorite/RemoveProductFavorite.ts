import { supabase } from '@/supabase/supabase'
import { PostgrestSingleResponse } from '@supabase/supabase-js'
import { toast } from 'sonner'
import { RemoveProductFavoriteProps } from './RemoveProductFavorite.types'
import { User, removeProductFavorite } from '@/context'

const RemoveProductFavorite = async ({
  product,
  dispatch
}: RemoveProductFavoriteProps) => {
  const promise: Promise<boolean> = new Promise((resolve, reject) => {
    const cb = async () => {
      try {
        const { data: user, error: usererror } = await supabase.auth.getUser()

        if (usererror) {
          reject(false)
          return
        }
        const { data: currentCart, error: currentCartError } = (await supabase
          .from('users')
          .select('favourite_products')
          .eq('id', user.user.id)) as PostgrestSingleResponse<User[]>

        if (currentCartError) {
          reject(false)
          return
        }
        const finalCart = [...(currentCart![0].favourite_products || [])]
        finalCart.splice(
          finalCart.findIndex(
            (item) => item.product_type.art_no === product.product_type.art_no
          ),
          1
        )

        const { data, error } = (await supabase
          .from('users')
          .update({
            favourite_products: finalCart
          })
          .eq('id', user.user.id)
          .select()) as PostgrestSingleResponse<User[]>

        if (error) {
          reject(false)
          throw new Error('something went wrong')
        }
        dispatch(removeProductFavorite({ product }))
        resolve(true)
      } catch (error) {
        reject(false)
        throw new Error('something went wrong')
      }
    }

    cb()
  })

  toast.promise(promise, {
    success: 'Product removed from favourites!',
    loading: 'Removing product from favourites...',
    error: 'Something went wrong!'
  })

  return promise
}

export { RemoveProductFavorite }
