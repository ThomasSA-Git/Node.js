<script>
  import Child from "../Child/Child.svelte";
  import { fridgeMessages } from "../../store/fridgeMessage";
  export let name;
  export let myChildren;
  
  let cookieJar = ['🍪', '🍪', '🍪', '🍪', '🍪']

  function handleShowLove(childName) {
    console.log(`My name is ${name} and ${childName} loves me`);
  }

  function handleEatCookie(childName){
    if(cookieJar.length > 0){
    console.log(`${childName} eats a cookie`)
    cookieJar.pop();
    // When not doing the below the variable in the <p> isnt reactive and wont update.
    // Can use $: instead of let to handle reactive variables. Wont work here.
    cookieJar = cookieJar;
    console.log(cookieJar);
    }
    else{
        console.log("Cookie jar empty")
        fillCookieJar();
    }
  }

  // Below internal function, not handler
  function fillCookieJar(){
    cookieJar = ['🍪', '🍪', '🍪', '🍪', '🍪'];
    console.log(`Cookiejar was filled by ${name}`);
  }
  
  function eraseFridgeMessages() {
    fridgeMessages.set(["Fridge Message Below"]);
  }
</script>

<h1>{name}</h1>

<button on:click={eraseFridgeMessages}>Erase fridge messages</button>

<p>{cookieJar}</p>

{#each myChildren as child}
  <Child {child} onShowLove={handleShowLove} onEatCookie={handleEatCookie}/>
{/each}
