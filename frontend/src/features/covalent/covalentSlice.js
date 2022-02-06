import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import covalentService from './covalentService';

const initialState = {
	userData: null,
	userDataPOLY: null,
	nfts: null,
	nftsPOLY: null,
	address: null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	isErrorP: false,
	isSuccessP: false,
	isLoadingP: false,
	message: '',
	connected: '',
};

// Use wallet address to get data from covalent endpoint for ETH NFTS
export const getNFTsETH = createAsyncThunk(
	'covalent/getNFTsETH',
	async (userData, thunkAPI) => {
		try {
			return await covalentService.getNFTsETH(userData);
		} catch (error) {
			return thunkAPI.rejectWithValue('Error with ETH API call');
		}
	}
);

// Use wallet address to get data from covalent endpoint for POLYGON NFTS
export const getNFTsPOLY = createAsyncThunk(
	'covalent/getNFTsPOLY',
	async (userData, thunkAPI) => {
		try {
			return await covalentService.getNFTsPoly(userData);
		} catch (error) {
			return thunkAPI.rejectWithValue('Error with Polygon API call');
		}
	}
);

export const covalentSlice = createSlice({
	name: 'covalent',
	initialState,
	reducers: {

		getNfts: (state) => {
			let finals = [];
			const test = state.userData.items.filter((contract) => {
				return contract.type === 'nft' && contract.nft_data !== null;
			});
			const test2 = test.map((element) => {
				return element.nft_data;
			});
			test2.forEach((e) =>
				e.forEach((el) =>
					finals.push({
						target_id: el.token_id,
						original_owner: el.original_owner,
						name : el.external_data.name,
						description: el.external_data.description,
						image: el.external_data.image,
						image_256: el.external_data.image_256,
						image_512: el.external_data.image_512,
						owner: el.owner

					})
				)
			);
		
			state.nfts = finals;


		},
		getNftsPOLY: (state) => {
			let finals = [];
			const test = state.userDataPOLY.items.filter((contract) => {
				return contract.type === 'nft' && contract.nft_data !== null;
			});
			const test2 = test.map((element) => {
				return element.nft_data;
			});
			test2.forEach((e) =>
				e.forEach((el) =>
					finals.push({
						target_id: el.token_id,
						original_owner: el.original_owner,
						name : el.external_data.name,
						description: el.external_data.description,
						image: el.external_data.image,
						image_256: el.external_data.image_256,
						image_512: el.external_data.image_512,
						owner: el.owner

					})
				)
			);
		
			state.nftsPOLY = finals;


		},
		setMetamaskAddress: (state, action) => {
			state.address = action.payload;
		},
		setConnected: (state, action) => {
			state.connected = action.payload;
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
			})
			.addCase(getNFTsPOLY.pending, (state) => {
				state.isLoadingP = true;
			})
			.addCase(getNFTsPOLY.fulfilled, (state, action) => {
				state.isLoadingP = false;
				state.isSuccessP = true;
				state.userDataPOLY = action.payload;
			})
			.addCase(getNFTsPOLY.rejected, (state, action) => {
				state.isLoadingP = false;
				state.isErrorP = true;
				state.message = action.payload;
				state.userDataPOLY = null;
			});
	},
});

export const { getNfts, getNftsPOLY, setMetamaskAddress,setConnected } = covalentSlice.actions;
export default covalentSlice.reducer;
