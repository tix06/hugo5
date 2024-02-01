---
Title : protocoles de routage
---
Ce cours comporte plusieurs pages:

* [introduction aux graphes - SNT](/docs/SNT_2nde/pages/pages_algo/graphes/page1/)
* [cours sur les graphes. Term NSI](/docs/NSI/structure/page5/)
* [modele OSI et TCP/IP. 1ere Nsi](/docs/SNT_2nde/pages/page3/modele_OSI/)
* [graphes et internet](/docs/NSI/architecture/page3/)
* [Protocoles de routage](/docs/NSI/architecture/page31/)
* [algorithmes de parcours des graphes](/docs/SNT_2nde/pages/pages_algo/graphes/page2/)
* [algorithme de Dijkstra](/docs/SNT_2nde/pages/pages_algo/graphes/page4/)
* [Arbres](/docs/NSI/structure/page4/)


# protocoles de routage
> Activité: Pour chacune des videos, au cours de leur visionnage, prendre en notes pour repondre aux questions suivantes:

1. Pour le routage étudié, un routeur connait-il la carte globale du reseau (quel routeur est connecté à tel autre)?
2. Pour le routage étudié, s'agit-il des protocoles RIP ou OSPF?
3. communique t-il avec ses voisins directs, ou avec l'ensemble du reseau?
4. communique t-il aux autres routeurs de gros ou petits volumes d'informations pour établir sa table de routage?
5. un routeur, connait-il le chemin exact pour atteindre n'importe quel routeur du reseau?
6. connait-il le nombre de sauts pour atteindre n'importe quel routeur du reseau? 
7. selectionne t-il le routeur voisin qui va donner le plus court chemin en nombre de saut / en durée d'acheminement? (Question de l'exercice n°4 du [sujet de baccalaureat 2021, Polynesie](https://eduscol.education.fr/document/32770/download))
8. Comment met-il à jour sa table de routage lorsqu'il y a une modification du reseau?

## Le routage à vecteurs de distance
{{< img src="/images/video.png" link="https://www.youtube.com/watch?v=kzablGaqUXM"  caption="Video (Youtube): Mooc de l'INT (institut des Mines Télécom)" >}}


{{< img src="../images/routage_RIP.png"  caption="exemple de table de routage à vecteur de distance" >}}

## Les routage à états de liens
{{< img src="/images/video.png" link="https://www.youtube.com/watch?v=-utHPKREZV8"  caption="Video (Youtube): Mooc de l'INT (institut des Mines Télécom)" >}}




{{< img src="../images/routage_OSPF.png"  caption="exemple de table de routage à états de liens" >}}

> Exercice n°3 du [sujet de baccalaureat Metropole 2022](/docs/NSI/bac/page6/#bac-2022-metropole1-exercice-3): représentations binaires et protocoles de routage. (RIP, OSPF), minimiser le nombre de routeurs à traverser pour une requête.

## Fiche de synthèse
Lire et repondre aux questions du document sur les algorithmes de routage.

Document issu du site [https://pgdg.frama.io/tnsi/ ](https://pgdg.frama.io/tnsi/).

{{< img src="../images/routage_pdf.png" link="/pdf/NSI/routage.pdf"  caption="site pgdg.frama.io, auteurs Eric ROUGIER / Paul GODARD" >}} 

# Débit
Le debit est la vitesse à laquelle sont échangées les données, expimée en bits/s (ou kb/s, Mb/s...). Le débit se définit par le rapport du nombre de données circulant (en bits), par la durée (s).

$$D = \tfrac{N}{s}$$

Pour assurer une navigation correcte sur Internet ou regarder la télé ou des vidéos en streaming, le debit minimum doit être de 8Mb/s.

En 2022, l'objectif est de fournir en france, à tous les foyers, le THD (très haut débit), soit 30Mb/s. 

Avec la fibre, ce débit est encore dépassé (quelques centaines de Mb/s).

{{< img src="../images/debit.png"  caption="de nombreux sites proposent un test de debit pour votre connexion internet" >}}

**La notion de coût d'une liaison (OSPF)**

$$cout = \tfrac{10^8}{debit}$$

| Type de réseau | Coût par défaut |
|--- |--- |
| FDDI, FastEthernet | 1 |
| Ethernet 10 Mbps | 10 |
| E1 (2,048 Mbps) | 48 |
| T1 (1,544 Mbps) | 65 |
| 64 Kbps | 1562 |
| 56 Kbps | 1758 |
| 19.2 Kbps | 5208 |

voir complements sur [developpez.com](https://inetdoc.developpez.com/tutoriels/routage-dynamique-protocole-ospf/)

# Liens
## Videos présentées dans cette page

* Video (Youtube): [reseaux, adresses IP et masques de sous-reseaux](https://www.youtube.com/watch?v=RnpSaDSSjR4)
* Video (Youtube): [Mooc de l'INT (institut des Mines Télécom)](https://www.youtube.com/watch?v=kzablGaqUXM)
* Video (Youtube): [Mooc de l'INT (institut des Mines Télécom)](https://www.youtube.com/watch?v=-utHPKREZV8)
## Autres documents
* cours de term NSI très complet sur l'architecture machine et reseau. Auteurs Eric ROUGIER / Paul GODARD : [https://pgdg.frama.io/tnsi/](https://pgdg.frama.io/tnsi/)
* cours complet de niveau term NSI sur les reseaux autonomes: [infoforall](https://www.infoforall.fr/act/archi/procole-de-routage-dynamique-rip/)
* autres exercices sur les algo de routage [http://www.netlab.tkk.fi/opetus/s38121/s01/Exercises/solution3.pdf](http://www.netlab.tkk.fi/opetus/s38121/s01/Exercises/solution3.pdf) et [https://www.netlab.tkk.fi/opetus/s38122/s00/Exercises/Exercise-3.pdf](https://www.netlab.tkk.fi/opetus/s38122/s00/Exercises/Exercise-3.pdf)

