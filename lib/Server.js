const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

//GET
//recibir un parametro por query params y regresar lista de explorers filtrados por el parametro
app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;//mission es el parametro
    const ExplorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(ExplorersInMission);
});

//Crea otro endpoint para regresar la cantidad de explorers según la misión que se envíe.
app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const amountOfExplorersInMission = ExplorerController.getAmountOfExplorersByMission(mission);
    response.json(amountOfExplorersInMission);
});

//Crea el último endpoint para regresar la lista de usernames de los explorers filtrados por la misión.
app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const UsernameOfExplorersInMission = ExplorerController.getUsernamesByMission(mission);
    response.json(UsernameOfExplorersInMission); 
});

//PARTE 3 regresar Fizz", "Buzz", "Fizzbuzz" o el mismo número recibido.
app.get("/v1/fizzbuzz/:score", (request, response) => {
    const score = request.params.score;
    const numberToFizzBuzz = ExplorerController.getANumberToFizzBuzz(score);
    response.json({score: score, trick: numberToFizzBuzz});
});

app.listen(port, () => {//localhost:3000
    console.log(`FizzBuzz API in localhost:${port}`);
});
