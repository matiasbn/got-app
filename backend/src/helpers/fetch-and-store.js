/* eslint-disable consistent-return */
/* eslint-disable max-len */
import axios from 'axios'
// import debug from 'debug'
import Characters from '../models/character'
import Logger from '../config/logger'

// const debugHelper = debug(`${process.env.DEBUG_NAMESPACE}::helpers::fetch-and-store`)

const fetchAndStore = async () => {
  try {
    const { data: { book: data } } = await axios({ method: 'get', url: 'https://api.got.show/api/general/characters' })
    const { data: books } = await axios({ method: 'get', url: 'https://api.got.show/api/book/characters' })
    const formatted = data.map((character) => {
      const book = books.find((_book) => _book.name === character.name)
      return {
        name: character.name,
        sex: character.gender === 'male' ? 'Male' : 'Female',
        slug: character.slug,
        house: character.house || null,
        rank: character.pagerank.rank || null,
        books: (book && book.books) || null,
        titles: character.titles,
        image: character.image || null,
      }
    })
    // // Insert many avoiding to store multiple times the same id using ordered:false
    await Characters.insertMany(formatted, { ordered: false })
    return formatted
  } catch (error) {
    Logger.error(error)
  }
}

export default fetchAndStore
