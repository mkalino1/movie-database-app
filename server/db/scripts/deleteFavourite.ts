import { open } from "sqlite";
import sqlite3 from "sqlite3";

const deleteFavourite = async () => {
  try {
    const db = await open({
      filename: "./database.sqlite",
      driver: sqlite3.Database,
    });

    db.run(
      `DELETE FROM favourites WHERE id = ?`,
      [2],
    );
  } catch (error) {
    console.error("Failed to connect to database:", error);
    throw error;
  }
};

deleteFavourite();
