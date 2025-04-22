<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("about Page Loaded");
    });
</script>

<div1 class = "container1">
    <h1>  Hi, I am becca.   </h1>
   <p>Welcome to my website.</p>  
   <p> You can navigate through the differnt styles of art I do. </p>
   <p> I have been painting and creating from the time I was a child </p>
    <p>and have always found new ways to express myself</p>
    <p> I have chose a few peices to show some</p>
    <p> of my work.</p>
    <img src = "images/becca.png"alt="becca" > 
</div1>





<style>
    img {
       
        height: 20%;
        width: 20%;
        margin-left: 10px;
        
    }
   
    div1{
        grid-column-end: right;
        background-color: #757eda ;
        background-size: 30px;
        margin-left: 10 ;
    }
    .container1{
        grid-column-end: flex;
        background-color: #757eda ;
        background-position-x: right;
       
       
    }
            </style>