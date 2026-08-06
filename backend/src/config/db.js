import mongoose from 'mongoose'
import dotenv from 'dotenv'
import dns from 'dns'

dns.setServers(['8.8.8.8', '1.1.1.1'])


export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Mongodb connected succesfully')
    } catch (error) {
        console.log('Error connecting to Mongodb', error)
        process.exit(1); //exit with failure
        
    }
}