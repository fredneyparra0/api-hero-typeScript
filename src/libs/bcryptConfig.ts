import bcrypt from 'bcrypt';

export async function generateEncrypt (myPlaintextPassword: string, saltRounds: number): Promise<string>{
	const generate = await bcrypt.hash(myPlaintextPassword, saltRounds)
	return generate
}

export async function validatePass (pass: string, hash: string): Promise<boolean>{
	const validate = await bcrypt.compare(pass, hash)
	return validate
}