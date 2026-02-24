const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());


let states = [
  { id: 1, name: "Andhra Pradesh", population: 49386799, literacyRate: 67.02, annualBudget: 279279, gdp: 14000000 },
  { id: 2, name: "Arunachal Pradesh", population: 1383727, literacyRate: 65.38, annualBudget: 28000, gdp: 300000 },
  { id: 3, name: "Assam", population: 31205576, literacyRate: 72.19, annualBudget: 122000, gdp: 4500000 },
  { id: 4, name: "Bihar", population: 104099452, literacyRate: 61.80, annualBudget: 261885, gdp: 6500000 },
  { id: 5, name: "Chhattisgarh", population: 25545198, literacyRate: 70.28, annualBudget: 121500, gdp: 4000000 },
  { id: 6, name: "Goa", population: 1458545, literacyRate: 88.70, annualBudget: 25000, gdp: 800000 },
  { id: 7, name: "Gujarat", population: 63872399, literacyRate: 78.03, annualBudget: 243965, gdp: 21000000 },
  { id: 8, name: "Haryana", population: 25351462, literacyRate: 75.55, annualBudget: 180000, gdp: 9000000 },
  { id: 9, name: "Himachal Pradesh", population: 6864602, literacyRate: 82.80, annualBudget: 50000, gdp: 2000000 },
  { id: 10, name: "Jharkhand", population: 32988134, literacyRate: 66.41, annualBudget: 110000, gdp: 4500000 },
  { id: 11, name: "Karnataka", population: 61095297, literacyRate: 75.36, annualBudget: 275000, gdp: 18000000 },
  { id: 12, name: "Kerala", population: 33406061, literacyRate: 94.00, annualBudget: 150000, gdp: 12000000 },
  { id: 13, name: "Madhya Pradesh", population: 72626809, literacyRate: 69.32, annualBudget: 240000, gdp: 10000000 },
  { id: 14, name: "Maharashtra", population: 112374333, literacyRate: 82.34, annualBudget: 340000, gdp: 35000000 },
  { id: 15, name: "Manipur", population: 2855794, literacyRate: 79.85, annualBudget: 32000, gdp: 600000 },
  { id: 16, name: "Meghalaya", population: 2966889, literacyRate: 75.48, annualBudget: 30000, gdp: 500000 },
  { id: 17, name: "Mizoram", population: 1097206, literacyRate: 91.33, annualBudget: 25000, gdp: 400000 },
  { id: 18, name: "Nagaland", population: 1978502, literacyRate: 79.55, annualBudget: 27000, gdp: 500000 },
  { id: 19, name: "Odisha", population: 41974218, literacyRate: 72.87, annualBudget: 200000, gdp: 8000000 },
  { id: 20, name: "Punjab", population: 27743338, literacyRate: 75.84, annualBudget: 180000, gdp: 11000000 },
  { id: 21, name: "Rajasthan", population: 68548437, literacyRate: 66.11, annualBudget: 225000, gdp: 14000000 },
  { id: 22, name: "Sikkim", population: 610577, literacyRate: 81.42, annualBudget: 15000, gdp: 200000 },
  { id: 23, name: "Tamil Nadu", population: 72147030, literacyRate: 80.09, annualBudget: 300000, gdp: 22000000 },
  { id: 24, name: "Telangana", population: 35003674, literacyRate: 72.80, annualBudget: 290000, gdp: 15000000 },
  { id: 25, name: "Tripura", population: 3673917, literacyRate: 87.22, annualBudget: 25000, gdp: 700000 },
  { id: 26, name: "Uttar Pradesh", population: 199812341, literacyRate: 67.68, annualBudget: 350000, gdp: 25000000 },
  { id: 27, name: "Uttarakhand", population: 10086292, literacyRate: 78.82, annualBudget: 60000, gdp: 3000000 },
  { id: 28, name: "West Bengal", population: 91276115, literacyRate: 76.26, annualBudget: 310000, gdp: 16000000 }
];


app.get("/", (req, res) => {
  res.send("Express server is running");
});

app.get("/states", (req, res) => {
  res.status(200).json(states);
});

app.get("/states/highest-gdp", (req, res) => {
  if (states.length === 0) {
    return res.status(404).json({ message: "No states found" });
  }

  const highestGDPState = states.reduce((max, state) => {
    return state.gdp > max.gdp ? state : max;
  });

  res.status(200).json(highestGDPState);
});

app.get("/states/:id", (req, res) => {
  const stateId = Number(req.params.id);
  const state = states.find((s) => s.id === stateId);

  if (!state) {
    return res.status(404).json({ message: "State not found" });
  }

  res.status(200).json(state);
});

app.post("/states", (req, res) => {
  const newState = {
    id: states.length + 1,
    name: req.body.name,
    population: req.body.population,
    literacyRate: req.body.literacyRate,
    annualBudget: req.body.annualBudget,
    gdp: req.body.gdp,
  };

  states.push(newState);

  res.status(201).json({
    message: "State created",
    state: newState,
  });
});

app.put("/states/:id", (req, res) => {
  const stateId = Number(req.params.id);
  const index = states.findIndex((s) => s.id === stateId);

  if (index === -1) {
    return res.status(404).json({ message: "State not found" });
  }

  states[index] = {
    id: stateId,
    name: req.body.name,
    population: req.body.population,
    literacyRate: req.body.literacyRate,
    annualBudget: req.body.annualBudget,
    gdp: req.body.gdp,
  };

  res.status(200).json({
    message: "State replaced",
    state: states[index],
  });
});

app.put("/states/:id/budget", (req, res) => {
  const stateId = Number(req.params.id);
  const newAnnualBudget = req.body.annualBudget;

  const state = states.find((p) => p.id === stateId);

  if (!state) {
    return res.status(404).json({ message: "AnnualBudget not found" });
  }

  if (newAnnualBudget === undefined) {
    return res.status(400).json({ message: "Budget value is required" });
  }

  state.annualBudget = newAnnualBudget;

  res.status(200).json({
    message: "Budget updated successfully",
    state: state,
  });
});

app.put("/states/:id/population", (req, res) => {
  const stateId = Number(req.params.id);
  const newPopulation = req.body.population;

  const state = states.find((p) => p.id === stateId);

  if (!state) {
    return res.status(404).json({ message: "Population not found" });
  }

  if (newPopulation === undefined) {
    return res.status(400).json({ message: "Population value is required" });
  }

  state.population = newPopulation;

  res.status(200).json({
    message: "Population updated successfully",
    state: state,
  });
});

app.patch("/states/:id/literacy", (req, res) => {
  const id = Number(req.params.id);
  const newLiteracyRate = req.body.literacyRate;

  const state = states.find((s) => s.id === id);

  if (!state) {
    return res.status(404).json({ message: "LiteracyRate not found" });
  }

  if (newLiteracyRate === undefined) {
    return res.status(400).json({ message: "literacyRate required" });
  }

  state.literacyRate = newLiteracyRate;

  res.status(200).json(state);
});

app.patch("/states/:id/gdp", (req, res) => {
  const id = Number(req.params.id);
  const newGDP = req.body.gdp;

  // state find
  const state = states.find((s) => s.id === id);

  if (!state) {
    return res.status(404).json({ message: "State not found" });
  }

  // validation
  if (newGDP === undefined) {
    return res.status(400).json({ message: "gdp value required" });
  }

  state.gdp = newGDP;

  res.status(200).json({
    message: "GDP updated successfully",
    state: state,
  });
});

app.patch("/states/:id", (req, res) => {
  const stateId = Number(req.params.id);
  const state = states.find(s => s.id === stateId);

  if (!state) {
    return res.status(404).json({ message: "State not found" });
  }

  if (req.body.annualBudget) state.annualBudget = req.body.annualBudget;
  if (req.body.population) state.population = req.body.population;

  res.status(200).json({
    message: "State updated",
    state
  });
});

app.delete("/states/low-literacy/:percentage", (req, res) => {
  const percentage = Number(req.params.percentage);
  if (isNaN(percentage)) return res.status(400).json({ message: "Invalid percentage value" });

  const initialCount = states.length;
  states = states.filter((s) => s.literacyRate >= percentage);
  const deletedCount = initialCount - states.length;

  res.status(200).json({ deletedCount });
});

app.delete("/states/name/:stateName", (req, res) => {
  const stateNameParam = req.params.stateName.toLowerCase();

  const index = states.findIndex(
    (s) => s.name.toLowerCase() === stateNameParam
  );

  if (index === -1) {
    return res.status(404).json({ message: "State not found" });
  }

  states.splice(index, 1);

  res.status(204).end();
});

app.delete("/states/:id", (req, res) => {
  const stateId = Number(req.params.id);

  if (isNaN(stateId)) {
    return res.status(400).json({ message: "Invalid state ID" });
  }

  const index = states.findIndex((s) => s.id === stateId);

  if (index === -1) {
    return res.status(404).json({ message: "State not found" });
  }

  states.splice(index, 1);

  res.status(204).end();
});




app.listen(3000, () => {
  console.log("Server started on port 3000");
});
