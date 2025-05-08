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
    valor DECIMAL(4,2),
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
    dataComentario DATETIME,
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
INSERT INTO anime (titulo, descricao, foto, logo, classificacao, traducao) VALUES
('Naruto', 'Um jovem ninja busca reconhecimento e sonha em se tornar Hokage.', 'naruto.jpg', 'logo_naruto.png', 12, 'Legendado | Dublado'),
('One Piece', 'Monkey D. Luffy parte em busca do tesouro lendário One Piece.', 'onepiece.jpg', 'logo_onepiece.png', 14, 'Legendado | Dublado'),
('Attack on Titan', 'Humanidade luta contra titãs devoradores de homens.', 'aot.jpg', 'logo_aot.png', 18, 'Legendado | Dublado'),
('Death Note', 'Um estudante encontra um caderno com o poder de matar.', 'deathnote.jpg', 'logo_deathnote.png', 16, 'Legendado | Dublado'),
('Dragon Ball Z', 'Goku defende a Terra de poderosos inimigos intergalácticos.', 'dbz.jpg', 'logo_dbz.png', 10, 'Legendado | Dublado'),
('Fullmetal Alchemist: Brotherhood', 'Dois irmãos alquimistas buscam a pedra filosofal.', 'fma.jpg', 'logo_fma.png', 16, 'Legendado | Dublado'),
('Demon Slayer', 'Tanjiro enfrenta demônios após a tragédia em sua família.', 'demonslayer.jpg', 'logo_demonslayer.png', 16, 'Legendado | Dublado'),
('Jujutsu Kaisen', 'Estudante ganha poderes e luta contra maldições.', 'jjk.jpg', 'logo_jjk.png', 16, 'Legendado | Dublado'),
('My Hero Academia', 'Em um mundo de heróis, um jovem sem poderes quer ser o melhor.', 'mha.jpg', 'logo_mha.png', 12, 'Legendado | Dublado'),
('Tokyo Ghoul', 'Um jovem se torna meio-ghoul após um ataque.', 'tokyoghoul.jpg', 'logo_tokyoghoul.png', 18, 'Legendado | Dublado');