const { createApp } = Vue;

const app = createApp({
  data() {
    return {
         product: {
            name:"Camara",
            price:450_000,
            stock:2,
            content:'tiene las mejores caracteristicas del mercado , muy buena ampliacion de la imagen',
            images: [
                {
                    image:"./images/camara.jpg",
                    thumbnail:"./images/camara-thumb.jpg"
                },
                {
                    image:"./images/camara-2.jpg",
                    thumbnail:"./images/camara-2-thumb.jpg"
                }
            ],
            new:false,
            offer:true
        },
        cartOpen:true,
        activeImage:1,
        cart:[
        	{
                name: "Camara PL",
                    price: 200_000,
                    stock: 1,
                    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                    atque dolorum corporis, reiciendis eaque temporibus quod magnam amet
                    ea natus delectus? Aut placeat ipsam minus labore voluptas. Porro,
                    vel aliquid!`,
                    images: [
                {
                image: "./images/camara.jpg",
                thumbnail: "./images/camara-thumb.jpg"
                },
                {
                image: "./images/camara-2.jpg",
                thumbnail: "./images/camara-2-thumb.jpg"
                }
                ],
                offer: true,
                new: true
                },
                {
                name: "Camara PL2",
                price: 450_000,
                stock: 1,
                content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                atque dolorum corporis, reiciendis eaque temporibus quod magnam amet
                ea natus delectus? Aut placeat ipsam minus labore voluptas. Porro,
                vel aliquid!`,
                images: [
                {
                image: "./images/camara.jpg",
                thumbnail: "./images/camara-thumb.jpg"
                },
                {
                image: "./images/camara-2.jpg",
                thumbnail: "./images/camara-2-thumb.jpg"
                }
                ],
                offer: true,
                new: true
                },
                {
                name: "Camara PL2",
                price: 450_000,
                stock: 1,
                content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                atque dolorum corporis, reiciendis eaque temporibus quod magnam amet
                ea natus delectus? Aut placeat ipsam minus labore voluptas. Porro,
                vel aliquid!`,
                images: [
                {
                image: "./images/camara.jpg",
                thumbnail: "./images/camara-thumb.jpg"
                },
                {
                image: "./images/camara-2.jpg",
                thumbnail: "./images/camara-2-thumb.jpg"
                }
                ],
                offer: true,
                new: true
                },
                {
                name: "Camara PL2",
                price: 450_000,
                stock: 1,
                content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                atque dolorum corporis, reiciendis eaque temporibus quod magnam amet
                ea natus delectus? Aut placeat ipsam minus labore voluptas. Porro,
                vel aliquid!`,
                images: [
                {
                image: "./images/camara.jpg",
                thumbnail: "./images/camara-thumb.jpg"
                },
                {
                image: "./images/camara-2.jpg",
                thumbnail: "./images/camara-2-thumb.jpg"
                }
                ],
                offer: true,
                new: true
                }
        ]
    };
  },
});
app.mount("#app");