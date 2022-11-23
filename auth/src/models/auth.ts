import mongoose from 'mongoose';
import { Password } from '../services/password';
import { UserDoc } from './user';

interface AuthAttrs {
  password: string;
  user: UserDoc;
}

interface AuthDoc extends mongoose.Document {
  password: string;
  user: UserDoc;
}

interface AuthModel extends mongoose.Model<AuthDoc> {
  build(attrs: AuthAttrs): AuthDoc;
}

const authSchema = new mongoose.Schema({
  password: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

authSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});

authSchema.statics.build = (attrs: AuthAttrs) => {
  return new Auth(attrs);
};

const Auth = mongoose.model<AuthDoc, AuthModel>('Auth', authSchema);

export { Auth };
