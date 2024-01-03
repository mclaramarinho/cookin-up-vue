<template>
    <article class="receita">
      <header class="receita__cabecalho">
        <img :src="requireImage()" class="receita__imagem" alt="">
        <h2 class="paragrafo-lg receita__nome">{{ receita.nome }}</h2>
      </header>
    </article>
    
  </template>

<script lang="ts">
import { type PropType } from 'vue';
import Tag from './Tag.vue';
import IngredienteSelecionavel from './IngredienteSelecionavel.vue';
import type IReceita from '@/interfaces/IReceita';
export default{
    props:{
        receita: {type: Object as PropType<IReceita>, required: true}
    },
    methods: {
      requireImage ():string {
        return new URL(`../assets/receitas/${this.receita.imagem}`, import.meta.url).href;
      }
    },
    components: { Tag, IngredienteSelecionavel },
    emits: ["adicionarIngrediente", "removerIngrediente"]
}

</script>

<style scoped>
.receita {
  width: 19.5rem;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--branco, #FFF);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.receita__cabecalho {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.receita__imagem {
  width: 20rem;
}

.receita__nome {
  text-align: center;
  color: var(--verde-medio, #3D6D4A);
  font-weight: 700;
}

.receita__ingredientes {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

</style>