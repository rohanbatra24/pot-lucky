import React, {Fragment} from 'react';
import { useAuth0 } from '../contexts/auth0-context';

export default function Unauthorized() {
	const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
    <h1>Welcome to PotLucky!</h1>
    <div className="hero is-info is-fullheight">
							<div className="hero-body">
								<div className="container has-text-centered">
									{!isLoading &&
									!user && (
										<Fragment>
											<h1>Click Below!</h1>
											<button onClick={loginWithRedirect} className="button is-danger">
												Login
											</button>
										</Fragment>
									)}
									{!isLoading &&
									user && (
										<Fragment>
											<h1>You are logged in!</h1>
											<p>Hello {user.name}</p>

											{user.picture && <img src={user.picture} alt="My Avatar" />}
											<button
												onClick={() => logout({ returnTo: window.location.origin })}
												className="button is-small is-dark"
											>
												Logout
											</button>
										</Fragment>
									)}
								</div>
							</div>
						</div>
            </div>
  )
}