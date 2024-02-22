function decrease(velocity,printer){
    let deceleration = prompt('Quanto você deseja desacelerar por segundo')

    while(velocity > 0){
        printer(velocity)
        velocity -= deceleration
    }
}
let SpaceSpeed = prompt('Diga a velocidade inicial')

decrease(SpaceSpeed,function(velocity){
    console.log(`velocidade: ${velocity}`)
})