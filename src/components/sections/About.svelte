<script>
  import Section from "@/components/Section.svelte";
  import { getLocale } from "@/utils";

  const { locale } = getLocale();
  const { summary } = getLocale().basics;

  const title = locale === "es" ? "Sobre mi" : "About me";
</script>

<Section {title}>
  <p>
    {summary}
  </p>
</Section>
