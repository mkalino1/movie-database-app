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

    // db.run(
    //   `INSERT INTO movies (
    //   name,
    //   description,
    //   releaseDate,
    //   genre,
    //   director,
    //   runtime) VALUES (?, ?, ?, ?, ?, ?)`,
    //   [
    //     "Pulcino Powraca",
    //     "Kolejna odsłona przeuroczego filmu o przygodach pulcina. Poznaje on cudownych przyjaciół i przeżywa wiele przygód.",
    //     "2018-05-12",
    //     "Komedia",
    //     "Pulcino",
    //     "1h 20min",
    //   ],
    // );

    await db.exec(`
      CREATE TABLE IF NOT EXISTS favourites (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        movie INTEGER,
        user INTEGER,
        FOREIGN KEY(user) REFERENCES users(id),
        FOREIGN KEY(movie) REFERENCES movies(id)
      )
    `);

    // db.run(
    //   `INSERT INTO favourites (
    //   movie,
    //   user) VALUES (?, ?)`,
    //   [2, 1],
    // );

    return db;
  } catch (error) {
    console.error("Failed to initialize database:", error);
    throw error;
  }
};
