import type { NextApiRequest, NextApiResponse } from 'next';
import database from '../../../lib/database';

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    const v = database.create({ foo: 'bar' });

    res.end(`Vehicle: ${id}\n${JSON.stringify(v)}`);
}
