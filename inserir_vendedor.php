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

    $nome_vendedor= $_POST['nome_vendedor'];
    $cpf_vendedor = $_POST['cpf_vendedor'];
    $telefone_vendedor = $_POST['telefone_vendedor'];
    $email_vendedor = $_POST['email_vendedor'];
    $rua_vendedor = $_POST['rua_vendedor'];
    $numero_casa_vendedor = $_POST['numero_casa_vendedor'];
    $bairro_vendedor = $_POST['bairro_vendedor'];
    $cep_vendedor = $_POST['cep_vendedor'];
    $cidade_vendedor= $_POST['cidade_vendedor'];
    $estado_vendedor = $_POST['estado_vendedor'];

    $sqlinsert= "INSERT INTO vendedor(nome_vendedor, cpf_vendedor, telefone_vendedor, email_vendedor, rua_vendedor, numero_casa_vendedor, bairro_vendedor, cep_vendedor, cidade_vendedor, estado_vendedor) 
    VALUES ('$nome_vendedor', '$cpf_vendedor', '$telefone_vendedor', '$email_vendedor', '$rua_vendedor', '$numero_casa_vendedor', '$bairro_vendedor', 
    '$cep_vendedor', '$cidade_vendedor', '$estado_vendedor')";

    mysqli_query($conexao, $sqlinsert) or die("Não foi possível inserir os dados");

    header('location: indexx.html');

?>