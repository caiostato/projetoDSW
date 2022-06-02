CREATE DATABASE `ponto_turistico`;
USE `ponto_turistico`;

CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(100) NOT NULL,
  `user_password` varchar(100) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_date` date NOT NULL,
  `user_addr` varchar(200) NOT NULL,
  `user_img` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `ponto_turistico` (
  `ponto_id` int NOT NULL AUTO_INCREMENT,
  `ponto_nome` varchar(100) NOT NULL,
  `ponto_addr` varchar(150) DEFAULT NULL,
  `ponto_img` varchar(150) DEFAULT NULL,
  `user_idFK` int DEFAULT NULL,
  PRIMARY KEY (`ponto_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

insert into ponto_turistico values(1,"MASP","Av. Paulista, 1578, Bela Vista, São Paulo, SP","https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/MASP_Brazil.jpg/1200px-MASP_Brazil.jpg",4)