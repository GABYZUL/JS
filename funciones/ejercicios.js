function semaforo (){

    function red(){
        document.write('<img src="https://previews.123rf.com/images/tilo/tilo1110/tilo111000004/10775396-sem%C3%A1foro-en-rojo.jpg"></img>');
        setTimeout(green, 2000)
        
}
function yellow(){
    document.write('<img src="https://png.vector.me/files/images/1/6/167685/traffic_light_yellow_clip_art.jpg"></img>');
        setTimeout(red, 2000)
        
}
function green(){
    document.write('<img src="https://as2.ftcdn.net/v2/jpg/00/58/61/67/1000_F_58616709_D9GczJ3vLLX5m7Rjxnq8GmiFU2Zxb41f.jpg"></img>');
    setTimeout(yellow, 2000)
}
return red();
}
semaforo();