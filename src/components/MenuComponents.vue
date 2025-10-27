<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/cine">Cine</router-link>
            </li>
            <li>
                <router-link to="/musica">Música</router-link>
            </li>
            <li>
                <router-link to="/ciclovida">Ciclo vida</router-link>
            </li>
            <li>
                <router-link to="/directivas">Directivas</router-link>
            </li>
            <li>
                <router-link to="/parimpar">Par/Impar</router-link>
            </li>
             <li>
                <router-link to="/propiedadconmutada">Propiedad conmutada</router-link>
            </li>
             <li>
                <router-link to="/metodosfilters">Metodos filters</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default 
{
    name:"MenuComponent"
}
</script>

<style>
    @import './../assets/css/estilos.css';
</style>