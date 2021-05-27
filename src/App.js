// eslint-disable-next-line prettier/prettier
import React from 'react';

import Track from './Components/Track/Track';
import './App.css'

function App() {


	return (
		<div className="app ">
			<div className="row pt-5 ">
				<div className="col-md-7 my-5">
					<Track />
					<div className="mx-5 p-3">
						<h3>On Demand Delivery at Your Doorstep</h3>
						<p className="my-2">Need to send something on an emergency basis? GHURI Parcel is what you need!</p>


						<div className="">
							<a href="https://play.google.com/store/apps/details?id=com.ghuriexpress.ghuri"
								className="text-decoration-none" Target="_blank">
								<button
									className="btn btn-warning p-2 my-3 d-flex align-items-center"
									type="button">
									<i className="fa fa-mobile fa-2x me-2 " aria-hidden="true"> </i>
						Download GHURI App
						<i className="fas fa-angle-right ms-2 fa-sm"> </i>
								</button>
							</a>
						</div>



						<div className="">
							<a href="https://play.google.com/store/apps/details?id=com.ghuriexpress.ghuri"
								className="text-decoration-none" Target="_blank">
								<button
									className="btn btn-outline-dark p-2 my-4  d-flex align-items-center"
									type="button">
									<i className="fa fa-money-bill-alt fa-2x me-1 " aria-hidden="true"> </i>
						Earn With GHURI
						<i className="fas fa-angle-right ms-3 ps-2 fa-sm"> </i>
								</button>
							</a>
						</div>
					</div>
				</div>

			</div>



		</div>
	);
}

export default App;
