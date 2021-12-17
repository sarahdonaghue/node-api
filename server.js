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

app.post('/user/new/', (request, response) => {
//get name and age from request.body (using object destructuring)
const { name, age } = request.body;
//generate an id for the fake_database
const id = fake_database.length +1;
const newUser = {
  id,
  name,
  age,
};
//add new user to the fake database
fake_database.push(newUser);
// send success back in the response
response.json({ success: true });
});

app.get('/user/:id', (request, response) => {
  //grap id parameter
  const { id } = request.params;
  //filter out the users that match the search id
  const searchedUser = fake_database.filter(user => {
    if(user.id === +id) return user;
  });
  //send searched user in the response
  response.json(searchedUser);
});

app.put('/user/update/name/', (request, response) => {
//grab id and name from request.body
const { name, id } = request.body;
//loop on fake database
fake_database.forEach(user => {
  //and if id matches edit name to new name
  if (usesr.id === +id) {
    user.name = name;
  }

});
//send success back in the response
response.json({ success: true });
});

app.delete('/user/delete/:id', (request, response) => {
// grab id parameter
const { id } = request.params;
//using the id lookup the user with that id
const index = fake_database.findIndex(user => user.id === +id);
// and remove the user who matches 
fake_database.splice(index, 1);
//send success status with the response
response.json({ success: true });
});
