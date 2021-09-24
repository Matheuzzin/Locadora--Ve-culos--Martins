// Leitura completa do nosso documento HTML
$(document).ready(function(){

// Monitorar todos os cliques em cima do elemento "a" do nosso documento HTML

$('a').click(function(e){
    e.preventDefault() //Anula a funcionalidade do HTML de abrir o link

    //Criar uma variável local(só funciona naquele local)-(global funciona no documento inteiro) que receba o atributo href do link

    let page = $(this).attr('href')

    $('.modal-title').empty()//Limpar o titúlo
    $('.modal-body').empty()//Limpar o Corpo do HTML

    //Verificar qual conteúdo eu devo carregar
    switch(page){

        //Se for para abrir a página Cadastro de Clientes
        case 'clientes': 
            $('.modal-title').append('Clientes')
            $('.modal-body').append(` 
            <form method="POST" action="inserir_cliente.php" name="form3">
                <b>Nome:</b> <input class="form-control" type="text" name="nome_cliente" placeholder="Nome completo"/></br></br> 
                <b>CPF: </b> <input class="form-control" type="text" name="cpf_cliente" placeholder="XXX.XXX.XXX-XX"/></br></br>
                <b>Telefone: </b> <input class="form-control" type="text" name="telefone_cliente" placeholder="(XX)XXXXX-XXXX"></br></br>
                <b>Email: </b> <input class="form-control" type="email" name="email_cliente" placeholder="email@email.com"/></br></br>
                <b>Rua: </b> <input class="form-control" type="text" name="rua_cliente" placeholder="Rua"/></br></br>
                <b>Número: </b> <input class="form-control " type="number" name="numero_casa_cliente" placeholder="Número casa"/></br></br>
                <b>Bairro: </b> <input class="form-control" type="text" name="bairro_cliente" placeholder="Bairro"/></br></br>
                <b>CEP: </b> <input  class="form-control" type="text" name="cep_cliente" placeholder="XXXXX-XXX"/></br></br>
                <b>Cidade: </b> <input class="form-control" type="text" name="cidade_cliente" placeholder="Cidade"/></br></br>
                <b>Estado: </b>
                <select name="estado_cliente" id="caixaSelecao" class="form-control">
                    <option value="Acre (AC)">Acre (AC)</option>
                    <option value="Alagoas (AL)">Alagoas (AL)</option>
                    <option value="Amapá (AP)"> Amapá (AP)</option>
                    <option value="Amazonas (AM)">Amazonas (AM)</option>
                    <option value="Bahia (BA)">Bahia (BA)</option>
                    <option value="Ceará (CE)">Ceará (CE)</option>
                    <option value="Distrito Federal (DF)">Distrito Federal (DF)</option>
                    <option value="Espírito Santo (ES)">Espírito Santo (ES)</option>
                    <option value="Goiás (GO)">Goiás (GO)</option>
                    <option value="Maranhão (MA)">Maranhão (MA)</option>
                    <option value="Mato Grosso (MT)">Mato Grosso (MT)</option>
                    <option value="Mato Grosso do Sul (MS)">Mato Grosso do Sul (MS)</option>
                    <option value="Minas Gerais (MG)">Minas Gerais (MG)</option>
                    <option value="Pará (PA)">Pará (PA)</option>
                    <option value="Paraíba (PB)">Paraíba (PB)</option>
                    <option value="Paraná (PR)">Paraná (PR)</option>
                    <option value="Pernambuco (PE">Pernambuco (PE)</option>
                    <option value="Piauí (PI)">Piauí (PI)</option>
                    <option value="Rio de Janeiro (RJ)">Rio de Janeiro (RJ)</option>
                    <option value="Rio Grande do Norte (RN)">Rio Grande do Norte (RN)</option>
                    <option value="Rio Grande do Sul (RS)">Rio Grande do Sul (RS)</option>
                    <option value="Rondônia (RO)">Rondônia (RO)</option>
                    <option value="Roraima (RR)">Roraima (RR)</option>
                    <option value="Santa Catarina (SC)">Santa Catarina (SC)</option>
                    <option value="São Paulo (SP)">São Paulo (SP)</option>
                    <option value="Sergipe (SE)">Sergipe (SE)</option>
                    <option value="Tocantins (TO)">Tocantins (TO)</option>
                </select></br></br>
                <center>
                    <div class="form-group col-8 justify-content-center">
                        <button class="btn btn-primary btn-block"><i class="fas fa-paper-plane"></i>
                        Enviar</button>
                    </div>
                </center>
            </form>`)
            $('#modal-info').modal('show')
        break

        //Se for para abrir a página Cadastro de Vendedores
        case 'vendedores': 
            $('.modal-title').append('Vendedores')
            $('.modal-body').append(`        
            <form method="POST" action="inserir_vendedor.php" name="form3">
                <b>Nome:</b> <input type="text" class="form-control" name="nome_vendedor"
                placeholder="Nome completo" /></br></br>
                <b>CPF: </b> <input type="text" class="form-control" name="cpf_vendedor"
                placeholder="XXX.XXX.XXX-XX" /></br></br>
                <b>Cargo: </b> <input type="text" class="form-control" name="cargo_vendedor"
                placeholder="cargo vendedor"></br></br>
                <b>Telefone: </b> <input type="text" class="form-control" name="telefone_vendedor"
                placeholder="(XX)XXXXX-XXXX"></br></br>
                <b>Email: </b> <input type="email" class="form-control" name="email_vendedor"
                placeholder="email@email.com" /></br></br>
                <b>Rua: </b> <input type="text" class="form-control" name="rua_vendedor" placeholder="Rua" /></br></br>
                <b>Número: </b> <input type="number" class="form-control" name="numero_casa_vendedor"
                placeholder="Número casa" /></br></br>
                <b>Bairro: </b> <input type="text" class="form-control" name="bairro_vendedor" placeholder="Bairro" /></br></br>
                <b>CEP: </b> <input type="text" class="form-control" name="cep_vendedor" placeholder="XXXXX-XXX" /></br></br>
                <b>Cidade: </b> <input type="text" class="form-control" name="cidade_vendedor" placeholder="Cidade" /></br></br>
                <b>Estado: </b>
                <select name="estado_vendedor" id="caixaSelecao" class="form-control">
                    <option value="Acre (AC)">Acre (AC)</option>
                    <option value="Alagoas (AL)">Alagoas (AL)</option>
                    <option value="Amapá (AP)"> Amapá (AP)</option>
                    <option value="Amazonas (AM)">Amazonas (AM)</option>
                    <option value="Bahia (BA)">Bahia (BA)</option>
                    <option value="Ceará (CE)">Ceará (CE)</option>
                    <option value="Distrito Federal (DF)">Distrito Federal (DF)</option>
                    <option value="Espírito Santo (ES)">Espírito Santo (ES)</option>
                    <option value="Goiás (GO)">Goiás (GO)</option>
                    <option value="Maranhão (MA)">Maranhão (MA)</option>
                    <option value="Mato Grosso (MT)">Mato Grosso (MT)</option>
                    <option value="Mato Grosso do Sul (MS)">Mato Grosso do Sul (MS)</option>
                    <option value="Minas Gerais (MG)">Minas Gerais (MG)</option>
                    <option value="Pará (PA)">Pará (PA)</option>
                    <option value="Paraíba (PB)">Paraíba (PB)</option>
                    <option value="Paraná (PR)">Paraná (PR)</option>
                    <option value="Pernambuco (PE">Pernambuco (PE)</option>
                    <option value="Piauí (PI)">Piauí (PI)</option>
                    <option value="Rio de Janeiro (RJ)">Rio de Janeiro (RJ)</option>
                    <option value="Rio Grande do Norte (RN)">Rio Grande do Norte (RN)</option>
                    <option value="Rio Grande do Sul (RS)">Rio Grande do Sul (RS)</option>
                    <option value="Rondônia (RO)">Rondônia (RO)</option>
                    <option value="Roraima (RR)">Roraima (RR)</option>
                    <option value="Santa Catarina (SC)">Santa Catarina (SC)</option>
                    <option value="São Paulo (SP)">São Paulo (SP)</option>
                    <option value="Sergipe (SE)">Sergipe (SE)</option>
                    <option value="Tocantins (TO)">Tocantins (TO)</option>
                </select></br></br>
                <input type="submit" value="Cadastrar-se" />
            </form>`)
            $('#modal-info').modal('show')
        break

        //Se for para abrir a página Cadastro de Veículos...
        case 'veiculos': 
            $('.modal-title').append('Veículos')
            $('.modal-body').append(`        
            <form method="POST" action="inserir_veiculo.php" name="form3">
                <b>Placa:</b> <input class="form-control" type="text" name="placa_veiculo" placeholder="Placa" /></br></br>
                <b>Chassi: </b> <input class="form-control" type="text" name="chassi_veiculo" placeholder="Chassi" /></br></br>
                <i class="fas fa-home"></i> <b>Fabricante</b>
                <select class="form-control" name="fabricante_veiculo" id="fabrincante">
                    <option value="Toyota">Toyota</option>
                    <option value="Volkswagen">Volkswagen</option>
                    <option value="Ford">Ford</option>
                    <option value="Honda">Honda</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Nissan">Nissan</option>
                    <option value="Chevrolet">Chevrolet</option>
                    <option value="Kia">Kia</option>
                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                    <option value="BMW">BMW</option>
                    <option value="Tesla">Tesla</option>
                </select></br></br>

                <i class="fas fa-home"></i><b>Tipo: </b>
                <select class="form-control" name="tipo_veiculo" id="tipo">
                    <option value="Cupê">Cupê</option>
                    <option value="Crossover">Crossover</option>
                    <option value="Esportivo">Esportivo</option>
                    <option value="Hatch e Hatchback">Hatch e Hatchback</option>
                    <option value="Jipe">Jipe</option>
                    <option value="Picape">Picape</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Van e Minivan">Van e Minivan</option>
                </select></br></br>

                <b>Ano Fabricação: </b>
                <select class="form-control" name="ano_fabricacao_veiculo" id="anoFabricacao">
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                </select></br></br>
                <b>Modelo Veículo: </b> <input type="text" class="form-control" name="modelo_veiculo" placeholder="Modelo"/></br></br>
                <b>Cor: </b> <input type="text" class="form-control" name="cor_veiculo" placeholder="Bairro" /></br></br>
                <input type="submit" value="Cadastrar-se" />
            </form>`)
            $('#modal-info').modal('show')
        break
         }
    })
})