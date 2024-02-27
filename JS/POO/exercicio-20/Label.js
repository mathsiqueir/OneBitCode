import { Component } from "./Component.js";

export class Label extends Component{
    //text dentro da label
    constructor(text, parent,options){
        //criou um objeto vazio e vai atribuir o texto e as options ao text
        super('label',parent,Object.assign({},options,{textContent: text}))
    }

}
