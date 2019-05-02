CREATE DATABASE chat;

USE chat;

CREATE TABLE User (
  ID int NOT NULL AUTO_INCREMENT,
  username varchar(50),
  PRIMARY KEY (ID)
);
CREATE TABLE Room (
  ID int NOT NULL AUTO_INCREMENT,
  roomname varchar(50),
  PRIMARY KEY (ID)
);
CREATE TABLE Messages (
  /* Describe your table here.*/
  messageID int NOT NULL AUTO_INCREMENT,
  message varchar(255),
  userID int,
  roomID int,
  PRIMARY KEY (messageID),
  FOREIGN KEY (userID) REFERENCES User(ID),
  FOREIGN KEY (roomID) REFERENCES Room(ID)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

