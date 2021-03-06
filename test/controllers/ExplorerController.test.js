//const ExplorerService = require("./../../libs/services/ExplorerServices");
const ExplorerController = require("./../../lib/controllers/ExplorerController");

//const Reader = require("./../../libs/utils/Reader");
//const explorers = Reader.readJsonFile("explorers.json");

describe("Test para ExplorerController", () => {
    test("Requerimiento 1 Obtener todos explorers filtrados por mision", () => {
        const ExplorersInMission = ExplorerController.getExplorersByMission("node");
        expect(ExplorersInMission.length).toBe(10);
    });
    test("Requerimiento 2 Obtener los nombres de los explorers por mision", () => {
        const nameOfExplorersInMission = ExplorerController.getUsernamesByMission("node");
        expect(nameOfExplorersInMission[0]).toBe("ajolonauta1");
    });
    test("Requerimiento 3 la cantidad de explorers en la mision", () => {
        const amountOfExplorersInMission = ExplorerController.getAmountOfExplorersByMission("node");
        expect(amountOfExplorersInMission).toContain(10);
    });
    test("Requerimiento 4: Obtener FizzBuzz, FIZZ, BUZZ o el score dependiendo del numero", () => {
        const explorer = {name: "Explorer1", score: 15};
        const result = ExplorerController.getANumberToFizzBuzz(explorer.score);
        expect(result).toBe("FIZZBUZZ");
    });

});
