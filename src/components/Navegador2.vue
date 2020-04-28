<template>
  <div id="elementos">
      <h4>Data: </h4>
      <input class="data" type="date" placeholder="" v-model="data1">
      <h4>Hora: </h4>
      <input class="hora" type="time" placeholder="" v-model="hora1">
      <h4>Local: </h4>
      <input class="local" type="text" placeholder="" v-model="localidade1">
      <h4>Tipo: </h4>
      <input class="tipo" type="text" placeholder="" v-model="tipo1">
      <h4>Valor: </h4>
      <input class="valor" type="number" placeholder="" v-model="valor1">
      <h4 id="texto" v-if="infracaoVelocidade">Velocidade Máxima: {{velocidademax}}km/h</h4>
      <button id="botao" @click="voltar">Nova Consulta</button>
  </div>
</template>

<script>
export default {
 data: function(){
        return{
            // infracaoVelocidade: true
        }
    },  
    computed: {
        placa: function(){
            return this.$route.params.placa
        },
        carregarPlace(){
            
             return this.placa.filter(v => {
                if (v.placa == this.placa) {
                    this.data1 = v.data
                    this.hora1 = v.hora
                    this.localidade1 = v.localidade
                    this.tipo1 = v.tipo
                    this.valor1 = v.valor
                    this.velocidademax = v.velocidade
                }
             })
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