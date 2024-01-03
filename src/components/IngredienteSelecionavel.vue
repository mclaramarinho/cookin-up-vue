<script lang="ts">
import Tag from './Tag.vue';

export default{ 
    components: { Tag },
    props: {
        ingrediente: {type: String, required: true},
        isSelecionado: {type: Boolean}
    },
    data(){
        return {
            selecionado: this.isSelecionado
        }
    },
    methods: {
        handleClick():void{
            this.selecionado = !this.selecionado;
            if(this.selecionado){
                this.$emit("adicionarIngrediente", this.ingrediente)
            }else{
                this.$emit("removerIngrediente", this.ingrediente)
            }
        }
    },
    emits: ["adicionarIngrediente", "removerIngrediente"]
}
</script>

<template>
    <button class="ingrediente" @mouseup="handleClick" :aria-pressed="selecionado">
        <Tag :texto="ingrediente" :ativa="selecionado" />
    </button>
</template>

<style scoped>
.ingrediente{
    cursor: pointer;
}
</style>