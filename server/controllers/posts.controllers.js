import Post from "../models/Post.js";
import { deleteImage, uploadImage } from "../libs/cloudinary.js";
import fs from "fs-extra";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    return res.json(posts);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    let image;

    console.log(req.body);

    if (req.files?.image && req.files.image !== null) {
      const { secure_url, public_id } = await uploadImage(req.files.image.tempFilePath);
      await fs.remove(req.files.image.tempFilePath);
      image = {
        url: secure_url,
        public_id: public_id,
      };
    }

    const newPost = new Post({ title, description, image });
    await newPost.save();

    return res.json(newPost);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPost) return res.status(404).send(`Not Found`);
    return res.json(updatedPost);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) return res.status(404).send(`Not Found`);

    if (deletedPost.image.public_id) await deleteImage(deletedPost.image.public_id);

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send(`Not Found`);
    return res.json(post);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
