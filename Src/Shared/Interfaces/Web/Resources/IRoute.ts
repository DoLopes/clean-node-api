import { Router } from "express";

export interface IRoute {
  configure(router: Router): void;
}
