import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "damezyhxm",
  api_key: "165716131939544",
  api_secret: "UBjij0BhCXkOuJf_3DJqSAe4dOE",
});

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "posts",
  });
};

export const deleteImage = async (id) => {
  return await cloudinary.uploader.destroy(id);
};
