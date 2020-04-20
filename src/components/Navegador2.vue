<template>
  <div id="elementos">
      <h4>Data: </h4>
      <input class="data" type="date" placeholder="" v-model="data">
      <h4>Hora: </h4>
      <input class="hora" type="time" placeholder="" v-model="hora">
      <h4>Local: </h4>
      <input class="local" type="text" placeholder="" v-model="local">
      <h4>Tipo: </h4>
      <input class="tipo" type="text" placeholder="" v-model="tipo">
      <h4>Valor: </h4>
      <input class="valor" type="number" placeholder="" v-model="valor">
      <h4 id="texto" v-if="infracaoVelocidade">Velocidade Máxima: {{velocidade}}km/h</h4>
      <button id="botao" @click="voltar">Nova Consulta</button>
  </div>
</template>

<script>
export default {
 data: function(){
        return{
            data: '2015-05-15',
            hora: '08:00',
            local: 'Blumenau',
            tipo: 'Velocidade',
            valor: 120.50,
            velocidade: 100,
            infracaoVelocidade: true
        }
    },  
    computed: {
        placa: function(){
            return this.$route.params.placa
        }
    },
    methods:{
        voltar: function(){
            this.$router.push('/')
        },
        //verificacao: function(){
           // if(this.tipo == 'Velocidade'){
             //   infracaoVelocidade = true
           // }
       // }
    }
}
</script>

<style>
    #elementos{
        width: 310px;
        height: 250px;
        background-color: rgba(23, 59, 6, 0.815);
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        border: rgba(23, 59, 6, 0.815) solid 2px;
        border-radius: 10px;
        margin: auto;
    }
    .data{
        width: 130px;
        height: 20px;
        background-color: rgba(23, 59, 6, 0.815);
        border-radius: 10px;
        border: rgba(23, 59, 6, 0.815) 1px solid;
        margin: 17px 5px 0 5px;
        text-align: center;
        color: white;
    }
    .hora{
        width: 70px;
        height: 20px;
        background-color: rgba(23, 59, 6, 0.815);
        border-radius: 10px;
        border: rgba(23, 59, 6, 0.815) 1px solid;
        margin: 17px 5px 0 5px;
        text-align: center;
        color: white;
    }.local{
        width: 250px;
        height: 20px;
        background-color: rgba(23, 59, 6, 0.815);
        border-radius: 10px;
        border: rgba(23, 59, 6, 0.815) 1px solid;
        margin: 17px 5px 0 5px;
        text-align: center;
        color: white;
    }.tipo{
        width: 130px;
        height: 20px;
        background-color: rgba(23, 59, 6, 0.815);
        border-radius: 10px;
        border: rgba(23, 59, 6, 0.815) 1px solid;
        margin: 17px 5px 0 5px;
        text-align: center;
        color: white;
    }.valor{
        width: 70px;
        height: 20px;
        background-color: rgba(23, 59, 6, 0.815);
        border-radius: 10px;
        border: rgba(23, 59, 6, 0.815) 1px solid;
        margin: 17px 5px 0 5px;
        text-align: center;
        color: white;
    }
    #texto{
        margin: auto;
    }
    #botao{
        width: 130px;
        height: 40px;
        background-color: rgba(23, 59, 6, 0.815);
        border-radius: 10px;
        border: rgba(23, 59, 6, 0.815) 1px solid;
        margin: 20px 5px 0 5px;
        text-align: center;
        margin: auto;
        color: white;

    }
</style>