// Vercel serverless function for cities endpoint
export default function handler(req, res) {
  const cities = [
    {
      id: 1,
      name: "Hyderabad",
      code: "hyderabad",
      state: "Telangana",
      population: 10000000,
      marketPotential: 85,
      competition: "Medium",
      createdAt: new Date()
    },
    {
      id: 2,
      name: "Mumbai",
      code: "mumbai",
      state: "Maharashtra",
      population: 20000000,
      marketPotential: 92,
      competition: "High",
      createdAt: new Date()
    },
    {
      id: 3,
      name: "Delhi",
      code: "delhi",
      state: "Delhi",
      population: 32000000,
      marketPotential: 88,
      competition: "High",
      createdAt: new Date()
    },
    {
      id: 4,
      name: "Bengaluru",
      code: "bengaluru",
      state: "Karnataka",
      population: 13000000,
      marketPotential: 90,
      competition: "Medium",
      createdAt: new Date()
    },
    {
      id: 5,
      name: "Chennai",
      code: "chennai",
      state: "Tamil Nadu",
      population: 11000000,
      marketPotential: 83,
      competition: "Medium",
      createdAt: new Date()
    }
  ];

  res.status(200).json(cities);
}