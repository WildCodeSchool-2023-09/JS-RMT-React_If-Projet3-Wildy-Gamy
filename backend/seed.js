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

    /* ************************************************************************* */

    // Generating Seed Data

    // Optional: Truncate tables (remove existing data)
    // await database.query("truncate item");

    // Insert fake data into the 'item' table
    const queriesRole = [];
    for (let i = 0; i < 1; i += 1) {
      queriesRole.push(
        database.query("insert into role(label) values (?)", ["player"])
      );
      queriesRole.push(
        database.query("insert into role(label) values (?)", ["admin"])
      );
    }

    await Promise.all(queriesRole);

    const queriesPlayer = [];
    for (let i = 0; i <= 20; i += 1) {
      queriesPlayer.push(
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

    await Promise.all(queriesPlayer);

    const queriesGame = [];

    queriesGame.push(
      database.query(
        "insert into game(name,alt,description,image) values (?,?,?,?)",
        [
          "tic-tac-toe",
          "tic-tac-toe",
          "Deux joueurs posent tour à tour un rond, pour l'un, une croix, pour l'autre, dans une grille de 3 cases par 3. Le but du jeu est d'obtenir un alignement (en ligne, colonne ou diagonale) de ses trois signes.",
          "https://github.com/Defreitasnicolas/assets_p3/blob/main/tictactoe%201.png?raw=true",
        ]
      )
    );

    queriesGame.push(
      database.query(
        "insert into game(name,alt,description,image) values (?,?,?,?)",
        [
          "memory",
          "memory",
          "Tout d'abord, il faut mélanger les cartes. Puis, les étaler face contre table afin qu'aucun des joueurs ne puissent les identifier. Une fois cela fait, le premier joueur retourne 2 cartes de son choix. Si les cartes sont identiques, le joueur les conserve à côté de lui et rejoue.",
          "https://github.com/Defreitasnicolas/assets_p3/blob/main/jeu2.png?raw=true",
        ]
      )
    );

    queriesGame.push(
      database.query(
        "insert into game(name,alt,description,image) values (?,?,?,?)",

        [
          "typeracer",
          "typeracer",
          "TypeRacer est un jeu qui vous aide à améliorer vos compétences en matière de dactylographie. Il vous met en concurrence avec d'autres dactylos dans une course. Mais au lieu de manœuvrer une voiture ou un avatar sur une piste ou dans un labyrinthe, vous devrez taper des mots pour amener votre voiture du point A au point B. Ainsi, non seulement vous vous entraînerez à taper rapidement et avec précision, mais vous aurez aussi le plaisir de le faire.",
          "https://github.com/Defreitasnicolas/assets_p3/blob/main/jeu3.png?raw=true",
        ]
      )
    );

    await Promise.all(queriesGame);

    const sendPlayer = [];

    sendPlayer.push(
      database.query(
        "insert into player(role_id,username,email,password) values(?,?,?,?)",
        [
          2,
          "WildyGamer",
          "WildyGamer@gmail.com",
          "$argon2id$v=19$m=65536,t=3,p=4$khzdtRAGFeEjX3JOP8ahtQ$sCKskfRURxiMENC8BwuI9UT7om2gvEy+hUwerpNys9k",
        ]
      )
    );
    await Promise.all(sendPlayer);

    const sendProfil = [];
    sendProfil.push(
      database.query(
        "insert into profile(bio,avatar,alt,player_id) values(?,?,?,?)",
        [
          "Titulus voluptatem thesis soleo cupressus voluptatum ad ulciscor absorbeo cursim. Bestia tabella ultio cresco una tepidus ambitus celebrer autem. Vae cedo adiuvo pectus capio suffoco socius suadeo ea.",
          "https://avatars.githubusercontent.com/u/40671908",
          "via profilwe avatar",
          22,
        ]
      )
    );
    await Promise.all(sendProfil);

    const queryParty = [];
    for (let i = 0; i <= 22; i += 1) {
      const startDate = faker.date.past({ years: 1 });
      const d = new Date(startDate);
      queryParty.push(
        database.query(
          "insert into party(player_id,game_id,start_time,end_time,is_won) values (?,?,?,?,?)",
          [
            Math.ceil(Math.random() * 22),
            Math.ceil(Math.random() * 3),
            startDate,
            new Date(d.getTime() + Math.ceil(Math.random() * 45 * 60000)),
            Math.floor(Math.random() * 2),
          ]
        )
      );
    }
    await Promise.all(queryParty);

    const queriesProfile = [];
    for (let i = 0; i <= 20; i += 1) {
      const userId = i + 1;
      const test = `${faker.lorem.words(1)} profilwe avatar`;
      queriesProfile.push(
        database.query(
          "insert into profile(bio,avatar,alt,player_id) values (?,?,?,?)",
          [faker.lorem.paragraph(), faker.image.avatar(), test, userId]
        )
      );
    }

    await Promise.all(queriesProfile);

    // requete
    // "insert into player(role_id,username, email, password) values (?,?,?,?)",
    // [
    //   ["1"],
    //   faker.internet.userName(),
    //   faker.internet.email(),
    //   faker.internet.password(),
    // ]

    /* ************************************************************************* */

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
