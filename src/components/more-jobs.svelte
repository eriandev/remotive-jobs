<script lang="ts">
  import { BASE_URL } from '@/shared/consts'

  interface Props {
    loading: boolean
    action: () => Promise<void>
  }

  let { action, loading }: Props = $props()
</script>

<footer class="w-full grid gap-y-2 justify-items-center">
  {#if loading}
    <img alt="Doge" src="{BASE_URL}/doge.png" class="w-16" />
    <span class="font-poppins">Loading more jobs...</span>
  {:else}
    <button class="btn outline w-max" onclick={action}>Load more jobs</button>
  {/if}
</footer>
