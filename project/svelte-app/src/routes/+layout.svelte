<script>
    // Import components
    import { Header, Footer} from "$lib";
</script>


<Header />
<!-- Page Content -->
<main>
    <slot />
</main>

<Footer />

<style>
    main {
        padding: 2rem;
        color: white;
        text-align: center;
        background-color: #f1c1e9;
        min-height: calc(100vh - 308px);
    margin: 0;
    display: flex;
    flex-direction: column;
    }

</style>