import { initDb } from "~/server/db/databaseInit";

export default defineEventHandler(async (event) => {
  const db = await initDb(); // Initialize database connection
  const query = `
    SELECT * FROM movies
  `;
  const all_movies = await db.all(query);

  return all_movies;
})
