import { users, cities, cityMetrics, simulations, type User, type InsertUser, type City, type InsertCity, type CityMetrics, type InsertCityMetrics, type Simulation, type InsertSimulation } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getCities(): Promise<City[]>;
  getCityByCode(code: string): Promise<City | undefined>;
  createCity(city: InsertCity): Promise<City>;
  
  getCityMetrics(cityId: number): Promise<CityMetrics | undefined>;
  createCityMetrics(metrics: InsertCityMetrics): Promise<CityMetrics>;
  
  createSimulation(simulation: InsertSimulation): Promise<Simulation>;
  getSimulations(cityId: number): Promise<Simulation[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private cities: Map<number, City>;
  private cityMetrics: Map<number, CityMetrics>;
  private simulations: Map<number, Simulation>;
  private currentUserId: number;
  private currentCityId: number;
  private currentMetricsId: number;
  private currentSimulationId: number;

  constructor() {
    this.users = new Map();
    this.cities = new Map();
    this.cityMetrics = new Map();
    this.simulations = new Map();
    this.currentUserId = 1;
    this.currentCityId = 1;
    this.currentMetricsId = 1;
    this.currentSimulationId = 1;
    
    this.seedData();
  }

  private seedData() {
    // Seed cities
    const cityData = [
      {
        name: "Hyderabad",
        code: "hyderabad",
        state: "Telangana",
        population: 10000000,
        marketPotential: "8.5",
        deliveryCoverage: "85.00",
        inventoryScore: 92,
        roiProjection: "156.00",
        createdAt: new Date()
      },
      {
        name: "Mumbai",
        code: "mumbai",
        state: "Maharashtra",
        population: 20000000,
        marketPotential: "12.5",
        deliveryCoverage: "88.00",
        inventoryScore: 94,
        roiProjection: "168.00",
        createdAt: new Date()
      },
      {
        name: "Delhi",
        code: "delhi",
        state: "Delhi",
        population: 18000000,
        marketPotential: "11.2",
        deliveryCoverage: "92.00",
        inventoryScore: 96,
        roiProjection: "172.00",
        createdAt: new Date()
      },
      {
        name: "Bengaluru",
        code: "bengaluru",
        state: "Karnataka",
        population: 12000000,
        marketPotential: "9.8",
        deliveryCoverage: "87.00",
        inventoryScore: 95,
        roiProjection: "165.00",
        createdAt: new Date()
      },
      {
        name: "Chennai",
        code: "chennai",
        state: "Tamil Nadu",
        population: 11000000,
        marketPotential: "8.9",
        deliveryCoverage: "83.00",
        inventoryScore: 91,
        roiProjection: "159.00",
        createdAt: new Date()
      }
    ];

    cityData.forEach(city => {
      const cityRecord: City = { ...city, id: this.currentCityId++ };
      this.cities.set(cityRecord.id, cityRecord);
    });

    // Seed city metrics
    const metricsData = [
      {
        cityId: 1, // Hyderabad
        demandHigh: 45,
        demandMedium: 35,
        demandLow: 20,
        deliveryZones: 12,
        avgDeliveryTime: 28,
        costPerDelivery: "45.00",
        groceriesStock: 15000,
        electronicsStock: 8500,
        apparelStock: 12000,
        createdAt: new Date()
      },
      {
        cityId: 2, // Mumbai
        demandHigh: 55,
        demandMedium: 30,
        demandLow: 15,
        deliveryZones: 18,
        avgDeliveryTime: 25,
        costPerDelivery: "52.00",
        groceriesStock: 22000,
        electronicsStock: 12500,
        apparelStock: 18000,
        createdAt: new Date()
      },
      {
        cityId: 3, // Delhi
        demandHigh: 60,
        demandMedium: 28,
        demandLow: 12,
        deliveryZones: 20,
        avgDeliveryTime: 22,
        costPerDelivery: "48.00",
        groceriesStock: 25000,
        electronicsStock: 15000,
        apparelStock: 20000,
        createdAt: new Date()
      },
      {
        cityId: 4, // Bengaluru
        demandHigh: 50,
        demandMedium: 32,
        demandLow: 18,
        deliveryZones: 15,
        avgDeliveryTime: 26,
        costPerDelivery: "46.00",
        groceriesStock: 18000,
        electronicsStock: 11000,
        apparelStock: 15000,
        createdAt: new Date()
      },
      {
        cityId: 5, // Chennai
        demandHigh: 42,
        demandMedium: 38,
        demandLow: 20,
        deliveryZones: 14,
        avgDeliveryTime: 30,
        costPerDelivery: "44.00",
        groceriesStock: 16000,
        electronicsStock: 9500,
        apparelStock: 13000,
        createdAt: new Date()
      }
    ];

    metricsData.forEach(metrics => {
      const metricsRecord: CityMetrics = { ...metrics, id: this.currentMetricsId++ };
      this.cityMetrics.set(metricsRecord.id, metricsRecord);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getCities(): Promise<City[]> {
    return Array.from(this.cities.values());
  }

  async getCityByCode(code: string): Promise<City | undefined> {
    return Array.from(this.cities.values()).find(city => city.code === code);
  }

  async createCity(insertCity: InsertCity): Promise<City> {
    const id = this.currentCityId++;
    const city: City = { ...insertCity, id, createdAt: new Date() };
    this.cities.set(id, city);
    return city;
  }

  async getCityMetrics(cityId: number): Promise<CityMetrics | undefined> {
    return Array.from(this.cityMetrics.values()).find(metrics => metrics.cityId === cityId);
  }

  async createCityMetrics(insertMetrics: InsertCityMetrics): Promise<CityMetrics> {
    const id = this.currentMetricsId++;
    const metrics: CityMetrics = { ...insertMetrics, id, createdAt: new Date() };
    this.cityMetrics.set(id, metrics);
    return metrics;
  }

  async createSimulation(insertSimulation: InsertSimulation): Promise<Simulation> {
    const id = this.currentSimulationId++;
    const simulation: Simulation = { ...insertSimulation, id, createdAt: new Date() };
    this.simulations.set(id, simulation);
    return simulation;
  }

  async getSimulations(cityId: number): Promise<Simulation[]> {
    return Array.from(this.simulations.values()).filter(sim => sim.cityId === cityId);
  }
}

export const storage = new MemStorage();
