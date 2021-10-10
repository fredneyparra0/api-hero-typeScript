import { model, Schema } from 'mongoose';

const heroSchema = new Schema({
		name: String,
		powerstats: {
			intelligence: String,
			strength: String,
			speed: String,
			durability: String,
			power: String,
			combat: String
		},
		biography: {
			fullname: String,
			alteregos: String,
			placeofbrith: String,
			alignment: String,
			publisher: String
		},
		work: {
			occupations: String,
			base: String
		}
});

export default model('hero', heroSchema)