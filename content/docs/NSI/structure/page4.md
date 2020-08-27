---
Title : arbres
---

# arbres

# Parcours

## Parcours postfixe

```
ParcoursPostfixe ( Arbre binaire T de racine r ) 
  ParcoursPostfixe(Arbre de racine fils_gauche[r]) 
  ParcoursPostfixe(Arbre de racine fils_droit[r])
  Afficher clef [ r ]
```

## Parcours préfixe

```
ParcoursPréfixe ( Arbre binaire T de racine r ) 
  Afficher clef [ r ]
  ParcoursPréfixe(Arbre de racine fils_gauche[r]) 
  ParcoursPréfixe(Arbre de racine fils_droit[r])
```

## Parcours infixe

```
ParcoursInfixe ( Arbre binaire T de racine r ) 
  ParcoursInfixe(Arbre de racine fils_gauche[r]) 
  Afficher clef [ r ]
  ParcoursInfixe(Arbre de racine fils_droit[r])
```

# Liens
