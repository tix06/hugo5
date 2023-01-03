---
Title : table de routage
bookShowToc: false
---
# Simulation d'un reseau avec Filius (version term NSI)

**1.** Avec le logiciel Filius, construire les réseaux ci-dessous :


{{< img src="../images/filius_routage.png"   caption="système 2" >}}

**2.** Vous devrez renseigner les adresses IP des machines, ainsi que les masques de sous-reseau. 

* Tester avec un ping si un ordinateur du réseau R1 peut communiquer avec un autre ordinateur du réseau R1. Conclure.
* Tester avec un ping si un ordinateur du réseau R1 peut communiquer avec un autre ordinateur du réseau R2. Conclure.

*Remarque : Toutes les machines appartenant au même réseau devront posséder la même adresse réseau sinon elles ne pourront pas communiquer ensemble, même si elles sont bien physiquement reliées.*

**3.** *Ne pas utiliser le routage automatique*. Compléter les adresses IP des passerelles. Tester à nouveau avec un ping si un ordinateur du réseau R1 peut communiquer avec un autre ordinateur du réseau R2. Puis avec  avec un ordinateur du réseau R3. Conclure.

**4.** Mettre en place le réseau R4. (Adresse IP et passerelle). Tester avec un ping si un ordinateur du réseau R1 peut communiquer avec un ordinateur du réseau R3.

**5.** Comment modifier la table de routage du routeur A ?

**6.** Comment modifier est la table de routage du routeur G ?

# Aide pour renseigner la table de routage
On cherche à renseigner pour le routeur A la route à prendre pour acheminer un paquet vers le reseau 192.168.4.0
{{< img src="../images/filius_R1.png"   caption="exemple de systeme à 2 routeurs" >}}

Dans la table de routage du routeur A, il faudra ajouter une nouvelle entrée, et renseigner la passerelle pour rejoindre ce reseau éloigné:

{{< img src="../images/filius_R2.png"   caption="exemple de nouvelle entrée dans la table de routage du routeur A" >}}

Alors, à condition de renseigner également le routeur B, avec la passerelle vers le reseau 192.168.0.0, les ordinateurs des 2 reseaux devraient communiquer ensemble.

{{< img src="../images/filius_R3.png"   caption="exemple de nouvelle entrée dans la table de routage du routeur B" >}}

# Liens
* Le TP de 1ere NSI se trouve à l'adresse [suivante](/docs/SNT_2nde/pages/page3/TP_reseau/)
* Ce TP est inspiré de la fiche d'exercices [http://bfourlegnie.com/Tnsi_2020/cours/Chap4_routage/TaleNSI_routage.pdf](http://bfourlegnie.com/Tnsi_2020/cours/Chap4_routage/TaleNSI_routage.pdf)