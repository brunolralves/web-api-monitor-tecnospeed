import config from '../../knexfile';
import knex from 'knex';

const connection = knex(config.production);

export default connection;
