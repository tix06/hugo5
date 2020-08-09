---
Title : codage
bookShowToc: false
---

# codage des nombres et caractères

# Civilisations
Le document suivant donne un aperçu des périodes d'existence d'anciennes civilisations. On pourra se référer à la page suivante pour plus de détails : [http://www.essential-humanities.net/history-overview/world-history-timeline/](http://www.essential-humanities.net/history-overview/world-history-timeline/)

<div class="timeline">
<div class="grid">
  <div>-7000</div>
  <div>-6000</div>
  <div>-5000</div>
  <div>-4000</div>
  <div>-3000</div> 
  <div>-2000</div>
  <div>-1000</div>
  <div>0</div>
  <div>1000</div>
  <div>2000</div>
</div>
<div class="wrapper" id="wrapper"></div>
</div>

<script>
  let wrapper = document.getElementById('wrapper');
let data = [
  ['Mésopotamiens', -3500, -550],
  ['Egyptiens', -3000, -550],
  ['Civilisations en Inde', -2500, -500],
  ['Période égéenne', -2000, -1200],
  ['Grèce antique et empire romain', -1200, 500],
  ['Chine ancienne', -2000, 500]

];
data.sort((a, b) => {
  if (a[1] < b[1]) {
    return -1;
  } else if (a[1] > b[1]) {
    return 1;
  } else if (a[2] < b[2]) {
    return -1;
  } else if (a[2] > b[2]) {
    return 1;
  } else {
    return 0;
  }
});
for (let i = 0; i < data.length; i++) {
  let entry = data[i];
  let div = document.createElement('div');
  div.classList.add('entry');
  div.style.width = 2000*0.9/9000*(entry[2]-entry[1]) + 'px';
  //div.style.left = entry[1]*2 - 2000 + 'px';
  div.style.left = (entry[1] + 7000)*2000*0.9/9000 + 'px';
  div.style.top = 20 * i + 'px';
  div.innerHTML = entry[0];
  div.title = entry[0] + ' (' + entry[1] + '-' + entry[2] + ')';
  wrapper.appendChild(div);
}
</script>

<style>
  .grid {
  display:grid;
  grid-template-columns:repeat(10, 200px) 40px;
}
.grid > div {
  width:40px;
  box-sizing:border-box;
  /*border:1px solid green;*/*
  color:#303;
  background-color:#cfc;
  text-align:center;
}
.grid > div:last-child {
  width:40px;
}

.entry {
  position:absolute;
  box-sizing:border-box;
  height:20px;
  background-color:#201;
  border:1px solid black;
  color:white;
  white-space:nowrap;
  cursor:default;
}
.wrapper {
  position:relative;
  background-color:#804;
  height:400px;
  width:2040px;
}
</style>

# Liens
* les grandes civilisations anciennes et leur chronologie : [http://www.essential-humanities.net/history-overview/world-history-timeline/](http://www.essential-humanities.net/history-overview/world-history-timeline/)