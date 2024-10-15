<script lang="ts">
  import Section from "@/components/Section.svelte";
  import { getLocale } from "@/utils";

  const { work, locale } = getLocale();

  const present = getLocale().locale === "es" ? "Presente" : "Present";

  const formatDate = (date: string | undefined | null) => {
    return date ? new Date(date).getFullYear() : present;
  };

  const title = locale === "es" ? "Experiencia" : "Experience";
</script>

<Section {title}>
  <ul>
    {#each work as { name, startDate, endDate, position, summary }}
      <li class="mb-4">
        <article>
          <header>
            <div>
              <h3>{name}</h3>
              <h4>{position}</h4>
            </div>
            <time>{formatDate(startDate)} - {formatDate(endDate)}</time>
          </header>
          <footer>
            <p>{summary}</p>
          </footer>
        </article>
      </li>
    {/each}
  </ul>
</Section>

<style>
  ul {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  article h3 {
    font-weight: 500;
    color: #111;
  }

  article h4 {
    font-weight: 400;
    color: #222;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 4px;
  }

  time {
    font-size: 0.85em;
    color: #666;
  }
</style>
