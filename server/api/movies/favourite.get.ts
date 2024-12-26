import { initDb } from "~/server/db/databaseInit";

export default defineEventHandler(async (event) => {
  const db = await initDb(); // Initialize database connection

  const session = await getUserSession(event)
  const userQuery = `
    SELECT id FROM users WHERE username = ?
  `;
  const user = await db.get(userQuery, [session.user?.username]);

  const query = `
    SELECT movie AS id, name, releaseDate
    FROM favourites
    JOIN users ON favourites.user = users.id 
    JOIN movies ON favourites.movie = movies.id 
    WHERE users.id = ?
  `;
  const user_favourites = await db.all(query, [user.id]);

  return user_favourites;
});
