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

    $nome_cliente= $_POST['nome_cliente'];
    $cpf_cliente = $_POST['cpf_cliente'];
    $telefone_cliente = $_POST['telefone_cliente'];
    $email_cliente = $_POST['email_cliente'];
    $rua_cliente = $_POST['rua_cliente'];
    $numero_casa_cliente = $_POST['numero_casa_cliente'];
    $bairro_cliente = $_POST['bairro_cliente'];
    $cep_cliente = $_POST['cep_cliente'];
    $cidade_cliente= $_POST['cidade_cliente'];
    $estado_cliente = $_POST['estado_cliente'];

    $sqlinsert= "INSERT INTO cliente(nome_cliente, cpf_cliente, telefone_cliente, email_cliente, rua_cliente, numero_casa_cliente, bairro_cliente, cep_cliente, cidade_cliente, estado_cliente) 
    VALUES ('$nome_cliente', '$cpf_cliente', '$telefone_cliente', '$email_cliente', '$rua_cliente', '$numero_casa_cliente', '$bairro_cliente', 
    '$cep_cliente', '$cidade_cliente', '$estado_cliente')";

    mysqli_query($conexao, $sqlinsert) or die("Não foi possível inserir os dados");

    header('location: indexx.html');

?>