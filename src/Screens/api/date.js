import { createPlans, getPlans } from '../../../lib/backend/database';

//step 3, create the API
export default async function handler(req, res) {
    if (req.method == 'POST') {
        const data = req.body;
        const { date, event, priority } = data; // destructuring

        // step 4, connect to db and create cheetah
        await createPlans(date, event, priority);
        res.status(200).json(
            {
                success : true
            }
        );
        return;
    }
    const data = await getPlans();
    res.status(200).json(data);
}