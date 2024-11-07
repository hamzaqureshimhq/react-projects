function pakistan_cities (){
  return(
      <>
      <div style={{width:"100%" }} >
      <div className="container">
          <br />
          <center><h1>About</h1></center>
          <br />
          <div>
            <h2>AS Banquet</h2>
            <br />
            <p>
            Ample space for weddings, corporate events, and parties. Beautifully designed interiors that create a stunning backdrop. 
            Customized menus featuring a variety of cuisines to satisfy every palate
            </p>
          </div>
    <div className="row">
      {/* Card 1 */}
      {/* <div className="col-md-4">
        <div className="card">
          <img src="https://via.placeholder.com/150" className="card-img-top" alt="Card 1" />
          <div className="card-body">
            <h5 className="card-title">Card 1</h5>
            <p className="card-text">Some quick example text to build on the card title.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div> */}
              <div className="col-sm-3 mb-4">
        <div className="card">
          <img src="https://www.imperialpalacebanquethall.com/wp-content/uploads/2018/08/NWX_3528.jpg" className="card-img-top" alt="Card 2" />
          <div className="card-body">
            <h5 className="card-title">Section A</h5>
            <p className="card-text">Short description here.</p>
            <a href="#" className="btn btn-primary">Action</a>
          </div>
        </div>
      </div>
      
      {/* Card 2 */}
      {/* <div className="col-md-4">
        <div className="card">
          <img src="https://via.placeholder.com/150" className="card-img-top" alt="Card 2" />
          <div className="card-body">
            <h5 className="card-title">Card 2</h5>
            <p className="card-text">Some quick example text to build on the card title.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div> */}
              <div className="col-sm-3 mb-4">
        <div className="card">
          <img src="https://royalpepper.in/images/banquet/banquet-halls-in-peeragarhi-halls-peeragarhi.jpg" className="card-img-top" alt="Card 2" />
          <div className="card-body">
            <h5 className="card-title">Section B</h5>
            <p className="card-text">Short description here.</p>
            <a href="#" className="btn btn-primary">Action</a>
          </div>
        </div>
      </div>
      
      {/* Card 3 */}
      {/* <div className="col-md-4">
        <div className="card">
          <img src="https://via.placeholder.com/150" className="card-img-top" alt="Card 3" />
          <div className="card-body">
            <h5 className="card-title">Card 3</h5>
            <p className="card-text">Some quick example text to build on the card title.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        
      </div> */}
              <div className="col-sm-3 mb-4">
        <div className="card">
          <img src="https://www.oyorooms.com/blog/wp-content/uploads/2018/02/fe-2.png" className="card-img-top" alt="Card 2" />
          <div className="card-body">
            <h5 className="card-title">Section C</h5>
            <p className="card-text">Short description here.</p>
            <a href="#" className="btn btn-primary">Action</a>
          </div>
        </div>
      </div>


      <div className="col-sm-3 mb-4">
        <div className="card">
          <img src="https://www.jaypeehotels.com/blog/wp-content/uploads/2021/10/JGGR-Banquets-1024x699.jpg" className="card-img-top" alt="Card 2" />
          <div className="card-body">
            <h5 className="card-title">Section D</h5>
            <p className="card-text">Short description here.</p>
            <a href="#" className="btn btn-primary">Action</a>
          </div>
        </div>
      </div>


      
    </div>
  </div>
  <br/> <br/>
      </div>
      
      </>
  )
}
export default pakistan_cities;































































// App.js
// import React from 'react';
// import './App.css';


// const cities = [
//   {
//     name: "Karachi",
//     description: "The city of lights and Pakistan's largest city.",
//     image: "https://example.com/karachi.jpg",
//     specialDish: "Biryani",
//     famousPlaces: ["Mazar-e-Quaid", "Clifton Beach", "Empress Market"],
//   },
//   {
//     name: "Lahore",
//     description: "Known for its rich culture and food scene.",
//     image: "https://example.com/lahore.jpg",
//     specialDish: "Nihari",
//     famousPlaces: ["Badshahi Mosque", "Lahore Fort", "Shalimar Gardens"],
//   },
//   {
//     name: "Islamabad",
//     description: "The clean and green capital of Pakistan.",
//     image: "https://example.com/islamabad.jpg",
//     specialDish: "Sajji",
//     famousPlaces: ["Faisal Mosque", "Daman-e-Koh", "Rawal Lake"],
//   },
//   {
//     name: "Peshawar",
//     description: "A city with a deep history and unique culture.",
//     image: "https://example.com/peshawar.jpg",
//     specialDish: "Chapli Kebab",
//     famousPlaces: ["Qissa Khwani Bazaar", "Bala Hissar Fort", "Peshawar Museum"],
//   },
//   {
//     name: "Quetta",
//     description: "Known as the fruit basket of Pakistan.",
//     image: "https://example.com/quetta.jpg",
//     specialDish: "Rosh",
//     famousPlaces: ["Hanna Lake", "Ziarat Residency", "Quaid-e-Azam Residency"],
//   },
//   {
//     name: "Multan",
//     description: "The city of saints with beautiful shrines.",
//     image: "https://example.com/multan.jpg",
//     specialDish: "Sohan Halwa",
//     famousPlaces: ["Shrine of Bahauddin Zakariya", "Multan Fort", "Hussain Agahi Bazaar"],
//   },
//   {
//     name: "Faisalabad",
//     description: "The industrial hub of Pakistan.",
//     image: "https://example.com/faisalabad.jpg",
//     specialDish: "Daal Chawal",
//     famousPlaces: ["Clock Tower", "Jinnah Garden", "Gatwala Wildlife Park"],
//   },
//   {
//     name: "Sialkot",
//     description: "Known for its export industry and sports goods.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt7I7ChVlhGk-91q9COw6V6ltoAa67Fb11Ug&s",
//     specialDish: "Tandoori Chicken",
//     famousPlaces: ["Iqbal Manzil", "Marala Headworks", "Sialkot Fort"],
//   },
// ];

// function App() {
//   const handleMoreInfo = (city) => {
//     alert(
//       `City: ${city.name}\nSpecial Dish: ${city.specialDish}\nFamous Places:\n - ${city.famousPlaces.join("\n - ")}`
//     );
//   };

//   return (
//     <div className="App">
//       <h1>Pakistan Cities</h1>
//       <div className="city-cards">
//         {cities.map((city) => (
//           <div key={city.name} className="city-card">
//             <img src={city.image} alt={city.name} className="city-image" />
//             <h2>{city.name}</h2>
//             <p>{city.description}</p>
//             <button onClick={() => handleMoreInfo(city)}>More Info</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
