<script lang="ts">
  import type { Campaign } from '../types'
  import { getShortLink } from '../utils/shortLink'
  import Button from './Button.svelte'
  import CopyToClipboard from './CopyToClipboard.svelte'
  import { AxiosError } from 'axios'

  interface $$Props {
    campaign: Campaign
  }

  export let campaign: Campaign
  let shortUrl = ''

  function validateInput(campaign: Campaign) {
    try {
      new URL(campaign.websiteURL)
      return campaign.campaignSource && campaign.campaignMedium
    } catch (error) {
      return false
    }
  }

  function generateUrl(campaign: Campaign) {
    // Check if the user input is valid
    if (!validateInput(campaign)) {
      return { url: null, urlParams: null }
    }

    const url = new URL(campaign.websiteURL)
    const urlParams = new URLSearchParams(url.search)

    urlParams.set('utm_source', campaign.campaignSource)
    urlParams.set('utm_medium', campaign.campaignMedium)
    if (campaign.campaignId) {
      urlParams.set('utm_id', campaign.campaignId)
    }
    if (campaign.campaignName) {
      urlParams.set('utm_campaign', campaign.campaignName)
    }
    if (campaign.campaignTerm) {
      urlParams.set('utm_term', campaign.campaignTerm)
    }
    if (campaign.campaignContent) {
      urlParams.set('utm_content', campaign.campaignContent)
    }

    return { url, urlParams }
  }

  function generateFullUrl(campaign: Campaign): string | null {
    const { url, urlParams } = generateUrl(campaign)
    if (!url) {
      return null
    }

    url.search = urlParams.toString()
    return url.toString()
  }

  async function generateShortUrl(): Promise<void> {
    try {
      const fullUrl = generateFullUrl(campaign)
      if (!fullUrl) {
        return
      }
      const shortLink = await getShortLink(fullUrl)
      shortUrl = shortLink
    } catch (err) {
      if (err instanceof AxiosError) {
        console.error(err.response?.data.error)
        alert(err.response?.data.error)
      }
    }
  }

  $: fullUrl = generateFullUrl(campaign)
</script>

<div class="flex flex-col gap-2 w-full">
  <div>
    <h1 class="font-bold text-xl">Generated Url</h1>
    {#if fullUrl}
      <CopyToClipboard text={fullUrl} />
    {:else}
      <p class="text-zinc-400">Fill the required fields to generate the URL</p>
    {/if}
  </div>

  <Button type="button" onClick={generateShortUrl} label="Generate Short Link" />

  <h1 class="font-bold text-xl">Short link</h1>
  {#if shortUrl}
    <CopyToClipboard text={shortUrl} />
  {:else}
    <p class="text-zinc-400">Fill the required fields to generate the URL</p>
  {/if}
</div>
