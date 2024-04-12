<script lang="ts">
  import Section from "@/components/Section.svelte";
  import { getLocale } from "@/utils";

  const { languages, locale } = getLocale();

  const title = locale === "es" ? "Lenguajes" : "Languages";
</script>

<Section {title}>
  <ul>
    {#each languages as { language, fluency }}
      <li>
        <span>
          {language} ({fluency})
        </span>
      </li>
    {/each}
  </ul>
</Section>

<style>
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  li {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    font-weight: 500;
    color: #666;
    padding: 0.3rem 0.6rem;
    border-radius: 6px;
    border: 1px solid #ddd;
  }
</style>
