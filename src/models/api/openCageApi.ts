export interface OpenCageApiResponse {
  documentation: string;
  licenses: [
    {
      name: string;
      url: string;
    }
  ];
  rate: {
    limit: number;
    remaining: number;
    reset: number;
  };
  results: OpenCageApiResult[];
  status: {
    code: number;
    message: string;
  };
  timestamp: {
    created_http: string;
    created_unix: number;
  };
  total_results: number;
}

export interface OpenCageApiResult {
  annotations: {
    geohash: string;
  };
  components: {
    'ISO_3166-1_alpha-2': string;
    'ISO_3166-1_alpha-3': string;
    _category: string;
    _type: string;
    city: string;
    city_district: string;
    continent: string;
    country: string;
    country_code: string;
    county: string;
    neighbourhood: string;
    postcode: string;
    road: string;
    road_type: string;
    state: string;
    state_code: string;
    state_district: string;
    suburb: string;
  };
  confidence: number;
  formatted: string;
  geometry: {
    lat: number;
    lng: number;
  };
}
