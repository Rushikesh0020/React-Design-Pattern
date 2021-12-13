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

let currDeveloper = {
    id: "211",
    title: "PRO",
    name: "Ricky Park",
    country: "New York",
    profileImg: "https://randomuser.me/api/portraits/women/79.jpg",
    designation: "User interface designer and front-end developer",
    skills: ["UI / UX", "Front End Development ", "HTML", "CSS", "JavaScript", "React", "Node"],
  };
let developers = [
  {
    id: "211",
    title: "PRO",
    name: "Ricky Park",
    country: "New York",
    profileImg: "https://randomuser.me/api/portraits/women/79.jpg",
    designation: "User interface designer and front-end developer",
    skills: ["UI / UX", "Front End Development ", "HTML", "CSS", "JavaScript", "React", "Node"],
  },
  {
    id: "212",
    title: "Elite",
    name: "Ben Awad",
    country: "Canada",
    profileImg: " https://randomuser.me/api/portraits/men/94.jpg",
    designation: "Senior Backend Developer",
    skills: ["Java", "Back End Development", "HTML", "CSS", "JavaScript", " Version Control", "Node"],
  },
  {
    id: "213",
    title: "Ultra",
    name: "Walter White",
    country: "Brazil",
    profileImg: " https://randomuser.me/api/portraits/men/67.jpg",
    designation: "User interface designer and front-end developer",
    skills: ["UI / UX", "Front End Development ", "HTML", "CSS", "JavaScript", "React", "Node"],
  },
 
  
]


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

app.get("/current-developer", (req, res) => {
  res.json(currDeveloper);
});

app.get("/developers/:id", (req, res)=> {
  const { id } = req.params;

  res.json(developers.find((developer)=> developer.id === id));
})
app.get("/developers", (req, res) => {
  res.json(developers);
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

// const express = require("express");

// const app = express();

// app.use(express.json());

// let currentUser = {
//   id: "124",
//   name: "John Doe",
//   age: 54,
//   hairColor: "brown",
//   hobbies: ["Reading", "Dancing", "Video Games", "Bicycling"],
// };

// let users = [
//   {
//     id: "124",
//     name: "John Doe",
//     age: 54,
//     hairColor: "brown",
//     hobbies: ["swimming", "cycyling", "reading", "video games"],
//   },
//   {
//     id: "125",
//     name: "Brenda Smith",
//     age: 26,
//     hairColor: "black",
//     hobbies: ["gymnastics", "video games", "reading", "cycyling"],
//   },
//   {
//     id: "126",
//     name: "Jane Garcia",
//     age: 18,
//     hairColor: "white",
//     hobbies: ["reading", "gymnastics", "swimming", "mathematics"],
//   },
//   {
//     id: "127",
//     name: "Big Show",
//     age: 34,
//     hairColor: "blue",
//     hobbies: ["cycyling", "golf", "gymnastics", "swimming"],
//   },
// ];

// const products = [
//   {
//     id: "1234",
//     name: "Flat-Screen Tv",
//     price: "$300",
//     desc: "Huge LCD screem, a great deal",
//     rating: 4.5,
//   },
//   {
//     id: "2345",
//     name: "Basketball",
//     price: "$10",
//     desc: "Just Like the Pros Use",
//     rating: 4.9,
//   },
//   {
//     id: "3456",
//     name: "Running Shoes",
//     price: "$120",
//     desc: "State-of-the-art technology for optimum",
//     rating: 4.2,
//   },
// ];

// app.get("/current-user", (req, res) => {
//   res.json(currentUser);
// });

// app.get("/users/:id", (req, res) => {
//   const { id } = req.params;

//   res.json(users.find((user) => user.id === id));
// });

// app.post("/users/:id", (req, res) => {
//   const { id } = req.params;
//   const { user: updatedUser } = req.body;
//   // Check
//   users = users.map((user) => (user.id === id ? updatedUser : user));

//   res.json(users.find((user) => user.id === id));
// });

// app.get("/users", (req, res) => {
//   res.json(users);
// });

// app.get("/products/:id", (req, res) => {
//   const { id } = req.params;

//   res.json(products.find((product) => product.id === id));
// });

// app.get("/products", (req, res) => {
//   res.json(products);
// });

// app.listen(8080, () => {
//   console.log("Server is Listening on port 8080");
// });
