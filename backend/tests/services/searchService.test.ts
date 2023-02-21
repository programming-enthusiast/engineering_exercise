import SearchService from '../../src/services/search.service'

describe('Search Service', () => {
  test('should return search results', async () => {
    const searchParams = {
      make: 'acur',
      model: 'ILX',
      year: 2019,
      budget: 30000
    }
    const searchResults = SearchService.getSearchResults(searchParams)    

    expect(searchResults.total).toBeDefined();
    expect(searchResults.totals).toBeDefined();
    expect(searchResults.price).toBeDefined();
    expect(searchResults.suggestedVehicles).toBeDefined();
  });
});