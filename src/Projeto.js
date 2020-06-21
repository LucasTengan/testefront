var curriculo = ''
var nome = ''
var text = $('<h6>Não informado</h6>').css('opacity', 0.3)

/*
const projetos = $('#projetos')
const url = 'https://picsum.photos/v2/list'
const author = c => c.author === "Alejandro Escamilla"

    axios.get(url)
            .then(resp => {
            const pessoas = resp.data
            const candidatos = pessoas
                .filter(author)
            candidatos.forEach(candidato => {
                projetos.append("<img width='100' src=" + candidato.download_url + ">").css({'margin': '5px'})
            })
        })
*/

function enviarDados(e) {
    e.preventDefault()
    curriculo = $('#curriculo')
    nome = $('#nome').val()
    curriculo.html("Nome completo: <br />")
    curriculo.append(nome.bold())
    curriculo.append('<br />')

    email = $('#email').val()
    curriculo.append("<br />E-mail: <br />")
    curriculo.append(email.bold())
    curriculo.append('<br />')

    tel1 = $('#tel1').val()
    curriculo.append('<br />Telefone1: <br />')
    curriculo.append(tel1.bold())
    curriculo.append('<br />')
    
    tel2 = $('#tel2').val()
    curriculo.append('<br />Telefone2: <br />')
    if(tel2 == '' ) {
        curriculo.append(text)
    } else {
        curriculo.append(tel2.bold())
    }
    curriculo.append('<br />')
    
    $('#aviso').css('display', 'block').fadeOut(5000)
    input = $('input').val("")
}

$('#formID').submit(enviarDados)
