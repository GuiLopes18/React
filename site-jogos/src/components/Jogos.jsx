import React from 'react';

function Jogos() {
  const games = [
    { title: 'Red Dead Redemption II', image: 'https://upload.wikimedia.org/wikipedia/pt/e/e7/Red_Dead_Redemption_2.png' },
    { title: 'Persona 5 The Royal', image: 'https://www.adrenaline.com.br/wp-content/uploads/2023/07/persona-5-royal-capa.jpg' },
    { title: 'Grand Theft Auto V', image: 'https://upload.wikimedia.org/wikipedia/pt/8/80/Grand_Theft_Auto_V_capa.png' },
    { title: 'Elden Ring', image: 'https://upload.wikimedia.org/wikipedia/pt/0/0d/Elden_Ring_capa.jpg' },
    { title: 'Legend of Zelda Breath of the Wild', image: 'https://upload.wikimedia.org/wikipedia/pt/0/0f/Legend_of_Zelda_Breath_of_the_Wild_capa.png' },
    { title: 'Super Mario Odyssey', image: 'https://upload.wikimedia.org/wikipedia/pt/9/99/Super_Mario_Odyssey_Capa.png' },
    { title: 'Resident Evil 2 Remake', image: 'https://store-images.s-microsoft.com/image/apps.36567.71571739681700792.c61fa2d7-3d69-4edf-8e51-accc41d47823.a8c614fc-0dcb-4788-89ed-958635753296' },
    { title: 'A Way Out', image: 'https://i5.walmartimages.com/seo/A-Way-Out-Electronic-Arts-PC-886389172183_aa0add8e-bf44-46e6-987c-78f347f15a69.3c82168f6f630654b7aca9262be93677.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF' },
    { title: 'Hades', image: 'https://geekgamer-capas.nyc3.cdn.digitaloceanspaces.com/uysc0wd1.jpg' },
    { title: 'Detroit Become Human', image: 'https://upload.wikimedia.org/wikipedia/pt/0/02/Detroit_Become_Human_capa.png' },
    { title: 'God of War Ragnarök', image: 'https://upload.wikimedia.org/wikipedia/pt/a/a5/God_of_War_Ragnar%C3%B6k_capa.jpg' },
    { title: 'Black Myth: Wukong', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQslo0rYXg8r4u6D5BVrqytQtEZvKbN_Viutw&s' },
    { title: 'EA FC 25', image: 'https://s2-ge.glbimg.com/fujlugxgjb3RgsRupUTlqaqhTlg=/0x0:2160x2160/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/s/f/HeuABfTyaiABO4zp3NyQ/gsiw-xnw8aapx1q.jpg' },
    { title: 'Minecraft', image: 'https://preview.redd.it/jncj9eqr9bad1.jpeg?auto=webp&s=72ca987cadecc44162c7ef7ba318a1e73df52dcc' },
    { title: 'Star Wars Jedi: Survivor', image: 'https://static.wikia.nocookie.net/ptstarwars/images/8/82/Star_Wars_Jedi_Survivor_cover_art.jpg/revision/latest?cb=20240909040005' },
    { title: 'The Sims 4', image: 'https://i.redd.it/cfw98yajwql91.jpg' },
    { title: 'Counter Strike 2', image: 'https://upload.wikimedia.org/wikipedia/en/f/f2/CS2_Cover_Art.jpg' },
    { title: "Tom Clancy's Rainbow Six", image: 'https://upload.wikimedia.org/wikipedia/pt/7/78/Rainbow_six_siege_capa.jpg' },
    { title: 'Stardew Valley', image: 'https://i.etsystatic.com/19645555/r/il/f9a391/3205787491/il_1080xN.3205787491_ay6k.jpg' },
    { title: 'Mario Kart 8 Deluxe', image: 'https://cdn.awsli.com.br/600x1000/53/53761/produto/16001652/75a8d64f0f.jpg' },
    { title: 'The Last of Us', image: 'https://m.media-amazon.com/images/I/71Sy2ru7JuL._AC_UF894,1000_QL80_.jpg' },
    { title: 'Valorant', image: 'https://store-images.s-microsoft.com/image/apps.21507.13663857844271189.4c1de202-3961-4c40-a0aa-7f4f1388775a.20ed7782-0eda-4f9d-b421-4cc47492edc6' },
    { title: 'Fortnite', image: 'https://static.wikia.nocookie.net/fortnite_ptbr_gamepedia_ptbr/images/a/ae/Fortnite_%28Update_v28.00%29_-_Cover_Art_-_Fortnite.jpg/revision/latest?cb=20240503123646' },
    { title: 'Call of Duty: Black Ops 6', image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/06/call-of-duty-black-ops-6-tag-page-cover-art.jpg' },
    { title: "Lego Star Wars: The Skywalker Saga", image: 'https://upload.wikimedia.org/wikipedia/pt/7/7a/Lego_Star_Wars_The_Skywalker_Saga_capa.jpg' },
    { title: "Demon's Souls", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLCoFCC9LuBW-Aff4I6n5-AyD1fP3-6NdOMA&s' },
    { title: 'NBA 2k24', image: 'https://upload.wikimedia.org/wikipedia/en/4/48/NBA_2K24_cover_art.jpg' },
    { title: 'Hogwarts Legacy', image: 'https://m.media-amazon.com/images/I/61F-e5v0HLL._AC_UF894,1000_QL80_.jpg' },
  ];

  return (
    <main>
      <section className="games-list">
        <h2>Todos os Jogos</h2>
        <div className="games-grid">
          {games.map((game, index) => (
            <div className="game-card" key={index}>
              <img src={game.image} alt={game.title} />
              <h3>{game.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Jogos;
