<script lang="ts">
  import clsx from 'clsx'
  import Icon from '@iconify/svelte'

  interface $$Props {
    text: string
  }

  export let text: string

  let copied: boolean = false

  function handleCopy() {
    navigator.clipboard.writeText(text)
    copied = true
  }

  function handleMouseLeave() {
    copied = false
  }
</script>

<div
  class="flex flex-row gap-2 items-center justify-between py-1 px-2 border-[1.5px] border-gray-300 rounded-md"
>
  <span class="break-all p-1">{text}</span>
  <button
    class={clsx('p-1 text-gray-300', 'hover:text-gray-400', 'transition-colors', 'tooltip')}
    type="button"
    on:click={handleCopy}
    on:mouseleave={handleMouseLeave}
  >
    <Icon icon="mdi:content-copy" width="20" height="20" />
    <span
      class={clsx(
        'tooltiptext bg-gray-600 p-1 text-white invisible text-center',
        'opacity-0 absolute w-[140px] rounded-md',
        'transition-opacity',
      )}
    >
      {copied ? 'Copied!' : 'Copy to clipboard'}
    </span>
  </button>
</div>

<style>
  .tooltip {
    position: relative;
    display: inline-block;
  }

  .tooltip .tooltiptext {
    z-index: 1;
    bottom: 150%;
    left: 50%;
    margin-left: -75px;
  }

  .tooltip .tooltiptext::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
</style>
