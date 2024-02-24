import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { supabase } from '../../supabase/supabase'
import { PostgrestSingleResponse } from '@supabase/supabase-js'
import {
  BannersType,
  DataSliceTypes,
  Product,
  otherImgsTypes
} from './Data.types'
import { toast } from 'sonner'

const initialState: DataSliceTypes = {
  satatus: 'loading',
  error: null,
  bannersData: null,
  categoriesData: null,
  products: null,
  userData: null
}

export const thunkFetchingFromSupabase = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      // getting banners
      const {
        data: banners,
        error: bannerError
      }: PostgrestSingleResponse<BannersType[]> = await supabase
        .from('banners')
        .select('*')

      // getting categories
      const {
        data: categories,
        error: categoryError
      }: PostgrestSingleResponse<otherImgsTypes[]> = await supabase
        .from('categories')
        .select('*')

      // getting Products
      const {
        data: products,
        error: productsError
      }: PostgrestSingleResponse<otherImgsTypes[]> = await supabase
        .from('products')
        .select('*')

      // checking if any error log that
      if (!bannerError || !categoryError || !productsError) {
        return { banners, categories, products }
      } else {
        console.log(bannerError, categoryError, productsError)
      }
    } catch (error: string | unknown) {
      throw new Error(error as string)
    }
  }
)

export const dataSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(thunkFetchingFromSupabase.pending, (state) => {
        state.satatus = 'loading'
      })
      .addCase(thunkFetchingFromSupabase.fulfilled, (state, action) => {
        state.satatus = 'succeeded'

        //  Getting the banners from the data
        state.bannersData = action.payload?.banners as BannersType[]

        //  Getting the categoryies from the data
        state.categoriesData = action.payload?.categories as otherImgsTypes[]

        //  Getting the priducts from the data
        state.products = action.payload?.products as Product[] | null
      })

      .addCase(thunkFetchingFromSupabase.rejected, (state, action) => {
        state.satatus = 'failed'
        state.error = action.error.message as string
      })
  }
})

export const {} = dataSlice.actions
export default dataSlice.reducer
