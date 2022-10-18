
    const {createApp} = Vue
    const miApp1 = createApp({
        data() {
            return {
                titulo: "",                            
                indice: 1,                             
                imagen: "img/Plato" + this.indice + ".jpg",
                ultimaImagen: 4,
                textoBoton: "Cambiar imagen",                 
                alto: 300,                            
            }
        },             
        
        mounted() {
            this.imagen = "img/Plato" + this.indice + ".jpg"     
            this.titulo = "Foto: " + this.imagen  
        },
                
        methods: {
                    cambiarImagen() {
                       
                        if (this.indice < this.ultimaImagen) {
                            this.indice++   
                        } else {
                            this.indice = 1  
                        }
                        this.imagen = "img/Plato" + this.indice + ".jpg"   
                        this.titulo = "Foto: " + this.imagen 
                    }
                }

        }).mount('#app1')
            

    const {createMiApp} = Vue
    const miApp2 = createApp({
        data() {
            return {
                titulo: "",                            
                indice: 1,                             
                imagen: "img/Postre" + this.indice + ".jpg", 
                ultimaImagen: 6,                       
                textoBoton: "Cambiar imagen",
                alto:300, 
            }
        },
           
        mounted() {
            this.imagen = "img/Postre" + this.indice + ".jpg"     // Ruta y nombre de la foto
            this.titulo = "Foto: " + this.imagen  // Texto del tooltip
        },
            
    
        methods: {
                    cambiarImagen() {
                           
                        if (this.indice < this.ultimaImagen) {
                            this.indice++   
                        } else {
                            this.indice = 1  
                        }
                        this.imagen = "img/Postre" + this.indice + ".jpg"   
                        this.titulo = "Foto: " + this.imagen 
                    }
                }
           
        }).mount('#app2')
    