<script>
    export let logoName;
    export let link = null;


    let logoImg = `/public/imgs/socials/${logoName.toLowerCase()}.png`;
    let altImg = `${logoName} logo`;
</script>


<a href={link}>
    <img src={logoImg} alt={altImg}/>
</a>


<style>
    img {
        height: calc(var(--extra-big-fs)*0.76);
        aspect-ratio: 1/1;

        transition-property: transform;
        transition-duration: 0.5s;
    }

    img:hover {
        transform: scale(222%);
    }
</style>
