import crypto from "crypto";
import multer from "multer";
import { resolve } from "path";

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", folder),
        filename: (_request, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString();
          const fileName = `${fileHash}-${file.originalname}`;

          console.log(fileName);
          return callback(null, fileName);
        },
      }),
    };
  },
};
