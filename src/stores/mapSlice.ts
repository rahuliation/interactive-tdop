import baseApi from '@/app/baseApi';
import { ChartBulkResponse } from '@/types/MapData';
import { getAggregateChartData } from '@/utils/transformGeoJSON';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface MapSliceState {
  aggregateChartData?: {} ; 
}

const initialState: MapSliceState = {
};

const mapsSlice = createSlice({
  extraReducers: (builder) => {
    builder
    // .addMatcher(authApi.endpoints.login.matchPending, (_state, action) => {
    //   console.log('pending', action)
    // })
    .addMatcher((baseApi.endpoints as any).getChartDataBulk.matchFulfilled, (state: MapSliceState, action: PayloadAction< ChartBulkResponse>) => {
      state.aggregateChartData = getAggregateChartData(action.payload.data)
    })
    // .addMatcher(authApi.endpoints.login.matchRejected, (state, action) => {
    //   // console.log('rejected', action)
    // })
  },
  initialState,
  name: 'map',
  reducers: {
    reset: () => initialState,
    // setData(state, action: PayloadAction<string>) {
    //   state.data = action.payload;
    // },
  },
});



export const { reset } = mapsSlice.actions;

const mapReducer =  mapsSlice.reducer ;

export default mapReducer;


// export const selectIsAuthenticated = (state: RootState) =>
//   state.auth.isAuthenticated
