import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Hello world!");
});

app.listen(8000, () => {
    console.log("Server started at port 8000!");
});
