export interface Review {
  reviewId?: number;
  userId: number;
  bookId: number;
  qualification: number;
  comment: string;
}
