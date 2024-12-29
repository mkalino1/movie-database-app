import { initDb } from "~/server/db/databaseInit";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  const db = await initDb();
  const query = `
    SELECT * FROM movies
    WHERE id = ${id}
  `;
  const movie = await db.get(query);

  return movie;
})
