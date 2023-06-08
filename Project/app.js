const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require('express-session');
const MongoStore = require('connect-mongo');


// Middleware
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(session({
  secret: 'sessionKey',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: "mongodb+srv://rehan:rehan@atlascluster.vzthwzw.mongodb.net/User",
    
  }),
  cookie: {
    maxAge: 60000
  },
}));

app.use((req, res, next) => {
  console.log("Session:", req.session);
  next(); 
});


// API Rout
app.use("/api/users", require("./routes/api/users/userRouter"));


app.get("/", (req, res) => {
  res.render("LandingPage");
});

// Start server
const port = 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// Connect to MongoDB
const connectionString =
  "mongodb+srv://rehan:rehan@atlascluster.vzthwzw.mongodb.net/User";
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB..." + connectionString);
  })
  .catch((err) => console.error("Could not connect to MongoDB..."));