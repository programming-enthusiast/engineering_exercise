import express from 'express'
import Cache from '../middlewares/Cache';
import searchController from '../controllers/search.controller'
const cache = Cache.cache;

const router = express.Router()
const cacheDuration = 3600 * 2 // 2 hours

router.get('/', cache(cacheDuration), searchController.index)

export { router as default }