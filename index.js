let hoursField=document.getElementById('hours');
let moneyField = document.getElementById("money");
let formField = document.getElementById("form");


/* hoursField.addEventListener("change",()=>{
    let hours = hoursField.value;
    console.log("Money per Hour:", hours);
})

moneyField.addEventListener("change", function() {
    let money = moneyField.value;
    console.log("Money per Hour:", money);
  });
 */
/* formField.addEventListener("submit",(e)=>{
    e.preventDefault();
    let sum=+moneyField.value*(+hoursField.value);
    document.getElementById("total").innerHTML= `<b>Veo que tu salario es de $${sum} No sé si es mucho o poco, pero recuerda el dinero es la raíz de todo mal, purifícate donde esa raíz de todo mal a tus hijitos</b> <h2>Quiéreme papi</h2>`
}) */

function calculate() {
    event.preventDefault();
    let hours = +document.getElementById('hours').value;
    let money = +document.getElementById('money').value;

    let sum = hours * money;
    document.getElementById('total').innerHTML = `<b>Veo que tu salario es de $${sum}. No sé si es mucho o poco, pero recuerda que el dinero es la raíz de todo mal. Purifícate dandole esa raíz de todo mal a tus hijitos.</b> <h2>Quiéreme papi</h2>`;

    // Crear elemento de imagen
    let img = document.createElement('img');
    //img.src = 'https://gifdb.com/images/file/popeye-498-x-455-gif-i9r0gr0mgb8gv90i.gif'; // URL directa de la imagen GIF
    img.src = 'https://media.tenor.com/URyl-dOyaRkAAAAi/popeye-spinach.gif'; // URL directa de la imagen GIF
    img.alt = 'Imagen GIF';

    // Agregar imagen al contenedor
    let imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar la imagen
    imageContainer.appendChild(img);
}
