// reviews

export interface RootState {
  review: IReviewsState;
}

export interface IReviewsState {
  reviews: Array<Object>;
  loading: boolean,
  error: string | null,
}