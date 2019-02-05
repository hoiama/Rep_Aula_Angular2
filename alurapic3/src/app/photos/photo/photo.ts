export interface Photo {
  id: number;
  userId: number;
  postDate: Date;
  url: string;
  description: string;
  allowComents: boolean;
  likes: number;
  comments: number;
}
