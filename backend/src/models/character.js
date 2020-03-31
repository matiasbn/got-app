import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

// Example
// const character = {
//   id: 'numero',
//   name: 'Andar Royce',
//   sex: 'Male',
//   slug: 'Andar Royce',
//   house: 'House Royce',
//   books:
//         ['A Game of Thrones',
//           'A Clash of Kings',
//           'A Storm of Swords',
//           'A Feast for Crows',
//           'A Dance with Dragons'],
//   titles: ['Ser'],
//   imageLink: null,
// }

const CharacterSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  rank: {
    type: Number,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  house: {
    type: String,
    required: true,
  },
  books: {
    type: Array,
  },
  titles: {
    type: Array,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
}, {
  autoIndex: true,
  timestamps: true,
})

CharacterSchema.plugin(uniqueValidator)
export default mongoose.model('Characters', CharacterSchema, 'characters')
