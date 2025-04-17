<script>
    export let error;
    export let status;
    import { page } from '$app/state';
</script>

<div class="container" role="alert">
    <h1 class="error-code">{status ?? 404}</h1>

    {#if status === 404 || (!status && error == null)}
        <p class="message">
            Sorry, the page <code>{page.url.pathname}</code> doesn’t exist.
        </p>
    {:else if error}
        <p class="message">{error.message}</p>
    {:else}
        <p class="message">An unknown error occurred.</p>
    {/if}
   
    <a class="home-button" href="/">← Go back home</a>
</div>




  

<style>
    .container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 2rem;
        background-color: var(--background, #f9f9f9);
        color: var(--text-color, #333);
    }
   
    
    

    .error-code {
        font-size: 6rem;
        font-weight: 700;
        margin: 0;
        color: var(--primary-color, #8590af);
        animation: pop 0.5s ease-out;
    }

    .message {
        font-size: 1.25rem;
        margin: 1rem 0;
    }

    code {
        background-color: rgba(0, 0, 0, 0.05);
        padding: 0.25rem 0.5rem;
        border-radius: 6px;
        font-size: 1rem;
    }

    .home-button {
        margin-top: 1.5rem;
        padding: 0.75rem 1.5rem;
        background-color: var(--primary-color, #ffb5f9);
        color: white;
        text-decoration: none;
        border-radius: 8px;
        font-weight: 500;
        transition: background-color 0.2s ease-in-out;
    }

    .home-button:hover,
    .home-button:focus {
        background-color: var(--primary-dark, #ffbbf0);
    }
    @keyframes popIn {
        from { opacity: 0; transform: scale(0.85); }
        to { opacity: 1; transform: scale(1); }
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: var(--mobile-breakpoint)) {
        .error-code {
            font-size: var(--font-xxl);
        }

        .message {
            font-size: var(--font-lg);
        }

        .home-button {
            font-size: var(--font-base);
        }
    }
</style>
  