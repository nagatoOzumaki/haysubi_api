// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import products from '../../../data';


type Data = {
  id: string;
  title: string;
  price: string;
  description: string;
  categories: string;
  image: string[];
  rating: string;
  review:string[]
};



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    // const {id}=(req.query as unknown) as {id:number}
    const {id}=req.query
    const product=products.filter(prod=>prod.id==id)[0]
  res.status(200).json(product);
}
