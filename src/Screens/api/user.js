import { createUsers, getUsers } from '../../../lib/backend/database';

//step 3, create the API
export default async function handler(req, res) {
    if (req.method == 'POST') {
        const data = req.body;
        const { username, email, password } = data; // destructuring

        // step 4, connect to db and create cheetah
        await createUsers(username, email, password);
        res.status(200).json(
            {
                success : true
            }
        );
        return;
    }
    const data = await getUsers();
    res.status(200).json(data);
}