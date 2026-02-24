const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    stock: 25,
    rating: 4.3
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 2499,
    stock: 40,
    rating: 4.5
  },
  {
    id: 3,
    name: "Laptop Stand",
    category: "Accessories",
    price: 999,
    stock: 30,
    rating: 4.2
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    price: 4999,
    stock: 12,
    rating: 4.4
  },
  {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1599,
    stock: 50,
    rating: 4.1
  }
];

app.get("/", (req, res) => {
  res.send("Express server is running");
});

app.get("/products", (req, res) => {
  res.status(200).json(products);
});

app.get("/products/:id", (req, res) => {
  const productId = Number(req.params.id);
  const product = products.find(u => u.id === productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json(product);
});

app.get("/products/category/:categoryName", (req, res) => {
  const productCategory = req.params.categoryName.toLowerCase();
  const filteredProducts = products.find(p => p.category.toLowerCase() === productCategory);

  if (!filteredProducts) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json(filteredProducts);
});

app.post("/products", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    stock: req.body.stock,
    rating: req.body.rating
  };

  products.push(newProduct);

  res.status(201).json({
    message: "Product created",
    product: newProduct
  });
});

app.put("/products/:id", (req, res) => {
  const productId = Number(req.params.id);
  const index = products.findIndex(p => p.id === productId);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products[index] = {
    id: productId,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    stock: req.body.stock,
    rating: req.body.rating
  };

  res.status(200).json({
    message: "Product replaced",
    product: products[index]
  });
});

app.put("/products/:id/stock", (req, res) => {
    const productId = Number(req.params.id);
    const newStock = req.body.stock;

    const product = products.find(p => p.id === productId);

    if(!product){
        return res.status(404).json({ message: "Product not found" });
    }

    if(newStock === undefined){
        return res.status(400).json({ message: "Stock value is required" });
    }

    product.stock = newStock;

    res.status(200).json({
        message: "Stock updated successfully",
        product: product
    })
});

app.put("/products/:id/price", (req, res) => {
    const productId = Number(req.params.id);
    const newPrice = req.body.price;

    const product = products.find(p => p.id === productId);

    if(!product){
        return res.status(404).json({ message: "Product not found" });
    }

    if(newPrice === undefined){
        return res.status(400).json({ message: "Price is required" });
    }

    product.price = newPrice;

    res.status(200).json({
        message: "Price updated successfully",
        product: product
    })
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});