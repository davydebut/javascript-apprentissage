<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER moyenne" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2lignes="" F2defaut="" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param maxBoucle="500000" totalBoucles="5000000" epaisseurPoint="2" epaisseurLigne="2" nbDecimales="8" totalAffichages="1000" arrondiAuto="vrai"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#nb_notes" algoitem="nb_notes EST_DU_TYPE NOMBRE"/>
        <item code="1#LISTE#notes" algoitem="notes EST_DU_TYPE LISTE"/>
        <item code="1#NOMBRE#moyenne" algoitem="moyenne EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#i" algoitem="i EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#note" algoitem="note EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#somme" algoitem="somme EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#notes_sup_moyenne" algoitem="notes_sup_moyenne EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#notes_sup_moyenne#0#pasliste" algoitem="notes_sup_moyenne PREND_LA_VALEUR 0"/>
        <item code="5#somme#0#pasliste" algoitem="somme PREND_LA_VALEUR 0"/>
        <item code="2#nb_notes#pasliste" algoitem="LIRE nb_notes"/>
        <item code="12#i#0#nb_notes-1" algoitem="POUR i ALLANT_DE 0 A nb_notes-1">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="2#note#pasliste" algoitem="LIRE note"/>
            <item code="5#notes#note#i" algoitem="notes[i] PREND_LA_VALEUR note"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="12#i#0#nb_notes-1" algoitem="POUR i ALLANT_DE 0 A nb_notes-1">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="5#somme#somme + notes[i]#pasliste" algoitem="somme PREND_LA_VALEUR somme + notes[i]"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="5#moyenne#somme/nb_notes#pasliste" algoitem="moyenne PREND_LA_VALEUR somme/nb_notes"/>
        <item code="12#i#0#nb_notes-1" algoitem="POUR i ALLANT_DE 0 A nb_notes-1">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="6#notes[i]>=moyenne" algoitem="SI (notes[i]>=moyenne) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="5#notes_sup_moyenne#notes_sup_moyenne +1#pasliste" algoitem="notes_sup_moyenne PREND_LA_VALEUR notes_sup_moyenne +1"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="3#moyenne#1#pasliste" algoitem="AFFICHER moyenne"/>
        <item code="3#notes_sup_moyenne#1#pasliste" algoitem="AFFICHER notes_sup_moyenne"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
