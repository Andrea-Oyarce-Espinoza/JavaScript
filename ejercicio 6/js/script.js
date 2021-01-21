var n = Math.floor(Math.random() * 2)

if(n == 0) {
    document.writeln('<span class="walk-chillon">WALK</span>')
    document.writeln('<span class="stop-transparente">STOP</span>')
}else {
    document.writeln('<span class="walk-transparente">WALK</span>')
    document.writeln('<span class="stop-chillon">STOP</span>')
}