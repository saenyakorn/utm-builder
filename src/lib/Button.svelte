<script lang="ts">
  import clsx from 'clsx'

  export let label: string
  export let onClick: () => Promise<any>

  interface $$Props extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['button']> {
    label: string
    onClick: () => Promise<any>
  }
</script>

<button
  {...$$restProps}
  on:click={onClick}
  class={clsx(
    'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800',
    'font-bold',
  )}>{label}</button
>
