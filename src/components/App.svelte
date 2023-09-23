<script>
  // import { semiDynamicImageImport, importImageByFilename } from './../utils/vite.js';

  // static Vite from ../assets
  // doesn't work
  // import svelteLogoStaticSimple from '../assets/svelte.svg';

  // static Vite with directive from ../assets
  import SvelteLogoStaticRaw from '../assets/svelte.svg?raw';

  // static Vite from /public
  // doesn't work
  // import viteLogoPublic from '/vite.svg';

  // regular Component
  import Counter from '../components/Counter.svelte'; // from src/assets

  /* vite-imagetools documentation: https://github.com/JonasKruckenberg/imagetools/blob/main/docs/guide/getting-started.md */
  // static imagetools
  // @ts-ignore
  import SvelteLogoImageTools from '../assets/svelte.svg?w=400&h=300&format=webp';

  // static imagetools & format=webp
  // @ts-ignore
  import Rainbow from '../assets/rainbow.jpg?w=400&h=300&format=webp';

  // static imagetools & format=webp
  // @ts-ignore
  // import Lake from '../assets/lake-hd.jpg?w=400&h=300&format=webp&quality=50';

  // dynamic imagetools
  // const imageFilename = 'lake-hd';

  // const semiDynamicImageUrl = semiDynamicImageImport(imageFilename)

  /* Picture */
  import Picture from '../components/Picture.svelte'; // using as=srcset
  import Picture2 from '../components/Picture2.svelte'; // using as=srcset

  /* Image */
  import Image from '../components/Image.svelte';
  import Image2 from '../components/Image2.svelte';

  // official documentation https://github.com/JonasKruckenberg/imagetools/blob/main/docs/directives.md#picture
  // pointer for picture component https://github.com/JonasKruckenberg/imagetools/issues/260#issuecomment-1081965405
  // const imageSrcSet = new URL(
  //   `./assets/${imageFilename}.jpg?w=300;600;900&format=webp;avif;jpg&as=picture`,
  //   import.meta.url
  // ).href;

  // let html = '<picture>';
  // for (const [format, images] of Object.entries(imageSrcSet.sources)) {
  //   html += `<source srcset={images.map((i) => `${i.src}`).join(', ')} type={'image/' + format} />`;
  // }
  // html += `<img src={image.fallback.src} /></picture>`

  // const importImageByFilename = (filename) => {
  //   const chunks = filename.split('.');
  //   const extension = chunks.pop();
  //   const prefix = chunks.join('');
  //   console.log(prefix, extension);
  //   return new URL(`./assets/${prefix}.${extension}?w=100&format=avif&tint=ffaa22`, import.meta.url)
  //     .href;
  // };

  // const imageFromFunction = importImageByFilename('rainbow.jpg');
</script>

<main>
  <h2>Vite + Svelte: Dynamic Image Import + Preprocessing</h2>
  <code>import.meta.url: {import.meta.url}</code>
  <!-- <h3>1. const image = new URL(file, import.meta.url)</h3>
  <code>
    const semiDynamicImageUrl = new URL( `../assets/${imageFilename}.jpg?w=100&format=avif&tint=ffaa22`,
    import.meta.url ).href;</code
  ><br />
  Result: <code>{semiDynamicImageUrl}</code>
  <figure>
    <img src={semiDynamicImageUrl} alt="alt: " />
  </figure>
  <hr /> -->
  <h3>2. MAIN: picture</h3>
  <h4>Pciture (v1) + source + srscet + dynamic import</h4>
  <Picture filename="rainbow.jpg" />
  <hr />
  <h4>Pciture (v2) + source + srscet + dynamic import</h4>
  <Picture filename="lake-hd.jpg" />
  <hr />
  <!-- <h3>dynamic from function call</h3> -->
  <!-- <code>{imageFromFunction}</code><br /> -->
  <!-- <img src={imageFromFunction} alt="alt: dyn src" /> -->
  <h4><s>Static with Vite</s></h4>
  <div>
    <!-- <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogoPublic} class="logo" alt="alt: Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogoStaticSimple} class="logo svelte" alt="alt: Svelte Logo" />
    </a> -->

    <details>
      <summary><code>?raw</code><span>{@html SvelteLogoStaticRaw}</span> </summary>
      {SvelteLogoStaticRaw}
    </details>

    <hr />
    <h3>Imagetools</h3>
    <h4>Basic imports</h4>
    SvelteLogoImageTools: {SvelteLogoImageTools}<br />
    <img src={SvelteLogoImageTools} class="logo svelte" alt="alt: Svelte Logo" loading="lazy" />
    <img
      src={Rainbow}
      class="logo svelte"
      alt="alt: Rainbow"
      loading="lazy"
      decoding="async" /><br />
    {Rainbow}
    <hr />
    <h4>Image component + importImageByFilename1|2</h4>
    <!-- <Rainbow /> -->
    <!-- <code>{Rainbow}</code> -->
    <Image filename={'rainbow.jpg'} />
    <!-- <code>{Lake}</code> -->
    <Image2 filename={'lake-hd.jpg'} />
    <!-- <img src={Lake} alt="alt: TODO" loading="lazy" /> -->
  </div>
  <div class="card">
    <Counter />
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>
