<script>
    // allowing customisation of card title, description and image
    export let title = "Card Title";
    export let description = "This is a brief description of the card.";
    export let image = '';
</script>


<!-- Card Container -->
<div class="Card">
	
    <!-- Dynamic Placeholder Image -->
        <img src={image || '/PlaceholderIcon1.png'} alt={title} class="card-image"/>

	<!-- Card Content -->
	<div class="content">
		<h2>{title}</h2>
		<!-- Description is initially hidden and shows on hover -->
		<p class="description">{description}</p>
	</div>
</div>

<style>
    h2{
        color:  #ffffff;
    }
    /* Card container with smooth hover effects */
    .Card {
        background: rgb(185, 196, 228);
        border-radius: 10px; /* Rounded corners */
        border: 2px solid  #111111; /* Add border around card */
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
        overflow: hidden; /* Don't display any content that goes beyond card boundary */
        width: 280px;
        height: 420px;
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions */
        position: relative; 
        transform-origin: right center;
    }

    .description {
		visibility: hidden; /* Hide the description by default */
		transition: opacity 0.3s ease, visibility 0s 0.3s; /* Smooth transition */
		position: absolute; /* position within the card is absolute */
        text-align: left;
        
        /* positions the card in the bottom left corner of the card with some padding*/
		bottom: 10px;
		left: 10px;
		right: 10px;
        opacity: 0; /* Content Styling: Padding for better spacing */
	}

        /* Content Styling: Padding for better spacing */
    .content {
        position: absolute; 
	    top: 10px;
	    left: 10px;
	    width: 100%;
	    height: 100%;
	    color: white;
	    display: flex;
	    flex-direction: column;
	    align-items: flex-start; /* Align to the left */
        transition: opacity 0.3s ease-in-out;
    }

    .card-image {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Ensures image fills the card without stretching */
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0; /* Keeps it behind the overlay content */
    }

    /* Title Styling */
    .content h2 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        padding-right: 10px;
    }

    /* Description Styling */
    .content p {
        font-size: 0.8rem;
        color: rgb(236, 240, 253);
    }

    /* Pseudo-Element: Adds a thin underline before the card title
       Creates a subtle decorative effect to enhance UI */
    .content h2::after {
        content: "";
        display: block;
        width: 40%;
        height: 2px;
        background:  #ffffff;
        margin: 0 auto 10px auto;
        transition: width 0.3s ease-in-out;
    }

    /* Pseudo-Class: Hover Effect
    Adds a subtle lift when hovering over the card */
    

    

</style>