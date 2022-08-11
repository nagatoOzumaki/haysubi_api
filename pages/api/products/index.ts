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
}[];



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {profil}=req.query
  if(profil==='designer'){
    const newProducts=products.filter(product=>product.categories==='Electronics')
    res.status(200).json([...newProducts]);
  }else{
  res.status(200).json([...products]);
}
}