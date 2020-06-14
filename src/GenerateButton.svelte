<script>
   import generate from './generator';

    function handleClick() {
        generate()
    }
</script>

<style>
    .root {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button {
        margin: 1em;
        padding: 0.5em;
    }
</style>

<div class="root">
    <button on:click={handleClick}>Generate</button>
</div>
