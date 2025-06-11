CREATE DATABASE animeFlow;
USE animeFlow;

select * from favoritar where fk_usuario = 6;

CREATE TABLE anime(
 id INT PRIMARY KEY AUTO_INCREMENT,
 titulo VARCHAR(45),
 descricao TEXT,
 foto VARCHAR(255),
 logo VARCHAR(255),
 fundo VARCHAR(255),
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
    FOREIGN KEY(fk_anime) REFERENCES anime(id) ON DELETE CASCADE,
    CONSTRAINT chkFkUsuario_avaliacao
    FOREIGN KEY(fk_usuario) REFERENCES usuario(id)
);
CREATE TABLE favoritar(
	id INT PRIMARY KEY AUTO_INCREMENT,
    status_favorito BOOLEAN,
    data_salvo DATETIME DEFAULT CURRENT_TIMESTAMP(),
    fk_anime INT,
    fk_usuario INT,
    CONSTRAINT chkFkAnime_favoritar
    FOREIGN KEY(fk_anime) REFERENCES anime(id) ON DELETE CASCADE,
    CONSTRAINT chkFkUsuario_favoritar
    FOREIGN KEY(fk_usuario) REFERENCES usuario(id)
);

UPDATE favoritar set status_favorito = false WHERE fk_usuario = 6 and fk_anime = 1;

CREATE TABLE comentario(
	id INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(255),
    dataComentario DATETIME,
    fk_anime INT,
    fk_usuario INT,
    id_resposta INT,
    CONSTRAINT chkFkAnime_comentario
    FOREIGN KEY(fk_anime) REFERENCES anime(id) ON DELETE CASCADE,
    CONSTRAINT chkFkUsuario_comentario
    FOREIGN KEY(fk_usuario) REFERENCES usuario(id),
    CONSTRAINT chkFkRespostaComentario
    FOREIGN KEY(id_resposta) REFERENCES comentario(id)
);
CREATE TABLE curtida_comentario(
	id INT PRIMARY KEY AUTO_INCREMENT,
    status_curtida BOOLEAN,
    data_curtida DATETIME ,
    fk_comentario INT,
    fk_usuario INT,
    CONSTRAINT chkFkUsuario_curtida
    FOREIGN KEY(fk_usuario) REFERENCES usuario(id),
    CONSTRAINT chkComentario_curtida
    FOREIGN KEY(fk_comentario) REFERENCES comentario(id) ON DELETE CASCADE
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

select dataLancamento from anime;
INSERT INTO anime (titulo, descricao, foto, logo, fundo, classificacao, traducao, estacao, dataLancamento, episodeo, temporada)
VALUES 
('Naruto', 
 'No coração de Konohagakure, a Vila Oculta da Folha, reside **Naruto Uzumaki**, um jovem órfão e brincalhão, frequentemente ignorado e mal compreendido por carregar um terrível segredo: ele é o jinchuuriki da poderosa **Raposa de Nove Caudas**, a mesma criatura que quase destruiu a vila anos atrás. Sua infância solitária e o ostracismo impulsionam um sonho audacioso e aparentemente impossível: tornar-se o **Hokage**, o líder supremo e ninja mais forte de sua aldeia, e assim conquistar o respeito e o reconhecimento de todos. A jornada de Naruto é uma saga épica de **superação, resiliência e a formação de laços inquebráveis**. Desde seus primeiros passos na Academia Ninja, ao lado de seus companheiros de equipe, a determinada **Sakura Haruno** e o talentoso e misterioso **Sasuke Uchiha**, sob a tutela do lendário **Kakashi Hatake**, Naruto enfrenta desafios que transcendem o combate físico. Ele aprende sobre o verdadeiro significado de amizade, sacrifício, perdão e a dolorosa realidade do ciclo de ódio no mundo ninja. Através de treinamentos árduos, missões perigosas e confrontos com vilões complexos que testam seus ideais, como Orochimaru, a Akatsuki e, finalmente, as verdadeiras origens da Raposa, Naruto amadurece de um garoto problemático para um herói que inspira gerações, provando que a determinação e a crença nos próprios sonhos podem mudar o destino, não só de um indivíduo, mas de um mundo inteiro. Sua história ressoa com temas universais de **aceitação, perseverança e a busca por um propósito**, marcando-o como um dos animes mais influentes e queridos de todos os tempos.',
 'naruto.png', 'naruto_logo.png', 'naruto_fundo.png', 12, 'Dublado', 'Outono', '2002-10-03', 220, 1),

('Death Note', 
 'A trama de **Death Note** mergulha em um complexo jogo de gato e rato psicológico e moral que redefine o conceito de justiça. **Light Yagami**, um estudante universitário brilhante e entediado com a crescente criminalidade e a decadência moral do mundo, vê sua vida se transformar radicalmente ao encontrar um misterioso caderno sobrenatural: o **Death Note**. Deixado cair no mundo humano por um shinigami (deus da morte) chamado Ryuk, o caderno concede ao seu portador o poder de matar qualquer pessoa cujo nome seja escrito em suas páginas, desde que o rosto da vítima seja conhecido. Consumido por um ideal de criar um "novo mundo" livre de malfeitores, Light assume a identidade de "Kira" (derivado da palavra "killer" em inglês) e inicia uma brutal e eficiente cruzada de eliminação de criminosos em escala global. No entanto, sua ambição megalomaníaca logo atrai a atenção das autoridades internacionais. Para deter Kira, é convocado o enigmático e igualmente genial detetive conhecido apenas como **L**. Com uma inteligência perspicaz e métodos pouco convencionais, L se torna o principal adversário de Light, desencadeando um duelo intelectual de proporções épicas. Cada movimento é calculado, cada pista analisada minuciosamente, e a tensão aumenta à medida que ambos os lados tentam expor a identidade um do outro. A série explora profundamente os limites da moralidade, a natureza da justiça, o poder corrompedor e as consequências da hubris, questionando se o fim justifica os meios e se um único indivíduo pode realmente ser o juiz e carrasco da humanidade. O embate entre Light e L não é apenas uma batalha de intelecto, mas também um choque de filosofias que prende o espectador do início ao fim.',
 'death_note.jpg', 'death_note_logo.png', 'death_note_fundo.png', 16, 'Legendado | Dublado', 'Outono', '2006-10-04', 37, 1),

('Fullmetal Alchemist: Brotherhood', 
 'Considerado por muitos como uma obra-prima do gênero shounen, **Fullmetal Alchemist: Brotherhood** é uma adaptação fiel e completa do aclamado mangá de Hiromu Arakawa, mergulhando o público em um mundo onde a alquimia é a ciência dominante. A trama central gira em torno dos irmãos **Edward e Alphonse Elric**, que, em um ato de desespero e amor filial, tentam reviver sua falecida mãe através da proibida transmutação humana. A lei da alquimia, no entanto, é a "troca equivalente", e o preço por tal transgressão é devastador: Edward perde seu braço esquerdo e perna direita, enquanto Alphonse perde todo o seu corpo, tendo sua alma fixada em uma armadura através de um selo de sangue. Em sua busca incansável pela lendária **Pedra Filosofal**, o único artefato capaz de desafiar as leis da troca equivalente e restaurar seus corpos, os irmãos se tornam Alquimistas Federais, servindo ao exército de Amestris. Sua jornada os leva a desvendar uma intrincada e sombria conspiração militar que se estende por todo o país, envolvendo homúnculos (seres artificiais que representam os sete pecados capitais), figuras misteriosas do passado e um plano para um sacrifício em massa que ameaça a própria existência da humanidade. A série explora complexos temas como **sacrifício, redenção, ética científica, moralidade da guerra, as consequências da ambição e o verdadeiro significado da humanidade e da alma**. Com um enredo profundo, personagens cativantes, batalhas alquímicas espetaculares e momentos emocionantes, **Fullmetal Alchemist: Brotherhood** é uma jornada épica que transcende o simples anime de ação, oferecendo uma rica tapeçaria de emoções e reflexões.',
 'fma_brotherhood.jpg', 'fma_brotherhood_logo.png', 'fma_brotherhood_fundo.jpg', 16, 'Legendado | Dublado', 'Primavera', '2009-04-05', 64, 1),

('One Punch Man', 
 'Em um mundo assolado por monstros e vilões de proporções catastróficas, o surgimento de um novo tipo de herói, **Saitama**, desafia todas as expectativas e tropos do gênero shounen. Saitama é um homem comum que, após um treinamento físico intenso e aparentemente mundano (100 flexões, 100 abdominais, 100 agachamentos e 10 km de corrida todos os dias por três anos), adquire uma força tão avassaladora que é capaz de **derrotar qualquer inimigo com um único soco**. No entanto, essa força descomunal o leva a um profundo e existencial tédio. Não há desafios que o excitem, nenhuma batalha que o faça sentir a adrenalina. A série é uma brilhante **sátira e paródia dos animes de super-heróis e shounen**, subvertendo clichês e explorando a psicologia de um ser que é demasiado poderoso para o seu próprio bem. Acompanhado por seu ciborgue discípulo, **Genos**, Saitama tenta ganhar reconhecimento na Associação de Heróis, enfrentando a burocracia, a desconfiança pública e uma galeria de vilões bizarros e hilários que, ironicamente, nunca conseguem dar-lhe uma luta satisfatória. A comédia surge da desconexão entre a percepção que o mundo tem de Saitama (muitas vezes subestimando-o ou creditando outros por suas vitórias) e sua invencibilidade monótona. Além do humor, a série oferece sequências de ação incrivelmente animadas e uma reflexão sobre o que significa ser um herói quando não há mais obstáculos a serem superados, tornando **One Punch Man** uma experiência única e divertidamente explosiva.',
 'one_punch_man.jpg', 'one_punch_man_logo.png', 'one_punch_man_fundo.jpg', 14, 'Legendado', 'Outono', '2015-10-05', 12, 1),

('Tokyo Ghoul', 
 'Na vibrante e, ao mesmo tempo, sombria metrópole de Tóquio, uma ameaça oculta espreita nas sombras: os **ghouls**, criaturas humanoides que se alimentam exclusivamente de carne humana. A vida de **Ken Kaneki**, um tímido e ávido leitor universitário, desmorona em um instante quando um encontro fatídico com uma ghoul o transforma em um **meio-ghoul** após um transplante de órgãos de emergência. Preso entre dois mundos, Kaneki é forçado a confrontar a realidade brutal de sua nova existência: a fome insaciável por carne humana e a repulsa por sua própria natureza. Ele é acolhido por um grupo de ghouls pacíficos que se disfarçam na sociedade, liderados pela cafeteria Anteiku, onde aprende a sobreviver e a aceitar sua nova identidade. No entanto, o conflito entre ghouls e a Comissão Anti-Ghoul (CCG) é constante e brutal. Kaneki se vê arrastado para uma guerra secreta, lutando para manter sua humanidade enquanto experimenta torturas físicas e psicológicas que o transformam em um ser mais sombrio e poderoso. A série explora temas complexos como **identidade, moralidade, preconceito, a linha tênue entre caçador e presa, e a busca por um lugar de pertencimento em um mundo que o rejeita**. Com uma atmosfera carregada de suspense e cenas de ação viscerais, **Tokyo Ghoul** é uma exploração intensa da escuridão que reside na humanidade e na "monstruosidade", desafiando as noções tradicionais de bem e mal.',
 'tokyo_ghoul.jpg', 'tokyo_ghoul_logo.png', 'tokyo_ghoul_fundo.png', 18, 'Legendado | Dublado', 'Verão', '2014-07-04', 12, 1),

('Bleach', 
 'A vida de **Ichigo Kurosaki**, um estudante do ensino médio com uma habilidade peculiar de ver e interagir com espíritos, é virada de cabeça para baixo em uma noite fatídica. Ele encontra **Rukia Kuchiki**, uma ceifadora de almas (Shinigami) encarregada de guiar as almas para a Soul Society e purificar espíritos malignos conhecidos como Hollows. Em um momento de perigo, Rukia transfere seus poderes para Ichigo, tornando-o um Shinigami Substituto. A partir desse ponto, Ichigo assume a responsabilidade de proteger os inocentes de Hollows e guiar almas perdidas, mergulhando em um mundo perigoso e misterioso de Shinigamis, Hollows, Arrancars e Quincys. Acompanhado por seus amigos que também desenvolvem habilidades sobrenaturais – a sensível **Orihime Inoue**, o dedicado **Yasutora "Chad" Sado** e o calculista **Uryū Ishida** – Ichigo embarca em aventuras emocionantes que o levam a confrontos épicos na Soul Society para salvar Rukia, no Hueco Mundo para lutar contra os Arrancars de Aizen, e contra a ameaça dos Quincys. **Bleach** é conhecido por suas **batalhas de espada dinâmicas, designs de personagens carismáticos, trilha sonora icônica e arcos de história cheios de reviravoltas**. A série explora temas de **dever, sacrifício, a importância da família e dos amigos, e a busca pela própria identidade**, consolidando-se como um dos "Três Grandes" animes shounen, ao lado de Naruto e One Piece, e deixando um legado duradouro no coração dos fãs de ação e fantasia.',
 'bleach.jpg', 'bleach_logo.png', 'bleach_fundo.jpg', 14, 'Dublado', 'Outono', '2004-10-05', 366, 1),

('Dragon Ball Z', 
 'Continuando a épica saga de **Son Goku**, **Dragon Ball Z** não é apenas um anime; é um fenômeno cultural que moldou a infância de milhões ao redor do mundo e definiu o gênero shounen de ação. A série começa revelando a verdade sobre a origem de Goku: ele é um saiyajin, uma raça guerreira extraterrestre, enviado à Terra ainda bebê. A partir daí, a escala das ameaças aumenta exponencialmente, com Goku e seus poderosos companheiros, os **Guerreiros Z**, enfrentando uma galeria de vilões icônicos e cada vez mais poderosos, cada um prometendo a aniquilação do planeta Terra e, em alguns casos, do universo. Desde a chegada de seu irmão Raditz e o confronto com os saiyajins Vegeta e Nappa, passando pelas batalhas contra o tirano intergaláctico Freeza no planeta Namekusei, a ameaça dos andróides e o ser perfeito Cell, até a ressurreição do demônio Majin Buu, cada arco é uma montanha-russa de ação, tensão e desenvolvimento de personagens. **Dragon Ball Z** é a epítome do crescimento de poder, apresentando as icônicas transformações Super Saiyajin, ataques devastadores como o Kamehameha, e uma incessante busca por limites e superação. Além das batalhas espetaculares, a série celebra os valores da **amizade, sacrifício, família, coragem e a importância de nunca desistir**, inspirando gerações a treinar, lutar por seus ideais e sempre ir "além". Seu impacto é inegável, solidificando seu lugar como um dos animes mais influentes e amados de todos os tempos.',
 'dragon_ball_z.jpg', 'dragon_ball_z_logo.png', 'dragon_ball_z_fundo.jpg', 10, 'Legendado | Dublado', 'Primavera', '1989-04-26', 291, 1),

('Sword Art Online', 
 'Em 2022, o mundo é revolucionado com o lançamento de **Sword Art Online (SAO)**, um Massively Multiplayer Online Role-Playing Game (MMORPG) de realidade virtual que utiliza a inovadora tecnologia NerveGear, permitindo que os jogadores controlem seus avatares usando apenas seus pensamentos. A euforia inicial, no entanto, se transforma em terror quando o criador do jogo, Akihiko Kayaba, anuncia que os jogadores estão presos dentro de SAO. Não há como fazer logout, e a **morte no jogo significa a morte na vida real**. A única forma de escapar é completando todos os 100 andares do castelo flutuante de Aincrad. **Kirito**, um jogador solo habilidoso e um "beater" (beta tester que domina o jogo), decide usar seu conhecimento e suas habilidades para sobreviver e proteger os outros, mas logo descobre que a realidade virtual é tão cruel e perigosa quanto o mundo real. Ao lado da espadachim **Asuna**, Kirito forma um laço inquebrável, enfrentando guildas traiçoeiras, monstros mortais e os próprios perigos psicológicos de viver em um mundo onde cada decisão pode ser fatal. A série explora as ramificações da tecnologia de realidade virtual, os limites da sobrevivência, a formação de relacionamentos em ambientes extremos e a linha tênue entre o que é virtual e o que é real. **Sword Art Online** é uma aventura emocionante e introspectiva que questiona o significado da vida e da morte em um cenário de alta tecnologia e perigo constante.',
 'sao.jpg', 'sao_logo.png', 'sao_fundo.png', 14, 'Legendado | Dublado', 'Verão', '2012-07-08', 25, 1),

('Fairy Tail', 
 'No vibrante e mágico reino de Fiore, o destino de **Lucy Heartfilia**, uma jovem maga celestial em busca de uma guilda para se juntar, é selado ao encontrar **Natsu Dragneel**, um Dragon Slayer do fogo, e seu gato falante, Happy. Juntos, eles a introduzem na guilda mais excêntrica, barulhenta e poderosa de todas: a **Fairy Tail**. Dentro de suas paredes, Lucy conhece um elenco memorável de magos, incluindo a disciplinadora **Erza Scarlet**, o mago do gelo **Gray Fullbuster**, e muitos outros que formam uma família improvável e leal. A guilda é conhecida por suas missões perigosas e muitas vezes caóticas, mas também por sua inabalável crença na força da amizade e da camaradagem. A série é uma aventura épica que os leva a enfrentar guildas sombrias, demônios antigos, dragões ressurgidos e ameaças que buscam destruir o mundo da magia. Através de batalhas espetaculares, momentos de comédia hilária e dramas emocionantes, os membros da Fairy Tail provam repetidamente que a força de seus laços é sua magia mais poderosa. **Fairy Tail** é um anime que celebra a **amizade, a superação, a lealdade e a busca incessante por aventuras**, com uma trilha sonora marcante e um senso de otimismo que cativa seus espectadores, solidificando seu lugar como um dos favoritos no gênero de fantasia e ação.',
 'fairy_tail.jpg', 'fairy_tail_logo.png', 'fairy_tail_fundo.png', 12, 'Dublado', 'Outono', '2009-10-12', 175, 1),

('Black Clover', 
 'Em um mundo onde a magia é a base de tudo, e a capacidade de usar feitiços determina o status social de cada indivíduo, **Asta** é um jovem órfão que nasceu sem qualquer poder mágico, uma anomalia sem precedentes. Ridicularizado e subestimado por sua falta de mana, ele sonha em se tornar o **Rei Mago**, o líder mais forte e respeitado do Reino de Clover, um objetivo que parece impossível para alguém sem magia. No entanto, sua determinação inabalável e sua força física extraordinária, construída através de um treinamento incessante, surpreendem a todos quando ele recebe um grimório de cinco folhas, um item lendário que contém um demônio e concede a ele espadas com poderes anti-magia. Ao lado de seu rival e melhor amigo, o talentoso e genial mago **Yuno**, Asta se junta aos Cavaleiros Mágicos, a linha de frente de defesa do reino. Ele é aceito na infame e caótica esquadra do Touro Negro, liderada pelo imprevisível Capitão Yami Sukehiro. Através de missões perigosas, batalhas contra inimigos poderosos e a descoberta de segredos antigos sobre demônios e realeza, Asta prova repetidamente que o esforço, a resiliência e a força de vontade podem superar qualquer dom inato. **Black Clover** é uma jornada inspiradora sobre **perseverança, trabalho duro, amizade e a quebra de barreiras sociais**, mostrando que o verdadeiro poder reside na capacidade de nunca desistir de seus sonhos, independentemente das adversidades.',
 'black_clover.jpg', 'black_clover_logo.png', 'black_clover_fundo.jpg', 12, 'Legendado | Dublado', 'Outono', '2017-10-03', 170, 1),

('Attack on Titan', 
 'Em um mundo apocalíptico e brutal, a humanidade vive à beira da extinção, confinada dentro de gigantescas muralhas concêntricas que se estendem por séculos, servindo como sua única defesa contra os aterrorizantes **Titãs**. Essas criaturas colossais e enigmáticas vagam pelo exterior, devorando humanos indiscriminadamente, sem aparente motivo. A vida de **Eren Yeager**, um jovem com um espírito ardente, é virada de cabeça para baixo em um dia fatídico, quando um Titã Colossal e um Titã Encouraçado irrompem a Muralha Maria, devastando sua cidade natal e testemunhando a morte de sua mãe. Impulsionado por uma **fúria incontrolável e um desejo de vingança**, Eren jura exterminar todos os Titãs e se junta à **Tropa de Exploração**, a única divisão militar que ousa se aventurar fora das muralhas para combater as ameaças e desvendar seus mistérios. Ao lado de sua adotiva e protetora irmã **Mikasa Ackerman** e do brilhante estrategista **Armin Arlert**, Eren descobre segredos chocantes sobre a verdadeira natureza dos Titãs e a história sombria de seu próprio mundo. A série é uma narrativa complexa de **sobrevivência, guerra, liberdade, sacrifício e a busca pela verdade**, recheada de reviravoltas dramáticas, cenas de ação viscerais e uma construção de mundo meticulosa que redefine as fronteiras da ficção apocalíptica. **Attack on Titan** não é apenas uma história de luta contra monstros, mas uma profunda exploração da moralidade em tempos de crise, da natureza humana e da incessante busca por respostas em um mundo que parece determinado a consumi-los.',
 'attack_on_titan.jpg', 'attack_on_titan_logo.png', 'attack_on_titan_fundo.png', 16, 'Legendado | Dublado', 'Primavera', '2013-04-07', 25, 1),

('My Hero Academia', 
 'Em um futuro onde o extraordinário se tornou o comum, e a maioria da população global nasce com superpoderes conhecidos como "**peculiaridades**" (ou "quirks"), a profissão de herói é não apenas glamorosa, mas também vital para a manutenção da paz e da ordem. No entanto, **Izuku Midoriya**, um jovem apaixonado por heróis e com um coração inabalável de bondade, nasce sem qualquer quirk, um "sem-peculiaridade" em um mundo de super-humanos. Apesar de sua condição, seu sonho mais profundo é se tornar um herói como seu ídolo, o lendário e invencível **All Might**, o Símbolo da Paz. Sua vida vira de cabeça para baixo quando, em um ato de bravura inesperado, ele demonstra um espírito heroico inato, chamando a atenção de All Might. Impressionado com sua determinação, All Might revela a verdade sobre seu próprio poder, o lendário quirk "One For All", e escolhe Izuku como seu sucessor. Midoriya então embarca na desafiadora jornada para dominar seu novo poder e ser admitido na prestigiada **U.A. High School**, a academia de heróis de elite. Lá, ele forma laços com colegas com peculiaridades incríveis, como o explosivo **Katsuki Bakugo**, a gentil **Ochaco Uraraka** e o sério **Shoto Todoroki**, enquanto enfrenta vilões poderosos que ameaçam desestabilizar a sociedade. **My Hero Academia** é uma celebração dos **valores heroicos, superação, amizade, trabalho duro e a busca por um propósito**, mostrando que a verdadeira força não reside apenas em poderes extraordinários, mas no espírito indomável de fazer o bem e proteger os outros.',
 'my_hero_academia.jpeg', 'my_hero_academia_logo.png', 'my_hero_academia_fundo.jpg', 14, 'Legendado | Dublado', 'Primavera', '2016-04-03', 13, 1),

('Demon Slayer', 
 'A vida pacata e feliz de **Tanjiro Kamado**, um jovem carvoeiro de bom coração que vive nas montanhas com sua família, é brutalmente destruída em uma noite de neve. Ao retornar para casa, ele encontra sua família massacrada por um demônio, e sua única irmã sobrevivente, **Nezuko**, foi transformada em um demônio, embora com surpreendentes sinais de humanidade. Impulsionado por uma sede de vingança contra a criatura que arruinou sua vida e, mais importante, pela esperança de encontrar uma cura para Nezuko e restaurá-la à sua forma humana, Tanjiro decide se tornar um **Caçador de Demônios**. Ele se submete a um treinamento rigoroso sob a tutela do ex-Pilar Sakonji Urokodaki, aprendendo as técnicas de respiração e o manuseio da lâmina Nichirin. Acompanhado por Nezuko, que ele carrega em uma caixa de madeira para protegê-la do sol, Tanjiro se junta ao Corpo de Caçadores de Demônios, uma organização secreta dedicada a erradicar esses monstros. Ao longo de sua jornada, ele encontra companheiros como o medroso, mas surpreendentemente forte, Zenitsu Agatsuma e o impulsivo Inosuke Hashibira, e enfrenta uma série de demônios poderosos, incluindo os temíveis Doze Kizuki, diretamente ligados ao arquidemônio Muzan Kibutsuji. **Demon Slayer** é aclamado por sua **animação espetacular, coreografias de luta fluidas e vibrantes, design de personagens cativante e uma narrativa emocionante que explora temas de luto, determinação, amor fraternal e a luta implacável entre o bem e o mal**. É uma história que captura a beleza da resiliência humana diante do desespero e a força dos laços familiares e da amizade.',
 'demon_slayer.jpeg', 'demon_slayer_logo.png', 'demon_slayer_fundo.jpg', 16, 'Legendado | Dublado', 'Primavera', '2019-04-06', 26, 1),

('Jujutsu Kaisen', 
 'O mundo moderno de **Jujutsu Kaisen** é secretamente infestado por **Maldições**, seres sobrenaturais nascidos das emoções negativas e que representam uma ameaça constante à humanidade. A história começa com **Yuji Itadori**, um estudante do ensino médio com força física extraordinária e um coração gentil, que é parte do clube de ocultismo de sua escola. Em uma noite fatídica, seus amigos se deparam com um dedo amaldiçoado, um fragmento de um ser maligno lendário. Para proteger seus companheiros de um ataque de Maldições, Yuji, em um ato impulsivo e altruísta, engole o objeto amaldiçoado, tornando-se o hospedeiro de **Ryomen Sukuna**, o Rei das Maldições, um dos mais poderosos e perigosos seres malignos da história. Em vez de ser imediatamente executado, Yuji é levado sob a tutela do excêntrico e incrivelmente poderoso feiticeiro Jujutsu **Gojo Satoru**. Ele é matriculado na Escola Técnica de Feitiçaria Jujutsu de Tóquio, onde se junta a outros jovens feiticeiros com seus próprios talentos e peculiaridades: o estoico **Megumi Fushiguro**, com seu poder de shikigami, e a temperamental, mas leal, **Nobara Kugisaki**, que usa martelos e pregos amaldiçoados. Juntos, eles embarcam em missões perigosas para exorcizar Maldições, coletar os restantes fragmentos de Sukuna e desvendar os mistérios por trás da sociedade de feiticeiros Jujutsu e das forças sombrias que buscam desestabilizar o mundo. **Jujutsu Kaisen** é aclamado por sua **ação brutal e estilosa, um sistema de poder complexo e criativo, personagens carismáticos com profundidade emocional e uma atmosfera sombria, porém com momentos de humor**. Explora temas de **sacrifício, a natureza do mal, o propósito da vida e da morte, e a linha tênue entre a humanidade e a monstruosidade**, cativando o público com sua narrativa envolvente e sequências de combate memoráveis.',
 'jujutsu_kaisen.jpeg', 'jujutsu_kaisen_logo.png', 'jujutsu_kaisen_fundo.png', 16, 'Legendado | Dublado', 'Outono', '2020-10-03', 24, 1),

('One Piece', 
 'Em um mundo dominado pelos mares, onde a era de ouro dos piratas está em seu auge, o lendário Rei dos Piratas, Gol D. Roger, revela antes de sua execução que escondeu o maior tesouro do mundo, o **One Piece**, em algum lugar da Grand Line. Essa revelação inspira uma nova geração de piratas a zarpar em busca de fortuna e glória. Entre eles está **Monkey D. Luffy**, um jovem com um corpo elástico (graças a uma Fruta do Diabo que comeu acidentalmente) e um sonho inabalável: encontrar o One Piece e se tornar o próximo **Rei dos Piratas**. Para alcançar seu objetivo, Luffy parte para o mar, reunindo uma tripulação diversificada e inesquecível de companheiros que se tornam sua "família": o espadachim **Roronoa Zoro**, a navegadora e ladra **Nami**, o atirador e mentiroso **Usopp**, o cozinheiro e mestre de artes marciais **Sanji**, o médico e rena **Chopper**, a arqueóloga **Nico Robin**, o construtor naval ciborgue **Franky**, o músico esqueleto **Brook** e o timoneiro homem-peixe **Jinbe**. Juntos, eles formam os **Piratas do Chapéu de Palha**, navegando por ilhas exóticas, enfrentando poderosos inimigos da Marinha e de outros piratas, desvendando mistérios antigos e participando de aventuras épicas que testam seus limites e fortalecem seus laços. **One Piece** é uma celebração da **liberdade, aventura, amizade, perseverança e a busca incessante por sonhos**. Com seu humor excêntrico, personagens cativantes, construção de mundo massiva e um enredo que se aprofunda a cada arco, é uma das maiores e mais influentes obras da cultura pop japonesa, com uma narrativa que continua a surpreender e emocionar seus milhões de fãs ao redor do mundo, solidificando seu legado como uma das maiores sagas de todos os tempos.',
 'one_piece.jpeg', 'one_piece_logo.png', 'one_piece_fundo.jpg', 12, 'Legendado | Dublado', 'Outono', '1999-10-20', 1000, 1),

('Hunter x Hunter', 
 'A busca por seu pai, o lendário e enigmático Hunter **Ging Freecss**, é o motor que impulsiona o jovem e otimista **Gon Freecss** a embarcar em uma das jornadas mais perigosas e emocionantes do mundo dos animes. Para encontrá-lo, Gon decide seguir seus passos e prestar o rigoroso e mortal **Exame Hunter**, uma série de provas que testam não apenas as habilidades físicas, mas também a inteligência, a moralidade e a resistência mental dos candidatos. Durante o exame, ele forma amizades inesquecíveis com um trio improvável: o misterioso e letal assassino **Killua Zoldyck**, o vingativo e determinado **Kurapika**, e o ambicioso e idealista médico **Leorio Paradinight**. Juntos, eles enfrentam desafios brutais, inimigos formidáveis e descobrem a existência de um sistema de energia vital chamado **Nen**, que lhes confere poderes extraordinários e abre um leque ainda maior de possibilidades e perigos. **Hunter x Hunter** é aclamado por sua **narrativa imprevisível e inteligente, seu desenvolvimento de personagens profundo e complexo, e seus arcos de história que variam de emocionantes a sombrios e psicologicamente densos**. A série explora temas como a moralidade do poder, o significado da amizade e da rivalidade, a natureza da obsessão e as complexidades do mundo dos Hunters. Com um mundo vasto e detalhado, um sistema de habilidades bem elaborado e um enredo que se aprofunda em cada saga (como o arco de Yorknew City e a invasão das Chimera Ants), **Hunter x Hunter** se destaca como um shounen maduro e sofisticado que continua a cativar e surpreender seus fãs, oferecendo uma experiência rica em emoções e reviravoltas.',
 'hunter_x_hunter.jpeg', 'hunter_x_hunter_logo.png', 'hunter_x_hunter_fundo.png', 14, 'Legendado | Dublado', 'Outono', '2011-10-02', 148, 1),

('Code Geass: Lelouch of the Rebellion', 
 'Em um futuro alternativo, o poderoso **Império Sagrado de Britannia** conquistou grande parte do mundo, utilizando sua superioridade militar com os mechas humanoides chamados "Knightmares". O Japão, uma vez uma nação independente, é subjugado e renomeado como **Área 11**, com seus cidadãos tratados como "Elevens", despojados de sua liberdade e direitos. É nesse cenário de opressão que encontramos **Lelouch vi Britannia**, um ex-príncipe britânico exilado, vivendo sob um pseudônimo e nutrindo um ódio profundo por seu próprio império. Sua vida muda drasticamente quando ele adquire um poder misterioso conhecido como **Geass**, o "Poder dos Reis", que lhe permite dar ordens absolutas a qualquer um que olhe em seus olhos. Com essa nova habilidade e sua mente estratégica genial, Lelouch assume a identidade mascarada de "Zero" e lidera a **Ordem dos Cavaleiros Negros**, um grupo rebelde determinado a derrubar Britannia e criar um mundo onde sua irmã deficiente, **Nunnally**, possa viver em paz. A série é um **thriller psicológico e de mecha** que tece uma complexa teia de política, guerra, moralidade e dilemas pessoais. Lelouch é um protagonista complexo, que luta por um ideal nobre, mas muitas vezes utiliza meios questionáveis e joga jogos de xadrez em escala global, manipulando aliados e inimigos. Com batalhas de mechas eletrizantes, reviravoltas chocantes, personagens carismáticos e uma exploração profunda dos custos da revolução e do poder, **Code Geass** se solidifica como uma obra-prima que questiona a natureza da justiça e da liberdade em um mundo dividido.',
 'code_geass.jpeg', 'code_geass_logo.png', 'code_geass_fundo.jpg', 16, 'Legendado | Dublado', 'Outono', '2006-10-06', 25, 1),

('Darling in the Franxx',
 'Em um futuro distópico, a humanidade enfrenta a iminente ameaça dos **Klaxossauros**, misteriosas criaturas gigantes que surgem do solo para atacar seus últimos bastiões, as cidades-fortaleza móveis chamadas "Plantations". Para combater essa ameaça, jovens selecionados, conhecidos como **Parasitas**, são treinados para pilotar robôs gigantes chamados **Franxx** em pares, um garoto (Stamen) e uma garota (Pistil). A trama se aprofunda na vida de **Hiro**, um Parasita que é considerado um prodígio, mas que perdeu sua capacidade de sincronizar e pilotar, sentindo-se inútil e sem propósito. Sua vida muda drasticamente quando ele encontra **Zero Two**, uma misteriosa e carismática garota com chifres, conhecida como a "Parceira Assassina" devido à sua taxa de mortalidade entre seus parceiros e sua natureza rebelde. Apesar de sua reputação perigosa, Zero Two oferece a Hiro a chance de pilotar novamente, e juntos, eles formam uma conexão única e poderosa, mas também perigosa. **Darling in the Franxx** explora temas de **identidade, propósito, o significado de ser humano, a formação de laços e o amor em meio ao caos de uma guerra existencial**. A série mistura ação de mechas intensa com um drama emocional complexo, questionando a sociedade que os criou, os segredos por trás dos Klaxossauros e a verdadeira natureza de Zero Two e do próprio mundo. É uma jornada de autodescoberta e de um romance proibido que se desenrola em um cenário de ficção científica visualmente impactante.',
 'darling.jpg','logo_darling.png','darling_fundo.jpg',16,'Legendado','Inverno','2018-01-13',24,1),

('Mob Psycho 100', 
 '**Shigeo "Mob" Kageyama** é um adolescente comum, de aparência monótona e socialmente desajeitado, que frequenta o ensino médio. No entanto, por trás de sua fachada apática, Mob esconde um segredo monumental: ele possui **poderes psíquicos incalculáveis**, capazes de destruir qualquer coisa que o perturbe. O problema é que Mob luta para manter suas emoções sob controle, pois quando seu medidor de "emoção" atinge 100%, seus poderes se manifestam de forma explosiva e incontrolável, transformando-o em uma força da natureza. Buscando uma vida normal e o desejo de se tornar mais popular, Mob trabalha como assistente do autoproclamado e carismático médium psíquico **Reigen Arataka**, um charlatão mestre na arte da manipulação e do engano, que usa Mob para resolver casos sobrenaturais. Ao longo de suas aventuras, Mob enfrenta uma galeria de espíritos malignos, outros usuários psíquicos ambiciosos e os desafios típicos da adolescência, como entender o amor, a amizade e o que significa ser "forte" de verdade. A série é aclamada por sua **animação inovadora e expressiva, seu humor surreal e inteligente, e uma profunda exploração da psicologia de Mob e seu crescimento pessoal**. **Mob Psycho 100** aborda temas de **autodescoberta, aceitação, a importância de expressar emoções de forma saudável e o poder da bondade e da compaixão**, tudo entregue com um estilo visual único que mistura ação explosiva com momentos de comédia e reflexão existencial.',
 'mob_psycho_100.jpg', 'mob_psycho_100_logo.png', 'mob_psycho_100_fundo.jpg', 14, 'Legendado | Dublado', 'Verão', '2016-07-12', 12, 1),

('Re:Zero − Starting Life in Another World', 
 'A vida monótona e desinteressante do hikikomori **Subaru Natsuki** é abruptamente interrompida quando ele é inexplicavelmente transportado para um mundo de fantasia medieval, sem qualquer explicação ou poder aparente. Enquanto tenta se adaptar a essa nova realidade, ele é rapidamente atacado por bandidos, mas é salvo pela bela e misteriosa meio-elfa **Emilia**, que está em busca de um item roubado. Para retribuir sua gentileza, Subaru decide ajudá-la. No entanto, suas vidas são tragicamente tiradas. É nesse momento que Subaru descobre sua habilidade única e aterradora: o **"Retorno Pela Morte"** (Return by Death), que o permite voltar no tempo para um "ponto de retorno" predefinido após a morte. Sem que ninguém mais se lembre dos eventos das linhas do tempo anteriores, Subaru é forçado a reviver momentos dolorosos e traumáticos repetidamente, usando sua nova habilidade para tentar salvar Emilia e seus novos amigos de destinos terríveis. A série é uma intensa e muitas vezes brutal exploração de **luto, trauma psicológico, desespero e a busca por um propósito em face da morte repetida**. Subaru enfrenta não apenas inimigos externos, mas também seus próprios demônios internos, como a solidão e a frustração de ser o único a carregar o peso de suas memórias. **Re:Zero** é uma jornada emocionalmente carregada que mergulha nas profundezas do sofrimento humano, enquanto também celebra a resiliência, a importância da amizade e o desejo de proteger aqueles que se ama, desafiando o protagonista a encontrar a esperança e a força para continuar, mesmo quando tudo parece perdido.',
 're_zero.jpg', 're_zero_logo.png', 're_zero_fundo.png', 16, 'Legendado | Dublado', 'Primavera', '2016-04-04', 25, 1),

('Vinland Saga', 
 'Ambientado na brutal e fascinante era viking do século XI, **Vinland Saga** é uma saga épica de guerra, honra, vingança e autodescoberta. A história começa seguindo **Thorfinn**, um jovem guerreiro islandês. Quando criança, ele idolatrava seu pai, Thors, um ex-guerreiro lendário conhecido como o "Troll de Jom", que renunciou à violência. No entanto, o destino cruel intervém, e Thors é assassinado por **Askeladd**, um mercenário astuto e carismático. Consumido pela vingança, Thorfinn se une ao bando de Askeladd com o único objetivo de matá-lo em um duelo de honra. Ele passa anos no campo de batalha, afiando suas habilidades de combate e crescendo em meio à violência e à morte. A série retrata com realismo a brutalidade das invasões vikings na Inglaterra, as intrigas políticas e as complexidades dos personagens que habitam esse mundo. Após eventos chocantes e reviravoltas que mudam a vida de Thorfinn, sua jornada de vingança se transforma em uma busca por um propósito maior. Ele se questiona sobre o significado da vida e da morte em um mundo tão selvagem, e anseia por uma terra de paz e liberdade, a lendária **Vinland**, onde não há guerra nem escravidão. **Vinland Saga** é aclamada por sua narrativa madura, seu desenvolvimento de personagens profundo e multifacetado, e suas cenas de batalha visualmente impactantes. É uma meditação sobre a natureza da violência, o custo da guerra, a busca por redenção e o verdadeiro significado de ser um guerreiro, transcendendo as expectativas de um simples anime de ação para se tornar um drama histórico e filosófico de tirar o fôlego.',
 'vinland_saga.jpeg', 'vinland_saga_logo.png', 'vinland_saga_fundo.jpeg', 16, 'Legendado | Dublado', 'Verão', '2019-07-08', 24, 1),

('The Promised Neverland', 
 'À primeira vista, o orfanato **Grace Field House** parece um paraíso: um lugar caloroso e seguro onde crianças felizes vivem em harmonia, brincam livremente e são educadas com carinho por sua amada "Mama", Isabella. Regras estritas, como a proibição de se aproximar do portão que conecta ao mundo exterior e da floresta circundante, são os únicos limites em suas vidas idílicas. No entanto, essa fachada perfeita desmorona para os três órfãos mais velhos e inteligentes – **Emma**, a otimista e empática; **Norman**, o gênio estrategista; e **Ray**, o observador e perspicaz – quando eles desvendam a terrível e chocante verdade: Grace Field House não é um orfanato, mas sim uma **fazenda de gado humano**, onde as crianças são criadas com o propósito de serem enviadas como alimento para criaturas demoníacas. Horrorizados com a descoberta e com a traição de sua Mama, Emma, Norman e Ray embarcam em um plano desesperado e de alto risco para escapar com todas as crianças, antes que o próximo "envio" ocorra. A série é um **thriller psicológico e de suspense** que prende o espectador do início ao fim, com reviravoltas constantes e um ritmo eletrizante. Explora temas de **liberdade, sobrevivência, inteligência, esperança, desespero e a natureza do mal**, questionando os limites da moralidade em situações extremas. A inteligência das crianças, as manipulações da Mama e os perigos ocultos do mundo exterior criam uma atmosfera de tensão constante, transformando **The Promised Neverland** em uma jornada emocionante pela busca da liberdade contra um sistema cruel e implacável.',
 'the_promised_neverland.jpeg', 'the_promised_neverland_logo.png', 'the_promised_neverland_fundo.jpg', 16, 'Legendado | Dublado', 'Inverno', '2019-01-11', 12, 1),

('Hajime no Ippo',
 'A história de **Hajime no Ippo** é uma poderosa e inspiradora jornada de superação e autodescoberta no mundo do boxe profissional. **Ippo Makunouchi** é um estudante do ensino médio tímido, gentil e sem amigos, que vive constantemente sendo alvo de bullying. Sua vida vira de cabeça para baixo quando, após ser salvo de agressores por um boxeador profissional chamado **Mamoru Takamura**, ele é introduzido ao rigoroso e apaixonante mundo do boxe. Impressionado com a força e a confiança de Takamura, e buscando entender o que significa ser "forte" e ter "coragem", Ippo decide embarcar em sua própria jornada para se tornar um pugilista. Ele entra para a academia de boxe Kamogawa, onde seu treinador, Genji Kamogawa, o submete a um regime de treinamento exaustivo, mas que revela o talento inato e o espírito de luta ocultos de Ippo. Com seu poderoso e devastador uppercut, o "Dempsey Roll", Ippo sobe rapidamente nas fileiras do boxe japonês, enfrentando uma galeria de adversários carismáticos e formidáveis, cada um com suas próprias histórias e motivações. A série é aclamada por sua **representação realista do boxe, suas sequências de luta dinâmicas e estratégicas, e seu foco profundo no desenvolvimento de personagens e seus arcos emocionais**. Além dos combates no ringue, **Hajime no Ippo** explora temas de **perseverança, disciplina, amizade, rivalidade, a busca pela perfeição e o verdadeiro significado de ser forte**, não apenas fisicamente, mas também mentalmente e espiritualmente. É uma narrativa emocionante que celebra o espírito humano e a paixão pelo esporte.',
 'hajime_no_ippo.jpeg','hajime_no_ippo_logo.png','hajime_no_ippo_fundo.png',12,'Legendado','Outono','2000-10-04',75,1),

('Oregairu',
 'Em um gênero tipicamente repleto de clichês de romance escolar, **Oregairu** (My Youth Romantic Comedy Is Wrong, As I Expected) se destaca por sua abordagem introspectiva e realista da vida adolescente e das relações sociais. A história é narrada pela perspectiva de **Hikigaya Hachiman**, um estudante do ensino médio que é um cínico assumido, um antissocial convicto e que possui uma visão profundamente pessimista e crítica das ilusões da juventude e dos "laços autênticos". Seu lema é "solitário é melhor". No entanto, sua professora, Shizuka Hiratsuka, o força a se juntar ao **Clube de Serviço**, um clube dedicado a ajudar outros alunos com seus problemas. Lá, ele se encontra ao lado de duas garotas que desafiam suas convicções: a inteligente, mas igualmente isolada e honesta até a brutalidade, **Yukino Yukinoshita**, e a extrovertida, mas insegura e carente de validação, **Yui Yuigahama**. Juntos, eles tentam resolver os dilemas sociais de seus colegas, muitas vezes com a abordagem pouco convencional e "distorcida" de Hachiman, que prioriza a eficiência pragmática em detrimento da manutenção de aparências. A série é um **drama slice-of-life com toques de comédia romântica** que mergulha profundamente em temas de **autenticidade, solidão, a complexidade das interações humanas, a busca por significado e o crescimento pessoal**. Questiona o que são "relações genuínas", a dificuldade de se conectar verdadeiramente com os outros e a dor do amadurecimento. **Oregairu** é elogiado por seu diálogo afiado, seus personagens multifacetados e sua capacidade de abordar questões emocionais e psicológicas com nuance e profundidade, oferecendo uma visão refrescante e realista das provações e tribulações da juventude.',
 'oregairu.jpg','oregairu_logo.png','oregairu_fundo.jpg',14,'Legendado | Dublado','Primavera','2013-04-05',13,1),

('Solo Leveling',
 'Em um mundo transformado pela súbita aparição de **portais dimensionais** que conectam a Terra a masmorras repletas de monstros e recursos mágicos, a humanidade desenvolveu uma nova classe de indivíduos: os **Caçadores**. Esses guerreiros com habilidades especiais são encarregados de entrar nas masmorras e erradicar as ameaças. No entanto, entre os caçadores, **Sung Jin-Woo** é uma anomalia. Conhecido como o "Caçador Mais Fraco da Humanidade", ele mal consegue sobreviver nas raids de baixo nível e é constantemente ridicularizado, lutando apenas para sustentar sua família. Sua vida muda drasticamente quando, durante uma incursão em uma masmorra dupla extraordinariamente perigosa e secreta, ele é deixado para morrer após uma provação brutal. É nesse momento de quase morte que Jin-Woo é escolhido por um **sistema misterioso** que o concede uma habilidade única e sem precedentes: a capacidade de "subir de nível" como em um videogame, fortalecendo-se infinitamente ao derrotar inimigos e completar missões. Agora, com essa nova e incrível ferramenta, Jin-Woo embarca em uma jornada para transcender seus limites anteriores, tornando-se o **Caçador Mais Forte do Mundo**. Ele não apenas caça monstros para se fortalecer, mas também ganha a habilidade de ressuscitar os inimigos derrotados como seus "soldados das sombras", construindo um exército de mortos-vivos. **Solo Leveling** é uma emocionante e visualmente deslumbrante jornada de **poder, vingança, auto-superação e a busca pela verdade por trás dos portais e do sistema**. A série é aclamada por suas cenas de ação intensas, o rápido crescimento do protagonista e a construção de um universo rico em mistérios e perigos, onde Jin-Woo busca não apenas se tornar forte, mas também proteger aqueles que ama e desvendar os segredos cósmicos que ameaçam seu mundo. É uma história que inspira a resiliência e a ambição de alcançar o topo, custe o que custar.',
  'solo_leveling.jpg', 'solo_leveling_logo.png', 'solo_leveling_fundo.jpg', 16, 'Legendado', 'Inverno', '2024-01-06', 12, 1);

alter table comentario MODIFY column dataComentario DATETIME DEFAULT CURRENT_TIMESTAMP();

CREATE TABLE anime_categoria(
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_categoria INT,
    fk_anime INT,
    CONSTRAINT chkFkCategoria_catAnime
    FOREIGN KEY(fk_categoria) REFERENCES categoria(id),
    CONSTRAINT chkFkAnime_catAnime
    FOREIGN KEY(fk_anime) REFERENCES anime(id) ON DELETE CASCADE
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




