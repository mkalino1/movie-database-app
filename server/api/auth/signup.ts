import bcrypt from "bcrypt";
import { initDb } from "../../db/databaseInit";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body) {
      return createError({
        statusCode: 400,
        statusMessage: "Request body is empty or undefined",
      });
    }

    const { username, password } = body;

    if (!username || !password) {
      return createError({
        statusCode: 400,
        statusMessage: "Username and password are required",
      });
    }

    const db = await initDb();
    const hashedPassword = await hashPassword(password);

    try {
      const insertResult = await db.run("INSERT INTO users (username, password) VALUES (?, ?)", [
        username,
        hashedPassword,
      ]);
      const userData = { username: username, id: insertResult.lastID as number };
      await setUserSession(event, {
        user: userData,
        loggedInAt: new Date(),
      });
      return { success: true, userData };
    } catch (error) {
      console.error("Error creating user:", error);
      return createError({
        statusCode: 409,
        statusMessage: "Username already exists",
      });
    }
  } catch (error) {
    console.error("Error handling signup request:", error);
    return createError({
      statusCode: 400,
      statusMessage: "Failed to process request",
    });
  }
});
