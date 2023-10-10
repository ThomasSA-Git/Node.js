<script>
  import App from "../../App.svelte";

    export let child;
    // Function reference
    export let onShowLove;
    export let onEatCookie;

    import { fridgeMessages } from "../../store/fridgeMessage";

    let customFridgeMessage = "";

    function submitFridgeMessage(){
        console.log(customFridgeMessage);
        fridgeMessages.set([...$fridgeMessages, customFridgeMessage])
        customFridgeMessage = "";
       
    }

</script>

<button on:click={onShowLove(child.name)}>❤️</button>

<button on:click={onEatCookie(child.name)}>🍪</button>

<input bind:value={customFridgeMessage}>
<button on:click={submitFridgeMessage}>Submit Fridge Message</button>

<div 
class:is-girl={child.isGirl}
class:is-boy={!child.isGirl}
class={child.blackSheep || "not-a-black-sheep"}>
<h3>{child.name}</h3>
</div>

<style>
    .is-boy {
        border:1px solid pink;
    }
    .is-girl {
        border:1px solid blue;
    }
    .not-a-black-sheep {
        background-color: blueviolet;
    }
    .medium-black-sheep {
        background-color: brown;
    }
    .ultra-black-sheep {
        background-color: aquamarine;
    }
</style>