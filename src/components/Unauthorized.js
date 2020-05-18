import React, { Fragment } from "react";
import { useAuth0 } from "../contexts/auth0-context";
import { Jumbotron, Button, Image } from "react-bootstrap";

import logo from "../assets/bowl.png";

export default function Unauthorized() {
  const { isLoading, user, loginWithRedirect } = useAuth0();

  return (
    <div className="unauthorized-site container-fluid span12">
      <Jumbotron className="welcome row-fluid">
        <h1>Welcome to Pot Lucky!</h1>
      </Jumbotron>
      <div className="logo-and-button">
				<Image className="logo" roundedCircle src={logo} alt="Pot Lucky Logo" />
				{!isLoading && !user && (
						<Button
							size="lg"
							variant="success"
							onClick={loginWithRedirect}
							className="login"
						>
							Let's Get Cookin'!
						</Button>
					)}
			</div>
				<br/>
      <Jumbotron className=" row-fluid">
        <div className="blurb span12">
          <p>
            PotLucky is the site you've been wishing for!
						<br/>
            <br />
						Save ingredients you
            have at home and search for recipes using them. You can also search
            with text if you already have an idea of what you're looing for. But
            the fun doesn't stop there! Update your pantry after you complete a
            recipe, save recipes for later. You can even save allergies and
            we'll let you know if a recipe has that allergen.
            <br />
            <br />
            So what are you waiting for?
          </p>
        </div>
				</Jumbotron>
        <h3>About Our Team</h3>
        <div className="team row">
          <Jumbotron className=" teammate span4">
						Derek
						<Image 
							src="https://ca.slack-edge.com/T2G8TE2E5-UT8F3FGH0-3cf27af4b26a-512"
							alt="Derek"
							roundedCircle
						/>
					</Jumbotron>
          <Jumbotron className="teammate span4">
						Kelsey
						<Image 
							src="https://ca.slack-edge.com/T2G8TE2E5-UT85ZDV8A-19d8dae5de0a-512"
							alt="Derek"
							roundedCircle
						/>
					</Jumbotron>
          <Jumbotron className="teammate span4">
						Rohan
						<Image 
							src="https://ca.slack-edge.com/T2G8TE2E5-USNL6SZQX-106eb2e9f39a-512"
							alt="Derek"
							roundedCircle
						/>
						</Jumbotron>
        </div>
    </div>
  );
}
