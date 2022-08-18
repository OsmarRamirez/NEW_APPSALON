<?php

function debuguear($variable) : string {
    echo "<pre>";
    var_dump($variable);
    echo "</pre>";
    exit;
}

// Escapa / Sanitizar el HTML
function s($html) : string {
    $s = htmlspecialchars($html);
    return $s;
}

function esUltimo(string $actual, string $proximo): bool {
    if($actual !== $proximo) {
        return true;
    }
    return false;
}

// Función que revisa que el usuario está autenticado

function isAuth() : void { // No retorna nada, por eso void
    if(!isset($_SESSION['login'])) { //Revisa si el usurio esta logiado
        header('Location: /'); // en caso de no esatr logeado redirecciona a pagina principal
    }
}

//Esta funcion valida si el Usuario es Admin da acceso a la interfas de admin

function isAdmin() : void{ // No retorna nada, por el void
    if(!isset($_SESSION['admin'])){ //Valida si la cuenta es de Administrador
        header('Location: /'); //en cado se no ser admin redirecciona a la pagina principal
    }
}