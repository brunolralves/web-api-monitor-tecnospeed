import Express from 'express';
import knex from '../database/knex/index';

interface Instability {
  instability_id: number;
  id: string;
  description: string;
  instability_level_id: number;
  alreadyNotified: boolean;
  state_id: number;
  environment_id: number;
  created_at: string;
}

export default class InstabilityRecordController {
  async index(req: Express.Request, res: Express.Response): Promise<any> {
    try {
      const instabilitiesRecorded: Instability[] = await knex(
        'InstabilityRecords',
      ).where({ alreadyNotified: false });

      if (instabilitiesRecorded.length > 0) {
        res.json({ instabilitiesRecorded });

        await knex('InstabilityRecords')
          .where({ alreadyNotified: false })
          .update({ alreadyNotified: true });
      } else {
        res.status(204).json({ message: 'Não há novas instabilidades!' });
      }
    } catch (error) {
      res.json({ error });
    }
  }
}
