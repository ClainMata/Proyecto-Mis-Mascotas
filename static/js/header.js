

let miHeader = `
    <div id ="logo">
        <img src="{% static './icons/pata.png' %}" alt="Mi Mascota">                 
    </div> 
    <div class="menu">
        <nav>               
            <ul>
                <li><a href="{% url 'index' %}">INICIO</a></li>
                <li><a href="{% url 'nosotros' %}">NOSOTROS</a></li>
                <li><a href="{% url 'consumirAPI' %}">GALERIA</a></li>
                <li><a href="{% url 'form1' %}">ADOPTA</a></li>
            </ul>                
        </nav>
    </div>
`

document.querySelector("header").innerHTML=miHeader;