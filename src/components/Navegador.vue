<template>
  <div id="elemento">
      <h1 id="text">Detran</h1>
      <h3>Placa: </h3>
      <input id="placeholder" type="text" placeholder="" v-model="placa">
      <button id="button" @click="validar">OK</button>
  </div>
</template>

<script>
export default {
    data: function(){
        return{
            placa: '',
            infracao: true
        }
    }, methods:{
        validar: function(){
            if (this.infracao == true) {
                this.$router.push({name: 'Infracoes', params: {placa: this.placa, infracao: this.infracao}})
            }
            else{
                alert("Não há infrações para este veículo")
            }
        }
    }
}
</script>

<style>
 #elemento{
        width: 260px;
        height: 130px;
        background-color: rgba(23, 59, 6, 0.815);
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        border: rgba(23, 59, 6, 0.815) solid 2px;
        border-radius: 10px;
        margin: auto;
 }
        #text{
            margin-right: 100px;
            margin-left: 80px;
        }
        #placeholder{
        width: 130px;
        height: 20px;
        background-color: rgba(23, 59, 6, 0.815);
        border-radius: 10px;
        border: rgba(23, 59, 6, 0.815) 1px solid;
        margin: 17px 5px 0 5px;
        text-align: center;
        color: white;
    }
    
    #button{
        width: 50px;
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