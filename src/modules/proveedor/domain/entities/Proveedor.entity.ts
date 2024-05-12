import { Schema, model, models } from 'mongoose';
import { IProveedor } from '../interfaces/IProveedor.interface';

const proveedorSchema = new Schema<IProveedor>({
  nombre: { type: String, required: true },
  address: { type: String, required: true },
  telefono: { type: String, required: true },
});

const Proveedor = models.Proveedores || model<IProveedor>('Proveedores', proveedorSchema);

export default Proveedor;
