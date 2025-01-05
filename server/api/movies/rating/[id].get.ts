import { initDb } from "~/server/db/databaseInit";

export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event)

  const id = getRouterParam(event, 'id')
  const db = await initDb();

  const query = `
    SELECT score
    FROM ratings
    WHERE user = ? AND movie = ?
  `;

  const result = await db.get(query, [user.id, id]);

  return result ?? {}
})