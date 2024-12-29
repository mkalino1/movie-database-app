import { initDb } from "~/server/db/databaseInit";

export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event)

  const db = await initDb();

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
