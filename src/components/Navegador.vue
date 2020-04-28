<template>
  <div id="elemento">
        <h1 id="text">Detran</h1>
        <h3 id="text2">Placa: </h3>
        <input id="placeholder" type="text" placeholder="" v-model="placa1">
        <button id="button" @click="validar">OK</button>
        <h5 id="text3" v-if="existe">Não há infrações para este veículo</h5>
  </div>
</template>

<script>
const axios = require("axios");
export default {
    data: function(){
        return{
            veiculos: [],
            placa1: '',
            existe: false
        }
    }, methods:{
        validar: function(){
            return this.veiculos.filter(p => {
                if (p.placa == this.placa1) {
                    this.$router.push({name: 'Infracoes', params: {placa1: this.placa}})
                }
                else{
                    this.existe = true
                }
            })
        
        }
    }, mounted(){          
            axios.get("http://localhost:8080/veiculos.json").then(v => this.veiculos = v.data)
}
}
</script>

<style>
 #elemento{
        width: 260px;
        height: 120px;
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