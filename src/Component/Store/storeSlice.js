import { createSlice , nanoid} from "@reduxjs/toolkit"

const initialState = () =>({
    weatherData: null,
    errorMsg : null,
    history: []
})

const storeHistorySlice = createSlice({
    name: 'History',
    initialState: initialState(),
    reducers: {
      fetchDataSucess: (state , action) => {
        state.weatherData = action.payload
        state.errorMsg = action.payload.message
      },
      updateSearchHistory: (state ,action) =>{
        const query = action.payload;
        state.history = [query, ...state.history.slice(0,4)]

      }
    }
  })

  export const {fetchDataSucess,updateSearchHistory} = storeHistorySlice.actions
  export default storeHistorySlice.reducer

