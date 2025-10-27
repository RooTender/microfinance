<script lang="ts">
	import Overview from "./dashboard/Overview.svelte";
    import Transactions from "./dashboard/Transactions.svelte";
</script>

<main>
    <Overview/>
    <Transactions type="incomes"/>
    <Transactions type="expenses"/>
    <Transactions type="both"/>
</main>
