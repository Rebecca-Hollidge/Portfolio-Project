<script>
    import { onMount } from 'svelte';
    import { Card } from '$lib';

    onMount(() => {
        console.log("Home Page Loaded");
    })


</script>

<svelte:head>
	<title>Home</title>
</svelte:head>
<dive>    
    <img src = "images/flower1.png"alt="flower1" > 
<img src = "images/cloud.png"alt="cloud" > 
<img src = "images/flower1.png"alt="flower1" > 
</dive>


<style>

    img {
    
        height: 30%;
        width: 30%;
       
        
    }
   
            </style>