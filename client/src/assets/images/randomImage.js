const images = {
    1 : require('./Random(1).jpeg'),
    2 : require('./Random(2).jpeg'),
    3 : require('./Random(3).jpeg'),
    4 : require('./Random(4).jpeg'),
    5 : require('./Random(5).jpeg'),
    6 : require('./Random(6).jpeg'),
    7 : require('./Random(7).jpeg'),
    8 : require('./Random(8).jpeg'),
    9 : require('./Random(9).jpeg'),
    10 : require('./Random(10).jpeg'),
    11: require('./Random(11).jpeg'),
   
}
export default function randomImages(){
    let min = 1;
    let max = 11;
    let random = Math.floor(Math.random()*(max - min + 1))  + min;
    return images[random];
}