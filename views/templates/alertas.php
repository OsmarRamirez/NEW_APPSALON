<?php
    foreach($alertas as $key => $mensajes):
        foreach($mensajes as $mensaje):
?>

    <div data-cy="alertas" class="alerta <?php echo $key; ?>">
        <?php echo $mensaje; ?>
    </div>

<?php
        endforeach;
    endforeach;
?>