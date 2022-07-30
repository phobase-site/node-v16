export default interface Post {
  name: string,
  imageUrl: string,
  category?: string,
  posterName: string,
  posterImageUrl: string;
  postedAt: Date,
}
