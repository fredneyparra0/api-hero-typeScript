import jwt from 'jsonwebtoken';
import { Router } from 'express';

const middlewareJwt = Router();

middlewareJwt.use(async (req, res, next) => {
	const headerToken = req.headers['authorization']
	try {
		if (headerToken) {
			const validate = await jwt.verify(headerToken, process.env.KEY_SECRET || '')
			if (validate) {
				next()
			} else {
				res.send({
					error: true,
					content: 'token invalit'
				})
			}
		} else {
			res.send({
				error: true,
				content: 'token no valit'
			})
		}
	} catch (err) {
		console.log(err);
		res.send({ content: "token no valit" })
	}
})

export default middlewareJwt;

export const generateToken = async (): Promise<string> => {
	return await jwt.sign({ check: true }, process.env.KEY_SECRET || '')
}