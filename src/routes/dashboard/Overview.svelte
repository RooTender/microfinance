<script>
  const data = [
    { label: 'Liquidity', value: '8,200 zł' },
    { label: 'Balance', value: '1,780 zł' },
    { label: 'Cashflow', value: '+420 zł' }
  ];
</script>

<main class="grid grid-cols-3 text-center py-8 select-none">
  {#each data as { label, value }}
    <div>
      <div class="text-sm opacity-60">{label}</div>
      <div class="text-2xl font-semibold mt-1">{value}</div>
    </div>
  {/each}
</main>
