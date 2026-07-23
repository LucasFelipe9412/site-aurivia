const header=document.getElementById("header");

if(header){

    window.addEventListener("scroll",()=>{

        if(window.scrollY>40){

            header.classList.add("header-scroll");

        }else{

            header.classList.remove("header-scroll");

        }

    });

}

// ======================================
// PÁGINA DE COMPRA
// ======================================

const botaoWhatsapp = document.getElementById("btn-whatsapp");

if(botaoWhatsapp){

    botaoWhatsapp.addEventListener("click", ()=>{

        const nome=document.getElementById("nome").value.trim();

        const cep=document.getElementById("cep").value.trim();

        const quantidade=qtd;

        const obs=document.getElementById("obs").value.trim();

        document.getElementById("erro-nome").textContent="";
document.getElementById("erro-cep").textContent="";

let valido=true;

        if(nome===""){

            document.getElementById("erro-nome").textContent="Informe seu nome.";

            valido=false;

        }

        if(cep.length<9){

            document.getElementById("erro-cep").textContent="Informe um CEP válido.";

            valido=false;

        }

        if(!valido){

            return;

        }

        
        const numero = "5531992778250";

        const overlay = document.getElementById("mensageiro-overlay");

        const titulo = document.getElementById("mensageiro-titulo");

        const texto = document.getElementById("mensageiro-texto");

        const mensagem =
                `SOLICITAÇÃO DE ORÇAMENTO

                Olá!

                Gostaria de adquirir exemplares de "A Cruz e a Coroa".

                ────────────────────────

                Nome:
                ${nome}

                Quantidade:
                ${quantidade} exemplar(es)

                CEP:
                ${cep}

                Observações:
                ${obs || "Nenhuma"}

                ────────────────────────

                Aguardo o cálculo do frete.

                Muito obrigado!`;

        overlay.classList.add("ativo");

        setTimeout(()=>{

            titulo.textContent="O mensageiro partiu!";
            titulo.style.color="#2E6B3A";

            texto.textContent="Que Deus acompanhe sua jornada.";

        },2800);

        setTimeout(()=>{

           overlay.classList.remove("ativo");
            window.location.href =
                `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
                
             },5200);
        });
            
}

//===============================
// CONTROLE DE QUANTIDADE
//===============================

const btnMais=document.getElementById("mais");

const btnMenos=document.getElementById("menos");

const quantidade=document.getElementById("quantidade");

const subtotal=document.getElementById("subtotal");

let qtd=1;

const preco=29.90;

function atualizar(){

    quantidade.textContent=qtd;

    subtotal.textContent=`R$ ${(qtd*preco).toFixed(2).replace(".",",")}`;

}

if(btnMais){

    btnMais.onclick=()=>{

        qtd++;

        atualizar();

    }

}

if(btnMenos){

    btnMenos.onclick=()=>{

        if(qtd>1){

            qtd--;

            atualizar();

        }

    }

}

//======================================
// MÁSCARA DO CEP
//======================================

const cep=document.getElementById("cep");

if(cep){

    cep.addEventListener("input",()=>{

        let valor=cep.value.replace(/\D/g,"");

        if(valor.length>5){

            valor=valor.replace(/(\d{5})(\d)/,"$1-$2");

        }

        cep.value=valor;

    });

}

const comprarAgora = document.getElementById("comprar-agora");

if (comprarAgora){

    comprarAgora.addEventListener("click", function(e){

        e.preventDefault();

        document.body.classList.add("fade-out");

        setTimeout(() => {

            window.location = this.href;

        }, 450);

    });

}

//======================================
// CONTATO
//======================================

const btnContato = document.getElementById("btn-contato");

if(btnContato){

    btnContato.addEventListener("click",(e)=>{

        e.preventDefault();

        const numero="5531992778250";

        const mensagem=
`Olá, Lucas!

Conheci o site de As Crônicas de Aurívia e gostaria de tirar uma dúvida sobre o livro.

`;

        window.location.href=
`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    });

}