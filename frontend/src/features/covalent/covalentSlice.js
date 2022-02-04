import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import covalentService from './covalentService';

// Get user from localstorage
//const user = JSON.parse(localStorage.getItem('user'))

// First check to see if user is in local storage, if not set to null
const initialState = {
	userData: null,
	nfts: null,
	address: null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

// Use wallet address to get data from covalent endpoint
export const getNFTsETH = createAsyncThunk(
	'auth/register',
	async (userData, thunkAPI) => {
		try {
			return await covalentService.getNFTsETH(userData);
		} catch (error) {
			// const message =
			//   (error.response &&
			//     error.response.data &&
			//     error.response.data.message) ||
			//   error.message ||
			//   error.toString()

			return thunkAPI.rejectWithValue('doesnt exist');
		}
	}
);

export const covalentSlice = createSlice({
	name: 'covalent',
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = false;
			state.message = '';
		},
		getNfts: (state) => {
			state.nfts = state.userData.items.filter((contract) => {
				return contract.type === 'nft' && contract.nft_data !== null;
			});
		},
		setMetamaskAddress: (state, action) => {
			state.address = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getNFTsETH.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getNFTsETH.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.userData = action.payload;
			})
			.addCase(getNFTsETH.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.userData = null;
			});
	},
});

export const { reset, getNfts, setMetamaskAddress } = covalentSlice.actions;
export default covalentSlice.reducer;
