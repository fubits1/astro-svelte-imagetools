<script>
  import { importImageByFilename2 } from '../utils/vite.js';
  export let filename;
  export let alt = 'TODO';
  export let caption = null;
  const image = importImageByFilename2(filename);

  // let isLoaded = false
  // const handleLoad = () => {
  //   isLoaded = true
  // }
</script>

<figure>
  {#if import.meta.env.SSR}
    <img src={image} {alt} loading="lazy" />
    {#if caption}
      <figcaption>{caption}</figcaption>
    {/if}
  {/if}
</figure>
