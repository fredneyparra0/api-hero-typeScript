import { Request, Response } from 'express'
import heroModel from '../model/heroModel'

export const heroById = (req: Request, res: Response) => {
	const idHero = req.params.id;

	res.send('welcome to home')
}


export const insertHero = async (req: Request, res: Response) => {
	try {
		const data: any = req.body;

		const newHero = new heroModel({
			name: data.name,
			powerstats: {
				intelligence: data.intelligence,
				strength: data.strength,
				speed: data.speed,
				durability: data.durability,
				power: data.power,
				combat: data.combat
			},
			biography: {
				fullname: data["full-name"],
				alteregos: data["alter-egos"],
				placeofbrith: data["place-of-birth"],
				alignment: data["fisrt-appearance"],
				publisher: data.publisher
			}

		});

		await newHero.save()
		res.send('hero agregate')
	} catch (err) {
		console.log(err)
		res.send('err please wait again')
	}
}