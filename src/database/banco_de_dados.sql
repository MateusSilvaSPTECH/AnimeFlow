CREATE DATABASE animeFlow;
USE animeFlow;
SELECT * FROM anime;
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
    fk_anime INT,
    fk_usuario INT,
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
 'black_clover.jpg', 'black_clover_logo.png', 12, 'Legendado | Dublado', 'Outono', '2017-10-03', 170, 1),

('Attack on Titan', 
 'Em um mundo onde a humanidade vive cercada por muralhas para se proteger de titãs devoradores de humanos, Eren Yeager se junta à Tropa de Exploração para combater essas criaturas e descobrir a verdade por trás de sua existência.',
 'attack_on_titan.jpg', 'attack_on_titan_logo.png', 16, 'Legendado | Dublado', 'Primavera', '2013-04-07', 25, 1),

('My Hero Academia', 
 'Em um mundo onde a maioria das pessoas possui superpoderes chamados "quirks", Izuku Midoriya, um jovem sem poderes, sonha em se tornar um herói e é escolhido pelo maior herói de todos para ser seu sucessor.',
 'my_hero_academia.jpeg', 'my_hero_academia_logo.png', 14, 'Legendado | Dublado', 'Primavera', '2016-04-03', 13, 1),

('Demon Slayer', 
 'Tanjiro Kamado se torna um caçador de demônios após sua família ser massacrada e sua irmã Nezuko transformada em um demônio. Ele busca uma cura para sua irmã e vingança contra o demônio responsável.',
 'demon_slayer.jpeg', 'demon_slayer_logo.png', 16, 'Legendado | Dublado', 'Primavera', '2019-04-06', 26, 1),

('Jujutsu Kaisen', 
 'Yuji Itadori, um estudante do ensino médio, se envolve no mundo do ocultismo ao engolir um objeto amaldiçoado para proteger seus amigos, tornando-se o hospedeiro de uma poderosa maldição.',
 'jujutsu_kaisen.jpeg', 'jujutsu_kaisen_logo.png', 16, 'Legendado | Dublado', 'Outono', '2020-10-03', 24, 1),

('One Piece', 
 'Monkey D. Luffy parte em uma jornada para se tornar o Rei dos Piratas, reunindo uma tripulação diversa e enfrentando inúmeros desafios em busca do lendário tesouro One Piece.',
 'one_piece.jpeg', 'one_piece_logo.png', 12, 'Legendado | Dublado', 'Outono', '1999-10-20', 1000, 1),

('Hunter x Hunter', 
 'Gon Freecss embarca em uma jornada para se tornar um Hunter e encontrar seu pai desaparecido, enfrentando desafios perigosos e fazendo amizades ao longo do caminho.',
 'hunter_x_hunter.jpeg', 'hunter_x_hunter_logo.png', 14, 'Legendado | Dublado', 'Outono', '2011-10-02', 148, 1),

('Code Geass: Lelouch of the Rebellion', 
 'Lelouch vi Britannia adquire um poder misterioso chamado Geass e lidera uma rebelião contra o Império de Britannia para criar um mundo melhor para sua irmã.',
 'code_geass.jpeg', 'code_geass_logo.png', 16, 'Legendado | Dublado', 'Outono', '2006-10-06', 25, 1),

( 
  'Darling in the Franxx',
  'Em um futuro distante, jovens pilotos chamados Parasitas pilotam robôs Franxx para lutar contra monstros gigantes. Hiro encontra Zero Two, uma misteriosa parceira com quem formará um laço especial.',
  'darling.jpg','logo_darling.png',16,'Legendado','Inverno','2018-01-13',24,1
),

('Mob Psycho 100', 
 'Shigeo "Mob" Kageyama é um adolescente com poderes psíquicos incríveis que luta para manter suas emoções sob controle enquanto enfrenta espíritos malignos e desafios pessoais.',
 'mob_psycho_100.jpg', 'mob_psycho_100_logo.png', 14, 'Legendado | Dublado', 'Verão', '2016-07-12', 12, 1),

('Re:Zero − Starting Life in Another World', 
 'Subaru Natsuki é transportado para um mundo de fantasia onde descobre que tem a habilidade de voltar no tempo após a morte, usando isso para proteger aqueles que ama.',
 're_zero.jpg', 're_zero_logo.png', 16, 'Legendado | Dublado', 'Primavera', '2016-04-04', 25, 1),

('Vinland Saga', 
 'Thorfinn, um jovem guerreiro viking, busca vingança contra o assassino de seu pai enquanto se envolve nas guerras e políticas da Europa medieval.',
 'vinland_saga.jpeg', 'vinland_saga_logo.png', 16, 'Legendado | Dublado', 'Verão', '2019-07-08', 24, 1),

('The Promised Neverland', 
 'Em um orfanato aparentemente perfeito, crianças descobrem um segredo sombrio sobre seu destino e elaboram um plano para escapar e sobreviver no mundo exterior.',
 'the_promised_neverland.jpeg', 'the_promised_neverland_logo.png', 16, 'Legendado | Dublado', 'Inverno', '2019-01-11', 12, 1),

('Hajime no Ippo',
'Ippo Makunouchi, um estudante tímido, entra no mundo do boxe e busca se tornar o melhor pugilista do Japão.',
'hajime_no_ippo.jpeg','hajime_no_ippo_logo.png',12,'Legendado','Outono','2000-10-04',75,1),

('Oregairu',
'Hikigaya Hachiman, um cínico estudante do ensino médio, é forçado a participar do Clube de Serviço, onde lida com problemas sociais ao lado de Yukino e Yui.',
'oregairu.jpg','oregairu_logo.png',14,'Legendado | Dublado','Primavera','2013-04-05',13,1),

('Solo Leveling',
 'Sung Jin-Woo, o caçador mais fraco da humanidade, ganha habilidades únicas após um misterioso evento e busca se tornar o caçador mais forte.',
  'solo_leveling.jpg', 'solo_leveling_logo.png', 16, 'Legendado', 'Inverno', '2024-01-06', 12, 1);
alter table comentario MODIFY column dataComentario DATETIME DEFAULT CURRENT_TIMESTAMP();

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
(1, 1), (1, 2), (1, 13), (1, 12),
-- Death Note
(2, 6), (2, 7), (2, 4), (2, 12),
-- Fullmetal Alchemist: Brotherhood
(3, 1), (3, 2), (3, 5), (3, 4), (3, 13),
-- One Punch Man
(4, 1), (4, 3), (4, 13), (4, 6),
-- Tokyo Ghoul
(5, 1), (5, 4), (5, 11), (5, 12),
-- Bleach
(6, 1), (6, 2), (6, 12), (6, 13),
-- Dragon Ball Z
(7, 1), (7, 2), (7, 5), (7, 13),
-- Sword Art Online
(8, 1), (8, 5), (8, 6), (8, 15), (8, 8),
-- Fairy Tail
(9, 1), (9, 2), (9, 5), (9, 13), (9, 3),
-- Black Clover
(10, 1), (10, 2), (10, 5), (10, 13),
-- Attack on Titan
(11, 1), (11, 2), (11, 4), (11, 5), (11, 13),
-- My Hero Academia
(12, 1), (12, 2), (12, 5), (12, 13),
-- Demon Slayer
(13, 1), (13, 2), (13, 5), (13, 12), (13, 13),
-- Jujutsu Kaisen
(14, 1), (14, 5), (14, 12), (14, 13),
-- One Piece
(15, 1), (15, 2), (15, 3), (15, 13),
-- Hunter x Hunter
(16, 1), (16, 2), (16, 4), (16, 13),
-- Code Geass
(17, 1), (17, 4), (17, 6), (17, 13),
-- darling
(18, 1), (18, 8),
-- Mob Psycho 100
(19, 1), (19, 3), (19, 12), (19, 13),
-- Re:Zero
(20, 4), (20, 5), (20, 7), (20, 15),
-- Vinland Saga
(21, 1), (21, 2), (21, 4),
-- The Promised Neverland
(22, 4), (22, 7), (22, 11), (22, 13),
-- Hajime no Ippo
(23, 1), (23, 4), (23, 10),
-- Oregairu
(24, 3), (24, 4), (24, 8), (24, 9),
-- Solo Leveling
(25, 1), (25, 2), (25, 5), (25, 13);

INSERT INTO usuario (nome, email, senha) VALUES 
('Felipe Macedo', 'felipe@email.com', '123456'),
('Vinicius Silva', 'vinicius@email.com', '123456'),
('Moises', 'moises@email.com', '123456'),
('Gabriel', 'gabriel@email.com', '123456'),
('Hugo Carvalho', 'hugo@email.com', '123456');

-- aVVALIAÇÕES
INSERT INTO avaliacao (valor, fk_usuario, fk_anime) VALUES 
(5, 1, 1),
(4, 1, 2),
(3, 1, 3),
(2, 1, 4),
(1, 1, 5),
(3, 2, 1),
(5, 2, 2),
(2, 2, 3),
(1, 2, 4),
(4, 2, 5),
(2, 3, 1),
(3, 3, 2),
(4, 3, 3),
(5, 3, 4),
(1, 3, 5),
(1, 4, 1),
(2, 4, 2),
(3, 4, 3),
(4, 4, 4),
(5, 4, 5),
(4, 5, 1),
(1, 5, 2),
(5, 5, 3),
(3, 5, 4),
(2, 5, 5);

-- Comentarios
INSERT INTO comentario (descricao, fk_usuario, fk_anime) VALUES
('Simplesmente incrível, do início ao fim!', 1, 1),
('Muito bom, só achei o final um pouco corrido.', 1, 2),
('É mediano, mas tem bons momentos.', 1, 3),
('Não me prendeu muito, enredo fraco.', 1, 4),
('Infelizmente, não gostei de quase nada.', 1, 5),
('Tem pontos bons, mas faltou algo.', 2, 1),
('Obra-prima! Emocionante e bem animado.', 2, 2),
('Personagens mal desenvolvidos.', 2, 3),
('Não recomendo, me decepcionou.', 2, 4),
('Boa trama e ótima direção de arte.', 2, 5),
('Não me agradou, mas reconheço a produção.', 3, 1),
('Nada demais, mas dá pra assistir.', 3, 2),
('Gostei bastante dos personagens.', 3, 3),
('Obra sensacional, recomendo muito!', 3, 4),
('Não consegui passar do segundo episódio.', 3, 5),
('Muito fraco, não me convenceu.', 4, 1),
('Esperava mais pelo hype.', 4, 2),
('Legal, mas nada memorável.', 4, 3),
('Gostei do ritmo e da trilha sonora.', 4, 4),
('Sensacional, um dos meus favoritos!', 4, 5),
('Bem dirigido, com bons momentos.', 5, 1),
('Não entendi o hype em torno disso.', 5, 2),
('Fantástico, enredo envolvente!', 5, 3),
('Gostei, mas poderia ser melhor.', 5, 4),
('Fraco, mas teve algumas cenas boas.', 5, 5);


use animeFlow; 
    SELECT DISTINCT
        a.id,
        a.titulo,
        a.descricao,
        a.foto,
        a.logo,
        a.classificacao,
        a.traducao,
        a.estacao,
        a.dataLancamento,
        a.episodeo,
        a.temporada
        from anime as a
        JOIN anime_categoria as ac
        ON ac.fk_anime = a.id
        JOIN categoria as c
        ON c.id = ac.fk_categoria
        WHERE a.estacao = 'Inverno'
        GROUP BY a.id,a.titulo,a.descricao,a.foto,a.logo,
        a.classificacao,a.traducao,a.estacao,a.dataLancamento,a.episodeo,a.temporada