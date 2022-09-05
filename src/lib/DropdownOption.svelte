<script>
  export let option;
  let text = option[1];
  let color = option[2] || '#FFFFFF';
  import isDarkColor from 'is-dark-color';

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>

<div on:click={() => dispatch('selectChange', option)} style:background={color} style:color={isDarkColor(color) ? 'white' : 'black'} style="{color == '#FFFFFF' ? 'border: 5px solid black; box-sizing: border-box;' : ''}">{text}</div>

<style>
  div {
    list-style-type: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    margin-bottom: 4px;
  }

  div:hover {
    filter: brightness(0.85);
  }
</style>