<script lang="ts">
import { filtrarReceitas } from '@/http';
import SelecionarIngredientes from './SelecionarIngredientes.vue';
import SuaLista from './SuaLista.vue';
import Tag from './Tag.vue';
import MostrarReceitas from './MostrarReceitas.vue';
import { KeepAlive } from 'vue';

type Pagina = "Selecionar" | "Mostrar";

export default{
    data(){
        return {
            selecionados: [] as string[],
            conteudo: "Selecionar" as Pagina,
            receitas: [] as Object[]
        }
    },
    methods: {
      setLista(nome_ingrediente : string, adicionarOuRemover : boolean):void{
        
        if(adicionarOuRemover){
          this.selecionados.push(nome_ingrediente);
        }else{
          this.selecionados = this.selecionados.filter((ingrediente) => ingrediente !== nome_ingrediente);
        }
      },
      navegar(pagina : Pagina) : void{
        this.conteudo = pagina;
      },
      buscarReceitas() : void{
        const res = filtrarReceitas(this.selecionados).then(res => this.receitas=res);
        
        this.navegar("Mostrar");
      }
    },
    components: { SelecionarIngredientes, Tag, SuaLista, MostrarReceitas, KeepAlive }
}

</script>

<template>
      <main class="conteudo-principal">
          <SuaLista :ingredientes="selecionados"/>
          <KeepAlive include="SelecionarIngredientes">
            <SelecionarIngredientes v-if="conteudo==='Selecionar'"
              @adicionarIngrediente="setLista($event, true)"
              @removerIngrediente="setLista($event, false)"
              @buscarReceitas="buscarReceitas()"/>

            <MostrarReceitas v-else :receitas="receitas" @editarLista="navegar($event)" />
          </KeepAlive>
      </main>
    
</template>


<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>