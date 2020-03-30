import './config/env'
import MongoClient from './config/db'
import app from './config/express'
import Logger from './config/logger'
import fetchAndStore from './helpers/fetch-and-store'

const start = async () => {
  try {
    await new MongoClient().getInstance(app)
    // Execute once the service is running
    await fetchAndStore()
  } catch (error) {
    Logger.error(error)
  }
}

start()
