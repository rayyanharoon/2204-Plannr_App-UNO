import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        username: String,
        email: String,
        password: String
    }
)

//get data from existing schema      or   create a new schema for users
export default mongoose.models.users || mongoose.model('users', userSchema)