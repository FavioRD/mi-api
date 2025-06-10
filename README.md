# 🛒 Lista de Productos con API REST

Este proyecto es una aplicación web que permite listar, agregar y eliminar productos utilizando una **API REST construida con Node.js y Express**, junto con una interfaz moderna hecha en **HTML, Bootstrap y JavaScript puro**.

## a. 🚀 Características

- ✅ Listado dinámico de productos  
- ➕ Agregar productos (nombre y precio)  
- ❌ Eliminar productos de la lista  
- 🔁 Refrescado automático de la interfaz tras operaciones  
- 🧠 Datos gestionados en memoria (sin base de datos)  
- 🖥️ Interfaz responsive con Bootstrap 5  

## b. 🛠️ Tecnologías Utilizadas

- **Frontend:**  
  - HTML5  
  - CSS3 (Bootstrap 5.3)  
  - JavaScript (fetch API)  

- **Backend:**  
  - Node.js  
  - Express  

- **Otros:**  
  - CORS  
  - JSON  


## d. ⚙️ Cómo Ejecutarlo

### Paso 1️⃣: Clonar el repositorio

```bash
git clone https://github.com/FavioRD/mi-api.git
cd mi-api
```

### Paso 2️⃣: Instalar las dependencias
```bash
npm install
```
### Paso 3️⃣: Ejecutar el servidor
```bash
node index.js
El servidor estará disponible en: http://localhost:3000
 ```

Paso 4️⃣: Abrir el archivo HTML
Abre index.html en tu navegador o usa una extensión como Live Server si trabajas con VS Code.

## e. 🔗 Endpoints de la API

Método	Ruta	Descripción

GET	/api/productos	Obtener todos los productos
GET	/api/productos/:id	Obtener un producto por ID
POST	/api/productos	Agregar nuevo producto
DELETE	/api/productos/:id	Eliminar producto por ID

## f. 🧪 Ejemplo de JSON

json
{
  "nombre": "Zapatos",
  "precio": 60
}
