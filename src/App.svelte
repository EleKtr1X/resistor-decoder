<script>
  import Button from './lib/Button.svelte';
  import Dropdown from './lib/Dropdown.svelte';
  import Preview from './lib/Preview.svelte';
  import Result from './lib/Result.svelte';

  // default settings
  let bandCount = 3;
  let digits = ['1', '0'];
  let multiplier = 1;
  let tolerance = 1;
  let tempcoeff = 100;
  let result = '';
  let resetDropdowns = false;

  function handleChange(menu) {
    console.log(menu);
    switch (menu[0]) {
      case 'Band Count':
        // update to defaults if band count is changed
        if (bandCount > 3 && menu[1] == 3) {
          tolerance = 1;
        }
        if (bandCount == 6 && menu[1] < 6) {
          tempcoeff = 100;
        }
        if (bandCount < 5 && menu[1] >= 5) {
          digits.push('0');
        } else if (bandCount >= 5 && menu[1] < 5) {
          digits.pop();
        }

        bandCount = menu[1];
        break;
        case '1st Digit':
        digits[0] = menu[1].toString();
        break;
      case '2nd Digit':
        digits[1] = menu[1].toString();
        break;
      case '3rd Digit':
        digits[2] = menu[1].toString();
        break;
      case 'Multiplier':
        multiplier = menu[1];
        break;
      case 'Tolerance':
        tolerance = menu[1];
        break;
      case 'Temp. Coeff.':
        tempcoeff = menu[1];
        break;
    }
  }

  function updateResult(text) {
    result = text;
  }

  async function copyText() {
    await navigator.clipboard.writeText(`result`);
    alert('Copied result to clipboard!');
  }
</script>

<main>
  {#key [bandCount, digits, multiplier, tolerance, tempcoeff]}
    <Preview {bandCount} {digits} {multiplier} {tolerance} {tempcoeff} />
    <Result {bandCount} {digits} {multiplier} {tolerance} {tempcoeff} on:resultUpdate={(e) => updateResult(e.detail)} />
  {/key}
  <div class="buttons">
    <Button text="<i class='fa-solid fa-copy'></i>" on:click={copyText} />
  </div>
  {#key resetDropdowns}
    <div class="dropdowns">
      <Dropdown on:selectChange={(e) => handleChange(e.detail)} data={[
        [3, '3 Bands'],
        [4, '4 Bands'],
        [5, '5 Bands'],
        [6, '6 Bands'],
      ]} name="Band Count" />

      <Dropdown on:selectChange={(e) => handleChange(e.detail)} data={[
        [1, 'Brown', '#8C4D19'],
        [2, 'Red', '#DE4439'],
        [3, 'Orange', '#EF8228'],
        [4, 'Yellow', '#FCD500'],
        [5, 'Green', '#53C638'],
        [6, 'Blue', '#1A94D0'],
        [7, 'Purple', '#7E43B1'],
        [8, 'Grey', '#999999'],
        [9, 'White', '#FFFFFF'],
      ]} name="1st Digit" />
      
      <Dropdown on:selectChange={(e) => handleChange(e.detail)} data={[
        [0, 'Black', '#000000'],
        [1, 'Brown', '#8C4D19'],
        [2, 'Red', '#DE4439'],
        [3, 'Orange', '#EF8228'],
        [4, 'Yellow', '#FCD500'],
        [5, 'Green', '#53C638'],
        [6, 'Blue', '#1A94D0'],
        [7, 'Purple', '#7E43B1'],
        [8, 'Grey', '#999999'],
        [9, 'White', '#FFFFFF'],
      ]} name="2nd Digit" />

      {#if bandCount >= 5}
        <Dropdown on:selectChange={(e) => handleChange(e.detail)} data={[
          [0, 'Black', '#000000'],
          [1, 'Brown', '#8C4D19'],
          [2, 'Red', '#DE4439'],
          [3, 'Orange', '#EF8228'],
          [4, 'Yellow', '#FCD500'],
          [5, 'Green', '#53C638'],
          [6, 'Blue', '#1A94D0'],
          [7, 'Purple', '#7E43B1'],
          [8, 'Grey', '#999999'],
          [9, 'White', '#FFFFFF'],
        ]} name="3rd Digit" />
      {/if}
      
      <Dropdown on:selectChange={(e) => handleChange(e.detail)} data={[
        [1, 'Black', '#000000'],
        [10, 'Brown', '#8C4D19'],
        [100, 'Red', '#DE4439'],
        [1000, 'Orange', '#EF8228'],
        [10000, 'Yellow', '#FCD500'],
        [100000, 'Green', '#53C638'],
        [1000000, 'Blue', '#1A94D0'],
        [10000000, 'Purple', '#7E43B1'],
        [100000000, 'Grey', '#999999'],
        [1000000000, 'White', '#FFFFFF'],
        [0.1, 'Gold', '#FFB800'],
        [0.01, 'Silver', '#DCDCDC']
      ]} name="Multiplier" />

      {#if bandCount >= 4}
        <Dropdown on:selectChange={(e) => handleChange(e.detail)} data={[
          [1, 'Brown', '#8C4D19'],
          [2, 'Red', '#DE4439'],
          [0.5, 'Green', '#53C638'],
          [0.25, 'Blue', '#1A94D0'],
          [0.10, 'Purple', '#7E43B1'],
          [0.05, 'Grey', '#999999'],
          [5, 'Gold', '#FFB800'],
          [10, 'Silver', '#DCDCDC']
        ]} name="Tolerance" />
      {/if}

      {#if bandCount == 6}
        <Dropdown on:selectChange={(e) => handleChange(e.detail)} data={[
          [100, 'Brown', '#8C4D19'],
          [50, 'Red', '#DE4439'],
          [15, 'Orange', '#EF8228'],
          [25, 'Yellow', '#FCD500'],
          [10, 'Blue', '#1A94D0'],
          [5, 'Purple', '#7E43B1'],
        ]} name="Temp. Coeff." />
      {/if}
    </div>
  {/key}
</main>

<style>

  .dropdowns {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  @media screen and (max-width: 1000px) {
    .dropdowns {
      flex-direction: column;
      justify-content: center;
    }
  }

  .buttons {
    max-width: 200px;
    margin: auto auto 15px auto;
  }
</style>