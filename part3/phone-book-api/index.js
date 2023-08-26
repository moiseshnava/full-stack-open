const morgan = require("morgan");
const express = require("express");
const app = express();


let phoneBookData = [
   {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
   },
   {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
   },
   {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
   },
   {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
   }
];

// custom tokens
// nota importante por razones de seguridad y ley de privacidad
//  no se deben mostrar datos este ejemplo es solo para desarrollo NO PARA PRODUCCIÓN
morgan.token("custom-info", (request, response) => {
   if (request.method === "POST") {
      return JSON.stringify(request.body)
   }
   return "";
});

// middlewares
app.use(express.json());
// app.use(morgan("combined"));
app.use(morgan(":method :url :status :response-time ms :custom-info"))

// helpers
const generateId = () => {
   const maxId = phoneBookData.length > 0
      ? Math.max(...phoneBookData.map(pb => pb.id)) + 1
      : 0;

   return maxId;
}

const phoneBookInfo = (data) => {
   return `Phonebook has info for ${data.length} people`;
}



// rutes
app.get("/", (request, response) => {
   response.send("<h1>Hello World! </h1>");
});

app.get("/api/persons", (request, response) => {
   response.json(phoneBookData)
});

app.get("/info", (request, response) => {
   const currenTime = new Date();

   response.send(`${phoneBookInfo(phoneBookData)}<br>${currenTime}`);
});


app.get("/api/persons/:id", (request, response) => {
   const id = Number(request.params.id);
   const person = phoneBookData.filter(pb => pb.id === id);
   if (person) {
      response.json(person)
   } else {
      response.status(404).end();
   }
});

app.delete("/api/persons/:id", (request, response) => {
   const id = Number(request.params.id);
   phoneBookData = phoneBookData.filter(pb => pb.id !== id);
   response.status(204).end();

});

app.post("/api/persons", (request, response) => {
   const { name, number } = request.body;

   if (!name || !number) {
      return response.status(400).json({
         error: "Content missing"
      });
   }

   const findPerson = phoneBookData.find(person => person.name.trim().toLocaleLowerCase() === name.trim().toLocaleLowerCase());
   if (findPerson) {
      return response.status(400).json({
         error: { error: 'name must be unique' }
      });
   }

   const newPerson = {
      name: name,
      number: number,
      id: generateId()
   }
   phoneBookData = phoneBookData.concat(newPerson);
   response.json(phoneBookData);
});

const PORT = 3001;

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});