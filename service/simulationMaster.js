const SIMULATION = {
  suisan: {
    src:"simulation_header.jpg",
    result: {
      targetName: "水産加工工場の場合",
      gererationPerYear: "214,155",
      cutPerYear: "470",
      curbonPerYear: "98",
    },
    basePrice: "1,320円",
    energyPrice: "",
    summer: "16.38円",
    otherSeasons: "15.24円",
    fuelAdjustmentCost: "3.24円",
    greenEnergyInpost: "3.45円",
    contractDemand: "400kW",
    consumptionPerYear: "1,415,812kWh",
    solarPanel: "207kW",
    pcs: "150kW",
    gererationPerYear: "214,155kWh",
    cutPerYear: "4,700,000円",
    curbonPerYear: "98t",
  },
  syokuhin: {
    src:"works.jpg",
    result: {
      targetName: "食品加工工場の場合",
      gererationPerYear: "214,155",
      cutPerYear: "870",
      curbonPerYear: "98",
    },
    basePrice: "1,820円",
    energyPrice: "",
    summer: "18.38円",
    otherSeasons: "18.24円",
    fuelAdjustmentCost: "8.24円",
    greenEnergyInpost: "8.45円",
    contractDemand: "800kW",
    consumptionPerYear: "8,415,812kWh",
    solarPanel: "807kW",
    pcs: "850kW",
  },
  syokuhin: {
    src:"works.jpg",
    result: {
      targetName: "食品加工工場の場合",
      gererationPerYear: "214,155",
      cutPerYear: "870",
      curbonPerYear: "98",
    },
    basePrice: "1,820円",
    energyPrice: "",
    summer: "18.38円",
    otherSeasons: "18.24円",
    fuelAdjustmentCost: "8.24円",
    greenEnergyInpost: "8.45円",
    contractDemand: "800kW",
    consumptionPerYear: "8,415,812kWh",
    solarPanel: "807kW",
    pcs: "850kW",
  },
};

export default new (class pagesConfig {
  getResult(id) {
    return SIMULATION[id].result;
  }
  getAllData() {
    return SIMULATION;
  }
})();
