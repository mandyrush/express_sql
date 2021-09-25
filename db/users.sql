create table amanda_users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL UNIQUE,
    fullname VARCHAR(100),
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(500),
    PRIMARY KEY (id)
) ENGINE=InnoDB;