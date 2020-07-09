import Knex from 'knex';

export async function up(knex: Knex){
    // CRIAR TABELA
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}

export async function down(knex: Knex){
    // VOLTA ACAO UP (DELETA TABELA)
    return knex.schema.dropTableIfExists('items');
}