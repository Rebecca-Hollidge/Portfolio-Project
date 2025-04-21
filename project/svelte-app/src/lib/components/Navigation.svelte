<script>
    let isOpen = false; // Menu state (open/closed)
</script>

<!-- Navigation Container -->
<nav class = "nav">
    <!--Burger Menu if using a small screen-->
    <button class="burger" on:click={ () => isOpen = !isOpen} aria-label="Toggle Navigation">
        ☰
    </button>
    <ul class:open={isOpen}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/digital">Digital</a></li>
        <li><a href="/trad">Traditional</a></li>
        <li><a href="/icons">Icons</a></li>
        <li><a href="/college">College</a></li>


    </ul>
</nav>
<style>
    @keyframes burgerOpen { /* make the burger menu fade in when opening */
        from {opacity: 0%;}
        to {opacity: 100%;}
    }
    nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        z-index: 3;
    }
    
    nav ul li {
        margin: 0 15px;
        font-size: 2rem;
    }
    
    nav ul li a {
        text-decoration: none;
        color: #a291ee;
        font-weight: bold;
        transition: 0.25s;
    }

    nav ul li a:hover {
        color: #f382f7; 
    }

    /* 🍔 Burger Menu (Hidden on Large Screens) */
    .burger {
        display: none;
        font-size: 2rem;
        background: none;
        border: none;
        cursor: pointer;
        color: white;
        position: absolute;
        top: 1rem;
        left: 1rem;
    }

    /* Mobile Navigation: Show Burger Menu */
    @media (max-width: 768px) {
        .burger {
            display: block; /* Show burger icon */
            left: 90%;
            transition: 0.25s;
            z-index: 2;
        }

        .burger:hover {
            transform: rotate(180deg);
        }

        .nav ul {
            display: none; /* Hide menu by default */
            flex-direction: column;
            position: flex;
            top: 90px;
            left: 0;
            width: 100%;
            background: #edabf0;
            text-align: left;
            padding: 0.5rem 0;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            animation-name: burgerOpen;
            animation-duration: 0.25s;
        }

        .nav ul.open {
            display: flex; /* Show menu when isOpen is true */
        }

        .nav ul li {
            padding: 10px 20px;
        }
    }
</style>