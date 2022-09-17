<?php
header('Access-Control-Allow-Origin: *') ;

require_once('classes/Operations.php');

if (isset($_POST['operation']) && (isset($_POST['result']))) {
    $operation = rtrim(($_POST['operation']), "=");
    $result = $_POST['result'] ;

    $data = [
        'operation' => $operation,
        'result'=> $result
    ];

    $newInsertion = new Operations();
    $newInsertion->insertResult($data);
}

$get_list = new Operations();
$list = $get_list->getResults();

echo json_encode($list);


?>