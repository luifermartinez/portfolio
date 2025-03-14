<script lang="ts">
  import Section from "@/components/Section.svelte";
  import { getLocale } from "@/utils";
  const { projects, locale } = getLocale();

  const title = locale === "es" ? "Proyectos" : "Projects";
</script>

<Section {title}>
  <ul>
    {#each projects as { name, description, url, highlights, isActive, favicon }}
      <li>
        <article>
          <header>
            <h3>
              {#if favicon}
                <img src={favicon} alt={name} width="16" height="16" />
              {/if}
              <a
                href={url}
                title={`Ver el proyecto ${name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
              </a>
              {#if isActive}
                <span>&bull;</span>
              {/if}
            </h3>
            <p>{description}</p>
          </header>
          <footer>
            {#each highlights as highlight}
              <span>{highlight}</span>
            {/each}
          </footer>
        </article>
      </li>
    {/each}
  </ul>
</Section>
<style>
  ul {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  article {
    border-radius: 8px;
    border: 1px solid #f2f2f2;
    gap: 16px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    height: 100%;
  }

  article header {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  article a {
    color: #111;
  }

  article a:hover {
    text-decoration: underline;
  }

  article h3 {
    display: flex;
    align-items: center;
    gap: 4px;
    flex-wrap: nowrap;
    white-space: nowrap;
  }

  article h3 span {
    color: rgb(0, 180, 45);
  }

  article p {
    font-size: 0.8rem;
    line-height: 1.1;
  }

  footer {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    font-size: 0.6rem;
  }

  footer span {
    border-radius: 6px;
    background-color: #eee;
    color: #000;
    font-size: 0.6rem;
    font-weight: 500;
    padding: 0.2rem 0.6rem;
    line-height: 1.2;
    letter-spacing: normal;
  }

  @media print {
    ul {
      display: block;
    }

    li {
      display: block;
      margin-bottom: 1rem;
    }

    article {
      border: none;
      padding: 0;
    }

    article header, article footer {
      display: block;
    }

    article h3 {
      display: block;
    }

    article h3 span {
      display: none;
    }
  }
</style>
