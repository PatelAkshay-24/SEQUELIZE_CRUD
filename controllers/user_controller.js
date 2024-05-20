const db = require("../models/database");
const user = require("../models/user");
const User = db.User;

//add user
const addUser = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    const jane = await User.create({ firstName, lastName });
    res.status(200).json(jane.toJSON());
  } catch (err) {
    res.send("err", err);
  }
};

// Add BulkUser
const addUsers = async (req, res) => {
  const postData = req.body;
  const jane = await User.bulkCreate(postData);
  res.status(200).json({ data: jane });
};

//get All User
const getUsers = async (req, res) => {
  const jane = await User.findAll({});
  res.status(200).json({ data: jane });
};

//get User By Id
const getUser = async (req, res) => {
  const jane = await User.findOne({
    where: { id: req.params.id },
  });
  res.status(200).json({ data: jane });
};

//update User
const updateUser = async (req, res) => {
  const updateData = req.body;
  const jane = await User.update(updateData, {
    where: { id: req.params.id },
  });
  res.status(200).json({ data: jane });
};

//Delete Data
const deleteuser = async (req, res) => {
  try {
    await User.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(User.lastName);
  } catch (error) {
    res.send("error");
  }
};

module.exports = {
  addUser,
  addUsers,
  getUser,
  getUsers,
  updateUser,
  deleteuser,
};
