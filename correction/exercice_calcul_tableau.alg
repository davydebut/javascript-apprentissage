<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="tab2[1] PREND_LA_VALEUR 1"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2etat="inactif" F2defaut="" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurLigne="2" totalAffichages="1000" arrondiAuto="vrai" epaisseurPoint="2" nbDecimales="8" maxBoucle="500000" totalBoucles="5000000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="tab1 EST_DU_TYPE LISTE" code="1#LISTE#tab1"/>
        <item algoitem="tab2 EST_DU_TYPE LISTE" code="1#LISTE#tab2"/>
        <item algoitem="tab3 EST_DU_TYPE LISTE" code="1#LISTE#tab3"/>
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="tab1[0] PREND_LA_VALEUR 5" code="5#tab1#5#0"/>
        <item algoitem="tab1[1] PREND_LA_VALEUR 8" code="5#tab1#8#1"/>
        <item algoitem="tab1[2] PREND_LA_VALEUR 12" code="5#tab1#12#2"/>
        <item algoitem="tab1[3] PREND_LA_VALEUR 58" code="5#tab1#58#3"/>
        <item algoitem="tab2[0] PREND_LA_VALEUR 86" code="5#tab2#86#0"/>
        <item algoitem="tab2[1] PREND_LA_VALEUR 1" code="5#tab2#1#1"/>
        <item algoitem="tab2[2] PREND_LA_VALEUR 21" code="5#tab2#21#2"/>
        <item algoitem="tab2[3] PREND_LA_VALEUR 16" code="5#tab2#16#3"/>
        <item algoitem="POUR i ALLANT_DE 0 A 3" code="12#i#0#3">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="tab3[i] PREND_LA_VALEUR tab1[i]+tab2[i]" code="5#tab3#tab1[i]+tab2[i]#i"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="POUR i ALLANT_DE 0 A 3" code="12#i#0#3">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="AFFICHER tab3[i]" code="3#tab3#1#i"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
