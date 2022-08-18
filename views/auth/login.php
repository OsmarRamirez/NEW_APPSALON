<h1 data-cy="heading-sitio" class="nombre-pagina">Hola</h1>
<p data-cy="heading-inicio" class="descripcion-pagina">Inicia sesión con tus datos</p>

<?php  
    include_once __DIR__ . "/../templates/alertas.php";
?>

<form data-cy="input-inicio" class="formulario" method="POST" action="/">
    <div class="campo">
        <label for="email">Email</label>
        <input
            data-cy="email" 
            type="email"
            id="email"
            placeholder="Tu Email"
            name="email"
        />
    </div>

    <div class="campo">
        <label for="password">Password</label>
        <input
            data-cy="password"
            type="password"
            id="password"
            placeholder="Tu Password"
            name="password"
        />
    </div>

    <input data-cy="enlace-boton" type="submit" class="boton" value="Iniciar Sesión">
</form>

<div class="acciones">
    <a data-cy="enlace-crear" href="/crear-cuenta">¿Aún no tienes una cuenta? Crear una</a>
    <a data-cy="enlace-recuperar" href="/olvide">¿Olvidaste tu password?</a>
</div>