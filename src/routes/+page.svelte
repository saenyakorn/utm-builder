<script lang="ts">
  import Input from '$lib/Input.svelte'
  import ShortUrl from '$lib/ShortURL.svelte'

  let campaign = {
    websiteURL: '',
    campaignId: '',
    campaignSource: '',
    campaignMedium: '',
    campaignName: '',
    campaignTerm: '',
    campaignContent: '',
  }
</script>

<main class="flex flex-col p-20 gap-8 items-center">
  <h1 class="text-3xl font-bold text-center">UTM Builder</h1>
  <form class="flex flex-col w-full max-w-md gap-4" on:submit|preventDefault={null}>
    <Input
      bind:value={campaign.websiteURL}
      id="websiteURL"
      label="Website URL"
      placeholder="https://google.com"
      required
    />
    <Input
      bind:value={campaign.campaignId}
      id="campaignId"
      label="Campaign Id"
      placeholder="campaign Id..."
    />
    <Input
      bind:value={campaign.campaignSource}
      id="campaignSource"
      label="Campaign source"
      placeholder="campaign source..."
      required
    />
    <Input
      bind:value={campaign.campaignMedium}
      id="campaignMedium"
      label="Campaign medium"
      placeholder="campaign medium..."
      required
    />
    <Input
      bind:value={campaign.campaignName}
      id="campaignName"
      label="CampaignName"
      placeholder="campaign name..."
    />
    <Input
      bind:value={campaign.campaignTerm}
      id="campaignTerm"
      label="Campaign term"
      placeholder="campaign term..."
    />
    <Input
      bind:value={campaign.campaignContent}
      id="campaignContent"
      label="Campaign content"
      placeholder="campaign content..."
    />
    <ShortUrl bind:campaign />
  </form>
</main>
