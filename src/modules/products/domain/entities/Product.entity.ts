import { Schema, model, models } from 'mongoose';
import { IProduct } from '../interfaces/IProduct.interface';

const productSchema = new Schema<IProduct>({
  id_proveedor: { 
    type: Schema.Types.ObjectId, 
    ref: 'Proveedores', 
    required: true 
  },
  description: { type: String, required: true },
  reference: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true }
});

const Product = models.Product || model<IProduct>('Product', productSchema);

export default Product;
