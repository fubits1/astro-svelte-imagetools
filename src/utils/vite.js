export const semiDynamicImageImport = (filenamePart) =>
  new URL(`../assets/${filenamePart}.jpg?w=100&format=avif&tint=ffaa22`, import.meta.url).href;

export const importImageByFilename = (filename) => {
  const chunks = filename.split('.');
  const extension = chunks.pop();
  const prefix = chunks.join('');

  return new URL(`../assets/${prefix}.${extension}?w=300&format=webp&tint=ffaa22`, import.meta.url)
    .href;
};

export const importImageByFilename2 = (filename) => {
  const chunks = filename.split('.');
  const extension = chunks.pop();
  const prefix = chunks.join('');

  /** check if import.meta.url does not start with file://
   * if it does, wait and try again until it doesn't
   * if it doesn't, return the url
   * */

  if (import.meta.url.startsWith('file://')) {
    setTimeout(() => importImageByFilename(filename), 100);
    return;
  }

  return new URL(`../assets/${prefix}.${extension}?w=300&format=webp&tint=ffaa22`, import.meta.url)
    .href;
};

export const importPictureByFilename = (filename, format) => {
  const chunks = filename.split('.');
  const extension = chunks.pop();
  const prefix = chunks.join('');
  // console.log(prefix, extension);
  switch (format) {
    case 'avif':
      return new URL(
        `../assets/${prefix}.${extension}?w=300;600;900&format=avif&as=srcset`,
        import.meta.url
      ).href.replaceAll('%20', ' ');
    case 'webp':
      return new URL(
        `../assets/${prefix}.${extension}?w=300;600;900&format=webp&as=srcset`,
        import.meta.url
      ).href.replaceAll('%20', ' ');
    case 'png':
      return new URL(
        `../assets/${prefix}.${extension}?w=300;600;900&format=png&as=srcset`,
        import.meta.url
      ).href.replaceAll('%20', ' ');
    case 'jpg':
      return new URL(
        `../assets/${prefix}.${extension}?w=300;600;900&format=jpg&as=srcset`,
        import.meta.url
      ).href.replaceAll('%20', ' ');
    case 'asis':
      return new URL(`../assets/${prefix}.${extension}`, import.meta.url).href;
    default:
      return new URL(`../assets/${prefix}.${extension}?w=500`, import.meta.url).href;
  }
};
