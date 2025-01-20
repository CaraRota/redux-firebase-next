import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
    currentBoardName: "",
    // Manage the state for opening and closing the Add and Edit Board modal
    isAddAndEditBoardModal: { isOpen: false, variant: "" },
};

export const features = createSlice({
    name: "features",
    initialState,

    reducers: {
        setCurrentBoardName: (state, action: PayloadAction<string>) => {
            state.currentBoardName = action.payload;
        },
        // Open the Add and Edit Board modal with a specified variant (add or edit)
        openAddAndEditBoardModal: (state, { payload }) => {
            state.isAddAndEditBoardModal.isOpen = true;
            // Set the kind of modal to open (add board or edit board) based on the variant parameter
            state.isAddAndEditBoardModal.variant = payload;
        },
        // Close the Add and Edit Board modal
        closeAddAndEditBoardModal: (state) => {
            state.isAddAndEditBoardModal.isOpen = false;
            state.isAddAndEditBoardModal.variant = "";
        },
    },
});
export const { setCurrentBoardName, openAddAndEditBoardModal, closeAddAndEditBoardModal } =
    features.actions;
export const getCurrentBoardName = (state: RootState) => state.features.currentBoardName;
// Selector functions to retrieve isOpen value of state from the isAddAndRditBoardModal state
export const getAddAndEditBoardModalValue = (state: RootState) =>
    state.features.isAddAndEditBoardModal.isOpen;
// Selector functions to retrieve isOpen value of state from the isAddAndRditBoardModal state
export const getAddAndEditBoardModalVariantValue = (state: RootState) =>
    state.features.isAddAndEditBoardModal.variant;
// Export the reducer for use in the Redux store
export default features.reducer;
