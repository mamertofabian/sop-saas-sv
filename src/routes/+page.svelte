<script lang="ts">
	import { onMount } from 'svelte';

	let loading = $state(true);

	onMount(() => {
		setTimeout(() => {
			loading = false;
		}, 1000);
	});
</script>

<div class="space-y-6">
	{#if loading}
		<div class="animate-pulse space-y-4">
			<div class="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				{#each Array(3) as _}
					<div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
						<div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
						<div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
					</div>
				{/each}
			</div>
		</div>
	{:else}
		<h1 class="text-2xl font-bold">Welcome to SOP Manager</h1>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			<div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
				<h2 class="text-lg font-semibold mb-2">Active SOPs</h2>
				<p class="text-gray-600 dark:text-gray-400">12 procedures in progress</p>
			</div>

			<div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
				<h2 class="text-lg font-semibold mb-2">Recent Activity</h2>
				<p class="text-gray-600 dark:text-gray-400">Last updated 2 hours ago</p>
			</div>

			<div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
				<h2 class="text-lg font-semibold mb-2">Team Progress</h2>
				<p class="text-gray-600 dark:text-gray-400">85% completion rate</p>
			</div>
		</div>

		<div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
			<h2 class="text-lg font-semibold mb-4">Recent Flowcharts</h2>
			<div class="space-y-4">
				{#each Array(3) as _, i}
					<div class="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
						<div>
							<h3 class="font-medium">Flowchart {i + 1}</h3>
							<p class="text-sm text-gray-600 dark:text-gray-400">Last accessed 2 days ago</p>
						</div>
						<button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
							Continue
						</button>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</div>