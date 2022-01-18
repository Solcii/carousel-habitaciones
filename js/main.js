/* Array con Informacion habitaciones */

const habitaciones = [
    {img: 'hab-1',imgDesc: 'Habitacion 1',type:'apartamento', name:'Ático Duplex', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quisquam sed mollitia vitae soluta quae odio fugiat facilis minus repella.', moreInfo:'https://github.com/Solcii'},
    {img: 'hab-2',imgDesc: 'Habitacion 2', type:'habitacion matrimonial', name:'Suite presidencial', info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit quam voluptatibus debitis laborum repellat eum reiciendis nam inventore! Asperiores eligendi adipisci illo tempora odit ratione.', moreInfo:'https://github.com/Solcii'}, 
    {img: 'hab-3',imgDesc: 'Habitacion 3',type:'habitacion familiar', name:'Triple standard', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consectetur blanditiis doloremque sit nam veniam velit doloribus, similique reiciendis explicabo, dolorem amet sint.', moreInfo:'https://github.com/Solcii'},
    {img: 'hab-4',imgDesc: 'Habitacion 4',type:'apartamento', name:'Duplex con vista', info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere at in fuga, dolorum enim nihil laudantium natus doloremque?', moreInfo:'https://github.com/Solcii'},
    {img: 'hab-5',imgDesc: 'Habitacion 5',type:'habitacion single', name:'Suite', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aliquid temporibus, placeat, saepe distinctio perferendis ipsam facere magni, fuga voluptatibus et tempora asperiores!', moreInfo:'https://github.com/Solcii'},
    {img: 'hab-6',imgDesc: 'Habitacion 6',type:'habitacion doble', name:'Doble standard', info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, dolor impedit, distinctio earum nostrum perferendis maiores expedita sequi quae est libero.', moreInfo:'https://github.com/Solcii'}
]

/* Creacion dinamica de items del carousel */
habitaciones.forEach(habitacion =>{
    $('.owl-carousel').append(`
    <div class="item">
    <img src="images/${habitacion.img}.jpg" alt=${habitacion.imgDesc} data-aos="fade-down" data-aos-duration="3000">
    <section class="info-box">
        <h2 class="room-type">${habitacion.type}</h2>
        <h1 class="room-name">${habitacion.name}</h1>
        <p class="room-info">${habitacion.info}</p>
        <a class="more-info" href=${habitacion.moreInfo} target='_blank'>Leer más <i class="fas fa-arrow-right"></i></a>
        <button class="button-promotion" >Reservar <i class="fas fa-arrow-right"></i></button>
    </section>
</div>`)
})


$('.owl-carousel').owlCarousel({
    loop:true,
    animateOut: 'fadeOut',
    margin:0,
    autoplay: true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});