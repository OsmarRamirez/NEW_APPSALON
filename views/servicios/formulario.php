<div class="campo">
    <label for="nombre">Nombre</label>
    <input
        data-cy="nombre-servicio" 
        type="text"
        id="nombre"
        placeholder="Nombre Servicio"
        name="nombre"
        value="<?php echo $servicio->nombre;?>"
    />
</div>

<div class="campo">
    <label for="precio">Precio</label>
    <input
        data-cy="valor-servicio" 
        type="number"
        id="precio"
        placeholder="Precio Servicio"
        name="precio"
        value="<?php echo $servicio->precio;?>"
    />
</div>