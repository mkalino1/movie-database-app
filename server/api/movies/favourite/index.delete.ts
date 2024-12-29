import { initDb } from "~/server/db/databaseInit";

export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event)

  const body = await readBody(event);
  if (!body || !body.movieId) {
    return createError({
      statusCode: 400,
      statusMessage: "Movie id is required",
    });
  }

  const db = await initDb();

  const favouriteQuery = `
    DELETE FROM favourites WHERE user=? AND movie=?
  `;

  await db.run(favouriteQuery, [user.id, body.movieId]);

  return 'Done'
})
