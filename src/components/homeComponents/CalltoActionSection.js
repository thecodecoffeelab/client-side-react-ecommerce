import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>DO you want to know more about BAYKAT BI?</h2>
              <p>Register now and get feedbacks from 211techlead.</p>
              <form className="form-section">
                <input placeholder="Your Email..." name="email" type="email" />
                <input value="Yes. Let's Go!" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
