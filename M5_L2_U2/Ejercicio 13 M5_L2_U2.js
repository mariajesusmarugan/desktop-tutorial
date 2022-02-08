// Listado de Usuarios
const users = [
    {username: 'ppc90', age: 30, premium: false},
    {username: 'lu65', age: 24, premium: true},
    {username: 'maria3', age: 36, premium: false},
    {username: 'abc123', age: 30, premium: false},
    {username: 'sergio58', age: 30, premium: true},
];

// Mostramos los usuarios Premium
const usuarioPremium = users.filter(function(user) {
    if(user.premium) {
        console.log ("El usuario" , user.username , "es PREMIUM.")
    }
});

// Creamos un array con los usuarios que no son PREMIUM
const usuarioNoPremium = users.filter(function(user) {
    if(!user.premium) {
        return user
    }
});

console.log ("Usuarios No PREMIUM: " , usuarioNoPremium);