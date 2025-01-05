import { initDb } from "~/server/db/databaseInit";

export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event)

  const body = await readBody(event);
  if (!body || !body.movieId || !body.score || body.score < 1 || body.score > 5) {
    return createError({
      statusCode: 400,
      statusMessage: "Movie id and valid score is required",
    });
  }

  const db = await initDb();

  const selectQuery = `
    SELECT score
    FROM ratings
    WHERE user = ? AND movie = ?
  `;

  const existingRow = await db.get(selectQuery, [user.id, body.movieId]);

  if (existingRow === undefined) {
    const insertQuery = `
      INSERT INTO ratings (user, movie, score) VALUES (?, ?, ?)
    `
    await db.run(insertQuery, [user.id, body.movieId, body.score])
  } else {
    const updateQuery = `
      UPDATE ratings
      SET score = ?
      WHERE user = ? AND movie = ?
    `
    await db.run(updateQuery, [body.score, user.id, body.movieId])
  }

  return 'Done'
})
