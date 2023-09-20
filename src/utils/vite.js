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
