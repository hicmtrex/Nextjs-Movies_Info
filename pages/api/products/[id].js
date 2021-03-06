import Product from '../../../model/productModel';
import connectDb from '../../../config/db';

const handler = async (req, res) => {
  await connectDb();

  if (req.method === 'GET') {
    const product = await Product.findById(req.query.id);

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404);
      throw new Error('product not found!');
    }
  }
};

export default handler;
