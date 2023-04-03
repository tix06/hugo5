---
Title: banc de poissons
---

# Projet banc de poissons

{{< img src= "../images/poissons.png" caption="banc de poissons" >}}

Le module suivant, `poisson.py` apporte la fonction `poisson` qui retourne les coordonnées des points qui dessinent un poisson.

> fichier `poisson.py`: {{< a link="/scripts/lib_projets/poisson.py" caption="cliquer pour telecharger" >}}

## Script minimal pour animer un poisson

```python
import numpy as np
import matplotlib.pyplot as plt
from random import randint
from poisson import poisson

plt.axis([0, 200, 0, 160]) 
C1 = (100,100)
angle_dep = 180
r = 30

C2 = (120,90)

for i in range(200):
    C1 = (C1[0]+randint(-8,8),C1[1]+randint(-8,8))
    angle_dep = angle_dep+randint(-15,15)
    x,y = poisson(C1,angle_dep,r)
    if i == 0:
        line, = plt.plot(x, y)
    else:  
        line.set_data(x, y)
    plt.pause(0.05) # pause avec duree en secondes
    
plt.show()
```