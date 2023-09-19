export const semiDynamicImageImport = (filenamePart) => new URL(
  `../assets/${filenamePart}.jpg?w=100&format=avif&tint=ffaa22`,
  import.meta.url
).href;


export const importImageByFilename = (filename) => {
    const chunks = filename.split('.');
    const extension = chunks.pop();
    const prefix = chunks.join('');

    return new URL(`../assets/${prefix}.${extension}?w=300&format=webp&tint=ffaa22`, import.meta.url)
      .href;
  };
