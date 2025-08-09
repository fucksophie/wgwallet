<script>
	const { children } = $props();

	let searchQuery = $state('');

	const navSections = [
		{
			title: '',
			links: [{ id: 1, text: 'link 1', href: '#link1' }]
		},
		{
			title: 'section',
			links: [
				{ id: 2, text: 'link 2', href: '#link2' },
				{ id: 3, text: 'link 3', href: '#link3' }
			]
		},
		{
			title: 'section',
			links: [{ id: 4, text: 'link 4', href: '#link4' }]
		}
	];

	function handleSearch() {
		console.log('Searching for:', searchQuery);
	}
</script>

<div class="page">
	<!-- Header -->
	<header class="header">
		<div class="header-left">
			<div class="logo">ⳤ</div>
			<h1 class="title">kromer-web</h1>
			<button class="header-button">button</button>
			<button class="header-button">button</button>
		</div>

		<div class="topbar">
			<span class="topbar-label">topbar</span>
			<div class="search-container">
				<input
					type="text"
					placeholder="search"
					class="search-input"
					bind:value={searchQuery}
					onkeypress={(e) => e.key === 'Enter' && handleSearch()}
				/>
			</div>
		</div>
	</header>

	<div class="main-container">
		<aside class="sidebar">
			{#each navSections as section, index}
				{#if index != 0}
					<div class="section-divider"></div>
				{/if}
				{#if section.title}
					<h3 class="section-title">{section.title}</h3>
				{/if}
				{#each section.links as link}
					<a href={link.href} class="nav-link">
						{link.text}
					</a>
				{/each}
			{/each}
		</aside>

		<main class="content">
			{@render children?.()}
		</main>
	</div>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.page {
		min-height: 100vh;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		background-color: #1a1a1a;
		margin: 0;
		padding: 0;
		padding-top: 10px;
		transition: background-color 0.3s ease;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 12px 20px;
		background-color: #2d2d2d;
		border: 2px solid #555;
		border-radius: 8px;
		margin: 10px;
		margin-top: 0;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
		transition: all 0.3s ease;
	}

	.header-left {
		display: flex;
		align-items: center;
		gap: 15px;
	}

	.logo {
		padding: 8px 12px;
		background-color: #404040;
		border: 2px solid #666;
		color: #e0e0e0;
		border-radius: 6px;
		font-weight: bold;
		font-size: 14px;
		transition: all 0.3s ease;
	}
	.title {
		font-size: 18px;
		font-weight: bold;
		color: #e0e0e0;
		transition: color 0.3s ease;
	}

	.header-button {
		padding: 8px 16px;
		background-color: #404040;
		border: 2px solid #666;
		border-radius: 6px;
		cursor: pointer;
		font-size: 14px;
		transition: all 0.3s ease;
		color: #e0e0e0;
	}

	.header-button:hover {
		background-color: #4a4a4a;
	}

	.topbar {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.topbar-label {
		font-weight: bold;
		color: #e0e0e0;
		transition: color 0.3s ease;
	}

	.search-container {
		position: relative;
	}

	.search-input {
		padding: 8px 12px;
		border: 2px solid #666;
		border-radius: 6px;
		width: 150px;
		font-size: 14px;
		outline: none;
		background-color: #404040;
		color: #e0e0e0;
		transition: all 0.3s ease;
	}

	.search-input:focus {
		border-color: #4da6ff;
		box-shadow: 0 0 0 2px rgba(77, 166, 255, 0.2);
	}

	.search-input::placeholder {
		color: #999;
	}

	.main-container {
		display: flex;
		margin: 0 10px 10px 10px;
		gap: 10px;
		min-height: calc(100vh - 100px);
	}

	.sidebar {
		width: 250px;
		background-color: #2d2d2d;
		border: 2px solid #555;
		border-radius: 8px;
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		transition: all 0.3s ease;
	}

	.nav-link {
		display: block;
		padding: 12px 16px;
		background-color: #404040;
		border: 2px solid #666;
		border-radius: 20px;
		text-decoration: none;
		color: #e0e0e0;
		font-size: 14px;
		text-align: center;
		transition: all 0.3s ease;
	}

	.nav-link:hover {
		background-color: #4a4a4a;
		transform: translateY(-1px);
	}

	.section-divider {
		height: 2px;
		background-color: #666;
		margin: 10px 0;
		transition: background-color 0.3s ease;
	}

	.section-title {
		font-size: 16px;
		color: #e0e0e0;
		margin-bottom: 10px;
		font-weight: bold;
		transition: color 0.3s ease;
	}

	.content {
		flex: 1;
		background-color: #2d2d2d;
		border: 2px solid #555;
		border-radius: 8px;
		padding: 30px;
		line-height: 1.6;
		transition: all 0.3s ease;
	}

	.content :global {
		h2 {
			color: #e0e0e0;
			margin-bottom: 20px;
			font-size: 24px;
			transition: color 0.3s ease;
		}
		p {
			margin-bottom: 15px;
			color: #b0b0b0;
			transition: color 0.3s ease;
		}
		ul {
			margin: 15px 0;
			padding-left: 20px;
		}

		li {
			margin-bottom: 8px;
			color: #b0b0b0;
			transition: color 0.3s ease;
		}
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.header {
			flex-direction: column;
			gap: 15px;
			align-items: stretch;
		}

		.header-left {
			justify-content: center;
		}

		.topbar {
			justify-content: center;
		}

		.main-container {
			flex-direction: column;
		}

		.sidebar {
			width: 100%;
			order: 2;
		}

		.content {
			order: 1;
		}

		.search-input {
			width: 120px;
		}
	}

	@media (max-width: 480px) {
		.header {
			margin: 5px;
			padding: 10px;
		}

		.header-left {
			flex-wrap: wrap;
			gap: 10px;
		}

		.main-container {
			margin: 0 5px 5px 5px;
		}

		.sidebar {
			padding: 15px;
		}

		.content {
			padding: 20px;
		}
	}
</style>
