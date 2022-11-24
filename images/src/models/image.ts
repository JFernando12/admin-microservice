import mongoose from 'mongoose';

interface ImageAttrs {
  userId: string;
  url: string;
  description: string;
  createdAt: Date;
}

interface ImageDoc extends mongoose.Document {
  userId: string;
  url: string;
  description: string;
  createdAt: Date;
}

interface ImageModel extends mongoose.Model<ImageDoc> {
  build(attrs: ImageAttrs): ImageDoc;
}

const imageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

imageSchema.statics.build = (attrs: ImageAttrs) => {
  return new Image(attrs);
};

const Image = mongoose.model<ImageDoc, ImageModel>('Image', imageSchema);

export { Image };
