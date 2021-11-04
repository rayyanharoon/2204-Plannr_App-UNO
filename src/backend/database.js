import mongoose from 'mongoose'
import Users from './models/Users'

const uri = 'mongodb+srv://nicole:<password>@cluster0.teqwa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

export async function getUsers()
{
    const client = mongoose.connect(uri)
    const user = await Users.find()

    return user;
}

export async function createUser(username, email, password)
{
    const client = mongoose.connect(uri)
    const user = await new Users(
        {
            username,
            email,
            password
        }
    )
    return user.save();
}