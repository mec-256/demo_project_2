import { pgTable, text, serial, integer, boolean, decimal, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const cities = pgTable("cities", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  code: text("code").notNull().unique(),
  state: text("state").notNull(),
  population: integer("population").notNull(),
  marketPotential: decimal("market_potential", { precision: 10, scale: 2 }).notNull(),
  deliveryCoverage: decimal("delivery_coverage", { precision: 5, scale: 2 }).notNull(),
  inventoryScore: integer("inventory_score").notNull(),
  roiProjection: decimal("roi_projection", { precision: 5, scale: 2 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const cityMetrics = pgTable("city_metrics", {
  id: serial("id").primaryKey(),
  cityId: integer("city_id").notNull(),
  demandHigh: integer("demand_high").notNull(),
  demandMedium: integer("demand_medium").notNull(),
  demandLow: integer("demand_low").notNull(),
  deliveryZones: integer("delivery_zones").notNull(),
  avgDeliveryTime: integer("avg_delivery_time").notNull(),
  costPerDelivery: decimal("cost_per_delivery", { precision: 8, scale: 2 }).notNull(),
  groceriesStock: integer("groceries_stock").notNull(),
  electronicsStock: integer("electronics_stock").notNull(),
  apparelStock: integer("apparel_stock").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const simulations = pgTable("simulations", {
  id: serial("id").primaryKey(),
  cityId: integer("city_id").notNull(),
  populationFactor: decimal("population_factor", { precision: 3, scale: 2 }).notNull(),
  economicIndex: decimal("economic_index", { precision: 3, scale: 2 }).notNull(),
  competitionLevel: decimal("competition_level", { precision: 3, scale: 2 }).notNull(),
  result: text("result").notNull(), // JSON string of simulation results
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertCitySchema = createInsertSchema(cities).omit({
  id: true,
  createdAt: true,
});

export const insertCityMetricsSchema = createInsertSchema(cityMetrics).omit({
  id: true,
  createdAt: true,
});

export const insertSimulationSchema = createInsertSchema(simulations).omit({
  id: true,
  createdAt: true,
});

export const simulationRequestSchema = z.object({
  city: z.string().min(1),
  populationFactor: z.number().min(0.5).max(2),
  economicIndex: z.number().min(0.5).max(2),
  competitionLevel: z.number().min(0.5).max(2),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type City = typeof cities.$inferSelect;
export type InsertCity = z.infer<typeof insertCitySchema>;
export type CityMetrics = typeof cityMetrics.$inferSelect;
export type InsertCityMetrics = z.infer<typeof insertCityMetricsSchema>;
export type Simulation = typeof simulations.$inferSelect;
export type InsertSimulation = z.infer<typeof insertSimulationSchema>;
export type SimulationRequest = z.infer<typeof simulationRequestSchema>;
