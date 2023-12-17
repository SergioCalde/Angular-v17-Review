export interface Passanger {
    name: string;
    children?: string[];
}

const passenger1: Passanger = {
    name: 'Sergio',
}

const passenger2: Passanger = {
    name: 'Fernando',
    children: ['Natalia', 'Melissa']
}

const printChildren = ( {name, children}: Passanger ): number => {



    const howManyChildren = children?.length || 0;
    // const howManyChildren = children!.length;

    console.log(name, howManyChildren)

    return howManyChildren
}

printChildren(passenger2)
printChildren(passenger1)