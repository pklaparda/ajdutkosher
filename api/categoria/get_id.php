<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  include_once '../../config/Database.php';
  include_once '../../models/Categoria.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate categoria object
  $categoria = new Categoria($db);

  // Get ID
  $categoria->id = isset($_GET['id']) ? $_GET['id'] : die();

  // Get categoria
  $categoria->getId();

  // Create array
  $categoria_arr = array(
    'id' => $categoria->id,
    'nombre' => $categoria->nombre,
    'fechaUltimaModificacion' => $categoria->fechaUltimaModificacion,
    'fechaBaja' => $categoria->fechaBaja,
  );

  // Make JSON
  print_r(json_encode($categoria_arr));