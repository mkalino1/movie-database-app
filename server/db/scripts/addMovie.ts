import { open } from "sqlite";
import sqlite3 from "sqlite3";

const addMovie = async () => {
  try {
    const db = await open({
      filename: "./database.sqlite",
      driver: sqlite3.Database,
    });

    db.run(
      `INSERT INTO movies (
      name,
      description,
      releaseDate,
      genre,
      director,
      runtime) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        "Misja Kleopatra",
        "Asterix, Obelix i Panoramix wyruszają do Egiptu, by pomóc architektowi Numernabisowi. Ma on zaledwie trzy miesiące na wybudowanie pałacu dla Kleopatry.",
        "2002-03-18",
        "Komedia",
        "Alain Chabat",
        "1h 47min",
      ],
    );
  } catch (error) {
    console.error("Failed to connect to database:", error);
    throw error;
  }
};

addMovie();
