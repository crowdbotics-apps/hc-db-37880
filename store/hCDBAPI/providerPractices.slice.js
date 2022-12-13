import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_providerpractices_partial_update = createAsyncThunk(
  "providerPractices/api_v1_providerpractices_partial_update",
  async payload => {
    const response = await apiService.api_v1_providerpractices_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_providerpractices_read = createAsyncThunk(
  "providerPractices/api_v1_providerpractices_read",
  async payload => {
    const response = await apiService.api_v1_providerpractices_read(payload)
    return response.data
  }
)
export const api_v1_providerpractices_delete = createAsyncThunk(
  "providerPractices/api_v1_providerpractices_delete",
  async payload => {
    const response = await apiService.api_v1_providerpractices_delete(payload)
    return response.data
  }
)
export const api_v1_providerpractices_update = createAsyncThunk(
  "providerPractices/api_v1_providerpractices_update",
  async payload => {
    const response = await apiService.api_v1_providerpractices_update(payload)
    return response.data
  }
)
export const api_v1_providerpractices_create = createAsyncThunk(
  "providerPractices/api_v1_providerpractices_create",
  async payload => {
    const response = await apiService.api_v1_providerpractices_create(payload)
    return response.data
  }
)
export const api_v1_providerpractices_list = createAsyncThunk(
  "providerPractices/api_v1_providerpractices_list",
  async payload => {
    const response = await apiService.api_v1_providerpractices_list(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const providerPracticesSlice = createSlice({
  name: "providerPractices",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_providerpractices_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_providerpractices_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_providerpractices_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_providerpractices_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_providerpractices_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_providerpractices_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_providerpractices_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_providerpractices_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_providerpractices_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_providerpractices_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_providerpractices_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_providerpractices_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_providerpractices_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_providerpractices_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_providerpractices_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_providerpractices_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_providerpractices_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_providerpractices_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_providerpractices_partial_update,
  api_v1_providerpractices_read,
  api_v1_providerpractices_delete,
  api_v1_providerpractices_update,
  api_v1_providerpractices_create,
  api_v1_providerpractices_list,
  slice: providerPracticesSlice
}
