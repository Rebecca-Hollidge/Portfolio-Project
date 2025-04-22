<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("about Page Loaded");
    });
</script>

<dive>
    <h1> Fonts </h1>
    <img src = "images/font.png"alt="font" > 
   
    </dive>

<div>
    <h1> Wireframes </h1>
    <img src = "images/toDo.png"alt="toDo" >
    <img src = "images/webwire.png"alt="webwire" >
</div>


<div>
    <h1> Concepts </h1>
    <img src = "images/poster.png"alt="poster" >
    <img src = "images/micosheet.png"alt="micosheet" >
    <img src = "images/micosheet2.png"alt="micosheet2" >
</div>

<style> 
img {

    height: 20%;
    width: 20%;
    padding : 10px;
    
}

   

</style>