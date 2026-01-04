<script lang="ts">
  import type { Snippet } from 'svelte'
  import JobCard from '@/components/job-card.svelte'
  import MoreJobs from '@/components/more-jobs.svelte'
  import { getJobListByPage } from '@/services/jobs'
  import type { Job } from '@/services/types'

  interface Props {
    children?: Snippet
  }

  let page = $state(2)
  let loading = $state(false)
  let isLastPage = $state(false)
  let jobList = $state<Job[]>([])

  const { children }: Props = $props()

  async function updateJobList() {
    if (isLastPage) return

    loading = true
    const response = await getJobListByPage(page)
    jobList = [...jobList, ...response.results]

    if (response.next) page = page + 1
    else isLastPage = true
    loading = false
  }
</script>

<main class="grid grid-flow-row gap-2 pb-12">
  {@render children?.()}
  {#each jobList as job (job.id)}
    <JobCard {job} />
  {/each}
</main>

{#if !isLastPage}
  <MoreJobs {loading} action={updateJobList} />
{/if}
