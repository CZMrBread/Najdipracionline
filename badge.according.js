const according_badge_cas_zverejeneni = document.getElementById("according-badge-cas-zverejeneni")
const according_cas_nezalezi = document.getElementById("according-cas-nezalezi")
const according_cas_24_h = document.getElementById("according-cas-24-h")
const according_cas_3_dny = document.getElementById("according-cas-3-dny")
const according_cas_posledny_tyden = document.getElementById("according-cas-posledny-tyden")

according_cas_nezalezi.onclick = function() {according_badge_cas_zverejeneni.style.display = "none"};
according_cas_24_h.onclick = function() {according_badge_cas_zverejeneni.style.display = "inline"};
according_cas_3_dny.onclick = function() {according_badge_cas_zverejeneni.style.display = "inline"};
according_cas_posledny_tyden.onclick = function() {according_badge_cas_zverejeneni.style.display = "inline"};

const according_badge_mzda = document.getElementById("according-badge-mzda")
const according_plat_od = document.getElementById("according-plat-od")

according_plat_od.oninput = function(){
    if (according_plat_od.defaultValue === according_plat_od.value || according_plat_od.value === "") {
        according_badge_mzda.style.display = "none";
    } else {
        according_badge_mzda.style.display = "inline";
    }
}

const according_badge_typ_uvazku = document.getElementById("according-badge-typ-uvazku")
const according_plny_uvazek = document.getElementById("according-plny-uvazek")
const according_zkraceny_uvazek = document.getElementById("according-zkraceny-uvazek")
const according_pracovni_smlouva = document.getElementById("according-pracovni-smlouva")
const according_prace_zivnostensky_list = document.getElementById("according-prace-zivnostensky-list")
const according_prace_dohodou = document.getElementById("according-prace-dohodou")
const according_staze = document.getElementById("according-staze")

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
according_plny_uvazek.onclick = function() {
    checked_badge(according_plny_uvazek, according_badge_typ_uvazku)
};
according_zkraceny_uvazek.onclick = function() {
    checked_badge(according_zkraceny_uvazek, according_badge_typ_uvazku)
};
according_pracovni_smlouva.onclick = function() {
    checked_badge(according_pracovni_smlouva, according_badge_typ_uvazku)
};
according_prace_zivnostensky_list.onclick = function() {
    checked_badge(according_prace_zivnostensky_list, according_badge_typ_uvazku)
};
according_prace_dohodou.onclick = function() {
    checked_badge(according_prace_dohodou, according_badge_typ_uvazku)
};
according_staze.onclick = function() {
    checked_badge(according_staze, according_badge_typ_uvazku)
};

const according_badge_vzdelani = document.getElementById("according-badge-vzdelani");
const according_vzdelani_nezalezi = document.getElementById("according-vzdelani-nezalezi");
const according_vzdelani_bez = document.getElementById("according-vzdelani-bez");
const according_vzdelani_zakladni = document.getElementById("according-vzdelani-zakladni");
const according_vzdelani_vyucen = document.getElementById("according-vzdelani-vyucen");
const according_vzdelani_maturita = document.getElementById("according-vzdelani-maturita");
const according_vzdelani_vysoka = document.getElementById("according-vzdelani-vysoka");
const according_vzdelani_nezadano = document.getElementById("according-vzdelani-nezadano");

according_vzdelani_nezalezi.onclick = function() {according_badge_vzdelani.style.display = "none"};
according_vzdelani_bez.onclick = function() {according_badge_vzdelani.style.display = "inline"};
according_vzdelani_zakladni.onclick = function() {according_badge_vzdelani.style.display = "inline"};
according_vzdelani_vyucen.onclick = function() {according_badge_vzdelani.style.display = "inline"};
according_vzdelani_maturita.onclick = function() {according_badge_vzdelani.style.display = "inline"};
according_vzdelani_vysoka.onclick = function() {according_badge_vzdelani.style.display = "inline"};
according_vzdelani_nezadano.onclick = function() {according_badge_vzdelani.style.display = "inline"};

const according_badge_smennost = document.getElementById("according-badge-smennost");
const according_smennost_jednosmenny_provoz = document.getElementById("according-smennost-jednosmenny-provoz");
const according_smennost_dvousmenny_provoz = document.getElementById("according-smennost-dvousmenny-provoz");
const according_smennost_trismenny_provoz = document.getElementById("according-smennost-trismenny-provoz");
const according_smennost_ctyrsmenny_provoz = document.getElementById("according-smennost-ctyrsmenny-provoz");
const according_smennost_delene_smeny = document.getElementById("according-smennost-delene-smeny");
const according_smennost_nepretrzity_provoz = document.getElementById("according-smennost-nepretrzity-provoz");
const according_smennost_nocni_provoz = document.getElementById("according-smennost-nocni-provoz");
const according_smennost_pruzna_prac_doba = document.getElementById("according-smennost-pruzna-prac-doba");
const according_smennost_turnusove_sluzby = document.getElementById("according-smennost-turnusove-sluzby");
const according_smennost_neurceno = document.getElementById("according-smennost-neurceno");

according_smennost_jednosmenny_provoz.onclick = function() {
    checked_badge(according_smennost_jednosmenny_provoz, according_badge_smennost)
};
according_smennost_dvousmenny_provoz.onclick = function () {
    checked_badge(according_smennost_dvousmenny_provoz, according_badge_smennost)
};
according_smennost_trismenny_provoz.onclick = function () {
    checked_badge(according_smennost_trismenny_provoz, according_badge_smennost)
};
according_smennost_ctyrsmenny_provoz.onclick = function () {
    checked_badge(according_smennost_ctyrsmenny_provoz, according_badge_smennost)
};
according_smennost_delene_smeny.onclick = function () {
    checked_badge(according_smennost_delene_smeny, according_badge_smennost)
};
according_smennost_nepretrzity_provoz.onclick = function () {
    checked_badge(according_smennost_nepretrzity_provoz, according_badge_smennost)
};
according_smennost_nocni_provoz.onclick = function () {
    checked_badge(according_smennost_nocni_provoz, according_badge_smennost)
};
according_smennost_pruzna_prac_doba.onclick = function () {
    checked_badge(according_smennost_pruzna_prac_doba, according_badge_smennost)
};
according_smennost_turnusove_sluzby.onclick = function () {
    checked_badge(according_smennost_turnusove_sluzby, according_badge_smennost)
};
according_smennost_neurceno.onclick = function () {
    checked_badge(according_smennost_neurceno, according_badge_smennost)
};

const according_badge_jazyky = document.getElementById("according-badge-jazyky")
const according_cestina = document.getElementById("according-cestina")
const according_anglictina = document.getElementById("according-anglictina")
const according_nemcina = document.getElementById("according-nemcina")
const according_francouzstina = document.getElementById("according-francouzstina")
const according_rustina = document.getElementById("according-rustina")
const according_polstina = document.getElementById("according-polstina")
const according_italstina = document.getElementById("according-italstina")
const according_spanelstina = document.getElementById("according-spanelstina")

according_cestina.onclick = function () {
    checked_badge(according_cestina, according_badge_jazyky)
};
according_anglictina.onclick = function () {
    checked_badge(according_anglictina, according_badge_jazyky)
};
according_nemcina.onclick = function () {
    checked_badge(according_nemcina, according_badge_jazyky)
};
according_francouzstina.onclick = function () {
    checked_badge(according_francouzstina, according_badge_jazyky)
};
according_rustina.onclick = function () {
    checked_badge(according_rustina, according_badge_jazyky)
};
according_polstina.onclick = function () {
    checked_badge(according_polstina, according_badge_jazyky)
};
according_italstina.onclick = function () {
    checked_badge(according_italstina, according_badge_jazyky)
};
according_spanelstina.onclick = function () {
    checked_badge(according_spanelstina, according_badge_jazyky)
};

const according_badge_home = document.getElementById("according-badge-home")
const according_home_nezalezi = document.getElementById("according-home-nezalezi")
const according_home_moznost = document.getElementById("according-home-moznost")
const according_home_prevazne = document.getElementById("according-home-prevazne")
const according_home_flexibilni = document.getElementById("according-home-flexibilni")

according_home_nezalezi.onclick = function() {according_badge_home.style.display = "none"};
according_home_moznost.onclick = function() {according_badge_home.style.display = "inline"};
according_home_prevazne.onclick = function() {according_badge_home.style.display = "inline"};
according_home_flexibilni.onclick = function() {according_badge_home.style.display = "inline"};

const according_badge_zadavatel = document.getElementById("according-badge-zadavatel")
const according_zadavatel_nezalezi = document.getElementById("according-zadavatel-nezalezi")
const according_zadavatel_primy = document.getElementById("according-zadavatel-primy")
const according_zadavatel_agentura = document.getElementById("according-zadavatel-agentura")
const according_zadavatel_neziskovka = document.getElementById("according-zadavatel-neziskovka")

according_zadavatel_nezalezi.onclick = function() {according_badge_zadavatel.style.display = "none"};
according_zadavatel_primy.onclick = function() {according_badge_zadavatel.style.display = "inline"};
according_zadavatel_agentura.onclick = function() {according_badge_zadavatel.style.display = "inline"};
according_zadavatel_neziskovka.onclick = function() {according_badge_zadavatel.style.display = "inline"};

const according_badge_vhodne = document.getElementById("according-badge-vhodne")
const according_vhodne_absolventi_stredni = document.getElementById("according-vhodne-absolventi-stredni")
const according_vhodne_absolventi_vysoka = document.getElementById("according-vhodne-absolventi-vysoka")
const according_vhodne_mladistve = document.getElementById("according-vhodne-mladistve")
const according_vhodne_ozp = document.getElementById("according-vhodne-ozp")
const according_vhodne_bezbarierovy = document.getElementById("according-vhodne-bezbarierovy")
const according_vhodne_duchodci = document.getElementById("according-vhodne-duchodci")
const according_vhodne_na_rodicovske = document.getElementById("according-vhodne-na-rodicovske")

according_vhodne_absolventi_stredni.onclick = function () {
    checked_badge(according_vhodne_absolventi_stredni, according_badge_vhodne)
};
according_vhodne_absolventi_vysoka.onclick = function () {
    checked_badge(according_vhodne_absolventi_vysoka, according_badge_vhodne)
};
according_vhodne_mladistve.onclick = function () {
    checked_badge(according_vhodne_mladistve, according_badge_vhodne)
};
according_vhodne_ozp.onclick = function () {
    checked_badge(according_vhodne_ozp, according_badge_vhodne)
};
according_vhodne_bezbarierovy.onclick = function () {
    checked_badge(according_vhodne_bezbarierovy, according_badge_vhodne)
};
according_vhodne_duchodci.onclick = function () {
    checked_badge(according_vhodne_duchodci, according_badge_vhodne)
};
according_vhodne_na_rodicovske.onclick = function () {
    checked_badge(according_vhodne_na_rodicovske, according_badge_vhodne)
};

const according_badge_cizinci = document.getElementById("according-badge-cizinci")
const according_cizinci_cizinci = document.getElementById("according-cizinci-cizinci")
const according_cizinci_zamestnanecka_karta = document.getElementById("according-cizinci-zamestnanecka-karta")
const according_cizinci_modra_karty = document.getElementById("according-cizinci-modra-karty")
const according_cizinci_azylanti = document.getElementById("according-cizinci-azylanti")

according_cizinci_cizinci.onclick = function () {
    checked_badge(according_cizinci_cizinci, according_badge_cizinci)
};
according_cizinci_zamestnanecka_karta.onclick = function () {
    checked_badge(according_cizinci_zamestnanecka_karta, according_badge_cizinci)
};
according_cizinci_modra_karty.onclick = function () {
    checked_badge(according_cizinci_modra_karty, according_badge_cizinci)
};
according_cizinci_azylanti.onclick = function () {
    checked_badge(according_cizinci_azylanti, according_badge_cizinci)
};
