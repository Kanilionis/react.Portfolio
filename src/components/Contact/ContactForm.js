import React from "react";
import "./contact.css"

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form className="container-fluid"
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xleopakw"
        method="POST"
      >
        <div className="contact-row row">
            <div className="col-lg-6 col-md-7 col-sm-8 col-xs-9">
                <label for="formGroupExampleInput">name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="e.g. Ian Rogers"/>
            </div>
          </div>
          <div className="contact-row row">
            <div className="col-lg-6 col-md-7 col-sm-8 col-xs-9">
                <label for="formGroupExampleInput2">email</label>
                <input type="email" className="form-control" id="formGroupExampleInput2" placeholder="e.g. irogers@centleasing.com" name="email" />
            </div>
          </div>
         
          <div className="contact-row row">
            <div className="col-lg-6 col-md-7 col-sm-8 col-xs-9">
                <label for="formGroupExampleInput2">message</label>
                <textarea type="text" name="message" className="form-control" id="formGroupExampleInput2" rows="3" placeholder="Type your message here..."></textarea> 
            </div>
          </div> 
          {/* <form className="row">
        <div className="contact-row intheknow col-12">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label check" for="exampleCheck1">Check here to stay in the know</label>
          </div>
          <br></br>
        <button type="submit" className="submitBtn btn btn-sm btn-dark">Submit</button>
      </form> */}
     
        {status === "SUCCESS" ? <p>Thanks!</p> : <button className="submitBtn btn btn-sm btn-dark">Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}