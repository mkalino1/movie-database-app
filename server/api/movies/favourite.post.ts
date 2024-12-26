import { initDb } from "~/server/db/databaseInit";

export default defineEventHandler(async (event) => {
  const db = await initDb(); // Initialize database connection

  const session = await getUserSession(event)
  const userQuery = `
    SELECT id FROM users WHERE username = ?
  `;
  const user = await db.get(userQuery, [session.user?.username]);

  const favouriteQuery = `
    INSERT INTO favourites (user, movie) VALUES (?, ?)
  `;

  await db.run(favouriteQuery, [user.id, body.movieId]);

  return 'Done'
})
