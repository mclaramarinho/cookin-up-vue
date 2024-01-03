<template>
    <section class="center selecionar-receitas">
        <h1 class="cabecalho titulo-receitas">Receitas</h1>
        <p class="paragrafo verde margem-resultados">Resultados encontrados: {{ receitas.length }}</p>

        <ul v-if="receitas.length" class="receitas">
            <CardReceita v-for="receita in receitas" :receita="(receita as IReceita)" />
        </ul>
        
        
        <div v-else>
            <p class="paragrafo">Ops. Não encontramos resultados para sua combinação. Vamos tentar de novo?</p>
            <img src="../assets/imagens-main/images/sem-receitas.png" alt="Não há receitas disponíveis.">
        </div>
        
    </section>
    <BotaoPrincipal texto="Editar Lista" :action="editarLista" />
</template>

<script lang="ts">
import BotaoPrincipal from './BotaoPrincipal.vue';
import CardReceita from './CardReceita.vue';
import type IReceita from '@/interfaces/IReceita';

export default{ 
    props: {
        receitas: { type: Array, required: true }
    },
    components: { BotaoPrincipal, CardReceita },
    methods: {
        editarLista():void{
            return this.$emit("editarLista", "Selecionar");
        }
    },
    emits: ["editarLista"]
}
</script>

<style scoped>
.selecionar-receitas {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.receitas {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.center{
    text-align: center;
}
.titulo-receitas {
  color: var(--verde-medio, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}
.margem-resultados{
    margin-bottom: 1.5rem;
}
.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
</style>