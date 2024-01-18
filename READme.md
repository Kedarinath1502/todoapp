## todo react app
- This code is for the development of todo react app 
FEATURES :
 - anyone can add a todo
 -anyone can get the todos
 -mark or update todo as completed

 Backend Process:
 -created a folder  and created backend folder inside it and initialized package.json file inside it by running npm init -y
 -added index.js file 

mongoose process:
 - created a db.js file inside backend and ran npm i mongoose to bring mongoose locally
 - imported mongoose into db.js file and created a todoschema using mongoose.Schema and given the type of schema that todo should hold
 - created a model for the todoschema and given it to the todo and given the name todo and exported it.

zod process:
 - created types.js file and brought zod library locally
 - created a zod object and given the type of inputs received and the conditions it should satisfy
 - exported that object to the main file and used to safeparse and check whether it satisfies the condition

express process :
- brought express locally and instantiated with app object and given the routes in index.js
- started the server after writing the logic and hit it with the postman to see whether it is working