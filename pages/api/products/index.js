import Product from '../../../model/productModel';
import connectDb from '../../../config/db';

const handler = async (req, res) => {
  await connectDb();

  if (req.method === 'GET') {
    const products = await Product.find({});

    if (products) {
      res.status(200).json(products);
    } else {
      res.status(404);
      throw new Error('Products not found!');
    }
  }
};

export default handler;
