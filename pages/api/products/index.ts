// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import products from '../../../data';


type Data = ({
  id: string;
  title: string;
  price: string;
  description: string;
  categories: string;
  image: string[];
  rating: string;
  review:string[];
  quantity:number
})[];



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const {profil}=req.query
  if(profil){
    const newProducts=products.filter(product=>product?.categories===profil)
    res.status(200).json([...newProducts]);
  }else{
  res.status(200).json([...products]);
}
}