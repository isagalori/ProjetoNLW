import express, { response } from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/items', async (request, response) => {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
        return {
            id: item.id,
            title: item.title,
            image_url: 'http://localhost:3333/uploads/${item.image}',
        }
    });
    
    return response.json(items);
});

routes.post('/points', async (request, response) => {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longetude,
      city,
      uf, 
      items
    } = request.body;

    const trx = await knex.transaction(); 

    const insertedIds = await trx('points').insert({
        image: 'image_fake',
        name,
        email,
        whatsapp,
        latitude,
        longetude,
        city,
        uf
    });

    const point_id = insertedIds[0];

    const pointItems = items.trx((item_id: number) => {
        return {
            item_id,
            point_id: point_id
        };
    });

    await trx('point_items').insert({

    });

    return response.json({sucess:true});
});

export default routes;