function verification(test) {
    if (test) {

    } else {
        let _check: never
        //O tipo 'string' não pode ser atribuído ao tipo 'never'
        //_check = ''
        return _check
    }
}