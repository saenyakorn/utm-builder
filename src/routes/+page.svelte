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
  <form class="flex flex-row w-full gap-4 justify-center" on:submit|preventDefault={null}>
    <div class="flex flex-col max-w-md gap-4">
      <Input
        bind:value={campaign.websiteURL}
        id="websiteURL"
        label="Website URL"
        placeholder="https://google.com"
        helperText="The full website URL (e.g. https://www.example.com)"
        required
      />
      <Input
        bind:value={campaign.campaignId}
        id="campaignId"
        label="Campaign Id"
        placeholder="campaign Id..."
        helperText="The campaign id (e.g. abc.123)"
      />
      <Input
        bind:value={campaign.campaignSource}
        id="campaignSource"
        label="Campaign source"
        placeholder="campaign source..."
        helperText="Identify the advertiser, site, publication (e.g. google, newsletter4)"
        required
      />
      <Input
        bind:value={campaign.campaignMedium}
        id="campaignMedium"
        label="Campaign medium"
        placeholder="campaign medium..."
        helperText="The advertising or marketing medium (e.g. cpc, banner, email)"
        required
      />
      <Input
        bind:value={campaign.campaignName}
        id="campaignName"
        label="Campaign name"
        placeholder="campaign name..."
        helperText="The individual campaign name, slogan, promo code, etc. for a product. (e.g. spring_sale)"
      />
      <Input
        bind:value={campaign.campaignTerm}
        id="campaignTerm"
        label="Campaign term"
        placeholder="campaign term..."
        helperText="Identify the paid keywords (e.g. running+shoes)"
      />
      <Input
        bind:value={campaign.campaignContent}
        id="campaignContent"
        label="Campaign content"
        placeholder="campaign content..."
        helperText="Use to differentiate ads or links that point to the same URL (e.g. logolink)"
      />
    </div>
    <div class="max-w-md w-full">
      <ShortUrl bind:campaign />
    </div>
  </form>
</main>
