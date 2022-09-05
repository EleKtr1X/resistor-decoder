<script>
  export let bandCount;
  export let digits;
  export let multiplier;
  export let tolerance;
  export let tempcoeff;

  import { digitColor, multiplierColor, toleranceColor, tempcoeffColor } from '../constants';

</script>

<div class="preview">
  <div class="bands">
    <div class="first-digit" style:background={digitColor[digits[0]]}></div>
    <div class="second-digit" style:background={digitColor[digits[1]]}></div>
    <div class="third-digit" style:background={digitColor[digits[2]]}></div>
    <div class="multiplier" style:background={multiplierColor[multiplier]}></div>
    {#if bandCount >= 4}
    <div class="tolerance" style:background={toleranceColor[tolerance]}></div>
    {/if}
    {#if bandCount == 6}
      <div class="tempcoeff" style:background={tempcoeffColor[tempcoeff]}></div>
    {/if}
  </div>
</div>

<style>
  .preview {
    background-image: url(/src/assets/resistor.svg) !important;
    text-align: center;
    background-size: 516px;
    background-repeat: no-repeat;
    background-position: center;
    width: 700px;
    padding-top: 16px;
    padding-bottom: 16px;
    margin: 15px auto;
  }

  .first-digit, .tempcoeff {
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


  @media screen and (max-width: 700px) {
    .preview {
      background-size: 250px;
      width: 300px;
    }
    .bands {
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
    }
  }
</style>