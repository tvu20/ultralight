const data = [
  {
    name: "Stardew Valley",
    status: "playing",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAkTvqNvPZdF1XMMo3r1H9qZJdFyEgcoJIpOQOXRZ8Rg&s",
    publisher: "ConcernedApe",
    released: 2016,
    rating: 4.5,
    comment:
      "Very cute town life simulator! Can be played both as a solo player and in coop. I never get tired of this game!",
  },
  {
    name: "Baldur's Gate 3",
    status: "wishlist",
    img: "https://preview.redd.it/which-cover-is-better-v0-kukkaczhsccb1.jpg?width=600&format=pjpg&auto=webp&s=8408aced932510b238c4d6d006eb09503b56e86d",
    publisher: "Larian Studios",
    released: 2023,
    comment:
      "Game of the Year from 2023. Dungeons and Dragons but in RPG form. I really want to play this someday!",
  },
  {
    name: "The Witcher 3",
    status: "wishlist",
    img: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
    publisher: "CD Projekt",
    released: 2015,
    comment:
      "I've seen the TV show that this game is based off of... or is this game the inspiration for the TV show?",
  },
  {
    name: "Persona 3 Reload",
    status: "wishlist",
    img: "https://e.snmc.io/lk/l/x/60cfc5e9b162026217e288779aaf2d0f/11640738",
    publisher: "Atlus",
    released: 2024,
    comment:
      "I've only played Persona 3 FES before, but excited to play this new remake of it!",
  },
  {
    name: "Undertale",
    status: "finished",
    img: "https://m.media-amazon.com/images/M/MV5BNzkwZDliNGEtMDNkNi00ODcxLWI1N2UtNDE1NmZlM2QyMTY4XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg",
    publisher: "Toby Fox",
    released: 2014,
    rating: 4,
    comment:
      "Did you know that someone uploaded a cover on Youtube of them playing Megalovania with a calculator?",
  },
  {
    name: "Deltarune",
    status: "playing",
    img: "https://i.redd.it/0hl68gt6i0p71.png",
    publisher: "Toby Fox",
    released: 2019,
    rating: 4,
    comment: "Excited for the rest of this game to be released!",
  },
  {
    name: "Phoenix Wright Ace Attorney Trilogy",
    status: "finished",
    img: "https://i.ebayimg.com/images/g/RqAAAOSw14xWJC2x/s-l1200.webp",
    publisher: "Capcom",
    released: 2019,
    rating: 4.5,
    comment:
      "This game got me through COVID summer. Would recommend to everyone!",
  },
  {
    name: "The Great Ace Attorney Chronicles",
    status: "finished",
    img: "https://image.api.playstation.com/vulcan/ap/rnd/202104/1207/ZsL7n15pNYaFoRKOCb9nxfhS.jpg",
    publisher: "Capcom",
    released: 2021,
    rating: 5,
    comment:
      "This game is a masterpiece. No need to play the Phoenix Wright games before it, although I would highly recommend doing so as well. I particularly love this game's version of Sherlock Holmes!",
  },
  {
    name: "Persona 5 Royal",
    status: "wishlist",
    img: "https://m.media-amazon.com/images/I/81--2UBmfgL._AC_UF1000,1000_QL80_.jpg",
    publisher: "Atlus",
    released: 2019,
    comment:
      "I've only played the base Persona 5 game before, but can't wait to pick this up now that it's available on switch.",
  },

  {
    name: "Fire Emblem Engage",
    status: "finished",
    img: "https://static.wikia.nocookie.net/fireemblem/images/1/1b/Fire_Emblem_Engage_Box_Art.png/revision/latest?cb=20220914001431",
    publisher: "Intelligent Systems",
    released: 2023,
    rating: 3,
    comment:
      "Definitely not as good as its predecessor, but any Fire Emblem game will at least be decent quality. ",
  },
  {
    name: "Triangle Strategy",
    status: "finished",
    img: "https://m.media-amazon.com/images/M/MV5BMTQ4N2E0M2EtNjRkYy00NjI2LTgwNmItYzJhNTBiMDk0NDVlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg",
    publisher: "Square Enix",
    released: 2022,
    rating: 4,
    comment:
      "I love the Game of Thrones meets Fire Emblem vibe of this game's story and design! Wish that the endings weren't so sad though.",
  },
  {
    name: "Pokemon Sun",
    status: "wishlist",
    img: "https://upload.wikimedia.org/wikipedia/en/b/ba/Pokemon_Sun_Boxart.jpg",
    publisher: "Nintendo",
    released: 2016,
    comment: "I need to play more Pokemon games.",
  },
  {
    name: "Pokemon Shield",
    status: "finished",
    img: "https://m.media-amazon.com/images/I/71lz62-F84L._AC_UF1000,1000_QL80_.jpg",
    publisher: "Nintendo",
    released: 2019,
    rating: 3,
    comment:
      "First Pokemon game I ever played! I wasted hours running around and collecting pokemon.",
  },
  {
    name: "Fire Emblem Three Houses",
    status: "finished",
    img: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000007606/c499fdc86779ca95e61daed1f94288a245d196360d278138e56d44097d1a3878",
    publisher: "Intelligent Systems",
    released: 2019,
    rating: 5,
    comment:
      "This is far and away my favorite game that I've played on the Switch. Incredibly replayable and all the routes are fantastic (though the Blue Lions route is my favorite).",
  },
  {
    name: "Fire Emblem Warriors: Three Hopes",
    status: "playing",
    img: "https://m.media-amazon.com/images/I/81B09cs6pGL.jpg",
    publisher: "Intelligent Systems",
    released: 2022,
    rating: 3.5,
    comment:
      "Definitely not as good as the game it's based on, but a decent sequel.",
  },
  {
    name: "Breath of the Wild",
    status: "playing",
    img: "https://m.media-amazon.com/images/I/81KGsbq8ekL._AC_UF1000,1000_QL80_.jpg",
    publisher: "Nintendo",
    released: 2017,
    rating: 4,
    comment:
      "I think that I get too overwhelmed playing open-world games to fully enjoy them, but this game is fantastic.",
  },
  {
    name: "Tears of the Kingdom",
    status: "wishlist",
    img: "https://m.media-amazon.com/images/I/81uht0xQ-YL._AC_UF1000,1000_QL80_.jpg",
    publisher: "Nintendo",
    released: 2023,
    comment: "On the long, long bucket list of games to play on the Switch!",
  },
  {
    name: "Omori",
    status: "playing",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Omori_cover.jpg/220px-Omori_cover.jpg",
    publisher: "Omocat",
    released: 2020,
    rating: 4.5,
    comment: "This game is deeply, deeply sad.",
  },
  {
    name: "Disco Elysium",
    status: "playing",
    img: "https://cdn1.epicgames.com/ff52981b1d9947978153c7a7f8bc6d90/offer/EGS_DiscoElysiumTheFinalCut_ZAUM_S6-1200x1600-486d4da970eede7364b9650d63900bad.jpg",
    publisher: "ZA/UM",
    released: 2019,
    rating: 5,
    comment:
      "I really need to finish this game! It's absolutely incredible and a pioneer in its genre.",
  },
  {
    name: "Hades",
    status: "finished",
    img: "https://www.rpgfan.com/wp-content/uploads/2020/08/Hades-Cover-Art.jpg",
    publisher: "Supergiant Games",
    released: 2018,
    rating: 5,
    comment:
      "Stunning art, incredible gameplay, and compelling story. What's not to love?",
  },
  {
    name: "Transistor",
    status: "wishlist",
    img: "https://www.rpgfan.com/wp-content/uploads/2020/10/Transistor-Cover-Art.jpg",
    publisher: "Supergiant Games",
    released: 2014,
    comment: "I keep getting recommended this! Need to try sometime.",
  },

  {
    name: "Danganronpa: Trigger Happy Havoc",
    status: "finished",
    img: "https://i.pinimg.com/originals/7e/7d/25/7e7d2544563430b3bf588d8904aaf097.jpg",
    publisher: "Spike Chunsoft",
    released: 2010,
    rating: 3,
    comment:
      "It's a fun game but I honestly wouldn't recommend compared to most of these other games.",
  },
];
