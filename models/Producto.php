<?php 
  class Producto {
    // DB stuff
    private $conn;
    private $table = 'producto';

    // Properties
    public $id;
    public $nombre;
    public $marca;
    public $marcaId;
    public $categoria;
    public $categoriaId;
    public $codigoStr;
    public $codigoArr;
    public $fechaUltimaModificacion;
    public $fechaBaja;

    // Constructor with DB
    public function __construct($db) {
      $this->conn = $db;
    }

    // Get Productos
    public function get() {
      // Create query
      $query = 'SELECT p.id, p.descripcion, m.nombre marca, c.nombre categoria,
      GROUP_CONCAT(co.codigo) codigoStr, p.fechaUltimaModificacion, p.fechaBaja
                        FROM ' . $this->table . ' p
                        INNER JOIN categoria c on c.id = p.categoriaId
                        INNER JOIN marca m on m.id = p.marcaId
                        INNER JOIN productocodigo pc on pc.productoId = p.id
                        INNER JOIN codigo co on co.id = pc.codigoId
                        ORDER BY
                        p.fechaUltimaModificacion DESC';
      
      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Execute query
      $stmt->execute();

      return $stmt;
    }

    // Get una sola producto
    public function getId() {
          // Create query
          $query = 'SELECT p.id, p.descripcion, m.nombre marca, c.nombre categoria,
                          GROUP_CONCAT(co.codigo) codigoStr, p.fechaUltimaModificacion, p.fechaBaja
                          FROM ' . $this->table . ' p
                          INNER JOIN categoria c on c.id = p.categoriaId
                          INNER JOIN marca m on m.id = p.marcaId
                          INNER JOIN productocodigo pc on pc.productoId = p.id
                          INNER JOIN codigo co on co.id = pc.codigoId
                          WHERE id = ? LIMIT 0,1';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Bind ID
          $stmt->bindParam(1, $this->id);

          // Execute query
          $stmt->execute();

          $row = $stmt->fetch(PDO::FETCH_ASSOC);

          // Set properties
          $this->id = $row['id'];
          
          $this->descripcion = $row['descripcion'];
          $this->marca = $row['marca'];
          $this->categoria = $row['categoria'];
          $this->codigoStr = $row['codigoStr'];
          $this->fechaUltimaModificacion = $row['fechaUltimaModificacion'];
          $this->fechaBaja = $row['fechaBaja'];
    }

    // Create Producto
    public function post() {
          // Create query
          $query = 'INSERT INTO ' . $this->table . ' SET descripcion = :descripcion,
                    marcaId = :marcaId, categoriaId = :categoriaId';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->descripcion = htmlspecialchars(strip_tags($this->descripcion));

          // Bind data
          $stmt->bindParam(':descripcion', $this->descripcion);
          $stmt->bindParam(':marcaId', $this->marcaId);
          $stmt->bindParam(':categoriaId', $this->categoriaId);

          // Execute query
          if($stmt->execute()) {
              $id_inserted = $this->conn->lastInsertId();
              $query = 'DELETE FROM productocodigo WHERE productoId = ' . $id_inserted;
              $stmt = $this->conn->prepare($query);
              if($stmt->execute()){
                $query = 'INSERT INTO productocodigo (productoId, codigoId) VALUES ';
                foreach($this->codigoArr as $codigo_id){
                  $query .= '(' . $id_inserted . ', ' . $codigo_id . "),";
                }
                $stmt = $this->conn->prepare($rtrim($query, ","));
                if($stmt->execute()){
                  return true;
                }
                printf("Error: %s.\n", $stmt->error);
                return false;
              }
              printf("Error: %s.\n", $stmt->error);
              return false;
          }
          // Print error if something goes wrong
          printf("Error: %s.\n", $stmt->error);
          return false;
    }

    // Update producto
    public function put() {
          // Create query
          $query = 'UPDATE ' . $this->table . '
                                SET descripcion = :descripcion, 
                                marcaId = :marcaId, categoriaId = :categoriaId,
                                fechaUltimaModificacion = CURRENT_TIMESTAMP
                                WHERE id = :id';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->nombre = htmlspecialchars(strip_tags($this->nombre));
          $this->descripcion = htmlspecialchars(strip_tags($this->descripcion));
          $this->id = htmlspecialchars(strip_tags($this->id));

          // Bind data
          $stmt->bindParam(':descripcion', $this->descripcion);
          $stmt->bindParam(':marcaId', $this->marcaId);
          $stmt->bindParam(':categoriaId', $this->categoriaId);
          $stmt->bindParam(':id', $this->id);

          // Execute query
          if($stmt->execute()) {
            $query = 'DELETE FROM productocodigo WHERE productoId = :id';
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(':id', $this->id);

            if($stmt->execute()){
              $query = 'INSERT INTO productocodigo (productoId, codigoId) VALUES ';
              foreach($this->codigoArr as $codigo_id){
                $query .= '(' . $this->id . ', ' . $codigo_id . "),";
              }
              $stmt = $this->conn->prepare(rtrim($query, ","));
              if($stmt->execute()){
                return true;
              }
              printf("Error: %s.\n", $stmt->error);
              return false;
            }
            printf("Error: %s.\n", $stmt->error);
            return false;
          }
          printf("Error: %s.\n", $stmt->error);
          return false;
    }

    // Delete producto
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
            $query = 'DELETE FROM ' . $this->table . ' WHERE productoId = :id';
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(':id', $this->id);
            if($stmt->execute()){
              return true;
            }
            printf("Error: %s.\n", $stmt->error);
            return false;
          }
          printf("Error: %s.\n", $stmt->error);
          return false;
    }
    
  }