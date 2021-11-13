function traerDatos(){
    console.log('Ready');

    const xhttp=new XMLHttpRequest();

    xhttp.open('GET', 'JSon/estudiantes.json' , true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status==200)
        {
            let datos = JSON.parse(this.responseText);
            console.log(datos);

            var datosHtml = ``
            
            for(let items of datos)
            {
                datosHtml+=`
                <div class="ficha">
                    <div class="encabezado-ficha">
                    <div class="nombre-estudiante">
                        <h1>${items.nombre}</h1>
                    </div>
                    <div class="enlaces">
                        <a href="${items.github}"><i class='bx bxl-github'></i>GitHub</a>
                        <a href="${items.neocities}"><i class='bx bxs-book-content'></i>Neocities</a>
                        <a href=""><i class='bx bx-mail-send'></i>${items.email}</a>
                        <a href=""><i class='bx bxl-whatsapp'></i>${items.telefono}</a>
                    </div>
                    <div class="fotografia">
                        <img class ="perfil" src="${items.imagen}" alt="Foto de perfil">
                    </div>
                    </div>
                    <div class="actividades-ficha">
                    <div class="titulo-actividades">
                        <h2>Actividades</h2>
                    </div>
                    <div class="encabezado-actividades">
                        <div class="item">
                            <p>Numero</p>
                        </div>
                        <div class="nombre">
                            <p>Actividad</p>
                        </div>
                        <div class="estadouiux">
                            <p>%UI/UX</p>
                        </div>
                        <div class="estadodev">
                            <p>%Dev</p>
                        </div>
                    </div>
                    <div class="estado-actividades">
                        <div class="nro">
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                            <p>6</p>
                        </div>
                        <div class="enlace">
                            <a href="${items.actividades[0].linkA}">${items.actividades[0].actividad}</a>
                            <a href="${items.actividades[1].linkA}">${items.actividades[1].actividad}</a>
                            <a href="${items.actividades[2].linkA}">${items.actividades[2].actividad}</a>
                            <a href="${items.actividades[3].linkA}">${items.actividades[3].actividad}</a>
                            <a href="${items.actividades[4].linkA}">${items.actividades[4].actividad}</a>
                            <a href="${items.actividades[5].linkA}">${items.actividades[5].actividad}</a>
                        </div>
                        <div class="porcentajeuiux">
                            <p>${items.actividades[0].estadouiux}</p>
                            <p>${items.actividades[1].estadouiux}</p>
                            <p>${items.actividades[2].estadouiux}</p>
                            <p>${items.actividades[3].estadouiux}</p>
                            <p>${items.actividades[4].estadouiux}</p>
                            <p>${items.actividades[5].estadouiux}</p>
                        </div>
                        <div class="porcentajedev">
                            <p>${items.actividades[0].estadotecnico}</p>
                            <p>${items.actividades[1].estadotecnico}</p>
                            <p>${items.actividades[2].estadotecnico}</p>
                            <p>${items.actividades[3].estadotecnico}</p>
                            <p>${items.actividades[4].estadotecnico}</p>
                            <p>${items.actividades[5].estadotecnico}</p>
                        </div>
                    </div>
                    </div>
                    <div class="estados-ficha">
                    <div class="estadohtml">
                        <p>${items.valoraciones[0].valhtml} HTML</p>
                    </div>
                    <div class="estadocss">
                        <p>${items.valoraciones[0].valcss} CSS</p>
                    </div>
                    <div class="estadojs">
                        <p>${items.valoraciones[0].valjs} JS</p>
                    </div>
                    <div class="estadoui">
                        <p>${items.valoraciones[0].valui} UI</p>
                    </div>
                    <div class="estadoux">
                        <p>${items.valoraciones[0].valux} UX</p>
                    </div> 
                    <div class="total">
                        <p>${items.calificacion} TOTAL</p>
                    </div>
                    </div>
                </div>
                `

            }
            var result = document.querySelector('#fichas')
            result.innerHTML=datosHtml;
        }
    }
}
traerDatos();