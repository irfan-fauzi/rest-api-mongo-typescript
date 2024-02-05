import express, { type Application, type Request, type Response, type NextFunction } from 'express'

const app: Application = express()
const port: number = 4000

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({
    data: 'hallo ini response'
  })
})

app.listen(port, () => {
  console.log(`server is running on port: ${port}`)
})
