<script>
  let lang = localStorage.getItem("lang") ?? "es";

  const handleChange = (event) => {
    lang = event.target.value;
    localStorage.setItem("lang", event.target.value);
    location.reload();
  };
</script>

<section>
  <select bind:value={lang} on:change={handleChange}>
    <option value="es">🇪🇸 Español</option>
    <option value="en">🇬🇧 English</option>
  </select>
</section>

<style>
  section {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }

  select {
    font-family:
      Menlo,
      Monaco,
      Lucida Console,
      "Courier New",
      monospace;
    letter-spacing: -0.025rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    background: #fff;
    color: #333;
  }

  @media print {
    section {
      display: none;
    }
  }
</style>
