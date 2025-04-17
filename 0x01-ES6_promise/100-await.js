import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let res = {};
  try {
    const uploadResult = await uploadPhoto();
    const createResult = await createUser();

    res = {
      photo: uploadResult,
      user: createResult,
    };
  } catch (err) {
    res = {
      photo: null,
      user: null,
    };
  }

  return res;
}