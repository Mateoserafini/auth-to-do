import app from './app.js'
import { connectDB } from './db.js'

connectDB();
app.listen(3000)
console.log(`server en el puerto 3000 ${'http://localhost:3000'}`);
//back tics agr + }