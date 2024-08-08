// const rootController = (req,res) => {
//     res.send(`<h1>Hello Word</h1>
//         <p>We are learning express js, currently routing.</p>`);
//     console.log("All the best !!!")
// };
// module.exports = rootController;/

const rootController = (req, res) => {
    res.status(200).send({
      message: "welcome to fashion trends",
    });
  };
  module.exports = rootController;