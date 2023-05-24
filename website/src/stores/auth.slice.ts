import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ethers } from "ethers";

import contractAddress from "@contracts/contract-address.json";
import packageArtifact from "@contracts/Packages.json";

interface AuthState {
  selectedAddress?: string;
  networkError?: string;
  provider?: ethers.providers.Web3Provider;
  token?: any;
}

const initialState: AuthState = {};
const HARDHAT_NETWORK_ID = 1337;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initializeEthers(state, action) {
      state.provider = new ethers.providers.Web3Provider(window.ethereum);

      state.token = new ethers.Contract(
        contractAddress.Token,
        packageArtifact.abi,
        state.provider.getSigner(0)
      );

      state.selectedAddress = action.payload;
    },
    resetState(state) {
      state = initialState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(connectWallet.fulfilled, (state, action) => {
        state.selectedAddress = action.payload;
      })
      .addCase(connectWallet.rejected, (state, action) => {
        state.networkError = action.payload as string;
      });
  },
});

const { initializeEthers, resetState } = authSlice.actions;

export const connectWallet = createAsyncThunk<string, void, { rejectValue: string }>("auth/connectWallet", async (_, { rejectWithValue, dispatch }) => {
    const [selectedAddress] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    if (window.ethereum.networkVersion === HARDHAT_NETWORK_ID) {
      return rejectWithValue("Please connect Metamask to Localhost:8545");
    } else {
      dispatch(initializeEthers(selectedAddress));

      window.ethereum.on("accountsChanged", ([newAddress]: any) => {
        if (newAddress === undefined) {
          dispatch(resetState());
          return;
        }

        dispatch(initializeEthers(newAddress));
      });

      window.ethereum.on("chainChanged", ([networkId]: any) => {
        dispatch(resetState());
      });

      return selectedAddress;
    }
  }
);

export default authSlice.reducer;
