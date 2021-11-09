import mongoose from 'mongoose'
import Plans from './models/Plans'
import Users from './models/Users'

const uri = 'mongodb+srv://nicole:cstnicole@cluster0.teqwa.mongodb.net/sample_mflix?retryWrites=true&w=majority'

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

export async function getPlans()
{
    const client = mongoose.connect(uri)
    const plan = await Plans.find()

    return plan;
}

export async function createPlans(date, event, priority)
{
    const client = mongoose.connect(uri)
    const plan = await new Plans(
        {
            date,
            event,
            priority
        }
    )
    return plan.save();
}