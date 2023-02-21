import { Request, Response, NextFunction } from 'express';

function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  // check if headers have already been sent
  if (res.headersSent) {
    return next(err);
  }

  // set status code and error message
  res.status(500).json({ message: 'Internal server error' });

  // log error to console or error tracking service
  console.error(err);
}

export default errorHandler;