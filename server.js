const express = require("express");

const app = express();

app.use(express.json())

app.get("/hellow", (req, res) => {
   res.send("Hellow World")
});

app.get("/how", (req, res) => {
    res.send("How are you")
})

app.post("/test", (req, res) => {
    res.send("Test page")
})

app.get("/summetion/:n1/:n2", (req, res) => {
     const n1 = req.params.n1;
     const n2 = req.params.n2;

     res.send(`The summetion is ${+n1 + +n2}`)
})

app.get("/sayHellow", (req, res) => {
 
    res.send(`hellow mr ${req.body.name}`);
})

app.listen(3000, () => {
    console.log("Iam listening now")
})   