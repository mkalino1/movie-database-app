import { initDb } from "~/server/db/databaseInit";

export default defineEventHandler(async (event) => {
  const { user: userSession } = await requireUserSession(event)

  const db = await initDb(); // Initialize database connection

  const userQuery = `
    SELECT id FROM users WHERE username = ?
  `;
  const user = await db.get(userQuery, [userSession?.username]);

  if (user?.id === undefined) return [];

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
