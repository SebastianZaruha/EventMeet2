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
export const findById = async (id: string) => {//NOTA: DEBERÍAMOS DE USAR NUMBER PARA ID, PUES LOS USUARIOS NO ESTÁN IDENTIFICADOS POR UN STRING, AUNQUE LA CONVERSIÓN ES POSIBLE
  const user = await UserModel.findOne({
    where: {
      id
    }
  });
  return user;
}
export const findByIdAndUpdate = async (id: string, body: any) => {//NOTA: LO MISMO AQUÍ, SI HAY ALGÚN MOTIVO, SIMPLEMENTE DECÍDMELO
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


