const movies = [
  {
    // 1
    title: 'The Walking Dead',
    desc: 'In the wake of a zombie apocalypse, various survivors struggle to stay alive. As they search for safety and evade the undead, they are forced to grapple with rival groups and difficult choices',
    img: 'https://wallpaperaccess.com/full/481127.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://images-na.ssl-images-amazon.com/images/I/91ye1dupRXS._RI_.jpg',
    trailer:
      'https://www.youtube.com/watch?v=sfAc2U20uyg&t=1s&ab_channel=TrailerBlend',
    video:
      'https://www.youtube.com/watch?v=sfAc2U20uyg&t=1s&ab_channel=TrailerBlend',
    year: '2010',
    limit: 12,
    genre: 'Horror ',
    isSeries: true,
    ratingStar: 4,
    countInStock: 10,
    rating: 8.2,
    price: 14.95,
  },
  {
    //2
    title: 'Breaking Bad',
    desc: 'Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.',
    img: 'https://img.huffingtonpost.com/asset/5d9f3d7713.9500058074ff3ee.png?cache=3Rvt1yxB5H&ops=113.95_630',
    imgTitle: 'http://content.cpcache.com/popup/img/breakingbad-large-logo.png',
    imgSm:
      'http://www.asud.org/wp-content/themes/yootheme/cache/Breaking-bad-6e067632.jpeg',
    trailer:
      'https://www.youtube.com/watch?v=HhesaQXLuRY&t=5s&ab_channel=TrailerBlend',
    video:
      'https://www.youtube.com/watch?v=HhesaQXLuRY&t=5s&ab_channel=TrailerBlend',
    year: '2008',
    limit: 15,
    genre: 'drama ',
    isSeries: true,
    ratingStar: 4,
    countInStock: 10,
    rating: 9.4,
    price: 16.99,
  },
  {
    //3
    title: 'Kill Bill',
    desc: 'A pregnant assassin, code-named The Bride, goes into a coma for four years after her ex-boss Bill brutally attacks her. When she wakes up, she sets out to seek revenge on him and his associates',
    img: 'https://www.indiewire.com/wp-content/uploads/2018/02/kill-bill-uma-thurman.jpg',
    imgTitle:
      'https://upload.wikimedia.org/wikipedia/commons/d/d5/Kill_Bill_%28logo%29.png',
    imgSm: 'https://i.ytimg.com/vi/c_dNIXwrbzY/maxresdefault.jpg',
    trailer:
      'https://www.youtube.com/watch?v=7kSuas6mRpk&t=10s&ab_channel=MovieclipsClassicTrailers',
    video:
      'https://www.youtube.com/watch?v=sYq_Jpxdq2A&t=8s&ab_channel=MartinTarantino',
    year: '2003',
    limit: 18,
    genre: 'Action/Crime',
    isSeries: false,
    ratingStar: 3,
    countInStock: 12,
    rating: 8.1,
    price: 14.99,
  },
  {
    // 4
    title: 'I Am Legend',
    desc: 'Robert Neville, a scientist, is the last human survivor of a plague in the whole of New York. He attempts to find a way to reverse the effects of the man-made virus by using his own immune blood.',
    img: 'https://images.metadata.sky.com/pd-image/c4cdb0e7-9bd2-4882-81d7-08c216e1986e/16-9',
    imgTitle:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/I_am_legend.svg/1280px-I_am_legend.svg.png',
    imgSm:
      'https://www.innovationwarrior.com/wp-content/uploads/1628555458_0x0.jpg',
    trailer:
      'https://www.youtube.com/watch?v=BHZKSYLAecQ&ab_channel=Movieclips',
    video: 'https://www.youtube.com/watch?v=er6wSXJC57U&ab_channel=Movieclips',
    year: '2007',
    limit: 12,
    genre: 'Sci-fi/Horror',
    isSeries: false,
    ratingStar: 3,
    countInStock: 12,
    rating: 7.2,
    price: 14.99,
  },
  {
    // 5
    title: 'Wind River',
    desc: "Cory Lambert is a wildlife officer who finds the body of an 18-year-old woman on an American Indian reservation in snowy Wyoming. When the autopsy reveals that she was raped, FBI agent Jane Banner arrives to investigate. Teaming up with Lambert as a guide, the duo soon find that their lives are in danger while trying to solve the Mystery of the teen's death.",
    img: 'https://wallpapercave.com/wp/wp2108695.jpg',
    imgTitle:
      'https://images.squarespace-cdn.com/content/v1/54c0d708e4b0c9e8d13.95f4106/1506586867018-3D3QJB2EP6K50JYH284D/Wind+River+title.png',
    imgSm: 'https://www.afcinema.com/IMG/arton11905.jpg?1513072432',
    trailer:
      'https://www.youtube.com/watch?v=s7WuKdVhrmA&t=11s&ab_channel=KinoCheckInternational',
    video: 'https://www.youtube.com/watch?v=7AxWVLSvnWQ&ab_channel=ShamusBob',
    year: '2017',
    limit: 12,
    genre: 'Mystery/Thriller',
    isSeries: false,
    ratingStar: 3,
    countInStock: 12,
    rating: 7.7,
    price: 14.99,
  },
  {
    // 6
    title: 'Silent Hill',
    desc: 'Rose and her daughter, Sharon, leave their house to go to Silent Hill. On their way Rose meets with an accident knocking her unconscious and when she awakes, Sharon is missing.',
    img: 'https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-05-21-12-20/64889.jpg/EG11/thumbnail/732x412/format/jpg/quality/50',
    imgTitle: 'https://famfonts.com/wp-content/uploads/silent-hill-wide.png',
    imgSm:
      'https://www.denofgeek.com/wp-content/uploads/2012/10/silent_poster.jpg?fit=640%2C380',
    trailer:
      'https://www.youtube.com/watch?v=1mfnhu8sO5k&t=15s&ab_channel=UniFrance',
    video:
      'https://www.youtube.com/watch?v=1mfnhu8sO5k&t=15s&ab_channel=UniFrance',
    year: '2006',
    limit: 5,
    genre: 'Horror/Thriller',
    isSeries: false,
    ratingStar: 3,
    countInStock: 12,
    rating: 6.5,
    price: 12.99,
  },
  {
    // 7
    title: 'Inception',
    desc: "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
    img: 'https://www.highlandernews.org/wp-content/uploads/radar.inception.warnerbrospictures.jpg',
    imgTitle:
      'https://i.pinimg.com/originals/a3/74/11/a374112bb9ca9c934578f2feedc62bc3.jpg',
    imgSm:
      'https://c4.wallpaperflare.com/wallpaper/574/531/642/2010-inception-movie-inception-poster-wallpaper-preview.jpg',
    trailer: 'https://www.youtube.com/watch?v=YoHD9XEInc0&t=21s',
    video: 'https://www.youtube.com/watch?v=YoHD9XEInc0&t=21s,',
    year: '2010',
    limit: 12,
    genre: 'Mystery',
    isSeries: false,
    ratingStar: 3,
    countInStock: 12,
    rating: 8.8,
    price: 14.99,
  },
  {
    //8
    title: 'Lost',
    desc: 'The survivors of a plane crash find themselves stranded on a mysterious island. They are forced to work together for their survival when they realise that they are not alone on the island.',
    img: 'https://cdn.vox-cdn.com/thumbor/xPdawFUJmBMjSUXs-GPDyAuSHB4=/0x0:13.950x1270/113.95x800/filters:focal(906x333:1226x653)/cdn.vox-cdn.com/uploads/chorus_image/image/65336936/lostcasts1.0.jpg',
    imgTitle:
      'https://static1.colliderimages.com/wordpress/wp-content/uploads/lost-title-logo-slice.jpg',
    imgSm:
      'http://nerdreactor.com/wp-content/uploads/2016/10/LOST-Crew-Poster.jpg',
    trailer:
      'https://www.youtube.com/watch?v=KTu8iDynwNc&t=7s&ab_channel=TrailerBlend',
    video:
      'https://www.youtube.com/watch?v=KTu8iDynwNc&t=7s&ab_channel=TrailerBlend',
    year: '13.958',
    limit: 12,
    genre: 'Mystery',
    isSeries: true,
    ratingStar: 4,
    countInStock: 10,
    rating: 8.3,
    price: 9.99,
  },
  {
    //9
    title: 'Game of Thrones',
    desc: 'Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.',
    img: 'https://wallpapercave.com/wp/wp4275032.jpg',
    imgTitle:
      'https://static1.colliderimages.com/wordpress/wp-content/uploads/lost-title-logo-slice.jpg',
    imgSm:
      'https://i.pinimg.com/originals/82/01/5c/82015cc18436c4514c02e1be5e9667cb.jpg',
    trailer:
      'https://www.youtube.com/watch?v=KPLWWIOCOOQ&t=2s&ab_channel=GameofThrones',
    video:
      'https://www.youtube.com/watch?v=KPLWWIOCOOQ&t=2s&ab_channel=GameofThrones',
    year: '2011',
    limit: 18,
    genre: 'Fantasy',
    isSeries: true,
    ratingStar: 4,
    countInStock: 10,
    rating: 9.2,
    price: 19.99,
  },
  {
    // 10
    title: 'The Shining',
    desc: 'Jack and his family move into an isolated hotel with a violent past. Living in isolation, Jack begins to lose his sanity, which affects his family members.',
    img: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1279,w_2274,x_0,y_133/v1554714.99 619/shape/mentalfloss/55893-warner_home_video3.jpg?itok=iVYyXTvI',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm: 'https://l.cimalight.io:2053/uploads/thumbs/fe68163bc-1.jpg',
    trailer:
      'https://www.youtube.com/watch?v=5Cb3ik6zP2I&t=63s&ab_channel=AndrewHenderson',
    video:
      'https://www.youtube.com/watch?v=WDpipB4yehk&t=8s&ab_channel=Movieclips',
    year: '1980',
    limit: 15,
    genre: 'Horror ',
    isSeries: false,
    ratingStar: 3,
    countInStock: 12,
    rating: 8.5,
    price: 7.99,
  },
  {
    // 11
    title: 'The Conjuring',
    desc: "Paranormal investigators Ed and Lorraine Warren take on one of the most sensational cases of their careers after a cop stumbles upon a dazed and bloodied young man walking down the road. Accused of murder, the suspect claims demonic possession as his defense, forcing the Warrens into a supernatural inquiry unlike anything they've ever seen before.",
    img: 'https://www.screengeek.net/wp-content/uploads/2020/05/the-conjuring-franchise.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxl0dqZw2OVug8qTeOH84yI2tncSlvigZqOJCBv1-oaVePqXmTVnwdOHi2Mktpw4-R6MQ&usqp=CAU',
    trailer:
      'https://www.youtube.com/watch?v=ejMMn0t58Lc&ab_channel=MovieclipsTrailers',
    video:
      'https://www.youtube.com/watch?v=ejMMn0t58Lc&ab_channel=MovieclipsTrailers',
    year: '2013',
    limit: 18,
    genre: 'Horror/Thriller',
    isSeries: false,
    ratingStar: 3,
    countInStock: 12,
    rating: 7.5,
    price: 13.99,
  },
  {
    // 12
    title: 'I Care a Lot',
    desc: 'A shady legal guardian lands in hot water when she tries to bilk a woman who has ties to a powerful gangster.',
    img: 'https://images.squarespace-cdn.com/content/v1/13.95d7e2c7e45a7c0ce235bb55/1614034945581-KVT48ECNPNE7YXY2V4MB/Film-Review-I-Care-a-Lot.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm: 'https://i.ytimg.com/vi/Z229VfggE9A/maxresdefault.jpg',
    trailer:
      'https://www.youtube.com/watch?v=fu6LX4Ieasg&ab_channel=MovieclipsTrailers',
    video:
      'https://www.youtube.com/watch?v=fu6LX4Ieasg&ab_channel=MovieclipsTrailers',
    limit: 12,
    genre: 'Thriller/Comedy',
    isSeries: false,
    ratingStar: 3,
    countInStock: 12,
    year: '2020',
    rating: 6.3,
    price: 14.99,
  },
  {
    // 13
    title: 'Peaky Blinders',
    desc: 'Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities.',
    img: 'https://imgsrc.cineserie.com/2021/05/peaky-blinders-online.jpg?ver=1',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRoYi2Uj7N3k31VOnTVwaks7DbSGY55UhHnWpMoFNQ6xsbhgZI5Gczvt0zczmbl56ibP6czQOqroLXwNM41PDRPMhi-7z4KnAB6SBID35b0nt7Fkp7pFEAe7xKd6_Q.jpg?r=c9a',
    trailer:
      'https://www.youtube.com/watch?v=oVzVdvGIC7U&t=7s&ab_channel=Alextvshows',
    video:
      'https://www.youtube.com/watch?v=oVzVdvGIC7U&t=7s&ab_channel=Alextvshows',
    year: '2013',
    limit: 12,
    genre: 'Drama',
    isSeries: true,
    ratingStar: 4,
    countInStock: 10,
    rating: 8.8,
    price: 18.99,
  },
  {
    // 14
    title: 'La Casa De Papel',
    desc: 'A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose. The group of thieves take hostages to aid in their negotiations with the authorities, who strategize to come up with a way to capture The Professor. As more time elapses, the robbers prepare for a showdown with the police',
    img: 'https://wallpapercave.com/wp/wp6581266.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://cdn.shopify.com/s/files/1/0969/9128/products/LaCasaDePapel-MoneyHeist-NetflixTVShowPosterFanArt_be2a88ac-7484-485c-8fa5-a499f5df3483.jpg?v=1589268448',
    trailer:
      'https://www.youtube.com/watch?v=htqXL94Rza4&t=16s&ab_channel=Netflix',
    video:
      'https://www.youtube.com/watch?v=htqXL94Rza4&t=16s&ab_channel=Netflix',
    year: '2017',
    limit: 18,
    genre: 'Thriller',
    isSeries: true,
    ratingStar: 4,
    countInStock: 10,
    rating: 8.3,
    price: 11.99,
  },
  {
    // 15
    title: 'Friends',
    desc: 'Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures which make their lives both troublesome and happening.',
    img: 'https://c.files.bbci.co.uk/22AC/production/_118667880_ka_05_friendsreunion.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://www.sortiraparis.com/images/80/66131/643118-serie-friends-l-episode-retrouvailles-avec-justin-bieber-et-lady-gaga-diffuse-le.jpg',
    trailer: 'https://www.youtube.com/watch?v=hDNNmeeJs1Q&t=7s',
    video: 'https://www.youtube.com/watch?v=hDNNmeeJs1Q&t=7s',
    year: '1994',
    limit: 12,
    genre: 'Comeday',
    isSeries: true,
    ratingStar: 4,
    countInStock: 10,
    rating: 8.9,
    price: 6.99,
  },
  {
    // 16
    title: 'Django Unchained',
    desc: 'When Django, a slave, is freed, he joins forces with a bounty hunter to rescue his wife, who has been enslaved by Calvin, a hard-hearted plantation owner.',
    img: 'https://pickywallpapers.com/img/2018/12/django-unchained-movie-wide-wallpaper-93-100-hd-wallpapers.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://www.denofgeek.com/wp-content/uploads/2012/12/django-unchained-wallpapers-1920x1200-4.jpg?fit=1920%2C1200',
    trailer:
      'https://www.youtube.com/watch?v=_iH0UBYDI4g&ab_channel=SonyPicturesEntertainment',
    video:
      'https://www.youtube.com/watch?v=_iH0UBYDI4g&ab_channel=SonyPicturesEntertainment',
    year: '2012',
    limit: 12,
    genre: 'Action ',
    isSeries: false,
    ratingStar: 3,
    countInStock: 12,
    rating: 8.4,
    price: 13.95,
  },
  {
    // 17
    title: 'Dexter',
    desc: 'While Dexter tries to reconnect with Debra, Miami Metro investigates a new serial killer.',
    img: 'https://www.teahub.io/photos/full/14.99 -14.99 9202_high-resolution-dexter-hd-wallpaper-id-dexter-morgan.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/216bc6a847537fc829eef48ff1c7a1c33b7f98ba225ac734ff3c61570488b979._RI_V_TTW_.jpg',
    trailer:
      'https://www.youtube.com/watch?v=sfAc2U20uyg&t=1s&ab_channel=TrailerBlend',
    video:
      'https://www.youtube.com/watch?v=sfAc2U20uyg&t=1s&ab_channel=TrailerBlend',
    year: '13.956',
    limit: 18,
    genre: 'Mystery',
    isSeries: true,
    ratingStar: 4,
    countInStock: 10,
    rating: 8.6,
    price: 18.95,
  },
  {
    // 18
    title: 'The Sopranos',
    desc: 'ITony Soprano, an Italian-American mafia head based in New Jersey, struggles to manage his family and criminal life and confides his affairs to his psychiatrist Jennifer Melfi.',
    img: 'https://m.media-amazon.com/images/M/MV5BM2NmZDNmYTItZGM0OS00NDVmLTgwMjUtZDdmYjg0OWNiODE2XkEyXkFqcGdeQXVyNDIyNjA2MTk@._V1_.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://lrmonline.com/wp-content/uploads/2018/03/the-sopranos-blu-ray-finally-arrives.jpg',
    trailer:
      'https://www.youtube.com/watch?v=dHa95iy2lF0&ab_channel=WarnerBros.Pictures',
    video:
      'https://www.youtube.com/watch?v=dHa95iy2lF0&ab_channel=WarnerBros.Pictures',
    year: '1999',
    limit: 18,
    genre: 'Drama  ',
    isSeries: true,
    ratingStar: 4,
    countInStock: 10,
    rating: 9.2,
    price: 11.95,
  },
  {
    // 19
    title: 'The Dark Knight',
    desc: "After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees.",
    img: 'https://i.pinimg.com/originals/1e/1f/31/1e1f3119f45bf518c55ad81e5695c169.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://cdn.prime1studio.com/media/catalog/product/cache/1/image/1400x1400/17f82f742ffe127f42dca9de82fb58b1/h/d/hdmmdc-02_a19.jpg',
    trailer:
      'https://www.youtube.com/watch?v=EXeTwQWrcwY&ab_channel=MovieclipsClassicTrailers',
    video:
      'https://www.youtube.com/watch?v=EXeTwQWrcwY&ab_channel=MovieclipsClassicTrailers',
    year: '13.958',
    limit: 12,
    genre: ' Action/Adventure',
    isSeries: false,
    ratingStar: 3,
    countInStock: 12,
    rating: 9,
    price: 12.99,
  },
  {
    // 20
    title: 'Predestination',
    desc: 'As his last assignment, a temporal agent is tasked to travel back in time and prevent a bomb attack in New York in 1975. The hunt, however, turns out to be beyond the bounds of possibility.',
    img: 'https://themoviemylife.files.wordpress.com/2014/11/screen-shot-2014-11-13-at-14-43-38.png',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm:
      'http://www.kissmygeek.com/wp-content/uploads/2014/12/Predestination-banner3.jpg',
    trailer:
      'https://www.youtube.com/watch?v=xxG-YfedrfU&ab_channel=SonyPicturesEntertainment',
    video:
      'https://www.youtube.com/watch?v=xxG-YfedrfU&ab_channel=SonyPicturesEntertainment',
    year: '2014',
    limit: 12,
    genre: 'Sci-fi/Action ',
    isSeries: false,
    ratingStar: 3,
    countInStock: 12,
    rating: 7.5,
    price: 11.99,
  },
  {
    // 21
    title: 'Interstellar',
    desc: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
    img: 'https://www.10wallpaper.com/wallpaper/2560x1600/1501/interstellar_matthew_mcconaughey-Movie_High_Quality_Wallpaper_2560x1600.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm: 'https://i.ytimg.com/vi/YF1eYbfbH5k/maxresdefault.jpg',
    trailer:
      'https://www.youtube.com/watch?v=zSWdZVtXT7E&ab_channel=WarnerBros.UK%26Ireland',
    video:
      'https://www.youtube.com/watch?v=zSWdZVtXT7E&ab_channel=WarnerBros.UK%26Ireland',
    year: '2014',
    limit: 12,
    genre: 'Interstellar',
    isSeries: false,
    ratingStar: 3,
    countInStock: 12,
    rating: 8.6,
    price: 13.95,
  },
  {
    // 22
    title: 'Gladiator',
    desc: 'Commodus takes over power and demotes Maximus, one of the preferred generals of his father, Emperor Marcus Aurelius. As a result, Maximus is relegated to fighting till death as a gladiator.',
    img: 'https://scalarama.com/wp-content/uploads/2017/08/Gladiator-wallpaper.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm: 'https://tragicocomedia.files.wordpress.com/2011/07/gladiator.jpg',
    trailer:
      'https://www.youtube.com/watch?v=uvbavW31adA&ab_channel=MovieclipsClassicTrailers',
    video:
      'https://www.youtube.com/watch?v=uvbavW31adA&ab_channel=MovieclipsClassicTrailers',
    year: '2010',
    limit: 12,
    genre: 'Action/Adventure',
    isSeries: false,
    ratingStar: 3,
    countInStock: 12,
    rating: 8.5,
    price: 7.99,
  },
  {
    // 23
    title: 'Mr. Robot',
    desc: 'Elliot, a cyber-security engineer suffering from anxiety, works for a corporation and hacks felons by night. Panic strikes him after Mr Robot, a cryptic anarchist, recruits him to ruin his company.',
    img: 'https://img.usanetwork.com/sites/nbcunbc/files/images/2019/9/25/MrRobot-S4-KeyArt-Lg-2048x1152.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm: 'https://flxt.tmsimg.com/assets/p11682476_b_h8_af.jpg',
    trailer:
      'https://www.youtube.com/watch?v=xIBiJ_SzJTA&ab_channel=AlchemistEskimo',
    video:
      'https://www.youtube.com/watch?v=xIBiJ_SzJTA&ab_channel=AlchemistEskimo',
    year: '2015',
    limit: 18,
    genre: 'Drama  ',
    isSeries: true,
    ratingStar: 4,
    countInStock: 10,
    rating: 8.5,
    price: 12.95,
  },
  {
    // 24
    title: 'Gossip Girl',
    desc: 'Blair Waldorf is a popular student at her private school and envied by one and all. But, her perfect life is unsettled when her ex-best friend enrols in the same institution.',
    img: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/67235566bbfffe13.9570e3003b06979877fa190fcd0153271f22800d3e46498b76._SX1080_.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://releasedate.news/wp-content/uploads/2021/07/Release-date-and-spoilers-for-Gossip-Girl-episode-4.jpg',
    trailer:
      'https://www.youtube.com/watch?v=xIBiJ_SzJTA&ab_channel=AlchemistEskimo',
    video:
      'https://www.youtube.com/watch?v=xIBiJ_SzJTA&ab_channel=AlchemistEskimo',
    year: '2015',
    limit: 18,
    genre: 'Drama',
    isSeries: true,
    ratingStar: 4,
    countInStock: 10,
    rating: 7.4,
    price: 14.95,
  },
  {
    // 25
    title: 'Sherlock',
    desc: 'Dr Watson, a former army doctor, finds himself sharing a flat with Sherlock Holmes, an eccentric individual with a knack for solving crimes. Together, they take on the most unusual cases.',
    img: 'https://media.gq-magazine.co.uk/photos/5d114.99 8609fa6011b928387cf/master/pass/Sherlock.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://otakukart.com/wp-content/uploads/2021/03/Sherlock-Series-1200x675.jpg',
    trailer: 'https://www.youtube.com/watch?v=qlcWFoNqZHc&ab_channel=Sherlock',
    video: 'https://www.youtube.com/watch?v=qlcWFoNqZHc&ab_channel=Sherlock',
    year: '2010',
    limit: 12,
    genre: 'Mystery',
    isSeries: true,
    ratingStar: 4,
    countInStock: 10,
    rating: 9.1,
    price: 12.95,
  },
  {
    // 26
    title: 'Avengers: Infinity War',
    desc: 'The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.',
    img: 'https://www.screengeek.net/wp-content/uploads/2019/01/avengers-infinity-war.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://cdn.arstechnica.net/wp-content/uploads/2018/04/aveng-infinwar-logo-800x417.jpg',
    trailer:
      'https://www.youtube.com/watch?v=6ZfuNTqbHE8&ab_channel=MarvelEntertainment',
    video:
      'https://www.youtube.com/watch?v=6ZfuNTqbHE8&ab_channel=MarvelEntertainment',
    year: '2018',
    limit: 12,
    genre: 'Action/Sci-fi',
    isSeries: false,
    ratingStar: 3,
    countInStock: 12,
    rating: 8.4,
    price: 17.99,
  },
  {
    // 27
    title: 'The Witch',
    desc: 'In the New England of the 17th century, a banished Puritan family sets up a farm by the edge of a huge remote forest where no other family lives. Soon, sinister forces then start haunting them.',
    img: 'https://variety.com/wp-content/uploads/2014/12/the-witch.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://www.speeli.com/wp-content/uploads/2020/06/The-Witch-2015-Movie-Explained.jpg',
    trailer: 'https://www.youtube.com/watch?v=Bo2OTEbz-jU&ab_channel=A24',
    video: 'https://www.youtube.com/watch?v=Bo2OTEbz-jU&ab_channel=A24',
    year: 2015,
    limit: 18,
    genre: 'Horror/Drama',
    isSeries: false,
    ratingStar: 3,
    countInStock: 12,
    rating: 6.9,
    price: 9.99,
  },
  {
    // 28
    title: 'The Lord of the Rings',
    desc: 'A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed.',
    img: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2021/04/The-hobbit-the-battle-of-the-five-armies-lord-of-the-rings-the-fellowship-of-the-ring.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://bgr.com/wp-content/uploads/2015/10/lord-of-the-rings.jpg?quality=70&strip=all',
    trailer: 'https://www.youtube.com/watch?v=rCZ3SN65kIs&ab_channel=Derek',
    video: 'https://www.youtube.com/watch?v=rCZ3SN65kIs&ab_channel=Derek',
    year: '13.951',
    limit: 12,
    genre: 'Fantasy/Adventure',
    isSeries: false,
    ratingStar: 3,
    countInStock: 12,
    rating: 8.8,
    price: 8.99,
  },
  {
    // 29
    title: 'The Irishman',
    desc: 'In the 1950s, truck driver Frank Sheeran gets involved with Russell Bufalino and his Pennsylvania crime family. As Sheeran climbs the ranks to become a top hit man, he also goes to work for Jimmy Hoffa -- a powerful Teamster tied to organized crime.',
    img: 'https://m.media-amazon.com/images/M/MV5BM2UyMmM0NGItZWNlMS00MmE0LWE4NmQtMTI0NTU5ZDU2NTViXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm: 'https://i.ytimg.com/vi/ygsYDCWvYts/maxresdefault.jpg',
    trailer: 'https://www.youtube.com/watch?v=WHXxVmeGQUc&ab_channel=Netflix',
    video: 'https://www.youtube.com/watch?v=WHXxVmeGQUc&ab_channel=Netflix',
    year: '2019',
    limit: 18,
    genre: 'Crime/Drama',
    isSeries: false,
    ratingStar: 3,
    countInStock: 12,
    rating: 7.9,
    price: 16.95,
  },
  {
    // 30
    title: 'Joker',
    desc: "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.",
    img: 'https://m.media-amazon.com/images/M/MV5BMGQ1ZGZmNTAtM2MyYi00NmZhLTkwYmYtNTNlZDRhMzU2ZTgwXkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://i.pinimg.com/originals/bb/50/ce/bb50cee3314d4081f2e087e9c7831c1e.jpg',
    trailer:
      'https://www.youtube.com/watch?v=t433PEQGErc&ab_channel=WarnerBros.Pictures',
    video:
      'https://www.youtube.com/watch?v=t433PEQGErc&ab_channel=WarnerBros.Pictures',
    year: '2019',
    limit: 18,
    genre: 'Crime',
    isSeries: false,
    ratingStar: 3,
    countInStock: 12,
    rating: 8.4,
    price: 17.5,
  },
  {
    // 31
    title: 'The Others',
    desc: 'Grace moves into a new house with her two photosensitive children in Jersey. When a series of inexplicable events occur, Grace starts believing that her house is haunted.',
    img: 'https://m.media-amazon.com/images/M/MV5BMTY1NjE5ODA2OV5BMl5BanBnXkFtZTgwNjYzMjg1NjM@._V1_.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm: 'https://i.ytimg.com/vi/ISch6Fi-q0A/maxresdefault.jpg',
    trailer:
      'https://www.youtube.com/watch?v=C7pKqaPtMiA&ab_channel=MovieclipsClassicTrailers',
    video:
      'https://www.youtube.com/watch?v=C7pKqaPtMiA&ab_channel=MovieclipsClassicTrailers',
    year: '13.951',
    limit: 12,
    genre: 'Horror',
    isSeries: false,
    ratingStar: 3,
    countInStock: 12,
    rating: 7.6,
    price: 8.5,
  },
  {
    // 32
    title: 'Se7en',
    desc: 'A serial killer begins murdering people according to the seven deadly sins. Two detectives, one new to the city and the other about to retire, are tasked with apprehending the criminal.',
    img: 'https://wallpaperaccess.com/full/3693035.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://hbomax-images.warnermediacdn.com/images/GX0_KAgpf77CttQEAAAJc/tileburnedin?size=1280x720&partner=hbomaxcom&host=artist.api.cdn.hbo.com&w=1280',
    trailer:
      'https://www.youtube.com/watch?v=znmZoVkCjpI&ab_channel=MovieclipsClassicTrailers',
    video:
      'https://www.youtube.com/watch?v=znmZoVkCjpI&ab_channel=MovieclipsClassicTrailers',
    year: '1995 ',
    limit: 18,
    genre: 'Crime/Drama',
    isSeries: false,
    ratingStar: 3,
    countInStock: 12,
    rating: 8.6,
    price: 7.99,
  },
  {
    // 33
    title: 'Fight Club',
    desc: 'Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.',
    img: 'https://darkroom.bbfc.co.uk/1920/819ad7550455fd18deaa00c62c1be13.95b:07f1d17a4c91afaec0b553655e0ead94/fight-club-1999.png',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsU3DNeC58dSX9BcLhLcEDbPRf5ps69l_XbQ&usqp=CAU',
    trailer:
      'https://www.youtube.com/watch?v=CR5Jp_ag2M8&ab_channel=Movieclips',
    video: 'https://www.youtube.com/watch?v=CR5Jp_ag2M8&ab_channel=Movieclips',
    year: '1999',
    limit: 18,
    genre: 'Thriller/Drama',
    isSeries: false,
    ratingStar: 3,
    countInStock: 12,
    rating: 8.8,
    price: 11.5,
  },
  {
    // 34
    title: 'Better Call Saul',
    desc: 'Ex-con artist Jimmy McGill turns into a small-time attorney and goes through a series of trials and tragedies, as he transforms into his alter ego Saul Goodman, a morally challenged criminal lawyer.',
    img: 'https://m.media-amazon.com/images/M/MV5BZWEyOTRmN2QtNDlmZS00YThiLWEzNGEtNzIxYTc4OTBjNDY0XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIGE3o9Si8GNV6J4ufoAUmdxEZuWB9kHZHTu7ZjqA7sc0FX4Kkw7B0F1LnJf2sprBJBdQ&usqp=CAU',
    trailer:
      'https://www.youtube.com/watch?v=HN4oydykJFc&ab_channel=NetflixUK%26Ireland',
    video:
      'https://www.youtube.com/watch?v=HN4oydykJFc&ab_channel=NetflixUK%26Ireland',
    year: '2015',
    limit: 12,
    genre: 'Drama ',
    isSeries: true,
    ratingStar: 4,
    countInStock: 10,
    rating: 6.2,
    price: 13.95,
  },
  {
    // 35
    title: 'The Witcher',
    desc: 'The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts. ',
    img: 'https://variety.com/wp-content/uploads/2020/06/henry-cavill-the-witcher.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://static.techspot.com/images2/news/bigimage/2019/07/2019-07-01-image-14.jpg',
    trailer:
      'https://www.youtube.com/watch?v=ndl1W4ltcmg&ab_channel=TheWitcherNetflix',
    video:
      'https://www.youtube.com/watch?v=ndl1W4ltcmg&ab_channel=TheWitcherNetflix',
    year: '2019',
    limit: 18,
    genre: 'Fantasy',
    isSeries: true,
    ratingStar: 4,
    countInStock: 10,
    rating: 6.2,
    price: 13.95,
  },
  {
    // 36
    title: 'Mindhunter',
    desc: "Catching a criminal often requires the authorities to get inside the villain's mind to figure out how he thinks. That's the job of FBI agents Holden Ford and Bill Tench. They attempt to understand and catch serial killers by studying their damaged psyches. Along the way, the agents pioneer the development of modern serial-killer profiling. The crime drama has a strong pedigree behind the camera, with Oscar-nominated director David Fincher and Oscar-winning actress Charlize Theron among the show's executive producers.",
    img: 'https://media.vanityfair.com/photos/13.95e622dcba5ae801ce174b04/4:3/w_1280,h_960,c_limit/mindhunter-review.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm: 'https://static.toiimg.com/photo/76262993.cms',
    trailer: 'https://www.youtube.com/watch?v=LR3G1lWbnUU&ab_channel=Netflix',
    video: 'https://www.youtube.com/watch?v=LR3G1lWbnUU&ab_channel=Netflix',
    year: '2017',
    limit: 18,
    genre: 'Thriller ',
    isSeries: true,
    ratingStar: 4,
    countInStock: 10,
    rating: 6.2,
    price: 13.95,
  },
  {
    // 37
    title: 'Tenet',
    desc: 'When a few objects that can be manipulated and used as weapons in the future fall into the wrong hands, a CIA operative, known as the Protagonist, must save the world.',
    img: 'https://images3.alphacoders.com/109/thumb-1920-1095565.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://www.journaldugeek.com/content/uploads/2020/08/tenet-palindrome.jpg',
    trailer:
      'https://www.youtube.com/watch?v=AZGcmvrTX9M&ab_channel=WarnerBros.Pictures',
    video:
      'https://www.youtube.com/watch?v=AZGcmvrTX9M&ab_channel=WarnerBros.Pictures',
    year: '2020',
    limit: 18,
    genre: 'Action ',
    isSeries: false,
    ratingStar: 3,
    countInStock: 12,
    rating: 8.5,
    price: 14.99,
  },
  {
    // 38
    title: 'Goodfellas',
    desc: 'Young Henry Hill, with his friends Jimmy and Tommy, begins the climb from being a petty criminal to a gangster on the mean streets of New York.',
    img: 'https://www.rollingstone.com/wp-content/uploads/2020/08/goodfellasc.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://fortmason.org/wp-content/uploads/2020/12/FLIX_goodfellas_featured.jpg',
    trailer: 'https://www.youtube.com/watch?v=qo5jJpHtI1Y&ab_channel=ryy79',
    video: 'https://www.youtube.com/watch?v=qo5jJpHtI1Y&ab_channel=ryy79',
    year: '1990',
    limit: 18,
    genre: 'Crime ',
    isSeries: false,
    ratingStar: 3,
    countInStock: 12,
    rating: 8.5,
    price: 14.99,
  },
  {
    // 39
    title: 'Ip Man 4',
    desc: 'Ip Man and his son encounter racial discrimination after traveling to the United States to seek a better life.',
    img: 'https://images.hdqwalls.com/wallpapers/ip-man-4-the-finale-q0.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://static.wixstatic.com/media/790102_b9cb14f1ffa84c92b65ee7f7a3cac448~mv2.jpg/v1/fill/w_671,h_476,al_c,q_90/790102_b9cb14f1ffa84c92b65ee7f7a3cac448~mv2.jpg',
    trailer:
      'https://www.youtube.com/watch?v=oCBGTCNJW2g&ab_channel=WellGoUSAEntertainment',
    video:
      'https://www.youtube.com/watch?v=oCBGTCNJW2g&ab_channel=WellGoUSAEntertainment',
    year: '2019 ',
    limit: 12,
    genre: 'Action ',
    isSeries: false,
    ratingStar: 3,
    countInStock: 12,
    rating: 8.5,
    price: 14.99,
  },
  {
    // 40
    title: 'Lucifer',
    desc: 'Young Henry Hill, with his friends Jimmy and Tommy, begins the climb from being a petty criminal to a gangster on the mean streets of New York.',
    img: 'https://static01.nyt.com/images/2016/01/25/arts/25LUCIFER/25LUCIFER-superJumbo.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e114.99 704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://phantom-marca.unidadeditorial.es/cda475257ad306e68c8c055ad4a48e6c/crop/0x0/1220x687/resize/1320/f/jpg/assets/multimedia/imagenes/2021/08/05/16281779456287.jpg',
    trailer: 'https://www.youtube.com/watch?v=3mTh2joPPj8&ab_channel=Netflix',
    video: 'https://www.youtube.com/watch?v=3mTh2joPPj8&ab_channel=Netflix',
    year: '2016',
    limit: 18,
    genre: 'Mystery ',
    isSeries: true,
    ratingStar: 4,
    countInStock: 10,
    rating: 6.2,
    price: 13.95,
  },
  {
    // 41
    title: 'Dark',
    desc: "When two children go missing in a small German town, its sinful past is exposed along with the double lives and fractured relationships that exist among four families as they search for the kids. The mystery-drama series introduces an intricate puzzle filled with twists that includes a web of curious characters, all of whom have a connection to the town's troubled history -- whether they know it or not. The story includes supernatural elements that tie back to the same town in 1986. Dark represents the first German original series produced for Netflix.",
    img: 'https://pics.filmaffinity.com/Dark_TV_Series-621917996-large.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e1500704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202006/qc_12.jpeg?.Pyl3OuYjfGDzyEqSOXmK38YKttjbT3s&size=770:433',
    trailer: 'https://www.youtube.com/watch?v=cq2iTHoLrt0',
    video: 'https://www.youtube.com/watch?v=cq2iTHoLrt0',
    year: '2017 ',
    limit: 12,
    genre: 'Mystery ',
    isSeries: true,
    ratingStar: 4,
    rating: 8.8,
    price: 16.55,
  },
  {
    // 42
    title: 'The Punisher',
    desc: "After exacting revenge on the people responsible for the deaths of his wife and children, Frank Castle uncovers a conspiracy that runs deeper than New York's criminal underworld. Now known as the Punisher, he must dig deep into the conspiracy to discover the truth about injustices that affect more than just him and his family. Assisting the vigilante in his quest to fight criminals are best friend Billy Russo, who runs private military corporation Anvil, and former NSA analyst Micro, who shares common enemies with Castle and helps him as part of a so-called marriage of convenience.",
    img: 'https://www.gannett-cdn.com/-mm-/73eaf03258b645132149bb474ebe44a532de87f1/c=0-0-4483-2533/local/-/media/2017/10/04/USATODAY/USATODAY/636427553217389372-095-CRIME-111-Unit-03137R.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e1500704141223.jpg?quality=65&strip=all',
    imgSm: 'https://i.ytimg.com/vi/jrLhP5sK2wI/maxresdefault.jpg',
    trailer: 'https://www.youtube.com/watch?v=sDp4AuNen0Y&ab_channel=Netflix',
    video: 'https://www.youtube.com/watch?v=sDp4AuNen0Y&ab_channel=Netflix',
    year: '2017 ',
    limit: 18,
    genre: 'Action  ',
    isSeries: true,
    ratingStar: 4,
    rating: 8.5,
    price: 17.99,
  },
  {
    // 43
    title: 'Loki',
    desc: "Loki, the God of Mischief, steps out of his brother's shadow to embark on an adventure that takes place after the events of Avengers: Endgame.",
    img: 'https://wallpaperaccess.com/full/6160860.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e1500704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlaWbyydVmdceDMoiW316Q_gM5F2UEZrwAuonqNtrU93rELP9yRpC-YxsUUUhfZSpKpFA&usqp=CAU',
    trailer:
      'https://www.youtube.com/watch?v=nW948Va-l10&ab_channel=MarvelEntertainment',
    video:
      'https://www.youtube.com/watch?v=nW948Va-l10&ab_channel=MarvelEntertainment',
    year: '2021 ',
    limit: 12,
    genre: 'Action/Drama',
    isSeries: true,
    ratingStar: 4,
    rating: 8.4,
    price: 12.99,
  },
  {
    // 44
    title: 'Narcos',
    desc: "Netflix chronicles the rise of the cocaine trade in Colombia and the gripping real-life stories of drug kingpins of the late '80s in this raw, gritty original series. Also detailed are the actions taken by law enforcement as they battle in the war on drugs, targeting notorious and powerful figures that include drug lord Pablo Escobar. As efforts are made to control cocaine, one of the world's most valuable commodities, the many entities involved -- legal, political, police, military and civilian -- find themselves in conflict.",
    img: 'https://wallpaperaccess.com/full/1097130.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e1500704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://i2.wp.com/thegameofnerds.com/wp-content/uploads/2017/08/9a85d3516a83519aba752f33958e25d5-narcos-season-1-1469094036.jpg?fit=1280%2C720&ssl=1',
    trailer: 'https://www.youtube.com/watch?v=RNWAKZzgbp4&ab_channel=Netflix',
    video: 'https://www.youtube.com/watch?v=RNWAKZzgbp4&ab_channel=Netflix',
    year: '2015  ',
    limit: 12,
    genre: 'Crime',
    isSeries: true,
    ratingStar: 4,
    rating: 8.8,
    price: 16.99,
  },
  {
    // 45
    title: 'Once Upon a Time',
    desc: 'Rick, a washed-out actor, and Cliff, his stunt double, struggle to recapture fame and success in 1960s Los Angeles. Meanwhile, living next door to Rick is Sharon Tate and her husband Roman Polanski.',
    img: 'https://thehigharts.com/wp-content/uploads/2020/01/Once-Upon-Time-Hollywood-Poster.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e1500704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://static0.srcdn.com/wordpress/wp-content/uploads/2019/06/Once-Upon-a-Time-in-Hollywood-Cast-Guide.jpg',
    trailer:
      'https://www.youtube.com/watch?v=ELeMaP8EPAA&ab_channel=SonyPicturesEntertainment',
    video:
      'https://www.youtube.com/watch?v=ELeMaP8EPAA&ab_channel=SonyPicturesEntertainment',
    year: '2019 ',
    limit: 12,
    genre: 'Comedy/Drama',
    isSeries: false,
    ratingStar: 3,
    rating: 7.7,
    price: 10.49,
  },
  {
    // 46
    title: 'The Notebook',
    desc: 'Duke reads the story of Allie and Noah, two lovers who were separated by fate, to Ms Hamilton, an old woman who suffers from dementia, on a daily basis out of his notebook.',
    img: 'https://m.media-amazon.com/images/M/MV5BMTM1MDM0NDUzOF5BMl5BanBnXkFtZTcwODUxMTg0NA@@._V1_.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e1500704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://hips.hearstapps.com/sev.h-cdn.co/assets/15/31/1438124471-the-notebook-2004-copy.jpg',
    trailer: 'https://www.youtube.com/watch?v=FC6biTjEyZw&ab_channel=eOnefilms',
    video: 'https://www.youtube.com/watch?v=FC6biTjEyZw&ab_channel=eOnefilms',
    year: '2004  ',
    limit: 18,
    genre: 'Romance  ',
    isSeries: false,
    ratingStar: 3,
    rating: 7.8,
    price: 8.99,
  },
  {
    // 47
    title: 'Bones',
    desc: "Forensic anthropologist Dr Temperance 'Bones' Brennan and FBI Agent Seeley Booth form an unlikely alliance to solve cases by examining the remains of victims.",
    img: 'https://assets.foxdcg.com/DCG-Digital-Production/FOX/KeyArt_Originals/Bones/season_12/keyart.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e1500704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://imageresizer.static9.net.au/lpYh5R_Gu9GcK5qo7BeicNCaBeI=/600x0/smart/https%3A%2F%2Fs3-ap-southeast-2.amazonaws.com%2Fnine-tvmg-images-prod%2F63%2F08%2F31%2F630831_p185129_b_h3_am.jpg',
    trailer:
      'https://www.youtube.com/watch?v=gvPMVKUI9go&ab_channel=MarenMorrisVEVO',
    video:
      'https://www.youtube.com/watch?v=gvPMVKUI9go&ab_channel=MarenMorrisVEVO',
    year: '2005',
    limit: 12,
    genre: 'Mystery/Romance',
    isSeries: true,
    ratingStar: 4,
    rating: 7.8,
    price: 12.99,
  },
  {
    // 48
    title: 'Me Before You',
    desc: 'After becoming unemployed, Louisa Clark is forced to accept one which requires her to take care of Will Traynor, a paralysed man. The two of them soon bond with each other.',
    img: 'https://wallpapercave.com/wp/wp2274593.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e1500704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://lh3.googleusercontent.com/proxy/YLSR0W4pH4N0p6ohOB_AnakHa9bp2Oto4KW0iodJ3TzQ1wVqm4qV6iwzhxLrsbizCdoUWUz2bpYCq16Kt9SWf32FNP_Fvwf6EByrwsMVAB6G6Tsa',
    trailer: 'https://www.youtube.com/watch?v=T0MmkG_nG1U',
    video: 'https://www.youtube.com/watch?v=T0MmkG_nG1U',
    year: '2016 ',
    limit: 12,
    genre: 'Romance/Drama',
    isSeries: false,
    ratingStar: 3,
    rating: 7.4,
    price: 8.49,
  },
  {
    // 49
    title: 'The Godfather',
    desc: 'After becoming unemployed, Louisa Clark is forced to accept one which requires her to take care of Will Traynor, a paralysed man. The two of them soon bond with each other.',
    img: 'https://www.denofgeek.com/wp-content/uploads/2017/03/the-godfather-scaled.jpg?fit=2560%2C1672',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e1500704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/73/23/1c.jpg',
    trailer:
      'https://www.youtube.com/watch?v=1x0GpEZnwa8&ab_channel=MovieclipsClassicTrailers',
    video:
      'https://www.youtube.com/watch?v=1x0GpEZnwa8&ab_channel=MovieclipsClassicTrailers',
    year: '1972',
    limit: 18,
    genre: 'Crime/Drama ‧',
    isSeries: false,
    ratingStar: 3,
    rating: 9.2,
    price: 7.99,
  },
  {
    // 50
    title: 'The Departed',
    desc: 'An undercover agent and a spy constantly try to counter-attack each other in order to save themselves from being exposed in front of the authorities. Meanwhile, both try to infiltrate an Irish gang.',
    img: 'https://wallpaperaccess.com/full/3644109.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e1500704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://dkfhw9rzsr80z.cloudfront.net/WAR-SG-001-A0125/artworks/posters/WAR-SG-001-A0125-P704.jpg',
    trailer:
      'https://www.youtube.com/watch?v=iQpb1LoeVUc&ab_channel=Movieclips',
    video: 'https://www.youtube.com/watch?v=iQpb1LoeVUc&ab_channel=Movieclips',
    year: '2006  ',
    limit: 12,
    genre: 'Crime/Thriller ',
    isSeries: false,
    ratingStar: 3,
    rating: 8.5,
    price: 14.99,
  },
  {
    // 51
    title: 'A Quiet Place',
    desc: 'A family struggles for survival in a world where most humans have been killed by blind but noise-sensitive creatures. They are forced to communicate in sign language to keep the creatures at bay.',
    img: 'https://static3.srcdn.com/wordpress/wp-content/uploads/2021/07/John-Krasinski-Emily-blunt-A-quiet-place-3-.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e1500704141223.jpg?quality=65&strip=all',
    imgSm: 'https://www.wcbe.org/sites/wcbe/files/202106/quiet_8.jpeg',
    trailer:
      'https://www.youtube.com/watch?v=WR7cc5t7tv8&ab_channel=ParamountPictures',
    video:
      'https://www.youtube.com/watch?v=WR7cc5t7tv8&ab_channel=ParamountPictures',
    year: '2018 ',
    limit: 12,
    genre: 'Horror/Sci-fi ',
    isSeries: false,
    ratingStar: 3,
    rating: 7.5,
    price: 9.49,
  },
  {
    // 52
    title: 'IT',
    desc: 'Seven helpless and bullied children are forced to face their worst nightmares when Pennywise, a shape-shifting clown, reappears. The clown, an ancient evil torments children before feeding on them.',
    img: 'https://images.alphacoders.com/787/thumb-1920-787294.png',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e1500704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://cdn.prime1studio.com/media/catalog/product/cache/1/image/1400x1400/17f82f742ffe127f42dca9de82fb58b1/h/d/hdbit-02_dominant_a10.jpg',
    trailer: 'https://www.youtube.com/watch?v=xKJmEC5ieOk',
    video: 'https://www.youtube.com/watch?v=xKJmEC5ieOk',
    year: '2017 ',
    limit: 18,
    genre: 'Horror/Thriller',
    isSeries: false,
    ratingStar: 3,
    rating: 7.3,
    price: 11.99,
  },
  {
    // 53
    title: 'Undisputed 3',
    desc: 'Boyka, a Russian inmate, injures his knee before the start of the new prison fighting tournament. Despite his weak knee, Boyka decides to compete with the best fighters to earn his freedom.',
    img: 'https://wallup.net/wp-content/uploads/2019/10/97764-quotes-men-yuri-boyka-scott-adkins-undisputed-iii-redemption-mma.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e1500704141223.jpg?quality=65&strip=all',
    imgSm: 'https://flxt.tmsimg.com/assets/p8090118_v_h9_ab.jpg',
    trailer: 'https://www.youtube.com/watch?v=pmZ4b7GhlFI',
    video: 'https://www.youtube.com/watch?v=pmZ4b7GhlFI',
    year: '2010 ',
    limit: 12,
    genre: 'Action/Crime',
    isSeries: false,
    ratingStar: 3,
    rating: 7.4,
    price: 8.5,
  },
  {
    // 54
    title: 'Ip Man 3',
    desc: 'Ip Man and his son encounter racial discrimination after traveling to the United States to seek a better life.',
    img: 'https://sm.ign.com/ign_tr/screenshot/default/ip-man-3-banner_22gf.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e1500704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://www.vpnhelpers.com/wp-content/uploads/2021/08/Ip-Man-3-min.jpg',
    trailer:
      'https://www.youtube.com/watch?v=jckXscMwIOI&ab_channel=MovieclipsTrailers',
    video:
      'https://www.youtube.com/watch?v=jckXscMwIOI&ab_channel=MovieclipsTrailers',
    year: '2015 ',
    limit: 12,
    genre: 'Action/Drama',
    isSeries: false,
    ratingStar: 3,
    rating: 7.1,
    price: 9.99,
  },
  {
    // 55
    title: 'Fleabag',
    desc: "A dry-witted woman, known only as Fleabag, has no filter as she navigates life and love in London while trying to cope with tragedy. The angry, grief-riddled woman tries to heal while rejecting anyone who tries to help her, but Fleabag continues to keep up her bravado through it all. Comic actress Phoebe Waller-Bridge stars as the titular character on the series, which is based on Waller-Bridge's 2013 one-woman show of the same name.",
    img: 'https://wallpapercave.com/wp/wp4473993.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e1500704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://images-na.ssl-images-amazon.com/images/I/91JB1IAEtGL._RI_.jpg',
    trailer:
      'https://www.youtube.com/watch?v=FhZHv2id6Sk&ab_channel=Gu%C3%ADadelOcio',
    video:
      'https://www.youtube.com/watch?v=FhZHv2id6Sk&ab_channel=Gu%C3%ADadelOcio',
    year: '2016',
    limit: 12,
    genre: 'Comedy-drama',
    isSeries: true,
    ratingStar: 4,
    rating: 8.7,
    price: 16.49,
  },
  {
    // 56
    title: 'House of Cards',
    desc: 'Frank Underwood is a Democrat appointed as the secretary of state. Along with his wife, he sets out on a quest to seek revenge on the people who betrayed him while successfully rising to supremacy.',
    img: 'https://media.wired.com/photos/5933825fd80dd005b42b2742/master/pass/Kevin-Spacey-House-of-Cards-Netflix.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e1500704141223.jpg?quality=65&strip=all',
    imgSm: 'https://miro.medium.com/max/1200/1*L5J8gUvSUknFcQLiWtJ-dQ.jpeg',
    trailer: 'https://www.youtube.com/watch?v=8QnMmpfKWvo&ab_channel=Netflix',
    video: 'https://www.youtube.com/watch?v=8QnMmpfKWvo&ab_channel=Netflix',
    year: '2013 ',
    limit: 18,
    genre: 'Drama',
    isSeries: true,
    ratingStar: 4,
    rating: 8.7,
    price: 16.5,
  },
  {
    // 57
    title: 'Suits',
    desc: "Mike Ross, a talented young college dropout, is hired as an associate by Harvey Specter, one of New York's best lawyers. They must handle cases while keeping Mike's qualifications a secret.",
    img: 'https://wallpapermemory.com/uploads/691/suits-background-1080p-469243.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e1500704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://images-na.ssl-images-amazon.com/images/I/81Y1QFwNPJL._RI_.jpg',
    trailer:
      'https://www.youtube.com/watch?v=85z53bAebsI&ab_channel=BlockbusterAustralia',
    video:
      'https://www.youtube.com/watch?v=85z53bAebsI&ab_channel=BlockbusterAustralia',
    year: '2011 ',
    limit: 12,
    genre: 'Drama',
    isSeries: true,
    ratingStar: 4,
    rating: 8.4,
    price: 16.99,
  },
  {
    // 58
    title: 'Venom',
    desc: 'While trying to take down Carlton, the CEO of Life Foundation, Eddie, a journalist, investigates experiments of human trials. Unwittingly, he gets merged with a symbiotic alien with lethal abilities.',
    img: 'https://img1.wallspic.com/originals/6/2/0/7/3/137026-eddie_brock-organ-fictional_character-television-venom-3695x2078.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e1500704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://unfilmpeziblog.files.wordpress.com/2019/02/venom.jpg?w=1200',
    trailer:
      'https://www.youtube.com/watch?v=u9Mv98Gr5pY&ab_channel=SonyPicturesEntertainment',
    video:
      'https://www.youtube.com/watch?v=u9Mv98Gr5pY&ab_channel=SonyPicturesEntertainment',
    year: '2018 ',
    limit: 12,
    genre: 'Action/Sci-fi',
    isSeries: false,
    ratingStar: 3,
    rating: 6.7,
    price: 11.99,
  },
  {
    // 59
    title: 'Thor: Ragnarok',
    desc: 'Deprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death.',
    img: 'https://images7.alphacoders.com/821/thumb-1920-821364.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e1500704141223.jpg?quality=65&strip=all',
    imgSm: 'https://7wallpapers.net/wp-content/uploads/7_Thor-Ragnarok.jpg',
    trailer:
      'https://www.youtube.com/watch?v=ue80QwXMRHg&ab_channel=MarvelEntertainment',
    video:
      'https://www.youtube.com/watch?v=ue80QwXMRHg&ab_channel=MarvelEntertainment',
    year: '2017',
    limit: 12,
    genre: 'Action/Adventure',
    isSeries: false,
    ratingStar: 3,
    rating: 7.9,
    price: 15.99,
  },
  {
    // 60
    title: 'Watchmen',
    desc: 'Rorschach, a vigilante, sets out to investigate the mysterious circumstances under which one of his colleagues died. In the process of doing so, he discovers some disturbing secrets.',
    img: 'https://static2.srcdn.com/wordpress/wp-content/uploads/2021/05/jupiters-legacy-dc-watchmen.jpg',
    imgTitle:
      'https://heavy.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-41-03-am-e1500704141223.jpg?quality=65&strip=all',
    imgSm:
      'https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_402,w_715/https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2019%2F03%2Funnamed6izxcdpe_1.jpg',
    trailer: 'https://www.youtube.com/watch?v=zymgtV99Rko&ab_channel=HBO',
    video: 'https://www.youtube.com/watch?v=zymgtV99Rko&ab_channel=HBO',
    year: '2009 ',
    limit: 12,
    genre: 'Action/Sci-fi',
    isSeries: false,
    ratingStar: 3,
    rating: 8.2,
    price: 12.99,
  },
];

export default movies;
