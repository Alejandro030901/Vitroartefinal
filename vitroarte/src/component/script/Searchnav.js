
import productos from "../../../mock/productos.json";
document.getElementById('search').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      // event.preventDefault();
      const searchQuery = this.value;
      // console.log(searchQuery);
      // console.log(productos);
      // const filtered= productos.filter(producto => {
      //   return producto.tittle===searchQuery
      
        
      // })

      // console.log(filtered);
      const searchUrl = `https://www.picta.cu/search/${encodeURIComponent(searchQuery)}`;
      window.open(searchUrl, '_blank');

  }
});