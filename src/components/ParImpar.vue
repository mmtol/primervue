<template>
    <div>
        <h1>Par/Impar</h1>
        <label>Introduzca un numero</label>
        <input type="number" v-model="numero"/>
        <button @click="generarRandom">Generar número</button>
        <h2 v-if="numero % 2 == 0">PAR</h2>
        <h2 v-else>IMPAR</h2>
    </div>
</template>

<script>
export default 
{
    name:"ParImpar",
    data()
    {
        return{
            numero:0
        }
    },
    methods:
    {
        generarRandom()
        {
            this.numero = parseInt(Math.random() * 50) + 1;
        }
    }
}
</script>

<style>

</style>