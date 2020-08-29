var array1 = [1, 2, 3, 4, 5, 6, 7, 6];
var lenghtPre = array1.length;
var repite = array1.map(function(element, index, array1){
    var revisa = array1.filter(function(subelement, subindex){
        if(index != subindex){
            return array1[index] == subelement
        }
    })
    if(typeof revisa[0] != 'undefined'){
        array1.splice(index, 1)
    }
})
var t = document.getElementById("resultado");
if(lenghtPre > array1.length){
    var y = document.createTextNode("Tienes valores repetidos, debes corregirlos para continuar");
    console.log('Tienes valores repetidos, debes corregirlos para continuar')
}else{
    var y = document.createTextNode("todo viento en popa");
    console.log('todo viento en popa')
}
t.appendChild(y);