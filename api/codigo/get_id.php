<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  include_once '../../config/Database.php';
  include_once '../../models/Codigo.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate codigo object
  $codigo = new Codigo($db);

  // Get ID
  $codigo->id = isset($_GET['id']) ? $_GET['id'] : die();

  // Get codigo
  $codigo->getId();

  // Create array
  $codigo_arr = array(
    'id' => $codigo->id,
    'nombre' => $codigo->nombre,
    'codigo' => $codigo->codigo,
    'descripcion' => $codigo->$descripcion,
    'fechaUltimaModificacion' => $codigo->fechaUltimaModificacion,
    'fechaBaja' => $codigo->fechaBaja,
  );

  // Make JSON
  print_r(json_encode($codigo_arr));