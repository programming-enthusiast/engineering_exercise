import axios from "axios";
import { SearchResults } from "../types";

export const BASE_URL = "http://localhost:8080";

export async function getSearchResults(
  make: string | undefined,
  model: string | undefined,
  year: string | undefined,
  budget: string | undefined
) : Promise<{ data: SearchResults | null, error: any }> {
  let data: SearchResults;
  try {
    data = (await axios.get(`${BASE_URL}/search-results`, {
      params: {
        make,
        model,
        year,
        budget,
      },
    })).data;
  } catch (error) {
    return {
      data: null,
      error,
    };
  }

  return {
    data,
    error: null,
  };
}
