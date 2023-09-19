<script>
  export let filename;
  export let alt = 'TODO';
  // static import would look like this:
  //@ts-ignore
  // import avif from '../assets/rainbow.jpg?w=300;500;900;1200&format=avif&as=srcset';
  $: console.log(import.meta.url)

  const importImageByFilename = (filename, format) => {
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

  const avif = importImageByFilename(filename, 'avif');
  const webp = importImageByFilename(filename, 'webp');
  const fallback = importImageByFilename(filename);

  // workaround for pre-mature evaluation of path by vite
  let isLoaded = false
  const handleLoad = () => {
    isLoaded = true
  }
</script>
import.meta.url: {import.meta.url}
<picture use:handleLoad>
  {#if isLoaded}
  <source srcset={avif} type="image/avif" />
  <source srcset={webp} type="image/webp" />
  <img src={fallback} {alt} loading="lazy" />
  {/if}
</picture>
