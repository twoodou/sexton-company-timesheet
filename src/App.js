import React, { Component } from 'react';
import './App.css';

handleSubmit: function(e){
	e.preventDefault();
	console.log(this);
}

class App extends Component {
  render() {
    return (
      <div className="App container">
     
		<div className="jumbotron">
			<h1 className="text-center">Sexton, Inc.</h1>
			<h3 className="text-center">Employee Timesheet Application</h3>
		</div>
		
		<div className="row">
			<div className="col-lg-12">
				<div className="panel panel-primary">
					<div className="panel-heading">
						<h3 className="panel-title"><strong>Add Hours</strong></h3>
					</div>
					<div className="panel-body">
						<form>
							<div className="form-group">
								<label htmlFor="date-input">Date:</label>
								<input type="text" className="form-control" id="date-input"/>
							</div>
							<div className="form-group">
								<label htmlFor="job-input">Job/Client/Location/Reason/Truck & Trailer Unit:</label>
								<input type="text" className="form-control" id="job-input"/>
							</div>
							<div className="form-group">
								<label htmlFor="expense-input">Expense & Amount</label>
								<input type="text" className="form-control" id="expense-input"/>
							</div>
							<div className="form-group">
								<label htmlFor="start-time-input">Start Time</label>
								<input type="text" className="form-control" id="start-time-input"/>
							</div>
							<div className="form-group">
								<label htmlFor="end-time-input">End Time</label>
								<input type="text" className="form-control" id="end-time-input"/>
							</div>
							<div className="form-group">
								<label htmlFor="total-hours-input">Total Hours</label>
								<input type="text" className="form-control" id="total-hours-input"/>
							</div>
							<button type="submit" className="btn btn-primary" id="add-hours-btn">Submit</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	  </div>
    );
  }
}

export default App;
