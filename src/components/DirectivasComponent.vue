<template>
    <div>
        <h1>Ejemplo directivas</h1>
        <h3>{{ $data }}</h3>
        <label>Introduzca serie</label>
        <input type="text" v-model="serieNueva"/>
        <button @click="nuevaSerie()">Nueva serie?</button>
        <ul v-if="series.Lenght > 0">
            <li v-for="serie in series" :key="serie">
                {{ serie }}
            </li>
        </ul>
        <hr/>
        <label>Introduzca un número</label>
        <input type="number" v-model="numero"/>
        <h3>POSITIVO</h3>
        <h3>NEGATIVO</h3>
        <h3>CERO</h3>
    </div>
</template>

<script>
export default 
{
    name:"DirectivasComponente",
    data()
    {
        return{
            series: ["Futurama", "The boys", "Stranger things"],
            serieNueva: "",
            numero: 0,
            nombre:"Alumno"
        }
    },
    methods:{
            nuevaSerie()
            {
                this.series.push(this.serieNueva)
            }
        }
}
</script>