import type ICategoria from "@/interfaces/ICategoria";

export async function obterCategorias(){
    const response = await fetch("https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json")
    const categorias: ICategoria[] = await response.json();
    return categorias;
}

export async function filtrarReceitas(ingredientes : String[]){
    const response = await fetch("https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json");
    const receitas = await response.json(); 
    
    let rec = [] as any;

    for(let i = 0; i < receitas.length; i++){
        const ingredientesDaReceita = receitas[i].ingredientes;
        let addControl = false;
        
        if(ingredientesDaReceita.length < ingredientes.length){
            for(let i = 0; i < ingredientesDaReceita.length; i++){
                if(ingredientes.includes(ingredientesDaReceita[i])){
                    addControl = true;
                }else{
                    addControl = false;
                    break;
                }
            }
            
        }else if(ingredientesDaReceita.length === ingredientes.length){
            for(let i = 0; i < ingredientes.length; i++){
                if(ingredientesDaReceita.includes(ingredientes[i])){
                    addControl = true;
                }else{
                    addControl = false;
                    break;
                }
            }
        }
        if(addControl){
            rec.push(receitas[i]);  
        }
    }
    console.log(rec);
    return rec ;
}