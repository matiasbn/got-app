/* eslint-disable consistent-return */
/* eslint-disable max-len */
import axios from 'axios'
import debug from 'debug'
import Characters from '../models/character'
import Logger from '../config/logger'

const debugHelper = debug(`${process.env.DEBUG_NAMESPACE}::helpers::fetch-and-store`)

const fetchAndStore = async () => {
  try {
    const apiBaseUrl = 'https://api.got.show'
    const { data: { data } } = await axios({ method: 'get', url: `${apiBaseUrl}/api/map/characters` })
    // imagen(si es que tiene), sexo, slug, rank, casa, libros y titulos
    const formatted = data.map((character) => ({
      id: character._id,
      name: character.name,
      sex: character.male ? 'Male' : 'Female',
      slug: character.slug.replace('_', ' '),
      house: character.house || null,
      books: character.books,
      titles: character.titles,
      imageLink: (character.imageLink && `${apiBaseUrl}${character.imageLink}`) || null,
    }))
    debugHelper(formatted)
    // // Insert many avoiding to store multiple times the same id using ordered:false
    await Characters.insertMany(formatted, { ordered: false })
    return formatted
  } catch (error) {
    Logger.error(error)
  }
}

export default fetchAndStore
