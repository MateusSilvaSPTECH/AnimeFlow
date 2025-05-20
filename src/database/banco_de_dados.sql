CREATE DATABASE animeFlow;
use animeFlow; 

CREATE TABLE anime(
 id INT PRIMARY KEY AUTO_INCREMENT,
 titulo VARCHAR(45),
 descricao VARCHAR(255),
 foto VARCHAR(255),
 logo VARCHAR(255),
 classificacao INT,
 traducao VARCHAR(20),
 estacao VARCHAR(20),
 dataLancamento DATE,
 episodeo INT,
 temporada INT,
CONSTRAINT verificaEstacao CHECK(estacao in('Primavera','Verão','Outono','Inverno')) ,
CONSTRAINT verificaTraducao CHECK(traducao in('Legendado','Dublado','Legendado | Dublado')) 
);
CREATE TABLE usuario(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30),
    email VARCHAR(30) UNIQUE,
    senha VARCHAR(30),
    foto VARCHAR(255) DEFAULT 'padrao.png'
);
CREATE TABLE categoria(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome_categoria VARCHAR(25)
);
CREATE TABLE categoria_anime(
	id INT PRIMARY KEY AUTO_INCREMENT,
    fk_anime INT,
    fk_categoria INT,
    CONSTRAINT chkFkAnime 
    FOREIGN KEY(fk_anime) REFERENCES anime(id),
    CONSTRAINT chkFkCategoria 
    FOREIGN KEY(fk_categoria) REFERENCES categoria(id)
);
CREATE TABLE avaliacao(
	id INT PRIMARY KEY AUTO_INCREMENT,
    valor INT,
    fk_anime INT,
    fk_usuario INT,
    CONSTRAINT chkFkAnime_avaliacao 
    FOREIGN KEY(fk_anime) REFERENCES anime(id),
    CONSTRAINT chkFkUsuario_avaliacao
    FOREIGN KEY(fk_usuario) REFERENCES usuario(id)
);
CREATE TABLE favoritar(
	id INT PRIMARY KEY AUTO_INCREMENT,
    status_favorito BOOLEAN,
    fk_anime INT UNIQUE,
    fk_usuario INT UNIQUE,
    CONSTRAINT chkFkAnime_favoritar
    FOREIGN KEY(fk_anime) REFERENCES anime(id),
    CONSTRAINT chkFkUsuario_favoritar
    FOREIGN KEY(fk_usuario) REFERENCES usuario(id)
);
CREATE TABLE comentario(
	id INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(255),
    dataComentario DATETIME ,
    fk_anime INT,
    fk_usuario INT,
    id_resposta INT,
    CONSTRAINT chkFkAnime_comentario
    FOREIGN KEY(fk_anime) REFERENCES anime(id),
    CONSTRAINT chkFkUsuario_comentario
    FOREIGN KEY(fk_usuario) REFERENCES usuario(id),
    CONSTRAINT chkFkRespostaComentario
    FOREIGN KEY(id_resposta) REFERENCES comentario(id)
);

INSERT INTO categoria(nome_categoria) 
VALUES
('Ação'),
('Aventura'),
('Comédia'),    
('Drama'),
('Fantasia'),
('Ficção Científica'),
('Mistério'),
('Romance'),
('Slice of Life'),
('Esporte'),
('Terror'),
('Sobrenatural'),
('Shounen'),
('Shoujo'),
('Isekai');

SELECT * FROM usuario;
INSERT INTO anime (titulo, descricao, foto, logo, classificacao, traducao, estacao, dataLancamento, episodeo, temporada)
VALUES 
('Naruto', 
 'Naruto Uzumaki é um jovem ninja que sonha em se tornar o Hokage da Vila da Folha. Com a raposa de nove caudas selada dentro de si, ele enfrenta desafios intensos e busca o reconhecimento dos outros.',
 'naruto.png', 'naruto_logo.png', 12, 'Dublado', 'Outono', '2002-10-03', 220, 1),

('Death Note', 
 'Light Yagami encontra um caderno sobrenatural que permite matar qualquer pessoa ao escrever seu nome. Ele inicia uma cruzada contra o crime, mas é confrontado pelo brilhante detetive L.',
 'death_note.jpg', 'death_note_logo.png', 16, 'Legendado | Dublado', 'Outono', '2006-10-04', 37, 1),

('Fullmetal Alchemist: Brotherhood', 
 'Após uma tentativa fracassada de alquimia proibida, os irmãos Edward e Alphonse Elric buscam a Pedra Filosofal para restaurar seus corpos. Uma trama profunda sobre sacrifício e redenção.',
 'fma_brotherhood.jpg', 'fma_brotherhood_logo.png', 16, 'Legendado | Dublado', 'Primavera', '2009-04-05', 64, 1),

('One Punch Man', 
 'Saitama é um herói tão poderoso que derrota qualquer inimigo com um único soco, mas sofre com o tédio por não encontrar desafios à altura. Uma sátira cômica e cheia de ação sobre o gênero shounen.',
 'one_punch_man.jpg', 'one_punch_man_logo.png', 14, 'Legendado', 'Outono', '2015-10-05', 12, 1),

('Tokyo Ghoul', 
 'Ken Kaneki se torna meio-ghoul após um acidente, entrando em um mundo sombrio de criaturas que se alimentam de humanos. Ele luta para manter sua humanidade e sobreviver nesse novo ambiente cruel.',
 'tokyo_ghoul.jpg', 'tokyo_ghoul_logo.png', 18, 'Legendado | Dublado', 'Verão', '2014-07-04', 12, 1),

('Bleach', 
 'Ichigo Kurosaki adquire os poderes de um Shinigami e passa a lutar contra espíritos malignos chamados Hollows. Com arcos emocionantes e batalhas épicas, Bleach é um dos pilares dos animes de ação.',
 'bleach.jpg', 'bleach_logo.png', 14, 'Dublado', 'Outono', '2004-10-05', 366, 1),

('Dragon Ball Z', 
 'Goku e seus amigos enfrentam inimigos poderosos em batalhas épicas para proteger a Terra e o universo. Um dos animes mais icônicos da história, cheio de energia, transformação e superação.',
 'dragon_ball_z.jpg', 'dragon_ball_z_logo.png', 10, 'Legendado | Dublado', 'Primavera', '1989-04-26', 291, 1),

('Sword Art Online', 
 'Em 2022, jogadores ficam presos em um jogo de realidade virtual mortal. Kirito, um jogador solo habilidoso, deve vencer os 100 andares do castelo flutuante para libertar todos os prisioneiros.',
 'sao.jpg', 'sao_logo.png', 14, 'Legendado | Dublado', 'Verão', '2012-07-08', 25, 1),

('Fairy Tail', 
 'Lucy se junta à guilda Fairy Tail, onde conhece o mago de fogo Natsu. Juntos, vivem aventuras intensas, enfrentam dragões e salvam o mundo, tudo com muita amizade, magia e determinação.',
 'fairy_tail.jpg', 'fairy_tail_logo.png', 12, 'Dublado', 'Outono', '2009-10-12', 175, 1),

('Black Clover', 
 'Asta nasceu sem magia em um mundo onde ela é tudo. Mesmo assim, ele sonha em se tornar o Rei Mago. Com seu grimório raro, enfrenta desafios constantes para provar seu valor e proteger o reino.',
 'black_clover.jpg', 'black_clover_logo.png', 12, 'Legendado | Dublado', 'Outono', '2017-10-03', 170, 1);

SELECT * FROM anime;
SELECT * FROM usuario;

use animeFlow;
SELECT * FROM comentario;

alter table comentario MODIFY column dataComentario DATETIME DEFAULT CURRENT_TIMESTAMP();


SELECT COUNT(descricao) FROM comentario;
CREATE TABLE anime_categoria(
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_categoria INT,
    fk_anime INT,
    CONSTRAINT chkFkCategoria_catAnime
    FOREIGN KEY(fk_categoria) REFERENCES categoria(id),
    CONSTRAINT chkFkAnime_catAnime
    FOREIGN KEY(fk_anime) REFERENCES anime(id)
);

INSERT INTO anime_categoria (fk_anime, fk_categoria)
VALUES
-- Naruto
(1, 1),  -- Ação
(1, 2),  -- Aventura
(1, 13), -- Shounen
(1, 12), -- Sobrenatural
-- Death Note
(2, 6),  -- Ficção Científica
(2, 7),  -- Mistério
(2, 4),  -- Drama
(2, 12), -- Sobrenatural
-- Fullmetal Alchemist: Brotherhood
(3, 1),  -- Ação
(3, 2),  -- Aventura
(3, 5),  -- Fantasia
(3, 4),  -- Drama
(3, 13), -- Shounen
-- One Punch Man
(4, 1),  -- Ação
(4, 3),  -- Comédia
(4, 13), -- Shounen
(4, 6),  -- Ficção Científica
-- Tokyo Ghoul
(5, 1),  -- Ação
(5, 4),  -- Drama
(5, 11), -- Terror
(5, 12), -- Sobrenatural
-- Bleach
(6, 1),  -- Ação
(6, 2),  -- Aventura
(6, 12), -- Sobrenatural
(6, 13), -- Shounen
-- Dragon Ball Z
(7, 1),  -- Ação
(7, 2),  -- Aventura
(7, 5),  -- Fantasia
(7, 13), -- Shounen
-- Sword Art Online
(8, 1),  -- Ação
(8, 5),  -- Fantasia
(8, 6),  -- Ficção Científica
(8, 15), -- Isekai
(8, 8),  -- Romance
-- Fairy Tail
(9, 1),  -- Ação
(9, 2),  -- Aventura
(9, 5),  -- Fantasia
(9, 13), -- Shounen
(9, 3),  -- Comédia
-- Black Clover
(10, 1),  -- Ação
(10, 2),  -- Aventura
(10, 5),  -- Fantasia
(10, 13); -- Shounen

SELECT a.titulo,c.nome_categoria FROM anime_categoria as ac
JOIN anime as a 
ON a.id = ac.fk_anime
JOIN categoria as c
ON c.id = ac.fk_categoria WHERE a.id = 1;

use animeFlow;
select * from comentario;
select * from usuario;
DELETE FROM comentario WHERE id = 3;

      SELECT 
    c.id AS id_comentario,
    c.descricao AS descricao_comentario,
    c.dataComentario,
    c.id_resposta,
    c.fk_usuario,
    u.nome
    FROM comentario c
    JOIN usuario u ON c.fk_usuario = u.id
    WHERE c.fk_anime = 2;


select * from usuario where id = 1;

select ROUND(AVG(a.valor),1) AS "media",COUNT(a.valor) AS "quantidade" from avaliacao as a
JOIN anime as an
ON an.id = a.fk_anime
WHERE a.fk_anime = 2;