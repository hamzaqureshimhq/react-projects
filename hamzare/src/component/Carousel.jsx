function Carousel(){
    return(
        <>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{height:"90vh",widows:"100%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-opWgY2MZa_kXUhy2dhSjNXm8WX75-N2GcA&s" className="d-block w-100" alt="..."/>
    </div>
    <div style={{height:"90vh",widows:"100%"}} className="carousel-item">
      <img src="https://royalpepper.in/images/banquet/banquet-halls-in-peeragarhi-halls-peeragarhi.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img style={{height:"90vh",widows:"100%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GXZov6EX8i_CMdt2wBSAwEYmHHNtEVwkHw&s" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next hnnn</span>
  </button>
</div>
        </>
    )
}
export default Carousel;