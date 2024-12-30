<script>
  export let text;
  export let icon;
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher()
</script>

<div
  class="button"
  on:click={() => dispatch('click')}
  on:keypress={() => dispatch('click')}
  tabindex=0
>
  <div class="text">
    {text}
  </div>
  <div class="icon">
    <i class={icon}></i>
  </div>
</div>

<style>
  .button {
    font-weight: 500;
    font-size: 25px;
    padding: 10px 30px;
    border-radius: 10px;
    background: #eee;
    cursor: pointer;
    display: flex;
    align-items: center;
    column-gap: 10px;
  }

  .button:hover {
    filter: brightness(85%)
  }
</style>