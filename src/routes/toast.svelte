<script>
	import { onMount } from 'svelte';
	onMount(async () => {
		function toastNotification() {
			let toast = document.getElementById('toast-notification');

			toast.style.display = 'block';

			setTimeout(function () {
				toast.style.display = 'none';
			}, 3000);
		}

		document.getElementById('session-id').onclick = function () {
			let text = '059015903757ee7e4184860bd6b633c81b8348107c0fb87ccd04a060942fd66f73';
			copyTextToClipboard(text);
		};
		async function copyTextToClipboard(text) {
			try {
				await navigator.clipboard.writeText(text);
				// console.log('Session ID has been copied to clipboard.');
			} catch (err) {
				// console.log('Error in copying Session ID: ', err);
			}
			toastNotification();
		}
	});
</script>

<div id="toast-notification">
	<div class="toast-content">Session ID has been copied to clipboard.</div>
</div>

<style>
	#toast-notification {
		display: none;
		position: fixed;
		z-index: 9999;
		right: 1em;
		bottom: 1em;
		background-color: var(--card-background-color);
		border-radius: var(--border-radius);
		width: fit-content;
		padding: var(--padding);
	}

	.toast-content {
		font-weight: bold;
	}

	@media only screen and (max-width: 900px) {
		.toast-content {
			font-size: 1em;
		}
	}
</style>
