export interface TableData {
  headers: Array<string | number>;
  rows: Array<(string | number)[]>;
}

export interface MakeModelTotal {
  make: string;
  model: string;
  total: number;
}

export interface Vehicle {
  make: string
  model: string
  year: number
  vehicle_count: number
  price: number
}

export interface SearchResults {
  total: number
  totals: Array<{
    make: string
    model: string
    total: number
  }>
  price: {
    lowest: number
    median: number
    highest: number
  }
  suggestedVehicles: Array<Vehicle>
}