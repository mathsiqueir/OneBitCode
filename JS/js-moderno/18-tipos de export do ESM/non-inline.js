function group(){
    console.log('Export nomeado não-inline (agrupado)')
}

function exportDefault(){
    console.log('Export default não-inline')
}
//posso colocar o export antes de colocar as funções
export {group}

export default exportDefault