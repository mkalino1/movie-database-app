import { open } from "sqlite";
import sqlite3 from "sqlite3";

const addFavourite = async () => {
  try {
    const db = await open({
      filename: "./database.sqlite",
      driver: sqlite3.Database,
    });

    db.run(
      `INSERT INTO favourites (
      movie,
      user) VALUES (?, ?)`,
      [2, 1],
    );
  } catch (error) {
    console.error("Failed to connect to database:", error);
    throw error;
  }
};

addFavourite();
