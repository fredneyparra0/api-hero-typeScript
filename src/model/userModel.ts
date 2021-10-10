import { Schema, model, Document } from 'mongoose';

/*export interface IUser extends Document {
	name: string,
	email: string,
	pass: string
}*/

const schemaUser = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
	    validate: {
	      validator: function(v: any) {
	        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
	      },
	      message: (props: any) => `${props.value} no es valido como correo!`
	    },
	    required: [true, 'User phone number required']
  	},
	pass: {
		type: String,
		required: true
	}
},
{
	timestamps: true
})

export default model('user', schemaUser)