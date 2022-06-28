/*
Uma cataoula lança em 8 radadas em 7 minutos, qual o número de pedras lanças (x)
*/

var rodadas = 8;
var duracao = 7;
var x ;

x = rodadas * duracao;
x = x * 300;
x = x / 90;

console.log(`A catapulta lançou ${parseInt(x)} pedras em ${rodadas} rodadas de ${duracao} minutos `);
