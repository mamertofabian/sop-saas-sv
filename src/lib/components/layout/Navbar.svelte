<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<nav class="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-50">
	<div class="h-full px-4 flex items-center justify-between">
		<div class="flex items-center gap-4">
			<button
				class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
				on:click={() => dispatch('toggleSidebar')}
			>
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</button>
			<span class="text-xl font-semibold">SOP Manager</span>
		</div>

		<div class="flex items-center gap-4">
			<div class="relative">
				<input
					type="search"
					placeholder="Search..."
					class="w-64 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
			</div>

			<button
				class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
				on:click={() => dispatch('toggleTheme')}
			>
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
					/>
				</svg>
			</button>

			<button class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
					/>
				</svg>
			</button>
		</div>
	</div>
</nav>