<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';

	let sidebarOpen = $state(true);
	let isDarkMode = $state(false);

	onMount(() => {
		const savedTheme = localStorage.getItem('theme');
		isDarkMode = savedTheme === 'dark';
		document.documentElement.classList.toggle('dark', isDarkMode);
	});

	function toggleTheme() {
		isDarkMode = !isDarkMode;
		document.documentElement.classList.toggle('dark', isDarkMode);
		localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
	}
</script>

<div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
	<Navbar on:toggleSidebar={() => (sidebarOpen = !sidebarOpen)} on:toggleTheme={toggleTheme} />
	<Sidebar isOpen={sidebarOpen} />

	<main
		class="pt-16 transition-all duration-200 ease-in-out {sidebarOpen ? 'pl-64' : 'pl-0'}"
	>
		<div class="container mx-auto p-6">
			<slot />
		</div>
	</main>
</div>