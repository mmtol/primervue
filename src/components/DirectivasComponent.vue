<template>
    <div>
        <h1>Ejemplo directivas</h1>
        <h3>{{ $data }}</h3>
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
            numero: 0,
            nombre:"Alumno"
        }
    }
}
</script>