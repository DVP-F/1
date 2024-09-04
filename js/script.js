//! idk if this works i cant check it rn
var mode = True
function modeTheme(){
    const root = document.querySelector(':root');
    if(mode==True){
        mode = False;
        root.style.setProperty('--main_bg-colour', '#ffffd0');
        root.style.setProperty('--main_text-colour', '#000');
        root.style.setProperty('--tshad_1', '2px 2px 1px #fff, 2px -2px 1px #fff, -2px -2px 1px #fff, -2px 2px 1px #fff');
        root.style.setProperty('--tshad_2', '2px 2px 1px #000, 2px -2px 1px #000, -2px -2px 1px #000, -2px 2px 1px #000');
        document.getElementById('modeTog').innerText = '☾';
    }
    else{
        mode = True;
        root.style.setProperty('--main_bg-colour', '#000015');
        root.style.setProperty('--main_text-colour', '#fff');
        root.style.setProperty('--tshad_1', '2px 2px 1px #000, 2px -2px 1px #000, -2px -2px 1px #000, -2px 2px 1px #000');
        root.style.setProperty('--tshad_2', '2px 2px 1px #fff, 2px -2px 1px #fff, -2px -2px 1px #fff, -2px 2px 1px #fff');
        document.getElementById('modeTog').innerText = '☉';
    }
}