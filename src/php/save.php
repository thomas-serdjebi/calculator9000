<?php


    header("Access-Control-Allow-Origin: *");

    try{
        $db = new PDO("mysql:host=localhost;dbname=calculator9000", "root", "");
        //On définit le mode d'erreur de PDO sur Exception
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    
    /*On capture les exceptions si une exception est lancée et on affiche
        *les informations relatives à celle-ci*/
    catch(PDOException $e){
        echo "Erreur : " . $e->getMessage();
    }

    function insertResult($data){
        $sql = "INSERT INTO results (operation, result) VALUES (:operation, :result)";
        $pdo = $db->prepare($sql);
        $pdo->execute($data);

    }

    $operation = $_POST['operation']
    $result = $_POST['result']

    $data = [
        'operation' => $operation,
        'result'=>$result
    ] ;

    $insert->insertResult($data);
    
?>






