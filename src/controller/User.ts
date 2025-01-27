import e, { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { findAllUsers, findByEmail, findById, findByIdAndUpdate, passwordMatch, saveUser } from "../services/User";

const getUser = async (req: Request, res: Response) => {
  try {
    const user = await findById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (e) {
    handleHttp(res, "ERROR_GET_USER");
  }
};

const getUsers = (req: Request, res: Response) => {
  try {
    findAllUsers().then((users) => {
      res.status(200).json(users);
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_USERS");
  }
};

const updateUser = (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const body = req.body;

    if (!id) {
      return handleHttp(res, "ERROR_UPDATE_USER");
    }

    findByIdAndUpdate(id, body).then((user) => {
      res.status(200).json(user);
    });
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_USER");
  }

};

const postUser = (req: Request, res: Response) => {
  try {
    const user = req.body;
    console.log(user);
    saveUser(user).then((user) => {
      res.status(201).json(user);
    });
  } catch (e) {
    handleHttp(res, "ERROR_ON_SAVE_USER");
  }
};

const deleteUser = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_USER");
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await findByEmail(email);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      const isMatch = await passwordMatch(email, password);
      if (isMatch) {
        res.status(200).json(user);
      } else {
        res.status(401).json({ message: "Invalid password" });
      }
    }   
  } catch (e) {
    handleHttp(res, "ERROR_LOGIN_USER");
  }
}

export { getUser, getUsers, updateUser, postUser, deleteUser, loginUser };
