import { initDb } from "~/server/db/databaseInit";

export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event)

  const body = await readBody(event);
  if (!body || !body.movieId || !body.score) {
    return createError({
      statusCode: 400,
      statusMessage: "Movie id and score is required",
    });
  }

  const db = await initDb();

  const ratingQuery = `
    INSERT INTO ratings (user, movie, score) VALUES (?, ?, ?)
  `;

  await db.run(ratingQuery, [user.id, body.movieId, body.score]);

  return 'Done'
})
