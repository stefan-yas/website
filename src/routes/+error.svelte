<body>
<main>
	<h1>4<span id="spin">0</span>&nbsp;&nbsp;4</h1>
	<h3>There's nothing here...</h3>
	<button><a href="/">Let's get you home</a></button>
</main>
</body>

<style>
	#spin {
		position: absolute;
		animation: 3s linear 1s infinite alternate spin;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	button {
		white-space: nowrap;
	}
</style>
