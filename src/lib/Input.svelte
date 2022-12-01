<script lang="ts">
  import clsx from 'clsx'

  export let id: string
  export let value: string
  export let label: string = ''

  interface $$Props extends svelte.JSX.SvelteInputProps {
    id: string
    value: string
    label?: string
  }
</script>

<div class="flex flex-col gap-2 w-full">
  {#if label}
    <label for={id}>{label}</label>
  {/if}
  <input
    type="text"
    {...$$restProps}
    bind:value
    class={clsx(
      'w-full border-2 border-solid border-gray-300 p-2 rounded-md',
      'hover:border-blue-400',
      'transition-colors',
    )}
  />
</div>
