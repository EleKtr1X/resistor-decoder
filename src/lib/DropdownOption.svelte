<script>
  export let option;
  let text = option[1];
  let color = option[2] || '#EEEEEE';
  import { contrastColors } from '../constants';

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>

<li
  on:click={() => dispatch('selectChange', option)}
  on:keypress={() => dispatch('selectChange', option)}
  tabindex=0
  style:background={color}
  style:color={contrastColors[color] || '#000'}
>{text}</li>

<style>
  li {
    list-style-type: none;
    padding: 5px 10px;
    cursor: pointer;
  }

  li:hover {
    filter: brightness(0.85);
  }
</style>