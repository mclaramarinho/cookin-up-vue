<script lang="ts">
import type { PropType } from 'vue';
import Tag from './Tag.vue';

export default{
    props: {
        ingredientes: {type: Array<string>, required: true}
    },
    components: { Tag }
}
</script>

<template>
    <section>
        <span class="subtitulo-lg sua-lista-texto">
            Sua lista:
        </span>
        
        <ul v-if="ingredientes.length" class="ingredientes-sua-lista">
            <li v-for="ingrediente in ingredientes" v-bind:key="ingrediente" class="ingrediente">
                <Tag :texto="ingrediente" ativa />
            </li>
        </ul>
        <p v-else class="paragrafo lista-vazia">
            <img src="../assets/imagens-main/images/icones/lista-vazia.svg" alt="">
            Sua lista está vazia, selecione ingredientes para iniciar.
        </p>
        
    </section>
</template>

<style scoped>
.sua-lista-texto {
  color: var(--coral, #F0633C);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #F0633C);
  text-align: center;
}
</style>