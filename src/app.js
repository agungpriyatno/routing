const express = require("express")

const users = [
    { id: 1, name: "Agung" },
    { id: 2, name: "Triadi" },
    { id: 3, name: "Naufal" },
    { id: 4, name: "Iqbal" },
    { id: 5, name: "Icha" },
    { id: 6, name: "Erika" },
]

const app = express()
const port = 8080

const helloWorld = (req, res) => {
    const data = { message: "Hello World" }
    return res.json(data)
}

const findManyUser = (req, res) => {
    const data = users
    return res.json(data)
}

const findUser = (req, res) => {
    const id = Number(req.params.id)
    console.log({ id });
    const data = users.find((item) => item.id === id)
    if (data === undefined) {
        return res.status(500).json({ message: "Data tidak ditemukan" })
    }
    return res.json(data)
}

app.get("/", (req, res) => helloWorld(req, res))
app.get("/user", findManyUser)
app.get("/user/:id", findUser)
app.use((req, res) => res.json({message: "not found"}))

app.listen(port, () => {
    console.log("Server is running");
})