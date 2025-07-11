const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn")

const products = [
  {
    name: "iPhone 15",
    price: 79999,
    image: Buffer.from(""), // Placeholder for image buffer
    bgcolor: "#f5f5f5",
    panelcolor: "#111111",
    textcolor: "#ffffff"
  },
  {
    name: "Samsung Galaxy S24",
    price: 72999,
    image: Buffer.from(""),
    bgcolor: "#eee",
    panelcolor: "#333",
    textcolor: "#fff"
  }
];
router.get('/', (req, res) => {
  res.render('index', { error: [] });
});

router.get("/shop",isLoggedIn, function(req,res){
  res.render('shop', { products });
})


module.exports = router;