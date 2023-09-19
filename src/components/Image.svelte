<script>
  import {importImageByFilename} from "../utils/vite.js"
  export let filename;
  export let alt = 'TODO'
  export let caption = null
  const image = importImageByFilename(filename);

  let isLoaded = false 
  const handleLoad = () => {
    isLoaded = true
  }
</script>

<figure use:handleLoad>
  {#if isLoaded}
  <img src={image} alt={alt} loading="lazy" />
  {/if}
  {#if caption}
  <figcaption>{caption}</figcaption>
  {/if}
</figure>

