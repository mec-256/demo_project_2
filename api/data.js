// Vercel serverless function for city data endpoint
export default function handler(req, res) {
  const { query } = req;
  const cityCode = query.cityCode || req.url.split('/').pop();

  const cityData = {
    hyderabad: {
      city: {
        name: "Hyderabad",
        code: "hyderabad",
        state: "Telangana",
        population: 10000000,
        marketPotential: 85,
        competition: "Medium",
        demandScore: 78,
        deliveryScore: 82,
        inventoryScore: 75,
        roiProjection: 24,
        deliveryCoverage: 65,
        competitionLevel: "Medium",
        createdAt: new Date()
      },
      insights: {
        demographics: "Young population with high disposable income, growing IT sector presence",
        infrastructure: "Well-developed transport networks, expanding metro connectivity",
        competition: "Moderate competition with established players, room for differentiation"
      },
      recommendations: [
        {
          type: "expansion",
          priority: "High",
          title: "Prime Location Opportunity",
          description: "Establish flagship store in Hitech City area targeting tech professionals"
        },
        {
          type: "optimization",
          priority: "Medium", 
          title: "Local Partnership Strategy",
          description: "Partner with local distributors for faster market penetration"
        }
      ]
    },
    mumbai: {
      city: {
        name: "Mumbai",
        code: "mumbai",
        state: "Maharashtra",
        population: 20000000,
        marketPotential: 92,
        competition: "High",
        demandScore: 89,
        deliveryScore: 76,
        inventoryScore: 88,
        roiProjection: 32,
        deliveryCoverage: 78,
        competitionLevel: "High",
        createdAt: new Date()
      },
      insights: {
        demographics: "Dense urban population, diverse income levels, high retail consumption",
        infrastructure: "Excellent transport connectivity, established retail ecosystem",
        competition: "Intense competition with major players, price-sensitive market"
      },
      recommendations: [
        {
          type: "expansion",
          priority: "High",
          title: "Suburban Focus Strategy",
          description: "Target emerging suburbs with growing middle-class population"
        },
        {
          type: "optimization",
          priority: "High",
          title: "Digital Integration",
          description: "Leverage online-to-offline strategy for competitive advantage"
        }
      ]
    },
    delhi: {
      city: {
        name: "Delhi",
        code: "delhi",
        state: "Delhi",
        population: 32000000,
        marketPotential: 88,
        competition: "High",
        demandScore: 85,
        deliveryScore: 74,
        inventoryScore: 86,
        roiProjection: 28,
        deliveryCoverage: 72,
        competitionLevel: "High",
        createdAt: new Date()
      },
      insights: {
        demographics: "Large metro population, government sector presence, diverse economic base",
        infrastructure: "Comprehensive metro network, good road connectivity, logistics hubs",
        competition: "Highly competitive market with established retail chains"
      },
      recommendations: [
        {
          type: "expansion",
          priority: "Medium",
          title: "Strategic Location Selection",
          description: "Focus on underserved areas in outer Delhi with growth potential"
        },
        {
          type: "optimization",
          priority: "High",
          title: "Supply Chain Optimization",
          description: "Invest in regional distribution centers for better cost management"
        }
      ]
    },
    bengaluru: {
      city: {
        name: "Bengaluru",
        code: "bengaluru",
        state: "Karnataka",
        population: 13000000,
        marketPotential: 90,
        competition: "Medium",
        demandScore: 87,
        deliveryScore: 80,
        inventoryScore: 83,
        roiProjection: 30,
        deliveryCoverage: 68,
        competitionLevel: "Medium",
        createdAt: new Date()
      },
      insights: {
        demographics: "Tech-savvy population, high purchasing power, international exposure",
        infrastructure: "Growing infrastructure, traffic challenges, expanding IT corridors",
        competition: "Moderate competition, opportunity for premium positioning"
      },
      recommendations: [
        {
          type: "expansion",
          priority: "High",
          title: "Tech Hub Strategy",
          description: "Target IT corridors with premium stores and digital services"
        },
        {
          type: "optimization",
          priority: "Medium",
          title: "Experience Centers",
          description: "Create flagship experience centers in key locations"
        }
      ]
    },
    chennai: {
      city: {
        name: "Chennai",
        code: "chennai",
        state: "Tamil Nadu",
        population: 11000000,
        marketPotential: 83,
        competition: "Medium",
        demandScore: 81,
        deliveryScore: 78,
        inventoryScore: 79,
        roiProjection: 26,
        deliveryCoverage: 62,
        competitionLevel: "Medium",
        createdAt: new Date()
      },
      insights: {
        demographics: "Industrial base, automotive sector, growing services sector",
        infrastructure: "Port connectivity, industrial corridors, expanding metro",
        competition: "Balanced competition with opportunities for growth"
      },
      recommendations: [
        {
          type: "expansion",
          priority: "Medium",
          title: "Industrial Area Focus",
          description: "Target areas near automotive and industrial hubs"
        },
        {
          type: "optimization",
          priority: "Medium",
          title: "Cultural Integration",
          description: "Adapt product mix to local preferences and cultural needs"
        }
      ]
    }
  };

  const data = cityData[cityCode];
  
  if (!data) {
    return res.status(404).json({ error: "City not found" });
  }

  res.status(200).json(data);
}