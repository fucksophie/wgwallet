<div class="dashboard-cards">
	<!-- Wallets Card -->
	<div class="card wallets-card">
		<h2 class="card-title">Wallets</h2>
		<div class="wallets-summary">
			<div class="wallet-balance">
				<span class="summary-label">Total Balance</span>
				<span class="summary-value">4000ⳤ</span>
			</div>
			<div class="wallet-names">
				<span class="summary-label">Names Owned</span>
				<span class="summary-value">7</span>
			</div>
		</div>
		<div class="wallets-list">
			<ul>
				<li>
					<div class="wallet-item">
						<span class="wallet-name">kromerluvr</span>
						<span class="wallet-amount">1000ⳤ</span>
					</div>
				</li>
				<li>
					<div class="wallet-item">
						<span class="wallet-name">ktestwalt</span>
						<span class="wallet-amount">500ⳤ</span>
					</div>
				</li>
				<li>
					<div class="wallet-item">
						<span class="wallet-name">key20w123f</span>
						<span class="wallet-amount">1500ⳤ</span>
					</div>
				</li>
				<li>
					<div class="wallet-item">
						<span class="wallet-name">kencarsonn</span>
						<span class="wallet-amount">25ⳤ</span>
					</div>
				</li>
			</ul>
			<div class="see-all-wallets">See all 2 more</div>
		</div>
	</div>

	<!-- Transactions Card -->
	<div class="card transactions-card">
		<h2 class="card-title">Transactions</h2>
		<ul class="transactions-list">
			<li>
				<div class="transaction-item">
					<span class="transaction-direction">To</span>
					<span class="transaction-address">0xA1B2...C3D4</span>
					<span class="transaction-amount">500ⳤ</span>
					<span class="transaction-date">2 days ago</span>
				</div>
			</li>
			<li>
				<div class="transaction-item">
					<span class="transaction-direction">From</span>
					<span class="transaction-address">0xE5F6...7890</span>
					<span class="transaction-amount">120ⳤ</span>
					<span class="transaction-date">4 days ago</span>
				</div>
			</li>
			<li>
				<div class="transaction-item">
					<span class="transaction-direction">To</span>
					<span class="transaction-address">0x1234...5678</span>
					<span class="transaction-amount">1000ⳤ</span>
					<span class="transaction-date">6 days ago</span>
				</div>
			</li>
			<li>
				<div class="transaction-item">
					<span class="transaction-direction">From</span>
					<span class="transaction-address">0x9ABC...DEF0</span>
					<span class="transaction-amount">50ⳤ</span>
					<span class="transaction-date">1 week ago</span>
				</div>
			</li>
			<li>
				<div class="transaction-item">
					<span class="transaction-direction">To</span>
					<span class="transaction-address">0xFEDC...BA98</span>
					<span class="transaction-amount">200ⳤ</span>
					<span class="transaction-date">2 weeks ago</span>
				</div>
			</li>
			<li>
				<div class="transaction-item">
					<span class="transaction-direction">From</span>
					<span class="transaction-address">0x1357...2468</span>
					<span class="transaction-amount">75ⳤ</span>
					<span class="transaction-date">3 weeks ago</span>
				</div>
			</li>
		</ul>
	</div>

	<!-- Server MOTD Card -->
	<div class="card motd-card">
		<h2 class="card-title">Server MOTD</h2>
		<div class="motd-content">
			<p class="motd-message">Some Motd Message</p>
			<span class="motd-date">4 months ago</span>
		</div>
	</div>
</div>

<style>
	.dashboard-cards {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		margin-bottom: 30px;
	}

	.card {
		background-color: #2d2d2d;
		border: 2px solid #555;
		border-radius: 12px;
		padding: 24px 28px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
		min-width: 280px;
		max-width: 350px;
		flex: 1 1 320px;
		transition: all 0.3s ease;
		display: flex;
		flex-direction: column;
		gap: 18px;
	}

	.card-title {
		font-size: 20px;
		font-weight: bold;
		color: #e0e0e0;
		margin-bottom: 10px;
		transition: color 0.3s ease;
	}

	.wallets-summary {
		display: flex;
		gap: 30px;
		margin-bottom: 8px;
	}

	.wallet-balance,
	.wallet-names {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.summary-label {
		font-size: 13px;
		color: #b0b0b0;
	}

	.summary-value {
		font-size: 18px;
		font-weight: bold;
		color: #e0e0e0;
	}

	.wallets-list ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.wallet-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 0;
		border-bottom: 1px solid #eee;
		font-size: 15px;
	}

	.wallet-name {
		font-weight: 500;
		color: #e0e0e0;
	}

	.wallet-amount {
		font-weight: bold;
		color: #4da6ff;
	}

	.wallets-list .see-all-wallets {
		margin-top: 8px;
		font-size: 13px;
		color: #4da6ff;
		cursor: pointer;
		text-align: right;
	}

	.transactions-list {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.transaction-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 8px 0;
		border-bottom: 1px solid #eee;
		font-size: 15px;
		gap: 10px;
	}

	.transaction-direction {
		font-weight: bold;
		color: #e0e0e0;
	}

	.transaction-address {
		font-family: monospace;
		color: #b0b0b0;
		font-size: 13px;
	}

	.transaction-amount {
		font-weight: bold;
		color: #4da6ff;
	}

	.transaction-date {
		font-size: 12px;
		color: #aaa;
		margin-left: 8px;
	}

	.motd-content {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.motd-message {
		font-size: 15px;
		color: #e0e0e0;
	}

	.motd-date {
		font-size: 12px;
		color: #aaa;
	}

	@media (max-width: 1100px) {
		.dashboard-cards {
			flex-direction: column;
			gap: 18px;
		}
		.card {
			max-width: 100%;
		}
	}
</style>
