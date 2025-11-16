---
Title: solution tp chiffrement
---

*Solution pour le TP chiffrement*

```python
# dechiffrement
with open('texte_chiffre.txt','r') as f:
    texte = f.read()
    
fileout = open('texte_dechiffre.txt','w')
for c in texte:
    if c != "\\":
        rang = ord(c)
        fileout.write(chr(rang-1))
    else:
        fileout.write("\n")
fileout.close()

# en option
with open('texte_dechiffre.txt','r') as f3:
    texte = f3.read()
#texte
```