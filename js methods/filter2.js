Array.prototype.myFilter = function(func){
    let filtered = this.map( element => function filterOut(){
        if (!func(element)) {
            continue
        }
        element;
    } );
    return filtered
}

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
