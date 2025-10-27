<template>
    <div>
        <h1>Metodos filters</h1>
        <h2>Números dobles</h2>
        <ul>
            <li v-for="num in numeros" :key="num">
                Num: {{num}}, Doble: {{ $filters.getNumDoble(num) }}
            </li>
        </ul>
        <hr/>
        <h2>Texto en mayusculas</h2>
        <ul>
            <li v-for="txt in textos" :key="txt">
                {{ $filters.mayuscula(txt) }}
            </li>
        </ul>
    </div>
</template>

<script>
export default 
{
    name:"MetodosFilters",
    data()
    {
        return{
            numeros:[10,20,30,40,50,60,70,80,90],
            textos:["hola", "que", "tal", "estas", "yo", "bien"]
        }
    }
}
</script>

<style>

</style>