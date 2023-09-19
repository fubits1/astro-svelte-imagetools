<script>
  import {importImageByFilename} from "../utils/vite.js"
  export let filename;

const image = importImageByFilename(filename);

let isLoaded = false 
const handleLoad = () => {
  isLoaded = true
}
</script>

<figure use:handleLoad>
  {#if isLoaded}
  <img src={image} alt="TODO" loading="lazy" />
  {/if}

  <!-- <figcaption>TODO</figcaption> -->
</figure>

