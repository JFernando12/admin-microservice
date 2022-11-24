import mongoose from 'mongoose';
import { ImageDoc } from './image';

interface ProductAttrs {
  name: string;
  description: string;
  price: number;
  images: ImageDoc[];
  stock: number;
  weight: number;
  height: number;
  length: number;
  width: number;
}

interface ProductDoc extends mongoose.Document {
  name: string;
  description: string;
  price: number;
  images: ImageDoc[];
  stock: number;
  weight: number;
  height: number;
  length: number;
  width: number;
}

interface ProductModel extends mongoose.Model<ProductDoc> {
  build(attrs: ProductAttrs): ProductDoc;
}

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Image',
    },
  ],
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
  weight: {
    type: Number,
  },
  height: {
    type: Number,
  },
  length: {
    type: Number,
  },
  width: {
    type: Number,
  },
});

productSchema.statics.build = (attrs: ProductAttrs) => {
  return new Product(attrs);
};

const Product = mongoose.model<ProductDoc, ProductModel>(
  'Product',
  productSchema
);

export { Product };
