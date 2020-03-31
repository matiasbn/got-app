/* eslint-disable max-len */
import debug from 'debug'
import Logger from '../config/logger'
import Character from '../models/character'
import fetchAndStore from '../helpers/fetch-and-store'

const { ObjectId } = require('mongoose').Types

const debugControllers = debug(`${process.env.DEBUG_NAMESPACE}::controllers`)

const characters = async (request, response) => {
  try {
    // fetch specific data
    const projection = {
      name: 1,
      house: 1,
    }
    // Fetch not deleted characters
    const chars = await Character.find({ }, projection)
    // Sort by name
    chars.sort((a, b) => a.name.localeCompare(b.name))
    debugControllers(chars)
    return response.success(chars)
  } catch (error) {
    Logger.error(error)
    return response.error(error, 500)
  }
}

const search = async (request, response) => {
  try {
    const { id } = request.params
    if (!ObjectId.isValid(id)) return response.error(`${id} is not a valid Mongo ObjectID`, 422)
    // fetch specific data
    const projection = {
      __v: 0,
      createdAt: 0,
      updatedAt: 0,
    }
    const char = await Character.findOne({ _id: id }, projection).lean()
    debugControllers(char)
    return response.success(char)
  } catch (error) {
    Logger.error(error)
    return response.error(error, 500)
  }
}

const populate = async (request, response) => {
  try {
    const fetched = await fetchAndStore()
    return response.success(fetched)
  } catch (error) {
    Logger.error(error)
    return response.error(error, 500)
  }
}

export default {
  characters,
  search,
  populate,
}
