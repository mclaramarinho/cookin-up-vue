<template>
    <section class="selecionar-ingredientes">
        <h1 class="cabecalho titulo-ingredientes">Ingredientes</h1>
        <p class="paragrafo-lg instrucoes">Selecione abaixo os ingredientes que você quer usar nessa receita:</p>

        <ul class="categorias">
          <CardCategoria v-for="categoria in lista" v-bind:categoria="categoria"
           @adicionarIngrediente="$emit('adicionarIngrediente', $event)" 
           @removerIngrediente="$emit('removerIngrediente', $event)"/>
        </ul>
        <p class="paragrafos-dica">*Atenção: consideramos que você tem em casa sal, pimenta e água.</p>
        
    </section>
    <BotaoPrincipal texto="Buscar Receitas" :action="buscarReceitas" />
</template>

<script lang="ts">
import type ICategoria from '@/interfaces/ICategoria';
import {obterCategorias} from '../http/index';
import CardCategoria from './CardCategoria.vue';
import BotaoPrincipal from './BotaoPrincipal.vue';

export default{
    name:"SelecionarIngredientes",
    data() {
        return {
            lista: [] as ICategoria[],
        };
    },
    async created() {
        this.lista = await obterCategorias();
    },
    methods:{
      buscarReceitas():void{
        return this.$emit("buscarReceitas", this.lista);
      }
    },
    components: { CardCategoria, BotaoPrincipal },
    emits: ["adicionarIngrediente", "removerIngrediente", "buscarReceitas"]
}
</script>

<style scoped>
.selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo-ingredientes {
  color: var(--verde-medio, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}

.instrucoes {
  margin-bottom: 2rem;
}

.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.dica {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}

</style>