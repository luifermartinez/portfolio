<script lang="ts">
  import { getLocale } from "@/utils";
  import Section from "@/components/Section.svelte";
  import Mail from "@/icons/Mail.svelte";
  import Phone from "@/icons/Phone.svelte";
  import Github from "@/icons/Github.svelte";
  import Linkedin from "@/icons/LinkedIn.svelte";
  import WorldMap from "@/icons/WorldMap.svelte";

  const { name, label, email, image, location, phone, profiles, url } =
    getLocale().basics;

  const { city, region } = location;

  const SOCIAL_ICONS: Record<string, any> = {
    GitHub: Github,
    LinkedIn: Linkedin,
  };
</script>

<Section>
  <div class="container">
    <div class="info">
      <h1>
        {name}
      </h1>
      <h2>
        {label}
      </h2>
      <span>
        <svelte:component this={WorldMap} />
        {city}, {region}
      </span>
      <footer class="print">
        <div class="print">
          {email} &bull; {phone} &bull; {url}
        </div>
      </footer>
      <footer class="no-print">
        {#if email}
          <a
            href={`mailto:${email}`}
            title={`Enviar un correo electróniuco a ${name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svelte:component this={Mail} />
          </a>
        {/if}
        {#if phone}
          <a
            href={`tel:${phone}`}
            title={`Llamar a ${name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svelte:component this={Phone} />
          </a>
        {/if}

        {#each profiles as profile}
          <a
            href={profile.url}
            title={`Visitar el perfil de ${name} en ${profile.network}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svelte:component this={SOCIAL_ICONS[profile.network]} />
          </a>
        {/each}
      </footer>
    </div>
    <figure>
      <img src={image} alt={name} />
    </figure>
  </div>
</Section>

<style>
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    color: #444;
    font-weight: 500;
    font-size: 1.1rem;
    text-wrap: balance;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: #666;
    font-size: 0.85rem;
    letter-spacing: -0.05rem;
  }

  img {
    aspect-ratio: 1 / 1;
    object-fit: cover;
    width: 128px;
    border-radius: 6px;
  }

  footer {
    font-size: 0.65rem;
    color: #555;
    display: flex;
    gap: 4px;
    margin-top: 8px;
  }

  footer a {
    color: #777;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #eee;
    padding: 4px;
    height: 32px;
    width: 32px;
    border-radius: 6px;
    transition: all 0.3s ease;
  }

  footer a:hover {
    background-color: #eee;
  }

  .print {
    display: none;
  }

  @media (width < 768px) {
    .container {
      flex-direction: column-reverse;
      gap: 1rem;
    }

    .info {
      align-items: center;
      text-align: center;
    }
  }

  @media (width < 480px) {
    .container {
      flex-direction: column-reverse;
      gap: 1rem;
    }
  }

  @media print {
    .container {
      flex-direction: row;
      gap: 1rem;
    }

    .info {
      align-items: flex-start;
      text-align: start;
    }

    .print {
      display: block;
    }

    .no-print {
      display: none;
    }
  }
</style>
