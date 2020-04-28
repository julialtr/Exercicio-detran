<template>
  <div>
      <div id="elementos" v-for="(infracao, index) in infracoes" :key="index">
        <h4>Data: </h4>
      <input id="data" type="text" :value="infracao.dados_infracao.data">
      <h4>Hora: </h4>
      <input id="hora" type="text" :value="infracao.dados_infracao.hora">
      <h4>Local: </h4>
      <input id="local" type="text" :value="infracao.localidade">
      <h4>Tipo: </h4>
      <input id="tipo" type="text" :value="infracao.dados_infracao.tipo">
      <h4  v-if="infracao.dados_infracao.tipo == 'VELOCIDADE'"> Valor: </h4>
      <input id="valor" v-if="infracao.dados_infracao.tipo == 'VELOCIDADE'" type="number" :value="infracao.dados_infracao.valor">
      <h4 id="texto" v-if="infracao.dados_infracao.tipo == 'VELOCIDADE'">Velocidade Máxima: {{infracao.dados_infracao.vel_maxima}}km/h</h4>
      <button id="botao" @click="voltar">Nova Consulta</button>
      </div>
  </div>
</template>

<script>
export default {
    computed: {
       infracoes(){
           return this.$store.state.infracoesVeiculo
       }
    },
    methods:{
        voltar: function(){
            this.$router.push('/')
        }
    }, mounted(){
        if (this.$store.state.infracoesVeiculo.length == 0) {
            this.$router.push('/')
        }
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
    #data{
        width: 130px;
        height: 20px;
        background-color: rgba(23, 59, 6, 0.815);
        border-radius: 10px;
        border: rgba(23, 59, 6, 0.815) 1px solid;
        margin: 17px 5px 0 5px;
        text-align: center;
        color: white;
    }
    #hora{
        width: 70px;
        height: 20px;
        background-color: rgba(23, 59, 6, 0.815);
        border-radius: 10px;
        border: rgba(23, 59, 6, 0.815) 1px solid;
        margin: 17px 5px 0 5px;
        text-align: center;
        color: white;
    }
    #local{
        width: 250px;
        height: 20px;
        background-color: rgba(23, 59, 6, 0.815);
        border-radius: 10px;
        border: rgba(23, 59, 6, 0.815) 1px solid;
        margin: 17px 5px 0 5px;
        text-align: center;
        color: white;
    }
    #tipo{
        width: 130px;
        height: 20px;
        background-color: rgba(23, 59, 6, 0.815);
        border-radius: 10px;
        border: rgba(23, 59, 6, 0.815) 1px solid;
        margin: 17px 5px 0 5px;
        text-align: center;
        color: white;
    }
    #valor{
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