<template>

<header class="navbar">

<div class="logo">Meninas Oyá</div>

<nav class="menu">
<ul>
<li><a href="#inicio">Sobre</a></li>
<li><a href="#noticias">Notícias</a></li>
<li><a href="#coordenacao">Coordenação</a></li>
<li><router-link to="/admin">Administração</router-link></li>
</ul>
</nav>

</header>

<router-view />

</template>