import mongoose from 'mongoose'

const planSchema = new mongoose.Schema(
    {
        date: String,
        event: String,
        priority: String
    }
)

//get data from existing schema      or   create a new schema for users
export default mongoose.models.plans || mongoose.model('plans', planSchema)