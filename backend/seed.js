/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
const { faker } = require("@faker-js/faker");

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    // Optional: Truncate tables (remove existing data)
    // await database.query("truncate item");

    // Insert fake data into the 'item' table
    for (let i = 0; i < 1; i += 1) {
      queries.push(
        database.query("insert into role(label) values (?)", ["player"])
      );
      queries.push(
        database.query("insert into role(label) values (?)", ["admin"])
      );
    }

    for (let i = 0; i <= 15; i += 1) {
      queries.push(
        database.query(
          "insert into player(role_id,username, email, password) values (?,?,?,?)",
          [
            1,
            faker.internet.userName(),
            faker.internet.email(),
            faker.internet.password(),
          ]
        )
      );
    }
    for (let i = 0; i < 1; i += 1) {
      queries.push(
        database.query(
          "insert into game(name,alt,description,image) values (?,?,?,?)",
          [
            "tic-tac-toe",
            "tic-tac-toe",
            "Deux joueurs posent tour à tour un rond, pour l'un, une croix, pour l'autre, dans une grille de 3 cases par 3. Le but du jeu est d'obtenir un alignement (en ligne, colonne ou diagonale) de ses trois signes.",
            faker.image.urlLoremFlickr(),
          ]
        )
      );
    }
    for (let i = 0; i < 1; i += 1) {
      queries.push(
        database.query(
          "insert into game(name,alt,description,image) values (?,?,?,?)",
          [
            "memory",
            "memory",
            "Tout d'abord, il faut mélanger les cartes. Puis, les étaler face contre table afin qu'aucun des joueurs ne puissent les identifier. Une fois cela fait, le premier joueur retourne 2 cartes de son choix. Si les cartes sont identiques, le joueur les conserve à côté de lui et rejoue.",
            faker.image.urlLoremFlickr(),
          ]
        )
      );
    }
    for (let i = 0; i < 1; i += 1) {
      queries.push(
        database.query(
          "insert into game(name,alt,description,image) values (?,?,?,?)",

          [
            "typeracer",
            "typeracer",
            "TypeRacer est un jeu qui vous aide à améliorer vos compétences en matière de dactylographie. Il vous met en concurrence avec d'autres dactylos dans une course. Mais au lieu de manœuvrer une voiture ou un avatar sur une piste ou dans un labyrinthe, vous devrez taper des mots pour amener votre voiture du point A au point B. Ainsi, non seulement vous vous entraînerez à taper rapidement et avec précision, mais vous aurez aussi le plaisir de le faire.",
            faker.image.urlLoremFlickr(),
          ]
        )
      );
    }

    for (let i = 0; i <= 10; i += 1) {
      const startDate = faker.date.past({ years: 1 });
      const d = new Date(startDate);
      queries.push(
        database.query(
          "insert into party(player_id,game_id,start_time,end_time,is_won) values (?,?,?,?,?)",
          [
            Math.ceil(Math.random() * 16),
            Math.ceil(Math.random() * 3),
            startDate,
            new Date(d.getTime() + Math.ceil(Math.random() * 45 * 60000)),
            Math.floor(Math.random() * 2),
          ]
        )
      );
    }
    for (let i = 0; i <= 10; i += 1) {
      const userId = i + 1;
      const test = `${faker.lorem.words(1)} profilwe avatar`;
      queries.push(
        database.query(
          "insert into profile(bio,avatar,alt,player_id) values (?,?,?,?)",
          [faker.lorem.paragraph(), faker.image.avatar(), test, userId]
        )
      );
    }

    // requete
    // "insert into player(role_id,username, email, password) values (?,?,?,?)",
    // [
    //   ["1"],
    //   faker.internet.userName(),
    //   faker.internet.email(),
    //   faker.internet.password(),
    // ]

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
