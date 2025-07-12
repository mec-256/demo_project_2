import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { simulationRequestSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all cities
  app.get("/api/cities", async (req, res) => {
    try {
      const cities = await storage.getCities();
      res.json(cities);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch cities" });
    }
  });

  // Get city data by code
  app.get("/api/data/:cityCode", async (req, res) => {
    try {
      const { cityCode } = req.params;
      const city = await storage.getCityByCode(cityCode);
      
      if (!city) {
        return res.status(404).json({ message: "City not found" });
      }

      const metrics = await storage.getCityMetrics(city.id);
      
      if (!metrics) {
        return res.status(404).json({ message: "City metrics not found" });
      }

      res.json({
        city,
        metrics,
        insights: {
          demographics: "Target population shows 78% alignment with Walmart customer profile",
          infrastructure: "85% of delivery zones have adequate road access",
          competition: "Moderate competition density with growth opportunities"
        },
        recommendations: [
          {
            type: "expansion",
            priority: "high",
            title: "Proceed with Expansion",
            description: "Market conditions favorable for new store"
          },
          {
            type: "location",
            priority: "medium",
            title: "Priority Location",
            description: "Consider central district for maximum reach"
          }
        ]
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch city data" });
    }
  });

  // Run simulation
  app.post("/api/simulate", async (req, res) => {
    try {
      const validatedData = simulationRequestSchema.parse(req.body);
      const { city: cityCode, populationFactor, economicIndex, competitionLevel } = validatedData;
      
      const city = await storage.getCityByCode(cityCode);
      if (!city) {
        return res.status(404).json({ message: "City not found" });
      }

      // Simulate complex analysis based on parameters
      const baseMarketPotential = parseFloat(city.marketPotential);
      const baseDeliveryCoverage = parseFloat(city.deliveryCoverage);
      const baseROI = parseFloat(city.roiProjection);

      const simulatedResults = {
        marketPotential: (baseMarketPotential * populationFactor * economicIndex).toFixed(1),
        deliveryCoverage: Math.min(100, baseDeliveryCoverage * (2 - competitionLevel)).toFixed(1),
        inventoryScore: Math.min(100, city.inventoryScore * economicIndex).toFixed(0),
        roiProjection: (baseROI * populationFactor * economicIndex * (2 - competitionLevel)).toFixed(1),
        demandDistribution: {
          high: Math.round(45 * populationFactor * economicIndex),
          medium: Math.round(35 * (2 - competitionLevel)),
          low: Math.round(20 * competitionLevel)
        },
        riskFactors: competitionLevel > 1.5 ? ["High competition", "Market saturation risk"] : ["Low risk", "Favorable conditions"]
      };

      // Store simulation result
      await storage.createSimulation({
        cityId: city.id,
        populationFactor: populationFactor.toString(),
        economicIndex: economicIndex.toString(),
        competitionLevel: competitionLevel.toString(),
        result: JSON.stringify(simulatedResults)
      });

      res.json({
        success: true,
        city: cityCode,
        parameters: { populationFactor, economicIndex, competitionLevel },
        results: simulatedResults
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid simulation parameters", errors: error.errors });
      }
      res.status(500).json({ message: "Simulation failed" });
    }
  });

  // Get simulation history for a city
  app.get("/api/simulations/:cityCode", async (req, res) => {
    try {
      const { cityCode } = req.params;
      const city = await storage.getCityByCode(cityCode);
      
      if (!city) {
        return res.status(404).json({ message: "City not found" });
      }

      const simulations = await storage.getSimulations(city.id);
      const simulationsWithResults = simulations.map(sim => ({
        ...sim,
        result: JSON.parse(sim.result)
      }));

      res.json(simulationsWithResults);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch simulation history" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
