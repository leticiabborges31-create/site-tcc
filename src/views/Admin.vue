<template>

<div class="auth-container">

<div class="tabs">
<span :class="{active: aba==='cadastro'}" @click="aba='cadastro'">Cadastro</span>
<span :class="{active: aba==='login'}" @click="aba='login'">Entrar</span>
</div>

<div class="social-login">
<button class="google">G</button>

</div>

<form v-if="aba==='login'" class="form">

<input type="email" placeholder="E-mail" required>
<input type="password" placeholder="Senha" required>

<button class="btn-main">Entrar</button>

</form>

<form v-if="aba==='cadastro'" class="form">

<input type="text" placeholder="Nome completo" required>
<input type="email" placeholder="E-mail" required>
<input type="password" placeholder="Senha" required>




<button class="btn-main">Cadastrar</button>

</form>

</div>

</template>

<script>
export default {

data(){
return{
aba:'cadastro'
}
}

}
</script>
<style scoped>

.auth-container{
width:380px;
background:white;
padding:35px;
border-radius:12px;
margin:60px auto;
box-shadow:0 10px 25px rgba(0,0,0,0.1);
font-family:Arial, Helvetica, sans-serif;
text-align:center;
}

/* abas */
.tabs{
display:flex;
justify-content:space-around;
margin-bottom:25px;
border-bottom:2px solid #eee;
}

.tabs span{
cursor:pointer;
padding-bottom:10px;
font-weight:bold;
color:#777;
}

.tabs .active{
color:#ff7a3d;
border-bottom:3px solid #ff7a3d;
}

/* login social */
.social-login{
display:flex;
gap:10px;
margin-bottom:20px;
}

.social-login button{
flex:1;
padding:12px;
border-radius:8px;
border:1px solid #ddd;
font-size:18px;
cursor:pointer;
background:white;
}

.google:hover{
background:#f5f5f5;
}

.facebook{
background:#1877f2;
color:white;
border:none;
}

/* formulário */
.form{
display:flex;
flex-direction:column;
gap:12px;
}

input{
padding:14px;
border-radius:8px;
border:1px solid #ddd;
font-size:14px;
}

input:focus{
border-color:#ff7a3d;
outline:none;
box-shadow:0 0 5px rgba(255,122,61,0.3);
}

/* texto pequeno */
.info{
font-size:12px;
color:#777;
}

/* checkbox */
.checkbox{
display:flex;
gap:8px;
font-size:13px;
align-items:center;
}

/* botão principal */
.btn-main{
margin-top:10px;
padding:14px;
border:none;
border-radius:10px;
background:#ff7a3d;
color:white;
font-size:16px;
cursor:pointer;
transition:0.3s;
}

.btn-main:hover{
background:#e6672e;
transform:scale(1.03);
}

</style>
