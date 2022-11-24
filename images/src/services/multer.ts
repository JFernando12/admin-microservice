import multer from 'multer';
import path from 'path';
import mongoose from 'mongoose';

export class Multer {
  public static upload = multer({
    storage: multer.diskStorage({
      destination: path.resolve(__dirname, 'uploads'),
      filename: function (req, file, cb) {
        const uniqueSuffix =
          new mongoose.Types.ObjectId().toHexString() +
          path.extname(file.originalname).toLowerCase();
        cb(null, uniqueSuffix);
      },
    }),
  });
}
