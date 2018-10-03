<?php 
  class Categoria {
    // DB stuff
    private $conn;
    private $table = 'categoria';

    // Properties
    public $id;
    public $nombre;
    public $descripcion;
    public $fechaUltimaModificacion;
    public $fechaBaja;

    // Constructor with DB
    public function __construct($db) {
      $this->conn = $db;
    }

    // Get Categorias
    public function get() {
      // Create query
      $query = 'SELECT id, nombre, descripcion, fechaUltimaModificacion, fechaBaja
                                FROM ' . $this->table . '
                                ORDER BY
                                fechaUltimaModificacion DESC';
      
      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Execute query
      $stmt->execute();

      return $stmt;
    }

    // Get una sola categoria
    public function getId() {
          // Create query
          $query = 'SELECT id, nombre, descripcion, fechaUltimaModificacion, fechaBaja
                                    FROM ' . $this->table . '
                                    WHERE
                                      id = ?
                                    LIMIT 0,1';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Bind ID
          $stmt->bindParam(1, $this->id);

          // Execute query
          $stmt->execute();

          $row = $stmt->fetch(PDO::FETCH_ASSOC);

          // Set properties
          $this->id = $row['id'];
          $this->nombre = $row['nombre'];
          $this->descripcion = $row['descripcion'];
          $this->fechaUltimaModificacion = $row['fechaUltimaModificacion'];
          $this->fechaBaja = $row['fechaBaja'];
    }

    // Create Categoria
    public function post() {
          // Create query
          $query = 'INSERT INTO ' . $this->table . ' SET nombre = :nombre, descripcion = :descripcion';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->nombre = htmlspecialchars(strip_tags($this->nombre));
          $this->descripcion = htmlspecialchars(strip_tags($this->descripcion));

          // Bind data
          $stmt->bindParam(':nombre', $this->nombre);
          $stmt->bindParam(':descripcion', $this->descripcion);

          // Execute query
          if($stmt->execute()) {
            return true;
          }

          // Print error if something goes wrong
          printf("Error: %s.\n", $stmt->error);

          return false;
    }

    // Update categoria
    public function put() {
          // Create query
          $query = 'UPDATE ' . $this->table . '
                                SET nombre = :nombre, descripcion = :descripcion, 
                                fechaUltimaModificacion = CURRENT_TIMESTAMP
                                WHERE id = :id';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->nombre = htmlspecialchars(strip_tags($this->nombre));
          $this->descripcion = htmlspecialchars(strip_tags($this->descripcion));
          $this->id = htmlspecialchars(strip_tags($this->id));

          // Bind data
          $stmt->bindParam(':nombre', $this->nombre);
          $stmt->bindParam(':descripcion', $this->descripcion);
          $stmt->bindParam(':id', $this->id);

          // Execute query
          if($stmt->execute()) {
            return true;
          }

          // Print error if something goes wrong
          printf("Error: %s.\n", $stmt->error);

          return false;
    }

    // Delete categoria
    public function delete() {
          // Create query
          $query = 'UPDATE ' . $this->table . ' 
                    SET fechaBaja = CURRENT_TIMESTAMP
                    WHERE id = :id';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->id = htmlspecialchars(strip_tags($this->id));

          // Bind data
          $stmt->bindParam(':id', $this->id);

          // Execute query
          if($stmt->execute()) {
            return true;
          }

          // Print error if something goes wrong
          printf("Error: %s.\n", $stmt->error);

          return false;
    }
    
  }