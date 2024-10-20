import mongoose from "mongoose"

const connectDB = async () => {

    mongoose.Connection.on('connected', ()> console.log("Database connected"))

    await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`)
}

export default connectDB