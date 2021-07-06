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
	  activeImage:0
	};
  },
});
app.mount("#app");