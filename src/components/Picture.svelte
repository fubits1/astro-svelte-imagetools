<script>
  import { importPictureByFilename } from '@utils/vite.js';
  export let filename;
  export let alt = 'TODO';
  // static import would look like this:
  //@ts-ignore
  // import avif from '../assets/rainbow.jpg?w=300;500;900;1200&format=avif&as=srcset';
  $: console.log(import.meta);

  const avif = importPictureByFilename(filename, 'avif');
  const webp = importPictureByFilename(filename, 'webp');
  const fallback = importPictureByFilename(filename);

  // workaround for pre-mature evaluation of path by vite
  let isLoaded = false;
  const handleLoad = () => {
    isLoaded = true;
  };
</script>

import.meta.url: {import.meta.url}
<picture use:handleLoad>
  {#if isLoaded}
    <source srcset={avif} type="image/avif" />
    <source srcset={webp} type="image/webp" />
    <img src={fallback} {alt} loading="lazy" />
  {/if}
</picture>
