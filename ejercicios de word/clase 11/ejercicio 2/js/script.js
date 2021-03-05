
cifras = [cifra1=(Math.floor(Math.random()*6)), cifra2=(Math.floor(Math.random()*6)), cifra3=(Math.floor(Math.random()*6)), cifra4=(Math.floor(Math.random()*6)), cifra5=(Math.floor(Math.random()*6)), cifra6=(Math.floor(Math.random()*6)), cifra7=(Math.floor(Math.random()*6)), cifra8=(Math.floor(Math.random()*6)), cifra9=(Math.floor(Math.random()*6)), cifra10=(Math.floor(Math.random()*6))]

    document.writeln('<div>' + cifras + '</div>')
            
    for(let cifra of cifras){
            console.log(cifra)
             if(cifra==3){
                document.writeln('<div>' + cifra + '</div>')
             }
                
     }