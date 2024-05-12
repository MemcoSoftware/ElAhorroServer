import { Schema, model, models } from 'mongoose';
import { IVenta } from '../interfaces/IVenta.interface';

const ventaSchema = new Schema<IVenta>({
  ids_productos: [{
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }],
  fecha_venta: { type: String, required: true },
  total_venta: { type: Number, required: true },
});

const Venta = models.Venta || model<IVenta>('Venta', ventaSchema);

export default Venta;
