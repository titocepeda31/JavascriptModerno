const Delivery=(orden) =>{
const mensaje = 'Una orden de';
    const carta = {
        hamburguesas :orden,
        pizzas : orden,
        nachos: orden,
        hotdogs:orden
    }


    return (orden in carta)?carta[orden]: `lo que quiero no esta en la carta`;

//return (!!carta[orden])?carta[orden] : `lo que quiero no esta en la carta`;

}

console.log(Delivery('hamburguesas'));

