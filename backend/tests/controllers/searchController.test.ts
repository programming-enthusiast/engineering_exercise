import request from 'supertest';
import App from '../../src/app';

describe('Search Controller', () => {
  describe('GET /search-results', () => {
    test('should return search results', async () => {
      const app = new App(8081);
      app.start();
    
      const response = await request(app.app).get('/search-results');

      expect(response.status).toBe(200);
      expect(response.body.total).toBeDefined();
      expect(response.body.totals).toBeDefined();
      expect(response.body.price).toBeDefined();
      expect(response.body.suggestedVehicles).toBeDefined();
    });
  });
});