const dropdown_badge_cas_zverejeneni = document.getElementById("dropdown-badge-cas-zverejeneni")
const cas_nezalezi = document.getElementById("cas-nezalezi")
const cas_24_h = document.getElementById("cas-24-h")
const cas_3_dny = document.getElementById("cas-3-dny")
const cas_posledny_tyden = document.getElementById("cas-posledny-tyden")

cas_nezalezi.onclick = function() {dropdown_badge_cas_zverejeneni.style.display = "none"};
cas_24_h.onclick = function() {dropdown_badge_cas_zverejeneni.style.display = "inline"};
cas_3_dny.onclick = function() {dropdown_badge_cas_zverejeneni.style.display = "inline"};
cas_posledny_tyden.onclick = function() {dropdown_badge_cas_zverejeneni.style.display = "inline"};

const dropdown_badge_mzda = document.getElementById("dropdown-badge-mzda")
const plat_od = document.getElementById("plat-od")

plat_od.oninput = function(){
    if (plat_od.defaultValue === plat_od.value || plat_od.value === "") {
        dropdown_badge_mzda.style.display = "none";
    } else {
        dropdown_badge_mzda.style.display = "inline";
    }
}

const dropdown_badge_typ_uvazku = document.getElementById("dropdown-badge-typ-uvazku")
const plny_uvazek = document.getElementById("plny-uvazek")
const zkraceny_uvazek = document.getElementById("zkraceny-uvazek")
const pracovni_smlouva = document.getElementById("pracovni-smlouva")
const prace_zivnostensky_list = document.getElementById("prace-zivnostensky-list")
const prace_dohodou = document.getElementById("prace-dohodou")
const staze = document.getElementById("staze")

function checked_badge(checker, badge){
    if(checker.checked === true) {
        badge.style.display = "inline";
        badge.innerText ++
    }else if(checker.checked === false ){
        badge.innerText --
    }
    if(badge.innerText === "0"){
        badge.style.display = "none";
    }
}
plny_uvazek.onclick = function() {
    checked_badge(plny_uvazek, dropdown_badge_typ_uvazku)
};
zkraceny_uvazek.onclick = function() {
    checked_badge(zkraceny_uvazek, dropdown_badge_typ_uvazku)
};
pracovni_smlouva.onclick = function() {
    checked_badge(pracovni_smlouva, dropdown_badge_typ_uvazku)
};
prace_zivnostensky_list.onclick = function() {
    checked_badge(prace_zivnostensky_list, dropdown_badge_typ_uvazku)
};
prace_dohodou.onclick = function() {
    checked_badge(prace_dohodou, dropdown_badge_typ_uvazku)
};
staze.onclick = function() {
    checked_badge(staze, dropdown_badge_typ_uvazku)
};

const dropdown_badge_vzdelani = document.getElementById("dropdown-badge-vzdelani");
const vzdelani_nezalezi = document.getElementById("vzdelani-nezalezi");
const vzdelani_bez = document.getElementById("vzdelani-bez");
const vzdelani_zakladni = document.getElementById("vzdelani-zakladni");
const vzdelani_vyucen = document.getElementById("vzdelani-vyucen");
const vzdelani_maturita = document.getElementById("vzdelani-maturita");
const vzdelani_vysoka = document.getElementById("vzdelani-vysoka");
const vzdelani_nezadano = document.getElementById("vzdelani-nezadano");

vzdelani_nezalezi.onclick = function() {dropdown_badge_vzdelani.style.display = "none"};
vzdelani_bez.onclick = function() {dropdown_badge_vzdelani.style.display = "inline"};
vzdelani_zakladni.onclick = function() {dropdown_badge_vzdelani.style.display = "inline"};
vzdelani_vyucen.onclick = function() {dropdown_badge_vzdelani.style.display = "inline"};
vzdelani_maturita.onclick = function() {dropdown_badge_vzdelani.style.display = "inline"};
vzdelani_vysoka.onclick = function() {dropdown_badge_vzdelani.style.display = "inline"};
vzdelani_nezadano.onclick = function() {dropdown_badge_vzdelani.style.display = "inline"};

const dropdown_badge_smennost = document.getElementById("dropdown-badge-smennost");
const smennost_jednosmenny_provoz = document.getElementById("smennost-jednosmenny-provoz");
const smennost_dvousmenny_provoz = document.getElementById("smennost-dvousmenny-provoz");
const smennost_trismenny_provoz = document.getElementById("smennost-trismenny-provoz");
const smennost_ctyrsmenny_provoz = document.getElementById("smennost-ctyrsmenny-provoz");
const smennost_delene_smeny = document.getElementById("smennost-delene-smeny");
const smennost_nepretrzity_provoz = document.getElementById("smennost-nepretrzity-provoz");
const smennost_nocni_provoz = document.getElementById("smennost-nocni-provoz");
const smennost_pruzna_prac_doba = document.getElementById("smennost-pruzna-prac-doba");
const smennost_turnusove_sluzby = document.getElementById("smennost-turnusove-sluzby");
const smennost_neurceno = document.getElementById("smennost-neurceno");

smennost_jednosmenny_provoz.onclick = function() {
    checked_badge(smennost_jednosmenny_provoz, dropdown_badge_smennost)
};
smennost_dvousmenny_provoz.onclick = function () {
    checked_badge(smennost_dvousmenny_provoz, dropdown_badge_smennost)
};
smennost_trismenny_provoz.onclick = function () {
    checked_badge(smennost_trismenny_provoz, dropdown_badge_smennost)
};
smennost_ctyrsmenny_provoz.onclick = function () {
    checked_badge(smennost_ctyrsmenny_provoz, dropdown_badge_smennost)
};
smennost_delene_smeny.onclick = function () {
    checked_badge(smennost_delene_smeny, dropdown_badge_smennost)
};
smennost_nepretrzity_provoz.onclick = function () {
    checked_badge(smennost_nepretrzity_provoz, dropdown_badge_smennost)
};
smennost_nocni_provoz.onclick = function () {
    checked_badge(smennost_nocni_provoz, dropdown_badge_smennost)
};
smennost_pruzna_prac_doba.onclick = function () {
    checked_badge(smennost_pruzna_prac_doba, dropdown_badge_smennost)
};
smennost_turnusove_sluzby.onclick = function () {
    checked_badge(smennost_turnusove_sluzby, dropdown_badge_smennost)
};
smennost_neurceno.onclick = function () {
    checked_badge(smennost_neurceno, dropdown_badge_smennost)
};

const dropdown_badge_jazyky = document.getElementById("dropdown-badge-jazyky")
const cestina = document.getElementById("cestina")
const anglictina = document.getElementById("anglictina")
const nemcina = document.getElementById("nemcina")
const francouzstina = document.getElementById("francouzstina")
const rustina = document.getElementById("rustina")
const polstina = document.getElementById("polstina")
const italstina = document.getElementById("italstina")
const spanelstina = document.getElementById("spanelstina")

cestina.onclick = function () {
    checked_badge(cestina, dropdown_badge_jazyky)
};
anglictina.onclick = function () {
    checked_badge(anglictina, dropdown_badge_jazyky)
};
nemcina.onclick = function () {
    checked_badge(nemcina, dropdown_badge_jazyky)
};
francouzstina.onclick = function () {
    checked_badge(francouzstina, dropdown_badge_jazyky)
};
rustina.onclick = function () {
    checked_badge(rustina, dropdown_badge_jazyky)
};
polstina.onclick = function () {
    checked_badge(polstina, dropdown_badge_jazyky)
};
italstina.onclick = function () {
    checked_badge(italstina, dropdown_badge_jazyky)
};
spanelstina.onclick = function () {
    checked_badge(spanelstina, dropdown_badge_jazyky)
};

const dropdown_badge_home = document.getElementById("dropdown-badge-home")
const home_nezalezi = document.getElementById("home-nezalezi")
const home_moznost = document.getElementById("home-moznost")
const home_prevazne = document.getElementById("home-prevazne")
const home_flexibilni = document.getElementById("home-flexibilni")

home_nezalezi.onclick = function() {dropdown_badge_home.style.display = "none"};
home_moznost.onclick = function() {dropdown_badge_home.style.display = "inline"};
home_prevazne.onclick = function() {dropdown_badge_home.style.display = "inline"};
home_flexibilni.onclick = function() {dropdown_badge_home.style.display = "inline"};

const dropdown_badge_zadavatel = document.getElementById("dropdown-badge-zadavatel")
const zadavatel_nezalezi = document.getElementById("zadavatel-nezalezi")
const zadavatel_primy = document.getElementById("zadavatel-primy")
const zadavatel_agentura = document.getElementById("zadavatel-agentura")
const zadavatel_neziskovka = document.getElementById("zadavatel-neziskovka")

zadavatel_nezalezi.onclick = function() {dropdown_badge_zadavatel.style.display = "none"};
zadavatel_primy.onclick = function() {dropdown_badge_zadavatel.style.display = "inline"};
zadavatel_agentura.onclick = function() {dropdown_badge_zadavatel.style.display = "inline"};
zadavatel_neziskovka.onclick = function() {dropdown_badge_zadavatel.style.display = "inline"};

const dropdown_badge_vhodne = document.getElementById("dropdown-badge-vhodne")
const vhodne_absolventi_stredni = document.getElementById("vhodne-absolventi-stredni")
const vhodne_absolventi_vysoka = document.getElementById("vhodne-absolventi-vysoka")
const vhodne_mladistve = document.getElementById("vhodne-mladistve")
const vhodne_ozp = document.getElementById("vhodne-ozp")
const vhodne_bezbarierovy = document.getElementById("vhodne-bezbarierovy")
const vhodne_duchodci = document.getElementById("vhodne-duchodci")
const vhodne_na_rodicovske = document.getElementById("vhodne-na-rodicovske")

vhodne_absolventi_stredni.onclick = function () {
    checked_badge(vhodne_absolventi_stredni, dropdown_badge_vhodne)
};
vhodne_absolventi_vysoka.onclick = function () {
    checked_badge(vhodne_absolventi_vysoka, dropdown_badge_vhodne)
};
vhodne_mladistve.onclick = function () {
    checked_badge(vhodne_mladistve, dropdown_badge_vhodne)
};
vhodne_ozp.onclick = function () {
    checked_badge(vhodne_ozp, dropdown_badge_vhodne)
};
vhodne_bezbarierovy.onclick = function () {
    checked_badge(vhodne_bezbarierovy, dropdown_badge_vhodne)
};
vhodne_duchodci.onclick = function () {
    checked_badge(vhodne_duchodci, dropdown_badge_vhodne)
};
vhodne_na_rodicovske.onclick = function () {
    checked_badge(vhodne_na_rodicovske, dropdown_badge_vhodne)
};

const dropdown_badge_cizinci = document.getElementById("dropdown-badge-cizinci")
const cizinci_cizinci = document.getElementById("cizinci-cizinci")
const cizinci_zamestnanecka_karta = document.getElementById("cizinci-zamestnanecka-karta")
const cizinci_modra_karty = document.getElementById("cizinci-modra-karty")
const cizinci_azylanti = document.getElementById("cizinci-azylanti")

cizinci_cizinci.onclick = function () {
    checked_badge(cizinci_cizinci, dropdown_badge_cizinci)
};
cizinci_zamestnanecka_karta.onclick = function () {
    checked_badge(cizinci_zamestnanecka_karta, dropdown_badge_cizinci)
};
cizinci_modra_karty.onclick = function () {
    checked_badge(cizinci_modra_karty, dropdown_badge_cizinci)
};
cizinci_azylanti.onclick = function () {
    checked_badge(cizinci_azylanti, dropdown_badge_cizinci)
};
