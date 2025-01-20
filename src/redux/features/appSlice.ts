import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
    currentBoardName: "",
    // Manage the state for opening and closing the Add and Edit Board modal
    isAddAndEditBoardModal: { isOpen: false, variant: "" },
    //add and edit tasks modal state
    isAddAndEditTaskModal: { isOpen: false, variant: "", title: "", index: -1, name: "" },

    // Manage the state for opening and closing the Delete Board and Task modal
    isDeleteBoardAndTaskModal: { isOpen: false, variant: "", title: "", status: "", index: -1 },
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
        // Open the Add and Edit task modal with a specified variant (add or edit), title, description, status
        openAddAndEditTaskModal: (state, { payload }) => {
            state.isAddAndEditTaskModal.isOpen = true;
            state.isAddAndEditTaskModal.variant = payload.variant;
            state.isAddAndEditTaskModal.title = payload.title;
            state.isAddAndEditTaskModal.index = payload.index;
            state.isAddAndEditTaskModal.name = payload.name;
        },
        // Close the Add and Edit task modal
        closeAddAndEditTaskModal: (state) => {
            state.isAddAndEditTaskModal.isOpen = false;
            state.isAddAndEditTaskModal.variant = "";
            state.isAddAndEditTaskModal.title = "";
            state.isAddAndEditTaskModal.index = -1;
            state.isAddAndEditTaskModal.name = "";
        },
        // Open the delete board and task modal with a specified variant (delete board or task)
        openDeleteBoardAndTaskModal: (state, { payload }) => {
            state.isDeleteBoardAndTaskModal.isOpen = true;
            state.isDeleteBoardAndTaskModal.variant = payload.variant;
            state.isDeleteBoardAndTaskModal.title = payload.title;
            state.isDeleteBoardAndTaskModal.status = payload.status;
            state.isDeleteBoardAndTaskModal.index = payload.index;
        },
        // Close the delete board and task modal
        closeDeleteBoardAndTaskModal: (state) => {
            state.isDeleteBoardAndTaskModal.isOpen = false;
            state.isDeleteBoardAndTaskModal.variant = "";
            state.isDeleteBoardAndTaskModal.title = "";
            state.isDeleteBoardAndTaskModal.status = "";
            state.isDeleteBoardAndTaskModal.index = -1;
        },
    },
});
export const {
    setCurrentBoardName,
    openAddAndEditBoardModal,
    closeAddAndEditBoardModal,
    openAddAndEditTaskModal,
    closeAddAndEditTaskModal,
    openDeleteBoardAndTaskModal,
    closeDeleteBoardAndTaskModal,
} = features.actions;

export const getCurrentBoardName = (state: RootState) => state.features.currentBoardName;
// Selector functions to retrieve isOpen value of state from the isAddAndRditBoardModal state
export const getAddAndEditBoardModalValue = (state: RootState) =>
    state.features.isAddAndEditBoardModal.isOpen;
// Selector functions to retrieve isOpen value of state from the isAddAndRditBoardModal state
export const getAddAndEditBoardModalVariantValue = (state: RootState) =>
    state.features.isAddAndEditBoardModal.variant;

// Add and Edit Tasks

export const getAddAndEditTaskModalValue = (state: RootState) =>
    state.features.isAddAndEditTaskModal.isOpen;
export const getAddAndEditTaskModalVariantValue = (state: RootState) =>
    state.features.isAddAndEditTaskModal.variant;
export const getAddAndEditTaskModalTitleValue = (state: RootState) =>
    state.features.isAddAndEditTaskModal.title;
export const getAddAndEditTaskModalIndexValue = (state: RootState) =>
    state.features.isAddAndEditTaskModal.index;
export const getAddAndEditTaskModalNameValue = (state: RootState) =>
    state.features.isAddAndEditTaskModal.name;

// Delete Tasks

export const getDeleteBoardAndTaskModalValue = (state: RootState) =>
    state.features.isDeleteBoardAndTaskModal.isOpen;
export const getDeleteBoardAndTaskModalVariantValue = (state: RootState) =>
    state.features.isDeleteBoardAndTaskModal.variant;
export const getDeleteBoardAndTaskModalTitleValue = (state: RootState) =>
    state.features.isDeleteBoardAndTaskModal.title;
export const getDeleteBoardAndTaskModalStatusValue = (state: RootState) =>
    state.features.isDeleteBoardAndTaskModal.status;
export const getDeleteBoardAndTaskModalIndexValue = (state: RootState) =>
    state.features.isDeleteBoardAndTaskModal.index;

// Export the reducer for use in the Redux store
export default features.reducer;
