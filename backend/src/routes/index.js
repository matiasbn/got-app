import { Router } from 'express'
import responder from 'express-api-responder'
import trimRequest from 'trim-request'
import Controller from '../controllers'

const router = new Router()

router.use(responder({ includeCode: 'status', includeSuccess: 'success' })).use(trimRequest.all)

router.get('/state', (request, response) => response.success({ message: 'TacTech API is alive!', uptime: process.uptime() }))

router.get('/characters', Controller.characters)

router.get('/characters/:id', Controller.search)

router.get('/populate', Controller.populate)

export default router
