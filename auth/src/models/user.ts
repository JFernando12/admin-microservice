import { PermissionTypes } from '../events/types/permission-types';
import mongoose from 'mongoose';

interface UserAttrs {
  username: string;
  email: string;
  permission: string;
}

export interface UserDoc extends mongoose.Document {
  username: string;
  email: string;
  permission: PermissionTypes;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    permission: {
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

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
