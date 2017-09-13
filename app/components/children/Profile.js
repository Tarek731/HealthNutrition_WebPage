// Include React
var React = require("react");
var helpers = require("../../utils/helpers");
var Link = require("react-router").Link;

var Profile = React.createClass({
   getInitialState: function() {
    return { userData: {} };
  },
  // Here we render the component
  componentDidMount: function() {
 
    // var username = this.props.params.user;
    // console.log('+'+username+'+')
   
    var username = document.cookie.split('=')[1]
          console.log("cookie " + username)
    if (username !== undefined && username !== ""){
      console.log("line 17")
      helpers.getUser(
      {
        username: username,
   
      }
      ).then(function(response){
          console.log("RESPONSE " + JSON.stringify(response.data));

          console.log("name " + response.data[0].firstname)
          console.log("RESPONSE LENGTH " + response.data.length);
          this.setState({userData: response.data[0]}) 

      }.bind(this));
    }

  },

  render: function() {


    return (
<div>
 <nav className='navbar navbar-default'>
        <div className='container-fluid'>
            <div className='navbar-header' />
              <div className='collapse navbar-collapse' id='myNavbar'>
                <ul className='nav navbar-nav navbar-left'>
                  <li><Link to="/landing"><span className='glyphicon glyphicon-cloud'/>Home</Link></li>  
                   <li><Link to="/dashboard"><span className="glyphicon glyphicon-dashboard"></span> Dashboard</Link></li>
                </ul>
                   <ul className="nav navbar-nav navbar-right"> 
                        <li><Link to="/landing"><span className='glyphicon glyphicon-option-horizontal'/>Log-Out</Link></li>

                   </ul>
              </div>
            </div>      
      
    </nav>  


<section className="clearfix bg-dark profileSection homeBanner">
  <div className="container">
    <div className="row">
      <div className="col-md-4 col-sm-5 col-xs-12">
        <div className="dashboardBoxBg mb30">
          <div className="profileImage">
            <img src="img/dashboard/user-2.jpg"  className="img-circle"></img>
            <div className="file-upload profileImageUpload">
              <div className="upload-area">
                <input type="file" name="img[]" className="file"></input>
                <button className="browse" type="button">Upload a Picture <i className="icon-listy icon-upload"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8 col-sm-7 col-xs-12">
        <form>
          <div className="dashboardBoxBg">
            <div className="profileIntro">
             {this.props.params.user}
{/*<!--               <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form Ipsum available.</p> -->*/}
            </div>
          </div>
          <div className="dashboardBoxBg mt30">
            <div className="profileIntro">
              <h2>About You</h2>
              <div className="row"> 
                <div className="form-group col-sm-6 col-xs-12">
                  <label for="firstNameProfile">First Name</label>
                  <p className="form-control" id="firstNameProfile"> {this.state.userData.firstname} </p>
                </div>
                <div className="form-group col-sm-6 col-xs-12">
                  <label for="lastNameProfile">Last Name</label>
                  <p className="form-control" id="lastNameProfile">{this.state.userData.lastname}</p> 
                </div>
                <div className="form-group col-sm-6 col-xs-12">
                  <label for="emailProfile">Email</label>
                  <p  className="form-control" id="emailProfile">{this.state.userData.email}</p>
                </div>
                <div className="form-group col-xs-12">
                  <label for="aboutYou">About You</label>
                  <textarea className="form-control" rows="5" id="aboutYou" placeholder="About You"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-area mt30">
            <button className="btn btn-primary" type="button">Save Change</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
</div>
    );
  }
});

// Export the component back for use in other files
module.exports = Profile;