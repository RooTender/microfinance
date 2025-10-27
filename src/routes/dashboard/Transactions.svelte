<script lang="ts">
	export let type: 'incomes' | 'expenses' | 'both' = 'both';

	// przykładowe dane – docelowo będą z bazy lokalnej
	let transactions = [
		{ id: 1, category: 'Job', name: 'Wypłata', amount: 5200, type: 'incomes', date: '2025-10-02' },
		{ id: 2, category: 'unknown', name: 'Zakupy spożywcze', amount: -240, type: 'expenses', date: '2025-10-03' },
		{ id: 3, category: 'unknown', name: 'Sprzedaż kursu', amount: 180, type: 'incomes', date: '2025-10-05' },
		{ id: 4, category: 'home', name: 'Rachunek za prąd', amount: -350, type: 'expenses', date: '2025-10-10' },
		{ id: 5, category: 'home', name: 'Rachunek za prąd', amount: -450, type: 'expenses', date: '2025-11-09' },
	];

	// filtrowanie zależne od widoku
	$: filtered = type === 'both'
		? transactions
		: transactions.filter(t => t.type === type);

	// prosty kolor i ikona zależne od typu
	$: color = type === 'incomes' ? 'text-green-600'
		: type === 'expenses' ? 'text-red-600'
		: 'text-gray-600';

	$: title = type === 'incomes'
		? 'Przychody'
		: type === 'expenses'
		? 'Wydatki'
		: 'Wszystkie transakcje';
</script>

<div class="p-4 space-y-3">
	<header class="flex justify-between items-center border-b pb-2 mb-2">
		<h2 class={`text-2xl font-semibold ${color}`}>{title}</h2>
		<span class="text-sm text-gray-400">{filtered.length} pozycji</span>
	</header>

	<ul class="space-y-2">
		{#each filtered as t}
			<li
				class="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-gray-800 hover:bg-white/10 transition"
			>
				<div>
					<p class="font-medium">{t.name}</p>
					<small class="text-gray-400">{t.date}</small>
				</div>
				<div class={`text-right font-semibold ${t.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
					{t.amount > 0 ? '+' : ''}{t.amount} zł
				</div>
			</li>
		{/each}
	</ul>
</div>
