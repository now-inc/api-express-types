import * as express from 'express';

export interface NowIncRequest extends express.Request {
  user: any;
  logger: any;
  ___startTime: any;
  id: string;
}

export { Response, Router, NextFunction } from 'express';
