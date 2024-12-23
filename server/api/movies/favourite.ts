import { initDb } from "~/server/db/databaseInit";

export default defineEventHandler(async (event) => {
  const db = await initDb(); // Initialize database connection
  const query = `
    SELECT movie AS id, name, releaseDate
    FROM favourites
    JOIN users
    JOIN movies
  `;
  const all_favourites = await db.all(query);

  return all_favourites;
});
