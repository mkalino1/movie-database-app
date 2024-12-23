import { open } from "sqlite";
import sqlite3 from "sqlite3";

export const initDb = async () => {
  try {
    const db = await open({
      filename: "./database.sqlite",
      driver: sqlite3.Database,
    });

    await db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
      )
    `);

    await db.exec(`
      CREATE TABLE IF NOT EXISTS movies (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT UNIQUE,
        description TEXT,
        releaseDate TEXT,
        genre TEXT,
        director TEXT,
        runtime TEXT
      )
    `);

    await db.exec(`
      CREATE TABLE IF NOT EXISTS favourites (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        movie INTEGER,
        user INTEGER,
        FOREIGN KEY(user) REFERENCES users(id),
        FOREIGN KEY(movie) REFERENCES movies(id)
      )
    `);

    return db;
  } catch (error) {
    console.error("Failed to initialize database:", error);
    throw error;
  }
};
