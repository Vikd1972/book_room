import * as express from "express"
import { Request, Response } from "express"

const app = express()
app.use(express.json())

app.post("/login", function (req: Request, res: Response) {
  res.send(req.body)
})

app.post("/sign", function (req: Request, res: Response) {
  res.send(req.body)
})

app.listen(3000)