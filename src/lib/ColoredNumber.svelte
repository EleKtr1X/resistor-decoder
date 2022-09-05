<script>
  export let number;
  export let data;

  import { numberToShorthand } from '../constants';

  let color = data[number];
</script>

<span class="number" style="color:{color};{['#FFFFFF', '#DCDCDC'].includes(color) ? '-webkit-text-stroke: 2px #000;' : ''}">
  {numberToShorthand(number)}
</span>