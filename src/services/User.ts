import UserModel from "../models/User";

export const findAllUsers = async () => {
   const users = await UserModel.findAll();
   return users;
}
export const saveUser = async (user: any) => {
  const newUser = UserModel.build(user);
  await newUser.save();
};
export const updateUser = async (user: any, id: string) => {
  await UserModel.update(user, {
    where: {
      id
    }
  });
}