<?php
    //1° Nome do Servidor
    $servidor = "localhost";

    //2° Usuário
    $usuario = "root";
    
    //3°Senha
    $senha = "";
    
    //4° Nome do Banco
    $banco_locadora_matheus = "banco_locadora_matheus";
    
    //Função para conexão com Banco de Dados
    $conexao = mysqli_connect($servidor, $usuario, $senha, $banco_locadora_matheus);

    $placa_veiculo= $_POST['placa_veiculo'];
    $chassi_veiculo = $_POST['chassi_veiculo'];
    $fabricante_veiculo = $_POST['fabricante_veiculo'];
    $tipo_veiculo = $_POST['tipo_veiculo'];
    $ano_fabricacao_veiculo = $_POST['ano_fabricacao_veiculo'];
    $modelo_veiculo = $_POST['modelo_veiculo'];
    $cor_veiculo= $_POST['cor_veiculo'];

    $sqlinsert= "INSERT INTO veiculo(placa_veiculo, chassi_veiculo, fabricante_veiculo, tipo_veiculo, ano_fabricacao_veiculo, modelo_veiculo, cor_veiculo) 
    VALUES ('$placa_veiculo', '$chassi_veiculo', '$fabricante_veiculo', '$tipo_veiculo', '$ano_fabricacao_veiculo', '$modelo_veiculo', '$cor_veiculo')";

    mysqli_query($conexao, $sqlinsert) or die("Não foi possível inserir os dados");

    header('location: indexx.html');

?>