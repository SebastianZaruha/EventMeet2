import UserModel from "../models/User";

export const findAllUsers = async () => {
   const users = await UserModel.findAll();
   return users;
}
export const saveUser = async (user: any) => {
  const newUser = UserModel.build(user);
  await newUser.save();
  return newUser;
};
export const findById = async (id: string) => {//los id son strings porque las http request son en string
  const user = await UserModel.findOne({
    where: {
      id
    }
  });
  return user;
}
export const findByIdAndUpdate = async (id: string, body: any) => {
  const user = await UserModel.update(body, {
    where: {
      id
    }
  });
  return user;
}

export const findByEmail = async (email: string) => {
  const user = await UserModel.findOne({
    where: {
      email
    }
  });
  return user;
}
export const passwordMatch = async (email: string, password: string) => {
  const user = await UserModel.findOne({
    where: {
      email,
      password
    }
  }); 
  return user;
}

export default {
  findAllUsers,
  saveUser,
  findById,
  findByIdAndUpdate,
  findByEmail,
  passwordMatch,
};


