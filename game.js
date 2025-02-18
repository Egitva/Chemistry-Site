// Массив с фразами
const phrases = [
    "Ac", "Ag", "Al", "Am", "Ar", "As", "At", "Au", "B", "Ba", "Be", "Bh", "Bi", "Bk", "Br", "C", "Ca", "Cd", "Ce", "Cf", "Cl", "Cm", "Cn", "Co", "Cr", "Cs", "Cu", "Db", "Ds", "Dy", "Er", "Es", "Eu", "F", "Fe", "Fl", "Fm", "Fr", "Ga", "Gd", "Ge", "H", "He", "Hf", "Hg", "Ho", "Hs", "I", "In", "Ir", "K", "Kr", "La", "Li", "Lr", "Lu", "Lv", "Mc", "Md", "Mg", "Mn", "Mo", "Mt", "N", "Na", "Nb", "Nd", "Ne", "Nh", "Ni", "No", "Np", "O", "Og", "Os", "P", "Pa", "Pb", "Pd", "Pm", "Po", "Pr", "Pt", "Pu", "Ra", "Rb", "Re", "Rf", "Rg", "Rh", "Rn", "Ru", "S", "Sb", "Sc", "Se", "Sg", "Si", "Sm", "Sn", "Sr", "Ta", "Tb", "Tc", "Te", "Th", "Ti", "Tl", "Tm", "Ts", "U", "V", "W", "Xe", "Y", "Yb", "Zn", "Zr"
];

document.getElementById('ans').onclick = getRandomPhrase;

function getRandomPhrase() {
    var pass =''
    const randomIndex = Math.floor(Math.random() * phrases.length);
    pass = phrases[randomIndex];
    document.getElementById('out').innerHTML='<button type="button" class="butor" id="ans">'+pass+'</button>';
    const fandomIndex = Math.floor(Math.random() * phrases.length);
    pass = phrases[fandomIndex];
    document.getElementById('out2').innerHTML='<button type="button" class="butor" id="ans">'+pass+'</button>';
}