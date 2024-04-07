
const {createApp} = Vue;
const MiApp1 = createApp({
    data() {
        return {
            titulo: "",
            indice: 1,
            imagen: "",
            ultimoIndice: 6,
            textoBoton: "Cambiar imagen",
            alto: 300,
        };
    },
    mounted() {
        this.imagen = "img/Plato" + this.indice + ".jpg";
        this.titulo = "Foto: " + this.indice;
    },
    methods: {
        cambiarImagen() {
            if (this.indice < this.ultimoIndice) {
                this.indice++;
            } else {
                this.indice = 1;
            }
            this.imagen = "img/Plato" + this.indice + ".jpg";
            this.titulo = "Foto: " + this.indice;
        },
    },
}).mount('#app1');

    const {createMiApp} = Vue
    const MiApp2 = createApp({
        data() {
            return {
                titulo: "",                            
                indice: 1,                             
                imagen: "", 
                ultimoIndice: 6,                       
                textoBoton: "Cambiar imagen",
                alto:300, 
            }
        },
           
        mounted() {
            this.imagen = "img/Postre" + this.indice + ".jpg"     // Ruta y nombre de la foto
            this.titulo = "Foto: " + this.indice;  // Texto del tooltip
        },
            
    
        methods: {
                    cambiarImagen() {
                           
                        if (this.indice < this.ultimoIndice) {
                            this.indice++   
                        } else {
                            this.indice = 1  
                        }
                        this.imagen = "img/Postre" + this.indice + ".jpg"   
                        this.titulo = "Foto: " + this.indice; 
                    }
                }
           
        }).mount('#app2')
    