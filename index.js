// import json server
const jsonServer=require('json-server')

// create json server - create()
const hireServer=jsonServer.create()

// create path for the json file(data) - router()
const router = jsonServer.router("db.json")

// create middleware to parse json
const middleware = jsonServer.defaults()

// allow server to use router and middleware
hireServer.use(middleware)
hireServer.use(router)

// set up port for the server to run
PORT =3000 || process.env.PORT

// listen to the request
hireServer.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);
    
})
