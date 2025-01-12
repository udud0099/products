// username and password
const username = process.env.myusername;
const password = process.env.mypassword;

// connect to Database Using mongoose

export const connectionString = `mongodb+srv://${username}:${password}@cluster0.7a0f0.mongodb.net/product?retryWrites=true&w=majority&appName=Cluster0`;
