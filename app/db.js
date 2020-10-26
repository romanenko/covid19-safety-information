const AirTable = require("airtable");

// Airtable DB name
const AIRTABLE_DB_NAME = process.env.AIRTABLE_DB_NAME;

// Connecting to AirTable
const base = AirTable.base(AIRTABLE_DB_NAME);

async function findOne(
  tableName,
  columnName,
  query,
  options = { fuzzy: false }
) {
  const results = await base(tableName)
    .select({
      maxRecords: 1,
      filterByFormula: options.fuzzy
        ? `SEARCH(LOWER("${query}"), LOWER(${columnName})) >= 0`
        : `{${columnName}} = "${query}"`
    })
    .firstPage();
  return Array.isArray(results) && results.length > 0 ? results[0] : null;
}

function create(tableName, record) {
  return base(tableName).create(record);
}

function replace(tableName, id, record) {
  return base(tableName).replace(id, record);
}

async function updateOrInsert(tableName, primaryField, record) {
  const existingRecord = await findOne(
    tableName,
    primaryField,
    record[primaryField]
  );

  if (existingRecord) {
    await replace(tableName, existingRecord.id, record);
  } else {
    await create(tableName, record);
  }
}

function destroy(tableName, id) {
  return base(tableName).destroy([id]);
}

module.exports = {
  findOne,
  updateOrInsert,
  destroy
};
