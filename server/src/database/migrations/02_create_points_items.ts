import Knex from 'knex';

export async function up(knex: Knex){
    // CRIAR TABELA
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();
        
        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('pointes')

        table.integer('item_id',)
            .notNullable()
            .references('id')
            .inTable('items')
    });
}

export async function down(knex: Knex){
    // VOLTA ACAO UP (DELETA TABELA)
    return knex.schema.dropTableIfExists('point_items');
}