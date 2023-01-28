const testing = async (req, res) => {
  try {
    res.json({
      message: "authorized",
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = testing;
