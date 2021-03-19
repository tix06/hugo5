#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Dec 26 18:15:15 2019

@author: erictixidor

https://python.doctor/page-python-serveur-web-creer-rapidement

"""

# coding: utf-8
#! /usr/bin/python
import cgi
import cgitb
import html
cgitb.enable()

import sqlite3 as lite
#import sys

con = None

form = cgi.FieldStorage()
con = lite.connect('clients.db')

print("Content-type: text/html; charset=utf-8\n")

if (form.getvalue("name") == None) or (form.getvalue("name") == 'Votre nom') :
    print('entrez VRAIMENT votre nom')
	
else:
    nom = html.escape(form.getvalue("name"))
    mdp = html.escape(form.getvalue("pass"))
    print(nom," => ",mdp)
    
    with con:
        cur = con.cursor()
        cur.execute("CREATE TABLE IF NOT EXISTS clients_login(id INTEGER, name TEXT, pass TEXT)")
        cur.execute("INSERT INTO clients_login VALUES(1,?,?)",(nom,mdp))
        con.commit()

with con:

    cur = con.cursor()
    cur.execute("CREATE TABLE IF NOT EXISTS clients_login(id INTEGER, name TEXT, pass TEXT)")
    cur.execute("SELECT * FROM clients_login")

    rows = cur.fetchall()


html1 = """<!DOCTYPE html>
<head>
    <title>Mon programme</title>
</head>
<body>
    <form action="/store_db.py" method="post">
        <input type="text" name="name" value="Votre nom" />
        <input type="text" name="pass" value="mot de passe" />
        <input type="submit" name="send" value="AJOUTER">
    </form> 
</body>
</html>
"""

table_affiche = '<table border=1><tr>'
	
table_affiche += '<td>ID</td><td>nom</td><td>Pass</td>'
table_affiche+= '</tr>'
for row in rows:
    table_affiche += '<tr>'
    for i in row:
        table_affiche += '<td>'+str(i)+'</td>'
    table_affiche += '</tr>'
table_affiche += '</table>'

print(html1)
print()
print(table_affiche)