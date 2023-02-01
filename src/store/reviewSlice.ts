import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type Review = {
  id: number,
  imgSrc: string,
  header: string,
  text: string
}

type ReviewState = {
  reviews: Review[];
  loading: boolean,
  error: string | null,
}

export const fetchReviews = createAsyncThunk<Review[], undefined, {rejectValue: string}>(
  "reviews/fetchReviews",
  async function(_, { rejectWithValue }) {
    const response = await fetch("https://raw.githubusercontent.com/arcticmonkey07/beer-reviews/master/src/data/data.json");

    if (!response.ok) {
      return rejectWithValue("Server Error!");
    }

    const data = await response.json();

    return data;
  }
);

const initialState: ReviewState = {
  reviews: [],
  loading: false,
  error: null,
}

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
        state.error = null;
      },)
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.loading = false;
      },)
  }
});

export default reviewSlice.reducer;