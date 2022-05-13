const User = require("./userModel");

exports.addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).send({ user: newUser.username });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.listUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send({ users });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message })
  }
};

// exports.locate = async (req, res) => {
//   try {
//     const user = await User.findOne({email:req.body.email})
//       res.status(200).send({ user })
//     } catch (error) {
//       console.log(error);
//       res.status(500).send({ error: error.message })
//     }
//   };

exports.login = async (req, res) => {
  try {
      res.status(200).send({ user: req.user })
  } catch (err) {
      console.log(err)
  }
}



exports.updateUser = async (req, res) => {
  
  try {
    const user = await User.updateOne(
      {username: req.body.username},
      {username: req.body.newUsername}
    );
    res.status(200).send({ user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message })
  }
};

exports.deleteUser = async (req,res) => {
  try {
  const user = await User.deleteOne({username: req.body.username});
  res.status(200).send({ user })
} catch (error) {
  console.log(error);
  res.status(500).send({ error: error.message })
}
}

