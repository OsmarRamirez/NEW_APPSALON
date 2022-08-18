<div class="barra">
    <p>Hola: <?php echo $nombre ?? ''; ?></p>

    <a data-cy="cerrar-sesion" class="boton" href="/logout">Cerrar Sesión</a>
</div>

<?php if(isset($_SESSION['admin'])) { ?>
    <div class="barra-servicios">
        <a data-cy="boton-citas" class="boton" href="/admin">Ver Citas</a>
        <a data-cy="boton-servicios" class="boton" href="/servicios">Ver Servicios</a>
        <a data-cy="boton-crear" class="boton" href="/servicios/crear">Nuevo Servicio</a>
    </div>

<?php } ?>