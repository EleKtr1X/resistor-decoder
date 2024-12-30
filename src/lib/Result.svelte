<script>
  export let bandCount;
  export let digits;
  export let multiplier;
  export let tolerance;
  export let tempcoeff;

  import { createEventDispatcher, onMount } from "svelte";
  import { numberToShorthand } from '../constants';
    import Button from "./Button.svelte";
  
  let resistance = numberToShorthand(parseInt(digits.join('')) * multiplier);
  let resultText = `${resistance} Ω`;
  if (bandCount >= 4) {
    resultText += ` ± ${tolerance}%`;
  } else {
    resultText += ` ± 20%`
  }
  if (bandCount == 6) {
    resultText += ` ${tempcoeff} ppm/K`;
  }
  
  let dispatch = createEventDispatcher();
  onMount(async () => {
    dispatch('resultUpdate', resultText);
  });

  async function copyText() {
    await navigator.clipboard.writeText(resultText);
    alert('Copied result to clipboard!');
  }
</script>

<div class="result">
  <h1>{resultText}</h1>
  <Button text="Copy Result" icon="fa-solid fa-copy" on:click={copyText} />
</div>

<style>
  h1 {
    text-align: center;
    font-size: 50px;
    font-weight: 400;
    font-weight: bold;
    margin: 0
  }

  .result {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 5px;
    max-width: 800px;
    padding: 10px;
    margin: auto;
  }
</style>
