<script lang="ts">
  import Section from "@/components/Section.svelte";
  import { getLocale } from "@/utils";

  const { skills, locale } = getLocale();

  const title = locale === "es" ? "Habilidades" : "Skills";
</script>

<Section {title}>
  <ul>
    {#each skills as { name }}
      <li>
        <span>{name}</span>
      </li>
    {/each}
  </ul>
</Section>

<style>
  ul {
    display: inline-flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  li {
    border-radius: 6px;
    background: #444;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 500;
    padding: 0.2rem 0.5rem;
  }

  @media print {
    li {
      background: #fff;
      color: #444;
      border: 1px solid #444;
    }
  }
</style>
