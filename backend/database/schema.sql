CREATE TABLE
    role (
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        label VARCHAR(150)
    );

CREATE TABLE
    player (
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        role_id INT NULL,
        username VARCHAR(50),
        email VARCHAR(255),
        password VARCHAR(128),
        FOREIGN KEY (role_id) REFERENCES role(id)
    );

CREATE TABLE
    profile (
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        bio VARCHAR(350),
        avatar VARCHAR(255),
        alt VARCHAR(100),
        player_id INT NOT NULL,
        FOREIGN KEY (player_id) REFERENCES player(id)
    );

CREATE TABLE
    game (
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        name VARCHAR(50),
        alt VARCHAR(50),
        description VARCHAR(510),
        image VARCHAR(255)
    );

CREATE TABLE
    party (
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        player_id INT NOT NULL,
        game_id INT NOT NULL,
        start_time TIMESTAMP,
        end_time TIMESTAMP,
        is_won BOOLEAN,
        FOREIGN KEY (player_id) REFERENCES player(id),
        FOREIGN KEY (game_id) REFERENCES game(id)
    );

create table comment (
  id int unsigned primary key auto_increment not null,
  avis VARCHAR(255) NOT NULL
);

