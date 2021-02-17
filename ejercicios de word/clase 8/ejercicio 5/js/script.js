function pyramid(numPisos){
    for(let i=0; i<numPisos; i++){
        let piso='';
        for(let j=0; j<i + 1;j++){
            piso=piso + '#';
        }
        document.writeln(piso)
        document.writeln('</br>')
    }
   
}
pyramid(10);