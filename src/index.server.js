const express = require('express');

const app = express();
const cors = require('cors');
const env = require('dotenv');
const mongoose = require('mongoose');

//routes
const customerRoutes = require('./routes/customer');
const orderMasterRoutes = require('./routes/orderMaster');
const foodItemRoutes = require('./routes/foodItem');
const orderDetailRoutes = require('./routes/orderDetail');

env.config();

//mongodb Connection
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.ywowz.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then( () => {
    console.log('Database Connected');
} );


app.use(cors());
app.use(express.json());

app.use('/api', customerRoutes);
app.use('/api', orderMasterRoutes);
app.use('/api', foodItemRoutes);
app.use('/api', orderDetailRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`);
})