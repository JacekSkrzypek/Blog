export const IMAGES = {
  mainImage: "pexels-carlos-oliva-3586966.jpg", //Carlos Oliva: https://www.pexels.com/pl-pl/zdjecie/panorame-miasta-na-calej-powierzchni-wody-w-porze-nocnej-3586966/
  mainImageTitle: "City at night",
};

export const TEXTS = {
  loremIpsum: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  newLineSymbol: "</br>",
};

export const NUMBERS = {
  postsLimit: 6,
};

export const POSTS = [
  {
    id: 4,
    title: "We're so small...",
    description: TEXTS.loremIpsum,
    image: "pexels-janik-butz-5366526.jpg", //Janik Butz: https://www.pexels.com/pl-pl/zdjecie/zbiornik-wodny-w-poblizu-gory-pod-rozgwiezdzona-noca-5366526/
  },
  {
    id: 3,
    title: "An early bird",
    description: TEXTS.loremIpsum,
    image: "pexels-cmonphotography-1809644.jpg", //cmonphotography: https://www.pexels.com/pl-pl/zdjecie/sylwetka-gor-o-swicie-1809644/
  },
  {
    id: 2,
    title: "A remnant of the past",
    description: TEXTS.loremIpsum,
    image: "pexels-peter-spencer-663487.jpg", //Peter Spencer: https://www.pexels.com/pl-pl/zdjecie/zielone-pole-i-bialo-czarna-konstrukcja-betonowa-podczas-zachodu-slonca-663487/
  },
  {
    id: 1,
    title: "Concrete jungle",
    description: TEXTS.loremIpsum,
    image: "pexels-pixabay-220444.jpg", //Pixabay: https://www.pexels.com/pl-pl/zdjecie/architektura-budynki-drapacze-chmur-mezczyzna-220444/
  },
  {
    id: 0,
    title: "Relaxing by the lake",
    description:
      TEXTS.loremIpsum +
      TEXTS.newLineSymbol +
      TEXTS.newLineSymbol +
      TEXTS.loremIpsum,
    image: "pexels-ezra-comeau-2387661.jpg", //Ezra Comeau: https://www.pexels.com/pl-pl/zdjecie/biale-platki-kwiaty-2387661/
  },
];
