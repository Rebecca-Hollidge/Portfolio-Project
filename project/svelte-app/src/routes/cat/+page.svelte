
<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("about Page Loaded");
    });
</script>


<h1> The kitty cats</h1>

<div>
    <h1> mewmew </h1>
    <img src = "images/mew.jpg"alt="mew" >
    <img src = "images/mew2.jpg"alt="mew2" >
    <img src = "images/mew3.jpg"alt="mew3" >
    <img src = "images/mew4.jpg"alt="mew4" >
</div>
<div>
    <h1> yam cat </h1>
    <img src = "images/yam.jpg"alt="yam" >
    <img src = "images/yam2.jpg"alt="yam2" >
    <img src = "images/yam4.jpg"alt="yam4" >
    <img src = "images/yam3.jpg"alt="yam3" >
</div>
<style>

    img {
    
        height: 20%;
        width: 20%;
        padding : 10px;
    }
    
    
            </style>