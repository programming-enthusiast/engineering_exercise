import { Vehicle } from '../models/vehicle.model'

interface SearchParams {
  make: string
  model: string
  budget: number
  year: number
}

interface SearchResults {
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

export {
  SearchParams,
  SearchResults
}