import Aws from 'aws-sdk';
import fs from 'fs';
import path from 'path';

class S3 {
  // readonly bucketName = process.env.AWS_BUCKET_NAME!;
  // readonly region = process.env.AWS_BUCKET_REGION;
  // readonly accessKeyId = process.env.AWS_ACCESS_KEY;
  // readonly secretAccessKey = process.env.AWS_SECRET_KEY;

  readonly bucketName = 'tdg-microservices';
  readonly region = 'us-east-1';
  readonly accessKeyId = 'AKIA5ZFNACTQ5HX7MD66';
  readonly secretAccessKey = '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';

  private s3 = new Aws.S3({
    region: this.region,
    accessKeyId: this.accessKeyId,
    secretAccessKey: this.secretAccessKey,
  });

  public async upload(file: Express.Multer.File) {
    let ContentType = 'image/jpeg';
    if (path.extname(file.path) === '.png') {
      ContentType = 'image/png';
    }

    const fileStream = fs.createReadStream(file.path);

    const uploadParams = {
      Bucket: this.bucketName,
      Body: fileStream,
      Key: file.filename,
      ContentType,
    };
    const result = await this.s3.upload(uploadParams).promise();

    fs.unlinkSync(file.path);

    return result.Location;
  }
}

const s3 = new S3();

export { s3 };
