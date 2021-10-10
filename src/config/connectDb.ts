import { connect } from 'mongoose';

export async function connectDb () {
	try {
		await connect(process.env.MONGO_URI || 'mongodb')
		console.log('******  Connected  ******')
	}
	catch (err) {
		console.log('*******  ERROR  *******', err)
	}
}