const express = require("express");
const router = express.Router();
const User = require("../../../models/user");

//Get add user page
router.get("/register", (req, res) => {
  res.render("auth/register");
});

//Post a user submitted from add user page
router.post("/register", async (req, res) => {
  const user = req.body;
  const newUser = new User({
    name: user.name,
    email: user.email,
    password: user.password,
    
  });
  const savedUser = await newUser.save();
  res.render("profile", { user: savedUser });
});


router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post("/login", async (req, res) => {
  const { email, password, admin } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      res.status(404).send("Invalid email or password");
    } else {
      if (admin && user.usertype === "admin") {
        const users = await User.find({ usertype: "user" });
        res.render("usersList", { users });
      } else {
        res.render("profile", { user });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error logging in");
  }
});


// Route to render the users list view
router.get('/usersList', async (req, res) => {
  try {
    const users = await User.find({ usertype: 'user' });
    res.render('usersList', { users });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching user list');
  }
});

module.exports = router;


// Edit Handler
router.get("/edit/:id", async (req, res) => {
  const user = await User.findById(req.params.id)
  res.render("editUser",{user});
});

// Update user route
router.post("/edit/:id", async (req, res) => {

  const { name, email, password, usertype} = req.body;
    const user = await User.findById(req.params.id);


    user.name = name;
    user.email = email;
    user.password = password;
    user.usertype = usertype;

    await user.save();
    res.redirect("/api/users/usersList"); // Redirect to the user list page
});


// Handle DELETE request to delete a user
router.get("/deleteUser/:id", async (req, res) => {

    const user = await User.findByIdAndDelete(req.params.id);
    res.redirect("/api/users/usersList");

});

// Route to render the add user form
router.get('/add', (req, res) => {
  res.render('addUser');
});

// Route to handle the submission of the add user form
router.post('/add', async (req, res) => {
  const { name, email, password, usertype, level, power, achievements } = req.body;
    const newUser = new User({
      name,
      email,
      password,
      usertype,
      playerProfile: {
        level,
        power,
        achievements,
      },
    });

    const savedUser = await newUser.save();
    res.redirect('/api/users/usersList'); // Redirect to the users list after successful user creation

});



module.exports = router;