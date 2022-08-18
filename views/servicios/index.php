<h1 class="nombre-pagina">Servicios</h1>
<p class="descripcion-pagina">Administración de Servicios</p>

<?php
    include_once __DIR__ . '/../templates/barra.php';
?>

<ul class="servicios">
    <?php foreach($servicios as $servicio) { ?>
        <li data-cy="services">
            <p data-cy="nombre-nuevo">Nombre: <span><?php echo $servicio->nombre; ?></span></p>
            <p data-cy="precio-nuevo">Precio: <span>$<?php echo $servicio->precio; ?></span></p>

            <div class="acciones">
                <a data-cy="update" class="boton" href="/servicios/actualizar?id=<?php echo $servicio->id; ?>">Actualizar</a>

                <form data-cy="delete-button" action="/servicios/eliminar" method="POST">
                    <input type="hidden" name="id" value="<?php echo $servicio->id; ?>">

                    <input type="submit" value="Borrar" class="boton-eliminar">
                </form>
            </div>
        </li>
    <?php } ?>
</ul>