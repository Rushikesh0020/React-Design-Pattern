const express = require("express");

const app = express();

app.use(express.json());

let currentUser = {
  id: "124",
  name: "John Doe",
  age: 54,
  hairColor: "brown",
  hobbies: ["Reading", "Dancing", "Video Games", "Bicycling"],
};

let users = [
  {
    id: "124",
    name: "John Doe",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "cycyling", "reading", "video games"],
  },
  {
    id: "125",
    name: "Brenda Smith",
    age: 26,
    hairColor: "black",
    hobbies: ["gymnastics", "video games", "reading", "cycyling"],
  },
  {
    id: "126",
    name: "Jane Garcia",
    age: 18,
    hairColor: "white",
    hobbies: ["reading", "gymnastics", "swimming", "mathematics"],
  },
  {
    id: "127",
    name: "Big Show",
    age: 34,
    hairColor: "blue",
    hobbies: ["cycyling", "golf", "gymnastics", "swimming"],
  },
];

const products = [
  {
    id: "1234",
    name: "Flat-Screen Tv",
    price: "$300",
    desc: "Huge LCD screem, a great deal",
    rating: 4.5,
  },
  {
    id: "2345",
    name: "Basketball",
    price: "$10",
    desc: "Just Like the Pros Use",
    rating: 4.9,
  },
  {
    id: "3456",
    name: "Running Shoes",
    price: "$120",
    desc: "State-of-the-art technology for optimum",
    rating: 4.2,
  },
];

app.get("/current-user", (req, res) => {
  res.json(currentUser);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;

  res.json(users.find((user) => user.id === id));
});

app.post("/users/:id", (req, res) => {
  const { id } = req.params;
  const { user: updatedUser } = req.body;
  // Check
  users = users.map((user) => (user.id === id ? updatedUser : user));

  res.json(users.find((user) => user.id === id));
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;

  res.json(products.find((product) => product.id === id));
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(8080, () => {
  console.log("Server is Listening on port 8080");
});
