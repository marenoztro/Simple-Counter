import React from "react";

const Home = (props) => { //Acá se crea el componente

return ( 
	<div className="container bg-dark">

	<h1 className="container d-flex justify-content-center pe-5" style={{margin:'auto'}}>
		<div className="card text-white bg-secondary mb-3"><i class="far fa-clock"></i></div>
		<div className="card text-white bg-secondary mb-3">{props.horasDecenas}</div>
		<div className="card text-white bg-secondary mb-3">{props.horasUnidades}</div>
		<div className="card text-white bg-secondary mb-3"> : </div>
		<div className="card text-white bg-secondary mb-3">{props.minutosDecenas}</div>
		<div className="card text-white bg-secondary mb-3">{props.minutosUnidades}</div>
		<div className="card text-white bg-secondary mb-3"> : </div>
		<div className="card text-white bg-secondary mb-3">{props.segundosDecenas}</div>
		<div className="card text-white bg-secondary mb-3">{props.segundosUnidades}</div>
	</h1>

	</div>
)

};

export default Home; //Acá como es un sólo componente es un Export Default
