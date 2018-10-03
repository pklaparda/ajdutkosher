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

  // categoria query
  $result = $categoria->get();
  // Get row count
  $num = $result->rowCount();

  // Check if any categorias
  if($num > 0) {
    // Categorias array
    $categorias_arr = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
      extract($row);

      $categoria_item = array(
        'id' => $id,
        'nombre' => $nombre,
        'descripcion' => $descripcion,
        'fechaUltimaModificacion' => $fechaUltimaModificacion,
        'fechaBaja' => $fechaBaja
      );

      // Push to "data"
      array_push($categorias_arr, $categoria_item);
    }

    // Turn to JSON & output
    echo json_encode($categorias_arr);

  } else {
    // No Categorias
    echo json_encode(
      array('message' => 'No hay Categorias existentes')
    );
  }
