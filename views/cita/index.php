<h1 class="nombre-pagina">Crear Nueva Cita</h1>
<p class="descripcion-pagina">Elige tus servicios y coloca tus datos</p>

<?php
    include_once __DIR__ . '/../templates/barra.php';
?>

<div id="app">
    <nav class="tabs">
        <button data-cy="1" class="actual" type="button" data-paso="1">Servicios</button>
        <button data-cy="2" type="button" data-paso="2">Información Cita</button>
        <button data-cy="3" type="button" data-paso="3">Resumen</button>
    </nav>

    <div id="paso-1" class="seccion">
        <h2>Servicios</h2>
        <p class="text-center">Elige tus servicios a continuación</p>
        <div id="servicios" class="listado-servicios"></div>
    </div>
    <div id="paso-2" class="seccion">
        <h2>Tus Datos y Cita </h2>
        <p class="text-center">Coloca tus datos y fecha de tu cita</p>

        <form class="formulario">
            <div class="campo">
                <label for="nombre">Nombre</label>
                <input
                    id="nombre"
                    type="text"
                    placeholder="Tu Nombre"
                    value="<?php echo $nombre; ?>"
                    disabled
                />
            </div>

            <div class="campo"> <!-- Se muestra la cita y se evita seleccionar fechas anteriores y el día actual -->
                <label for="fecha">Fecha</label>
                <input
                    data-cy="fecha" 
                    id="fecha"
                    type="date"
                    min="<?php echo date('Y-m-d', strtotime('+1 day')); ?>"
                />
            </div>

            <div class="campo">
                <label for="hora">Hora</label>
                <input
                    data-cy="hora" 
                    id="hora"
                    type="time"
                />
            </div>
            <input type="hidden" id="id" value="<?php echo $id; ?>">
        </form>
    </div>
    <div id="paso-3" class="seccion contenido-resumen">
        <h2>Resumen</h2>
        <p class="text-center">Verifica que la información sea correcta</p>
    </div>

    <div class="paginacion"> <!-- &laquo muestra la flecha de navegación hacia atrás-->
        <button
            id="anterior"
            class="boton" 
        >&laquo; Anterior</button>

        <button
            id="siguiente"
            class="boton"
            data-cy="BTN-SIG" 

        > Siguiente &raquo;</button> <!-- &raquo muestra la flecha de navegación hacia adelante -->
    </div>
</div>

<?php
    $script = "
    <script src='//cdn.jsdelivr.net/npm/sweetalert2@11'></script>
        <script src='build/js/app.js'></script>
    ";
?>