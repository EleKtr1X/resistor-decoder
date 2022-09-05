<script>
  export let bandCount;
  export let digits;
  export let multiplier;
  export let tolerance;
  export let tempcoeff;

  import { createEventDispatcher, onMount } from "svelte";
  import ColoredNumber from "./ColoredNumber.svelte";
  import { digitColor, multiplierColor, toleranceColor, tempcoeffColor, numberToShorthand } from '../constants';
  
  let resistance = numberToShorthand(parseInt(digits.join('')) * multiplier);
  let resultText = `${resistance} Ω`;
  if (bandCount >= 4) {
    resultText += ` ± ${tolerance}%`;
  } else {
    resultText += ` ± 20%`
  }
  if (bandCount == 6) {
    resultText += ` ${tempcoeff}ppm/K`;
  }
  
  let dispatch = createEventDispatcher();
  onMount(async () => {
    dispatch('resultUpdate', resultText);
  });

</script>

<h1>
  {#each digits as digit}
    <ColoredNumber number={digit} data={digitColor} />
  {/each}
  ×
  <ColoredNumber number={multiplier} data={multiplierColor} />
  = <b>{resistance} Ω</b>
  {#if bandCount >= 4}
    <b>
      ± 
      <ColoredNumber number={tolerance} data={toleranceColor} />%
    </b>
  {:else}
    <b>
      ± 20%
    </b>
  {/if}

  {#if bandCount == 6}
    <b>
      <ColoredNumber number={tempcoeff} data={tempcoeffColor} />
      ppm/K
    </b>
  {/if}
</h1>

<style>
  h1 {
    text-align: center;
    font-size: 50px;
    font-weight: 400;
    border: 5px solid #000;
    border-radius: 10px;
    padding: 20px;
    margin: 0px auto 15px auto;
    max-width: 1000px;
  }
</style>
