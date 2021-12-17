// setup
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

const fake_database = [
  {
    id: 1,
    name: 'Mike',
    age: 20
  },
  {
    id: 2,
    name: 'Josh',
    age: 27
  }
];

app.get("/", (request, response) => {
  response.json(fake_database);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
