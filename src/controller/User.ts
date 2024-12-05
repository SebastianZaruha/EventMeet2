import express, { Request, Response } from 'express';
import UserModel from '../models/User';
import { findAllUsers, saveUser, updateUser } from '../services/User';
const UserController = express();

UserController.get('/list', async(req: Request, res: Response) => {
  try {
    const users = await findAllUsers();
    res.send(users);
  } catch (error) {
    res.status(400)
  }
});
UserController.post('/', async(req: Request, res: Response) => {
  try {
    const user = req.body;
    await saveUser(user);
    res.send('User saved');
  } catch (error) {
    res.status(400)
  }
});
UserController.put('/user/:id', async(req: Request, res: Response) => {
  try {
    const user = req.body;
    const { id = '' } = req.params;
    await updateUser(user, id);
    res.send('User updated');
  } catch (error) {
    res.status(400)
  }
});
UserController.delete('/user/:id', async(req: Request, res: Response) => {
  try {
    const { id = '' } = req.params;
    await UserModel.destroy({
      where: {
        id
      }
    });
    res.send('User deleted');
  } catch (error) {
    res.status(400)
  }
});
UserController.patch('/user/:id', async(req: Request, res: Response) => {    
  try {
    const user = req.body;
    const { id = '' } = req.params;
    await UserModel.update(user, {
      where: {
        id
      }
    });
    res.send('User updated');
  } catch (error) {
    res.status(400)
  }
});
export default UserController;
//https://medium.com/@fawazudeenogunleye/node-setting-up-external-routes-with-express-1228c27640a4
//https://sequelize.org/api/v6/class/src/sequelize.js~sequelize#instance-method-define

//https://dev.to/wizdomtek/typescript-express-building-robust-apis-with-nodejs-1fln ********