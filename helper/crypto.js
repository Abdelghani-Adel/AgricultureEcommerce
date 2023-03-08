import { AES, enc } from "crypto-js";

export const encrypt = (str) => {
  const ciphertext = AES.encrypt(str, "y/B?E(H+MbQeThWm");
  return encodeURIComponent(ciphertext.toString());
};

export const decrypt = (str) => {
  const decodedStr = decodeURIComponent(str);
  return AES.decrypt(decodedStr, "y/B?E(H+MbQeThWm").toString(enc.Utf8);
};
