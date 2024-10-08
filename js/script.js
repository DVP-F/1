var mode = true
function modeTheme(){
    const root = document.querySelector(':root');
    if(mode==true){
        mode = false;
        root.style.setProperty('--main_bg-colour', '#ffdadf');
        root.style.setProperty('--main_text-colour', '#000');
        root.style.setProperty('--main_nav-text-colour', '#fff')
        root.style.setProperty('--tshad_1', '2px 2px 2px #fff, 2px -2px 2px #fff, -2px -2px 2px #fff, -2px 2px 2px #fff');
        root.style.setProperty('--tshad_2', '2px 2px 1px #000, 2px -2px 1px #000, -2px -2px 1px #000, -2px 2px 1px #000');
        document.getElementById('modeTog').innerText = '☾ ';
    }
    else{
        mode = true;
        root.style.setProperty('--main_bg-colour', '#000');
        root.style.setProperty('--main_text-colour', '#fff');
        root.style.setProperty('--main_nav-text-colour', '#000')
        root.style.setProperty('--tshad_1', '2px 2px 1px #000, 2px -2px 1px #000, -2px -2px 1px #000, -2px 2px 1px #000');
        root.style.setProperty('--tshad_2', '2px 2px 1px #fff, 2px -2px 1px #fff, -2px -2px 1px #fff, -2px 2px 1px #fff');
        document.getElementById('modeTog').innerText = '☉';
    }
}