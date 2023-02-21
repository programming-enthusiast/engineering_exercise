import { Request, Response, NextFunction } from "express";
import SearchService from "../services/search.service";
import { SearchParams } from "../types/search.type";

class SearchController {
  public static index(
    req: Request<{}, {}, {}, SearchParams>,
    res: Response,
    next
  ): void {
    const searchResults = SearchService.getSearchResults(req.query);
    res.status(200).json(searchResults);
  }
}

export default SearchController;
