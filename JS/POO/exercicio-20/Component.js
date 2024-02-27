export class Component{
//protegendo o elemento para ele não ser manipulado
  #element = null
  //para criar um elemento precisa de um tag o parent e options(atributos do html)
  constructor(tag,parent,options){
    Object.assign(this,{tag,parent,options})
    this.build()
    this.render()
  }

  //metodo element é privado então o render não o indetificaria
  //através desse método é possivel ve-lo, mas não alterá-lo
  getElement(){
    return this.#element
  }
  build(){
    this.#element = document.createElement(this.tag)
    Object.assign(this.#element,this.options)
    return this //vai retornar a própria instância então posso adicionar outros elementos depois de build
  }
  render(){
    if(this.parent instanceof Component){
        //acessando o parent, chamando getElement
        this.parent.getElement().append(this.#element)
    }else{
        document.querySelector(this.parent).append(this.#element)
    }
  }
}

