const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials/')
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.render('index', {
        autor : 'Jessica Sánchez',
        semester : '4°',
        group : 'E',
        exercise : 'Pagina Web Dinámica',
        year : new Date().getFullYear(),
        title : 'Inicio'
    });
});

app.get('/kahlo', (req, res)=>{
    res.render('frida', {
        autor : 'Jessica Sánchez',
        semester : '4°',
        group : 'E',
        exercise : 'Pagina Web Dinámica',
        year : new Date().getFullYear(),
        title : 'Frida Kahlo'
    });
});

app.get('/klimt', (req, res)=>{
    res.render('gustav', {
        autor : 'Jessica Sánchez',
        semester : '4°',
        group : 'E',
        exercise : 'Pagina Web Dinámica',
        year : new Date().getFullYear(),
        title : 'Gustav Klimt' 
    });
});

app.get('/dali', (req, res)=>{
    res.render('salvador', {
        autor : 'Jessica Sánchez',
        semester : '4°',
        group : 'E',
        exercise : 'Pagina Web Dinámica',
        year : new Date().getFullYear(),
        title : 'Salvador Dalí'
    });
});

app.get('/van', (req, res)=>{
    res.render('vincent', {
        autor : 'Jessica Sánchez',
        semester : '4°',
        group : 'E',
        exercise : 'Pagina Web Dinámica',
        year : new Date().getFullYear(),
        title : 'Vincent van Gogh',
    });
});

app.get('/extra', (req, res)=>{
    res.render('contextra', {
        autor : 'Jessica Sánchez',
        semester : '4°',
        group : 'E',
        exercise : 'Pagina Web Dinámica',
        year : new Date().getFullYear(),
        title : 'Contenido Extra'
    });
});


app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000')
});




