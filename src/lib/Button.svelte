<script>
  export let text;
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher()
</script>

<div class="button" on:click={() => dispatch('click')}>
  {@html text}
</div>

<style>
  .button {
    text-align: center;
    font-weight: 500;
    font-size: 25px;
    border: 5px solid #000;
    padding: 10px 50px;
    border-radius: 10px;
    background: #ddd;
    cursor: pointer;
  }

  .button:hover {
    filter: brightness(85%)
  }
</style>