import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ethers } from "ethers";

import contractAddress from "@contracts/contract-address.json";
import packageArtifact from "@contracts/Packages.json";

interface PackagesState {
    txBeingSent?: string,
    networkError?: string
}

const initialState: PackagesState = {
    txBeingSent: undefined
}

const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

export const packagesSlice = createSlice({
    name: "packages",
    initialState,
    reducers: {
        setTx(state, action) {
            state.txBeingSent = action.payload;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(createPackage.fulfilled, (state) => {
                state.txBeingSent = undefined;
            })
            .addCase(createPackage.rejected, (state, action) => {
                state.networkError = action.payload as string;
                state.txBeingSent = undefined;
            });
    },
})

const { setTx } = packagesSlice.actions;

export const createPackage = createAsyncThunk<
    void,
    { from: string, to: string, weight: number, value: number },
    { rejectValue: string }
>("packages/createPackage", async ({ from, to, weight, value }, { rejectWithValue, dispatch }) => {
    try {
        var provider = new ethers.providers.Web3Provider(window.ethereum);

        var token = new ethers.Contract(
            contractAddress.Token,
            packageArtifact.abi,
            provider.getSigner(0)
        );

        const tx = await token.createPackage(from, to, weight, weight);
        dispatch(setTx(tx.hash));

        const receipt = await tx.wait();

        if (receipt.status === 0) {
            rejectWithValue("Transaction failed");
        }
    } catch (error: any) {
        if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
            return;
        }

        rejectWithValue(error);
    }
});

export const getPacakge = createAsyncThunk<void, void, { rejectValue: string }>("packages/createPackage", async (_, { rejectWithValue, dispatch }) => {
    var provider = new ethers.providers.Web3Provider(window.ethereum);

    var token = new ethers.Contract(
        contractAddress.Token,
        packageArtifact.abi,
        provider.getSigner(0)
    );

    let eventFilter = token.filters.Delivery();
    let events: any = await token.queryFilter(eventFilter);

    for (var i = 0; i < events.length; i++) {
        let args = events[i].args;
        let packageId = args.packageId.toNumber();

        console.log(packageId);
    }
})

export default packagesSlice.reducer;