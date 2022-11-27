import { Fragment, StrictMode, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Events } from "react-scroll";
import { TShirt, Info, TShirtIntro, InfoIntro } from "./components";

import "./index.css";

function Home() {
  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <Fragment>
      <TShirtIntro />
      <TShirt
        theme="dark"
        year={2012}
        trend="80"
        type="Neon T-Shirts"
        description="Ah, the ‘80s. A simpler time when rocking a mullet wasn’t a sign
            that your cultural outfit of choice is a Bintang singlet, and you
            could spend all day at the arcade fondling joysticks like an extra
            from Stranger Things—without the monsters, of course. Speaking of
            monsters, Ghostbusters came out in 1984 and quickly became one of
            the go-to movies to watch on VHS at a sleepover with mates…once
            you’d finished summoning Bloody Mary, of course. As for what you’d
            be wearing, neon t-shirts were all the rage then and made quite the
            comeback almost 20 years later in 2012."
        tShirtImgSrc="/images/neon.svg"
        stickers={[
          {
            imageSrc: "/images/stickers/neon/walkman.svg",
            position: "content",
            style: { position: "absolute", left: 20, top: -150 },
          },
          {
            imageSrc: "/images/stickers/neon/cube.svg",
            position: "content",
            style: { position: "absolute", right: 20, bottom: -100 },
          },
          {
            imageSrc: "/images/stickers/neon/80s.svg",
            position: "image",
            style: { position: "absolute", left: -100, top: -100 },
          },
          {
            imageSrc: "/images/stickers/neon/tape.svg",
            position: "image",
            style: { position: "absolute", left: -50, bottom: 50 },
          },
          {
            imageSrc: "/images/stickers/neon/ghostbusters.png",
            position: "image",
            style: {
              position: "absolute",
              right: -50,
              bottom: "20%",
              zIndex: -1,
            },
          },
          {
            imageSrc: "/images/stickers/neon/cordless.svg",
            position: "background",
            style: { position: "absolute", left: "50%" },
          },
          {
            imageSrc: "/images/stickers/neon/jukebox.svg",
            position: "background",
            style: { position: "absolute", right: 0 },
          },
        ]}
      />
      <TShirt
        theme="light"
        year={2013}
        trend="90"
        type="Tanks"
        description="Apart from Rugrats and Angela Anaconda, the ‘90s were all about one thing:
        gaming. You’d run home from school, stock up on DunkaRoos and Warheads,
        and start playing Crash Bandicoot on your PlayStation! You couldn’t quite
        work out why you were obsessed with spunky mutant mammals, but you liked
        it. Anyhoo, comfort was key if you were going to spend all day on the
        couch, which is why tanks were the t-shirt of choice. By 2013, tanks were
        once again one of the most popular items to wear both in and outside the
        house."
        tShirtImgSrc="/images/tanks.svg"
        stickers={[
          {
            imageSrc: "/images/stickers/tanks/tv.svg",
            position: "content",
            style: { position: "absolute", left: -150, top: -50 },
          },
          {
            imageSrc: "/images/stickers/tanks/90s.svg",
            position: "content",
            style: { position: "absolute", right: -100, top: -50 },
          },
          {
            imageSrc: "/images/stickers/tanks/walkman.svg",
            position: "content",
            style: { position: "absolute", bottom: -100, right: -50 },
          },
          {
            imageSrc: "/images/stickers/tanks/joystick.svg",
            position: "image",
            style: { position: "absolute", right: -50, top: -50 },
          },
          {
            imageSrc: "/images/stickers/tanks/gameboy.svg",
            position: "image",
            style: {
              position: "absolute",
              right: -100,
              bottom: 50,
              zIndex: -1,
            },
          },
          {
            imageSrc: "/images/stickers/tanks/sonic.png",
            position: "image",
            style: { position: "absolute", left: -50, bottom: -50 },
          },
        ]}
      />
      <TShirt
        theme="dark"
        year={2014}
        trend="60"
        type="Tie Dye T-Shirts"
        description="If you were a kid in the ‘60s, we’re betting your biggest problem was your
        parents telling you to turn Astro Boy off so they could blast their
        Beatles records. Once you’d gotten a little older, you may have leaned
        hard into the hippy aesthetic by rocking headbands, flared jeans, and
        tie-dye t-shirts. Or maybe waltzing around pants-less and throwing daisies
        at passers-by was more your jam. Since so many of us still wish we
        could’ve been at Woodstock back in 1969 (and walking around pants-less is
        somewhat illegal), it’s no surprise that tie-dye t-shirts were all the
        rage again by 2014."
        tShirtImgSrc="/images/tie-dye.webp"
        stickers={[
          {
            imageSrc: "/images/stickers/tie-dye/60s.svg",
            position: "content",
            style: { position: "absolute", left: 0, top: -120 },
          },
          {
            imageSrc: "/images/stickers/tie-dye/bird.svg",
            position: "content",
            style: { position: "absolute", right: 0, top: -100 },
          },
          {
            imageSrc: "/images/stickers/tie-dye/disc.svg",
            position: "image",
            style: {
              position: "absolute",
              left: -50,
              top: -50,
              zIndex: -1,
              maxWidth: "150px",
            },
          },
          {
            imageSrc: "/images/stickers/tie-dye/van.svg",
            position: "image",
            style: { position: "absolute", right: -150, top: -50, zIndex: -1 },
          },
          {
            imageSrc: "/images/stickers/tie-dye/guitar.svg",
            position: "image",
            style: { position: "absolute", left: -25, bottom: 0 },
          },
          {
            imageSrc: "/images/stickers/tie-dye/astroboy.png",
            position: "image",
            style: { position: "absolute", right: 25, bottom: -50 },
          },
        ]}
      />
      <TShirt
        theme="light"
        year={2015}
        trend="50"
        type="Anime T-Shirts"
        description="It’s safe to say the ‘50s were a decade of momentous change as NASA formed
        and rock ‘n’ roll soared to popularity, much to the horror of grandparents
        everywhere. On top of that, cartoons like Mighty Mouse were on high
        rotation across many households, leading to the rise of anime t-shirts.
        It’s no surprise, though—a juiced-up mouse in spandex and a cape, it was
        so gouda! Come 2015 and anime t-shirts were once again on-trend, thanks to
        modern classics like Attack on Titan and Naruto."
        tShirtImgSrc="/images/anime.png"
        stickers={[
          {
            imageSrc: "/images/stickers/anime/popcorn.svg",
            position: "image",
            style: { position: "absolute", left: -50, top: -50, zIndex: -1 },
          },
          {
            imageSrc: "/images/stickers/anime/car.svg",
            position: "image",
            style: { position: "absolute", right: -100, top: -100 },
          },
          {
            imageSrc: "/images/stickers/anime/nasa.png",
            position: "image",
            style: { position: "absolute", bottom: -50, right: -50 },
          },
          {
            imageSrc: "/images/stickers/anime/jukebox.svg",
            position: "content",
            style: {
              position: "absolute",
              left: 0,
              top: -150,
              maxWidth: "100px",
            },
          },
          {
            imageSrc: "/images/stickers/anime/bowling.svg",
            position: "content",
            style: { position: "absolute", right: 50, top: -100 },
          },
          {
            imageSrc: "/images/stickers/anime/50s.svg",
            position: "content",
            style: {
              position: "absolute",
              left: 0,
              bottom: -120,
              maxWidth: "150px",
            },
          },
        ]}
      />
      <TShirt
        theme="dark"
        year={2016}
        trend="50"
        type="Graphic T-Shirts"
        description="From NASA forming to Elvis rising to popularity and Marilyn Monroe
        becoming everyone’s ultimate crush, the ‘50s can be summed up in one word:
        iconic. Of course, the fashion was just as memorable as the people,
        including polka dots, poodle skirts, leather jackets, and graphic
        t-shirts. Because everything old becomes new again eventually, 2016 saw
        people rocking graphic t-shirts again with a more modern twist."
        tShirtImgSrc="/images/graphic.webp"
        stickers={[
          {
            imageSrc: "/images/stickers/graphic/globe1.svg",
            position: "content",
            style: { position: "absolute", left: 0, top: -100 },
          },
          {
            imageSrc: "/images/stickers/graphic/spaceman1.svg",
            position: "content",
            style: { position: "absolute", left: 0, bottom: -150 },
          },
          {
            imageSrc: "/images/stickers/graphic/globe2.svg",
            position: "content",
            style: { position: "absolute", right: 0, bottom: -50 },
          },
          {
            imageSrc: "/images/stickers/graphic/globe3.svg",
            position: "image",
            style: { position: "absolute", left: -100, top: -50, zIndex: -1 },
          },
          {
            imageSrc: "/images/stickers/graphic/spaceman2.svg",
            position: "image",
            style: { position: "absolute", left: 0, bottom: 0 },
          },
          {
            imageSrc: "/images/stickers/graphic/ufo.svg",
            position: "background",
            style: { position: "absolute", right: 0, bottom: 100 },
          },
        ]}
      />
      <TShirt
        theme="light"
        year={2017}
        trend="80"
        type="Crop T-Shirts"
        description="Aside from Ghostbusters, Michael Jackson, and Family Ties, crop t-shirts
        were undoubtedly one of the most popular things of the 1980s. Chucking on
        a statement crop top paired with leg warmers and white sneakers would have
        you looking like you belonged in a Wham! music video (in a good way,
        obviously). And you know, there was something special about freeing the
        belly button—a bit risqué even. 2017 saw the resurgence of the humble crop
        t-shirt, although there was generally far less fluoro involved."
        tShirtImgSrc="/images/crop.png"
        stickers={[
          {
            imageSrc: "/images/stickers/crop/camera.svg",
            position: "image",
            style: { position: "absolute", left: 0, top: -100 },
          },
          {
            imageSrc: "/images/stickers/crop/skates.svg",
            position: "image",
            style: { position: "absolute", left: -50, bottom: -150 },
          },
          {
            imageSrc: "/images/stickers/crop/boombox.svg",
            position: "background",
            style: { position: "absolute", left: "40%", top: 50 },
          },
          {
            imageSrc: "/images/stickers/crop/ghostbusters.png",
            position: "image",
            style: { position: "absolute", right: 25, bottom: 0 },
          },
          {
            imageSrc: "/images/stickers/crop/pizza.svg",
            position: "content",
            style: { position: "absolute", left: -100, top: -100 },
          },
          {
            imageSrc: "/images/stickers/crop/glasses.svg",
            position: "content",
            style: { position: "absolute", bottom: -50, right: 50 },
          },
          {
            imageSrc: "/images/stickers/crop/tape.svg",
            position: "background",
            style: { position: "absolute", right: 0, top: 150 },
          },
        ]}
      />
      <TShirt
        theme="dark"
        year={2018}
        trend="00"
        type="Slogan T-Shirts"
        description="Britney Spears, Paris Hilton, Lindsay Lohan. Aside from being noughties
        icons—famous for quotes like ‘That’s hot’ and ‘What’s a soup kitchen?’—one
        thing they all had in common was a penchant for rocking slogan t-shirts.
        The slogan tee trend of the early 2000s saw celebs and the average joe
        alike sporting slogans that would totally get them cancelled in 2022.
        Luckily, when slogan t-shirts came back in 2018, the phrases were
        (usually) much more politically correct."
        tShirtImgSrc="/images/slogan.png"
        stickers={[
          {
            imageSrc: "/images/stickers/slogan/purse.svg",
            position: "content",
            style: { position: "absolute", left: 0, top: -150 },
          },
          {
            imageSrc: "/images/stickers/slogan/bow.svg",
            position: "content",
            style: { position: "absolute", right: 0, top: -50 },
          },
          {
            imageSrc: "/images/stickers/slogan/shoe.svg",
            position: "content",
            style: { position: "absolute", left: 0, bottom: -100 },
          },
          {
            imageSrc: "/images/stickers/slogan/cell.svg",
            position: "content",
            style: { position: "absolute", right: 0, bottom: -100 },
          },
          {
            imageSrc: "/images/stickers/slogan/ipod.svg",
            position: "image",
            style: { position: "absolute", left: 0, top: -100 },
          },
          {
            imageSrc: "/images/stickers/slogan/bag.svg",
            position: "image",
            style: { position: "absolute", right: -50, top: -100 },
          },
          {
            imageSrc: "/images/stickers/slogan/ring.svg",
            position: "image",
            style: { position: "absolute", left: 25, bottom: 0 },
          },
          {
            imageSrc: "/images/stickers/slogan/bag.svg",
            position: "image",
            style: { position: "absolute", right: -50, top: -100 },
          },
          {
            imageSrc: "/images/stickers/slogan/lipstick.svg",
            position: "background",
            style: { position: "absolute", right: 50, bottom: 100 },
          },
        ]}
      />
      <TShirt
        theme="light"
        year={2019}
        trend="70"
        type="Band T-Shirts"
        description="Back in the ‘70s, all the cool kids couldn’t get enough of Bruce Lee
        movies (although they secretly loved watching The Brady Bunch reruns with
        the fam). As for their music taste, while their parents played ABBA on
        repeat, they were much more into rock. Yep, band tees with the likes of
        Queen, AC/DC, and Led Zeppelin were all the rage back then and went on to
        trend again in 2019."
        tShirtImgSrc="/images/band.webp"
        stickers={[
          {
            imageSrc: "/images/stickers/band/planet.svg",
            position: "image",
            style: { position: "absolute", left: 0, top: -100 },
          },
          {
            imageSrc: "/images/stickers/band/kiss.svg",
            position: "image",
            style: { position: "absolute", right: -75, top: 100, zIndex: -1 },
          },
          {
            imageSrc: "/images/stickers/band/mushroom.svg",
            position: "image",
            style: { position: "absolute", left: -100, bottom: 0, zIndex: -1 },
          },
          {
            imageSrc: "/images/stickers/band/moon.svg",
            position: "image",
            style: { position: "absolute", right: 0, bottom: 0 },
          },
          {
            imageSrc: "/images/stickers/band/eye.svg",
            position: "content",
            style: { position: "absolute", top: -150, left: 0 },
          },
          {
            imageSrc: "/images/stickers/band/bird.svg",
            position: "content",
            style: { position: "absolute", top: -150, right: 0 },
          },
          {
            imageSrc: "/images/stickers/band/turtle.svg",
            position: "content",
            style: { position: "absolute", bottom: -200, left: -150 },
          },
          {
            imageSrc: "/images/stickers/band/plant.svg",
            position: "background",
            style: { position: "absolute", bottom: 0, right: 0 },
          },
        ]}
      />
      <TShirt
        theme="dark"
        year={2020}
        trend="90"
        type="Oversized T-Shirts"
        description="It was near-impossible to be a teen of the ‘90s and not obsessed with
        Nirvana, Pearl Jam, and Soundgarden. Everyone was in love with Cobain,
        Vedder, and Cornell, and grunge was the only music that mattered. But—Of
        course, this meant that your fashion sense was as influenced by the genre
        as your music taste. Baggy jeans and oversized t-shirts were absolutely
        everywhere in the early ‘90s…and 2020, too!"
        tShirtImgSrc="/images/oversized.png"
        stickers={[
          {
            imageSrc: "/images/stickers/oversized/joystick1.svg",
            position: "content",
            style: { position: "absolute", left: 0, top: -150 },
          },
          {
            imageSrc: "/images/stickers/oversized/joystick2.svg",
            position: "content",
            style: { position: "absolute", right: 0, top: -50 },
          },
          {
            imageSrc: "/images/stickers/oversized/gameboy1.svg",
            position: "content",
            style: { position: "absolute", left: 0, bottom: -150 },
          },
          {
            imageSrc: "/images/stickers/oversized/gameboy2.svg",
            position: "content",
            style: { position: "absolute", right: 0, bottom: -50 },
          },
          {
            imageSrc: "/images/stickers/oversized/joystick3.svg",
            position: "image",
            style: { position: "absolute", top: -75, left: -50 },
          },
          {
            imageSrc: "/images/stickers/oversized/tape.svg",
            position: "image",
            style: { position: "absolute", bottom: 0, left: -50 },
          },
          {
            imageSrc: "/images/stickers/oversized/joystick4.svg",
            position: "image",
            style: { position: "absolute", top: 0, right: -50 },
          },
          {
            imageSrc: "/images/stickers/oversized/joystick5.svg",
            position: "image",
            style: { position: "absolute", bottom: 50, right: 0, zIndex: -1 },
          },
        ]}
      />
      <InfoIntro />
      <Info />
    </Fragment>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <Home />
  </StrictMode>
);
