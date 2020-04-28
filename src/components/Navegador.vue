<template>
  <div id="elemento">
        <h1 id="text">Detran</h1>
        <h3 id="text2">Placa: </h3>
        <input id="placeholder" type="text" placeholder="" v-model="placa1" maxlength="8">
        <button id="button" @click="validar">OK</button>
  </div>
</template>

<script>
const axios = require("axios");
export default {
    data: function(){
        return{
            placa1: ''
        }
    }, methods:{
        validar: function(){
            this.$store.state.infracoesVeiculo = this.$store.state.veiculos.filter(p => p.placa == this.placa1)
            this.$router.push("Infracoes")
        }
    }, mounted(){          
            axios.get("http://localhost:8080/veiculos.json").then(v => this.$store.state.veiculos = v.data)
}
}
</script>

<style>
 #elemento{
        width: 260px;
        height: 90px;
        background-color: rgba(23, 59, 6, 0.815);
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        border: rgba(23, 59, 6, 0.815) solid 2px;
        border-radius: 10px;
        margin: auto;
        
 }
        #text{
            margin: auto 80px;
            position: absolute;
            
        }
        #placeholder{
        width: 130px;
        height: 20px;
        background-color: rgba(23, 59, 6, 0.815);
        border-radius: 10px;
        border: rgba(23, 59, 6, 0.815) 1px solid;
        margin: 50px 20px 0 70px;
        text-align: center;
        color: white;
        position: absolute;
    }
    
    #button{
        width: 50px;
        height: 40px;
        background-color: rgba(23, 59, 6, 0.815);
        border-radius: 10px;
        border: rgba(23, 59, 6, 0.815) 1px solid;
        margin: 20px 5px 0 5px;
        text-align: center;
        margin: 43px 0 0 210px;
        color: white;
        position: absolute;

    }
    #text2{
        margin: 50px 10px 0 0;
        position: absolute;
    }
    #text3{
        margin: 90px 20px 0 20px;
        position: absolute;
    }
</style>