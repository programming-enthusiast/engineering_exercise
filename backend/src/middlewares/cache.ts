import * as mcache from 'memory-cache';
import { Request, Response, NextFunction } from "express";

class Cache {
	/**
	 * Checks for the available cached data
	 * or adds if not available
	 */
	public cache(duration: number): any {
		return (req, res, next) => {
			let key = req.originalUrl || req.url;

			let cachedBody = mcache.get(key);
			if (cachedBody) {
				res.send(cachedBody);
			} else {
				res.sendResponse = res.send;
				res.send = (body) => {
					mcache.put(key, body, duration * 1000);
					res.sendResponse(body);
				};
				next();
			}
		};
	}
}

export default new Cache;