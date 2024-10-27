import api from "./services/api.service";

const port = 3000

api.listen(port, async()=>{
    console.log('Initializing database...')
    //Initialize
    console.log('Database initialized')
    console.log(`API listening now on port ${port}`)
})