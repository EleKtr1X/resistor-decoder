<script>
  import isDarkColor from 'is-dark-color';
  import DropdownOption from './DropdownOption.svelte';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let data;
  export let name;
  let show = false;
  let selected = data[0][1];
  let selectedColor = data[0][2] || '#EEEEEE';

  function toggleVisibility() {
    show = !show;
  }

  function changeSelected(option) {
    show = false;
    selected = option[1];
    selectedColor = option[2] || '#EEEEEE';
    dispatch('selectChange', [name, option[0]]);
  }
</script>
<div class="container">
  <div class="header">
    {name}
  </div>
  <div class="dropdown" style:color={isDarkColor(selectedColor) ? 'white': 'black'}>
    <div class="selected" on:click={toggleVisibility} on:keypress={toggleVisibility} tabindex=0 style:background={selectedColor}>
      {selected}
      <div class="arrow">
        <i class="fa-solid fa-angle-{show ? 'up' : 'down'} fa-xs"></i>
      </div>
        
    </div>
    {#if show}
      <ul class="options">
        {#each data as option}
          <DropdownOption on:selectChange={(e) => (changeSelected(e.detail))} {option} />
        {/each}
      </ul>
    {/if}
  </div>  
</div>

<style>
  @media screen and (max-width: 1000px) {
    .dropdown, .selected, .options, .container {
      flex-basis: 0px !important;
      align-self: center;
    }
    .selected, .options {
      width: 200px;
      margin-right: 0px;
    }

    .options {
      margin-left: 5px;
      margin-bottom: 10px;
    }
  }

  .dropdown {
    font-size: 22px;
    margin: 0px 0px 15px 0px;
    padding: 0px;
  }

  .selected {
    padding: 5px 0px 5px 10px;
    max-width: 200px;
    cursor: pointer;
    margin-bottom: 10px;
  }

  .selected, .options {
    /* background-color: #000000; */
    border-radius: 10px;
    max-width: 200px;
    margin-right: 10px;
  }
  
  .options {
    margin-top: 0;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding-left: 0px;
    max-height: 200px;
  }

  .selected .arrow {
    float: right;
    padding-right: 15px;
  }

  .header {
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    margin-bottom: 5px;
  }

  .container {
    display: flex;
    flex-direction: column;
    flex-basis: 200px;
  }

  .selected:hover {
    filter: brightness(80%);
  }

</style>