import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<span className={styles.description}>
				<p>
					Get started with clean energy <a href="/act_now">today</a>
					.&nbsp;
				</p>
			</span>

			<div className={`${styles.center} ${styles.hero}`}>
				Power the Future.
			</div>

			<div className={styles.grid}>
				<a
					href="/information"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2>
						Information <span>-&gt;</span>
					</h2>
					<p>
						Learn about who we are, our results, and why this stuff
						matters.
					</p>
				</a>

				<a
					href="/how_to_help"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2>
						Opportunities <span>-&gt;</span>
					</h2>
					<p>
						Find opportunities to make your home more green, with
						tax information.
					</p>
				</a>

				<a
					href="/daily_habits"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2>
						Daily Habits <span>-&gt;</span>
					</h2>
					<p>
						Explore daily habits you can implement to reduce your
						carbon footprint.
					</p>
				</a>

				<a
					href="/growth"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2>
						Donate <span>-&gt;</span>
					</h2>
					<p>
						Find 501(c) charities to elevate your impact on stopping
						climate change.
					</p>
				</a>
			</div>
		</main>
	);
}
