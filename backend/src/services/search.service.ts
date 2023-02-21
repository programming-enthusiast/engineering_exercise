import { SearchParams, SearchResults } from "../types/search.type";
import { dataset } from "../data/dataset";

class SearchService {
  public static getSearchResults(searchParams: SearchParams) {
    let searchResults: SearchResults = {
      total: 0,
      totals: [],
      price: {
        lowest: Infinity,
        median: 0,
        highest: 0,
      },
      suggestedVehicles: [],
    };
    // console.log(dataset)
    const suggestedVehicles = [];

    dataset.forEach((vehicle) => {
      if (
        (vehicle.make
          .toLowerCase()
          .includes(searchParams.make?.toLowerCase()) ||
          !searchParams.make) &&
        (vehicle.model
          .toLowerCase()
          .includes(searchParams.model?.toLowerCase()) ||
          !searchParams.model) &&
        (vehicle.year == searchParams.year || !searchParams.year)
      ) {
        searchResults.total += vehicle.vehicle_count;
        searchResults.totals.push({
          make: vehicle.make,
          model: vehicle.model,
          total: vehicle.vehicle_count,
        });

        if (searchResults.price.lowest > vehicle.price)
          searchResults.price.lowest = vehicle.price;

        if (searchResults.price.highest < vehicle.price)
          searchResults.price.highest = vehicle.price;
      }
      if (searchParams.budget) {
        if (
          vehicle.price > searchParams.budget * 0.9 &&
          vehicle.price < searchParams.budget * 1.1
        )
          suggestedVehicles.push(vehicle);
      }
    });

    suggestedVehicles.sort((a, b) => a.price - b.price);
    searchResults.suggestedVehicles = suggestedVehicles.slice(0, 5);

    searchResults.price.lowest = searchResults.price.lowest !== Infinity ? searchResults.price.lowest : 0;
    searchResults.price.median =
      (searchResults.price.lowest + searchResults.price.highest) / 2;

    return searchResults;
  }
}

export default SearchService;
