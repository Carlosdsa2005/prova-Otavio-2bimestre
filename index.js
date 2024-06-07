function enviar(event) {
    event.preventDefault();

    var matricula = event.target[1].value;
    var nome = event.target[0].value;
    var nota1 = parseFloat(event.target[2].value);
    var nota2 = parseFloat(event.target[3].value);

    console.log({ matricula, nome, nota1, nota2 });

    

    if (!nome || !matricula || isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        alert("Insira valores válidos para as notas (entre 0 e 10)!");
        return;
    }

    var tr = document.createElement("tr");
    var td_nome = document.createElement("td");
    td_nome.innerHTML = nome;
    var td_matricula = document.createElement("td");
    td_matricula.innerHTML = matricula;
    var td_nota_1 = document.createElement("td");
    td_nota_1.innerHTML = nota1;
    var td_nota_2 = document.createElement("td");
    td_nota_2.innerHTML = nota2;

    var media = (nota1 + nota2) / 2;
    var td_media = document.createElement("td");
    td_media.innerHTML = media.toFixed(2); 

    var td_status = document.createElement("td");
    if (media >= 5) {
        td_status.innerHTML = "Aprovado";
        td_status.style.backgroundColor = "green";
    } else {
        td_status.innerHTML = "Reprovado";
        td_status.style.backgroundColor = "red";
    }

    if (nota1 < 5 || nota2 < 5) {
        
       
    }

    tr.appendChild(td_nome);
    tr.appendChild(td_matricula);
    tr.appendChild(td_nota_1);
    tr.appendChild(td_nota_2);
    tr.appendChild(td_media); 
    tr.appendChild(td_status); 

    document.querySelector("body > section:nth-child(4) > table > tbody").appendChild(tr);

    var aluno = { matricula, nome, nota1, nota2 };

    localStorage.setItem("aluno", JSON.stringify(aluno));

    event.target[0].value = "";
    event.target[1].value = "";
    event.target[2].value = "";
    event.target[3].value = "";
}
