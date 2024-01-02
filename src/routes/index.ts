import { Router } from 'express';
import InstabilityRecordController from '../controllers/InstabilityRecordController';

const instabilityRecordController = new InstabilityRecordController();
const routes = Router();

routes.get('/', instabilityRecordController.index);

export default routes;
