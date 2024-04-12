<script lang="ts">
  import Section from "@/components/Section.svelte";
  import { getLocale } from "@/utils";

  const { education, locale } = getLocale();

  const formatDate = (date: string) => {
    return date ? new Date(date).getFullYear() : "Present";
  };

  const title = locale === "es" ? "Educación" : "Education";
</script>

<Section {title}>
  <ul>
    {#each education as { institution, area, description, startDate, endDate }}
      <li class="mb-4">
        <article>
          <header>
            <div>
              <h3>{institution}</h3>
              <h4>{area}</h4>
            </div>
            <time>{formatDate(startDate)} - {formatDate(endDate)}</time>
          </header>
          <footer>
            <p>{description}</p>
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
