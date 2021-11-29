const axios = require('axios').default;


async function main(){
    
    await axios.post('http://localhost:3000/books', {
        ID: 3,
        name: 'My Boook',
        author: 'Me and only me'
    })
    
    await axios.post('http://localhost:3000/books', {
    ID: 4,
    name: 'As aventuras de Marcus',
    author: 'Braz. Marcus'
    });

    await axios.post('http://localhost:3000/books', {
    ID: 4,
    name: 'O céu é azul escuro',
    author: 'Braz. Marcus'
    });

}

main();

async function main2(){
    const aux = await axios.get('http://localhost:3000/books');
    console.log(aux.data);

    const aux1 = await axios.get('http://localhost:3000/books/1');
    console.log(aux1.data);
    const aux2 = await axios.get('http://localhost:3000/books/2');
    console.log(aux2.data);
    const aux3 = await axios.get('http://localhost:3000/books/4');
    console.log(aux3.data);
    const aux4 = await axios.get('http://localhost:3000/books/3');
    console.log(aux4.data);
    const aux5 = await axios.get('http://localhost:3000/log');
    console.log(aux5.data);
}
main2();
    
    

