function calcular(){
    let cn1 = document.getElementById('cxn1')
    let cn2 = document.getElementById('cxn2')
    let cn3 = document.getElementById('cxn3')
    let cn4 = document.getElementById('cxn4')
    let n1 = Number(cn1.value)
    let n2 = Number(cn2.value)
    let n3 = Number(cn3.value)
    let n4 = Number(cn4.value)

    let res = document.getElementById('resultado')

    let media = (n1 + n2 + n3 + n4) / 4;
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

    res.innerHTML = `<p>Sua média é ${media.toFixed(1)}</p>`

    if (n1, n2, n3, n4 == 0) {
        alert('ERRO! As caixas estão vazias, preencha!')   
    } else 
        if (media >= 0 && media <= 4.9) {
            res.innerHTML += `Você está REPROVADO(A)`
            img.setAttribute('src', 'meme1.jpg')
        } else 
            if(media < 7){
                res.innerHTML += `Você está de RECUPERAÇÃO`
                img.setAttribute('src', 'meme2.jpeg')
            } else {
                res.innerHTML += `Você está APROVADO`
                img.setAttribute('src', 'meme3.jpeg')
            }
            
            
    res.appendChild(img)
}