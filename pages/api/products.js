import { getAllProducts } from '@/utils/products.server';

export default async function handler(req, res) {
  const data = await getAllProducts();
  res.status(200).json(data);
}
