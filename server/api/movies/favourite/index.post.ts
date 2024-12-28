import { initDb } from "~/server/db/databaseInit";

export default defineEventHandler(async (event) => {
  const { user: userSession } = await requireUserSession(event)

  const body = await readBody(event);
  if (!body || !body.movieId) {
    return createError({
      statusCode: 400,
      statusMessage: "Movie id is required",
    });
  }

  const db = await initDb(); // Initialize database connection

  const userQuery = `
    SELECT id FROM users WHERE username = ?
  `;
  const user = await db.get(userQuery, [userSession?.username]);

  const favouriteQuery = `
    INSERT INTO favourites (user, movie) VALUES (?, ?)
  `;

  await db.run(favouriteQuery, [user.id, body.movieId]);

  return 'Done'
})
