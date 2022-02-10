<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="FIN_SI"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2etat="inactif" F2defaut="" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurLigne="2" totalAffichages="1000" arrondiAuto="vrai" epaisseurPoint="2" nbDecimales="8" maxBoucle="500000" totalBoucles="5000000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="tableau EST_DU_TYPE LISTE" code="1#LISTE#tableau"/>
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i"/>
        <item algoitem="somme EST_DU_TYPE NOMBRE" code="1#NOMBRE#somme"/>
        <item algoitem="nb_user EST_DU_TYPE NOMBRE" code="1#NOMBRE#nb_user"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="somme PREND_LA_VALEUR 0" code="5#somme#0#pasliste"/>
        <item algoitem="tableau[0] PREND_LA_VALEUR 5" code="5#tableau#5#0"/>
        <item algoitem="tableau[1] PREND_LA_VALEUR 3" code="5#tableau#3#1"/>
        <item algoitem="tableau[2] PREND_LA_VALEUR 2" code="5#tableau#2#2"/>
        <item algoitem="tableau[3] PREND_LA_VALEUR 10" code="5#tableau#10#3"/>
        <item algoitem="POUR i ALLANT_DE 0 A 3" code="12#i#0#3">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="somme PREND_LA_VALEUR somme+tableau[i]" code="5#somme#somme+tableau[i]#pasliste"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="AFFICHER somme" code="3#somme#1#pasliste"/>
        <item algoitem="LIRE nb_user" code="2#nb_user#pasliste"/>
        <item algoitem="AFFICHER nb_user" code="3#nb_user#0#pasliste"/>
        <item algoitem="SI (nb_user&lt;somme) ALORS" code="6#nb_user&lt;somme">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHER &quot;le nombre est inférieur&quot;" code="4#le nombre est inférieur#0"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
        </item>
        <item algoitem="SI (nb_user>somme) ALORS" code="6#nb_user>somme">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHER &quot;le nombre est supérieur&quot;" code="4#le nombre est supérieur#0"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
        </item>
        <item algoitem="SI (somme==nb_user) ALORS" code="6#somme==nb_user">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHER &quot;Trouvé !&quot;" code="4#Trouvé !#0"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
