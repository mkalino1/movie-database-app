import { initDb } from "../../db/databaseInit";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body) {
      console.error("Request body is empty or undefined");
      return createError({
        statusCode: 400,
        statusMessage: "Request body is empty or undefined",
      });
    }

    const { username, password } = body;

    if (!username || !password) {
      console.error("Username or password missing");
      return createError({
        statusCode: 400,
        statusMessage: "Username and password are required",
      });
    }

    const db = await initDb();
    const user = await db.get("SELECT * FROM users WHERE username = ?", [
      username,
    ]);

    // For security reasons, do not specify if username or password is incorrect
    if (!user || !(await verifyPassword(user.password, password))) {
      console.error(`Invalid username or password for user: ${username}`);
      return createError({
        statusCode: 401,
        statusMessage: "Invalid username or password",
      });
    } else {
      const userData = { username: user.username, id: user.id };
      await setUserSession(event, {
        user: userData,
        loggedInAt: new Date(),
      });
    }

    return { success: true, user };
  } catch (error) {
    console.error("Error handling login request:", error);
    return createError({
      statusCode: 500,
      statusMessage: "Failed to process request",
    });
  }
});
