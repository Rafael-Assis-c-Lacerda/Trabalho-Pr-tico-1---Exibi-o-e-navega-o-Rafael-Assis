const dados = [
    {
      id: 1,
      titulo: "One Piece",
      sinopse: "Monkey D. Luffy é um jovem pirata com o sonho de se tornar o Rei dos Piratas. Ele parte em uma jornada pelo perigoso Grand Line em busca do lendário tesouro One Piece, formando uma tripulação única e enfrentando inimigos poderosos.",
      avaliacao: "9.1",
      trailer: "https://www.youtube.com/embed/YFbno_aPm0w?si=VADqKrtUPAeWtawY",
      diretor: "Konosuke Uda",
      data: "1999",
      imagem: "images/one_piece.png"
    },
    {
      id: 2,
      titulo: "Frieren: Beyond Journeys End",
      sinopse: "Após derrotar o Rei Demônio ao lado de seus companheiros, a elfa maga Frieren começa uma nova jornada para entender melhor os sentimentos humanos e o significado das conexões que criou durante sua longa vida.",
      avaliacao: "8.9",
      trailer: "https://www.youtube.com/embed/eXjbk-4ljgc?si=hHtX3fp3otL9aOZW",
      diretor: "Keiichirō Saitō",
      data: "2023",
      imagem: "images/frieren.png"
    },
    {
      id: 3,
      titulo: "Jujutsu Kaisen",
      sinopse: "Yuji Itadori, um estudante do ensino médio com habilidades físicas extraordinárias, se envolve no mundo das maldições após ingerir um artefato amaldiçoado e se tornar o receptáculo de uma poderosa entidade maligna.",
      avaliacao: "8.5",
      trailer: "https://www.youtube.com/embed/GwaRztMaoY0?si=P4tdQYNy3ktpDV8b",
      diretor: "Sunghoo Park",
      data: "2020",
      imagem: "images/jujutsu.png"
    },
    {
      id: 4,
      titulo: "Demon Slayer",
      sinopse: "Tanjiro Kamado tem sua vida destruída por um ataque de demônios que transforma sua irmã, Nezuko, em uma dessas criaturas. Agora, ele se torna um caçador de demônios para encontrar uma cura e vingar sua família.",
      avaliacao: "8.7",
      trailer: "https://www.youtube.com/embed/pmanD_s7G3U?si=Vk3nz5e6_l26FlXV",
      diretor: "Haruo Sotozaki",
      data: "2019",
      imagem: "images/demon_slayer.png"
    },
    {
      id: 5,
      titulo: "SPYxFAMILY",
      sinopse: "Para manter a paz entre nações, o espião conhecido como Twilight precisa formar uma família falsa. Sem saber, ele adota uma garota com poderes psíquicos e se casa com uma assassina profissional, criando uma divertida e caótica dinâmica familiar.",
      avaliacao: "8.6",
      trailer: "https://www.youtube.com/embed/ofXigq9aIpo?si=AJ0tgsOt-PpdtJaN",
      diretor: "Kazuhiro Furuhashi",
      data: "2022",
      imagem: "images/spyxfamily.png"
    },
    {
      id: 6,
      titulo: "Bocchi the Rock!",
      sinopse: "Hitori Gotou, uma garota extremamente tímida, sonha em se tornar uma estrela do rock. Ao entrar para uma banda feminina, ela enfrenta seus medos sociais e descobre o poder da música e da amizade verdadeira.",
      avaliacao: "8.8",
      trailer: "https://www.youtube.com/embed/SyMMZF5zNW4?si=v2xDBstvXErQEyd9",
      diretor: "Keiichirō Saitō",
      data: "2022",
      imagem: "images/bocchi.png"
    },
    {
      id: 7,
      titulo: "Attack on Titan",
      sinopse: "Num mundo onde a humanidade vive cercada por muralhas gigantes para se proteger de titãs devoradores, Eren Yeager jura vingança após sua cidade ser destruída. Ele descobre segredos obscuros sobre os titãs e a verdadeira natureza da guerra.",
      avaliacao: "9.0",
      trailer: "https://www.youtube.com/embed/6MRxT8kz30k?si=WWyO8TkRzIGTzP1g",
      diretor: "Tetsurō Araki",
      data: "2013",
      imagem: "images/attack_on_titan.png"
    },
    {
      id: 8,
      titulo: "Black Clover",
      sinopse: "Em um mundo onde magia é tudo, Asta nasceu sem nenhuma habilidade mágica. Com determinação e esforço, ele busca se tornar o Rei Mago, superando seus limites e provando que coragem vale mais que talento nato.",
      avaliacao: "7.9",
      trailer: "https://www.youtube.com/embed/PrgxJ1_sUcs?si=DWZ1lNbtgYAMr_S5",
      diretor: "Tatsuya Yoshihara",
      data: "2017",
      imagem: "images/black_clover.png"
    },
    {
      id: 9,
      titulo: "Horimiya",
      sinopse: "Kyouko Hori e Izumi Miyamura são dois colegas aparentemente opostos que descobrem versões inesperadas um do outro fora da escola. Juntos, eles exploram o amor, a amizade e o crescimento pessoal com leveza e humor.",
      avaliacao: "8.1",
      trailer: "https://www.youtube.com/embed/SISzrCM4Tqg?si=v9qz6XPhYuMCtOM7",
      diretor: "Masashi Ishihama",
      data: "2021",
      imagem: "images/horimya.png"
    },
    {
      id: 10,
      titulo: "Vinland Saga",
      sinopse: "Thorfinn, um jovem guerreiro islandês, se vê em uma jornada de ódio, vingança e autoconhecimento enquanto busca vingar a morte de seu pai em meio às violentas batalhas da era dos vikings.",
      avaliacao: "8.8",
      trailer: "https://www.youtube.com/embed/Ph50sNkApVM?si=vZV5LKUwDjJNiyIa",
      diretor: "Shuuhei Yabuta",
      data: "2019",
      imagem: "images/vinland_saga.png"
    },
    {
      id: 11,
      titulo: "Dandadan",
      sinopse: "Momo Ayase acredita em fantasmas, enquanto seu colega Okarun acredita em alienígenas. Após eventos sobrenaturais bizarros, os dois acabam envolvidos em batalhas surreais contra forças paranormais e cósmicas.",
      avaliacao: "8.0",
      trailer: "https://www.youtube.com/embed/V3xNYDFsnN8?si=ct_wWLt9UI3-kk0E",
      diretor: "Fuga Yamashiro",
      data: "2024",
      imagem: "images/dandadan.png"
    },
    {
      id: 12,
      titulo: "One Punch Man",
      sinopse: "Saitama é um herói tão poderoso que derrota qualquer inimigo com um único soco. Mas sua força extrema o leva ao tédio e a uma busca por um oponente digno, em meio a batalhas absurdas e personagens excêntricos.",
      avaliacao: "8.7",
      trailer: "https://www.youtube.com/embed/atxYe-nOa9w?si=6ftKibhI75M6UlHf",
      diretor: "Shingo Natsume",
      data: "2015",
      imagem: "images/one_punch.png"
    }
  ];

  //
  function carregarDetalhes() {
    let params = new URLSearchParams(location.search);
    let id = params.get("id");
  
    let infos = dados.find(function(elem) {return elem.id == id;});

    if (infos) {
      let detalhes = document.getElementById(`detalhes`)

      let nome = detalhes.querySelector(".titulo_filme");
      let trailer = detalhes.querySelector("iframe");
      let diretor = detalhes.querySelector(".diretor");
      let lancamento = detalhes.querySelector(".lancamento");
      let avaliacao = detalhes.querySelector(".avaliacao");
      let sinopse = detalhes.querySelector(".sinopse");
  
      nome.innerText = infos.titulo;
      trailer.src = infos.trailer;
  
      diretor.innerText = infos.diretor;
      lancamento.innerText = infos.data;
      avaliacao.innerText = infos.avaliacao;
      sinopse.innerText = infos.sinopse;
  
      
    } else {
      console.error("Filme não encontrado com o id:", id);
    }
  }

  function encontrarFilmes(){
    for(let i=1;i<=12;i++){
      let divfilme = document.getElementById(`recomendado${i}`)
      let infos = dados[i-1]

      let nome = divfilme.querySelector(".nome_filme")
      let imagem_filme = divfilme.querySelector("img")

      nome.innerText = infos.titulo
      imagem_filme.src = infos.imagem

      divfilme.addEventListener('click', function() {
        window.location.href =  `detalhes.html?id=${i}`;
      });
    }
  }

const toggle = document.getElementById("toggleConfig");
const panel = document.getElementById("configPanel");
  
toggle.addEventListener("click", () => {
  panel.classList.toggle("active");
});