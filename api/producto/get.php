<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  include_once '../../config/Database.php';
  include_once '../../models/Producto.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate producto object
  $producto = new Producto($db);

  // producto query
  $result = $producto->get();
  // Get row count
  $num = $result->rowCount();

  // Check if any productos
  if($num > 0) {
    // Productos array
    $productos_arr = array();
    // $productos_arr['data'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
      extract($row);

      $producto_item = array(
        'id' => $id,
        'descripcion' => $descripcion,
        'marca' => $marca,
        'categoria' => $categoria,
        'codigo' => $codigoStr,
        'fechaUltimaModificacion' => $fechaUltimaModificacion,
        'fechaBaja' => $fechaBaja
      );

      // Push to "data"
      array_push($productos_arr, $producto_item);
      // array_push($productos_arr['data'], $producto_item);
    }

    // Turn to JSON & output
    echo json_encode($productos_arr);

  } else {
    // No Productos
    echo json_encode(
      array('message' => 'No hay Productos existentes')
    );
  }
