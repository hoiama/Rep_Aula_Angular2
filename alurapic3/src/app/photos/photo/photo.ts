/** Aqui temos a representação de uma classe para modelar um objphotoListeto criado a partir dela.**/

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
