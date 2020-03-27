
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments(); //ID autoincrement

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable(); //id da tabela ong

        table.foreign('ong_id').references('id').inTable('ongs'); //referência da chave estrangeira
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
