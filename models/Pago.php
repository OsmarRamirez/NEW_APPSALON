<?php

namespace Model;

class Pago extends ActiveRecord {
    protected static $tabla = 'pagos';
    protected static $columnasDB = ['id', 'estado', 'usuario_id'];

    public function __construct($args = [])
    {   
        $this->id = $args['id'] ?? null;
        $this->estado = $args['estado'] ?? 0;
        $this->usuario_id = $args['usuario_id'] ?? '';
    }
}