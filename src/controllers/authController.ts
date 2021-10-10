import { Request, Response } from 'express';
import userModel from '../model/userModel';
import { generateEncrypt, validatePass } from '../libs/bcryptConfig';
import { generateToken } from '../middlewares/validateToken';

export const authRegister = async (req: Request, res: Response) => {
	try {
		const { name, email, pass } = req.body;
		const generatePassword = await generateEncrypt(pass, 10)
		const newUser = new userModel({
			name,
			email,
			pass: generatePassword
		});
		await newUser.save();
		res.send({ content: "usuario creado satifastoriamente"})
	} catch (err) {
		console.log(err)
		res.send(err)
	}
}

export const authLogin = async (req: Request, res: Response) => {
	try {
		const  body: IUserLogin = req.body;

		const getUser = await userModel.findOne({email: body.email})
		const { pass } = getUser;
		const passValidate = await validatePass(body.pass, pass);
		if (!passValidate) return res.send({ content: "contraseña o email incorrectos" })
		const token = await generateToken()


		res.header({ authorization: token })
		res.send('verification succesfull')
	} catch (err) {
		console.log(err);
		res.send({ content: "contraseña o email incorrectos" })
	}
}


interface IUserLogin {
	email: string,
	pass: string
}