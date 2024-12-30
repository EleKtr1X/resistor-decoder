<script>
  export let bandCount;
  export let digits;
  export let multiplier;
  export let tolerance;
  export let tempcoeff;

  import { digitColor, multiplierColor, toleranceColor, tempcoeffColor, numberToShorthand, contrastColors } from '../constants'; 
  // @ts-ignore
  import resistorSvg from '../assets/resistor.svg?raw';

  const bandColors = [
    {
      bandNumber: 1,
      value: digits[0],
      color: digitColor[digits[0]],
      x: 70,
      small: false,
    },
    {
      bandNumber: 2,
      value: digits[1],
      color: digitColor[digits[1]],
      x: 105,
      small: true,
    },
    {
      bandNumber: 3,
      value: bandCount > 4 ? digits[2] : `×${numberToShorthand(multiplier)}`,
      color: bandCount > 4 ? digitColor[digits[2]] : multiplierColor[multiplier],
      x: 125,
      small: true,
    },
    {
      bandNumber: 4,
      value: bandCount > 4 ? `×${numberToShorthand(multiplier)}` : null,
      color: bandCount > 4 ? multiplierColor[multiplier] : 'none',
      x: 145,
      small: true,
    },
    {
      bandNumber: bandCount < 5 ? 4 : 5,
      value: bandCount > 3 ? `±${tolerance}%` : null,
      color: bandCount > 3 ? toleranceColor[tolerance] : 'none',
      x: 182.5,
      small: true,
    },
    {
      bandNumber: 6,
      value: bandCount == 6 ? `${tempcoeff} ppm/K` : null,
      color: bandCount == 6 ? tempcoeffColor[tempcoeff] : 'none',
      x: 217.5,
      small: false,
    },
  ];
</script>

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 90" width="800px" class="preview">
  {@html resistorSvg}
  {#each bandColors as bandColor}
    <rect style="fill: {bandColor.color}" x={bandColor.x} y={bandColor.small ? 10 : 0} width=12.5 height={bandColor.small ? 50 : 70}></rect>
    
    {#if bandColor.value != null}
      <rect class="band-rect" style="fill: {bandColor.color}" x={bandColor.x} y={bandColor.small ? 66.5 : 76.5} height=11 width=0 rx=1></rect>
      <text class="band-text" x={bandColor.x + 6.25} y={bandColor.small ? 75 : 85} style="font-size: 9px; fill: {contrastColors[bandColor.color]}; margin: 0; font-weight: bold" text-anchor="middle">{bandColor.value}</text>
    {/if}
  {/each}
  <script>
    rects = document.getElementsByClassName(`band-rect`);
    texts = document.getElementsByClassName(`band-text`);
    for (i = 0; i < rects.length; i++) {
      rects[i].setAttribute('x', (+rects[i].getAttribute('x') - (((texts[i].getComputedTextLength()) * 0.5)) + 3.75))
      rects[i].setAttribute('width', texts[i].getComputedTextLength() + 5)
    }
      // rect.setAttribute('width', (text.getBBox().width).toString());
  </script>
</svg>

<style>
  .preview {
    display: block;
    margin: auto;
    padding-top: 16px;
    padding-bottom: 16px;
    margin: 15px auto;
  }

  /*.first-digit, .tempcoeff {
    width: 20px;
    height: 106.5px;
  }
  
  .second-digit, .third-digit, .multiplier, .tolerance {
    width: 20px;
    height: 78px;
    margin-top: 13px;
  }
  
  .first-digit {
    margin-left: 137px;
  }

  .second-digit, .tempcoeff {
    margin-left: 35px;
  }

  .third-digit, .multiplier, .tolerance {
    margin-left: 12px;
  }

  .bands {
    width: 500px;
    margin-left: 100px;
    display: flex;
    flex-direction: row;
  }
  */

  @media screen and (max-width: 900px) {
    .preview {
      /* background-size: 250px; */
      width: 390px;
    }
    /* .bands {
      margin-left: -43px;
      width: 300px;
    }
    .first-digit, .tempcoeff {
      width: 10px;
      height: 51.5px;
    }
    .second-digit, .third-digit, .multiplier, .tolerance {
      width: 10px;
      height: 38px;
      margin-top: 6px;
    }
    .second-digit, .tempcoeff {
      margin-left: 18.5px;
    }

    .third-digit, .multiplier, .tolerance {
      margin-left: 5px;
    } */
  }
</style>