import React from "react";
import "./UserInfo.css";
import { Button, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useGetAllUsersByUsernameQuery } from "../services/UsersApi";

const UserInfo = () => {
  
  //  accessing URL parameters defined in the route.
  const { username } = useParams();

  // Using a query hook automatically fetches data and returns query values
  const {
    data: user,
    isLoading,
    isError,
  } = useGetAllUsersByUsernameQuery(username);

  if (isLoading) {
    return <p className="pt-3">Loading...</p>;
  }

  if (isError) {
    return (
      <div>
        <p className="pt-3 ps-2">User not found.</p>
        <Link to="/">
          <i className="bi bi-arrow-left ps-2 fs-2"></i>
        </Link>
      </div>
    );
  }
  return (
    <>
      <div className="userInfo-content">
        <Container className="py-5">
          <h2 className="text-center mb-5 pb-5">GitHub User's Resume</h2>
          <div className="userInfo-content-top pb-5 mt-3 mb-5 d-flex justify-content-between">
            <Link to="/">
              <i className="bi bi-arrow-left fs-2"></i>
            </Link>
            {user.hireable && <Button>Hire Me</Button>}
          </div>
          <div className="userInfo-content-bottom pt-2">
            <div className="article pt-5">
              <img src={user.avatar_url} alt="Avatar" />
              <h5 className="mb-0 pt-2 text-center">{user.name}</h5>
              <p className="mb-0 text-center">
                {user.twitter_username ? (
                  <p>@{user.twitter_username}</p>
                ) : (
                  "null"
                )}
              </p>
            </div>
            <div className="github-details d-flex justify-content-center pt-5 mt-5">
              <div className="followers-count pt-5">
                <p className="my-2 text-center">{user.followers}</p>
                <span>Followers</span>
              </div>
              <div className="following-count pt-5 px-3">
                <p className="my-2 text-center">{user.following}K</p>
                <span>Following</span>
              </div>
              <div className="repos-count pt-5">
                <p className="my-2 text-center">{user.public_repos}</p>
                <span>Repositories</span>
              </div>
            </div>
            <div className="user-bio-details d-flex justify-content-between">
              <div className="userInfo-bottom-left d-flex justify-content-between my-5 ms-5 me-4 p-4">
                <div className="user-meta-left ps-2 pe-4">
                  <div className="user-meta">
                    <i className="bi bi-envelope">
                      <span className="ps-1">Email</span>
                    </i>
                    <p>{user.email ? user.email : "No Email"}</p>
                  </div>
                  <div className="user-meta">
                    <i className="bi bi-geo-alt">
                      <span className="ps-1">Location</span>
                    </i>
                    <p>{user.location ? user.location : "No Location"}</p>
                  </div>
                  <div className="user-meta">
                    <i className="bi bi-twitter">
                      <span className="ps-1">Twitter</span>
                    </i>
                    <p>
                      {user.twitter_username ? user.twitter_username : "null"}
                    </p>
                  </div>
                </div>
                <div className="user-meta-right pe-2 ps-4">
                  <div className="user-meta">
                    <i className="bi bi-building-check">
                      <span className="ps-1">Organization</span>
                    </i>
                    <p>{user.company ? user.company : "No company name"}</p>
                  </div>
                  <div className="user-meta">
                    <i className="bi bi-calendar2-check">
                      <span className="ps-1">Joined Date</span>
                    </i>
                    <p>
                      {/* creates a JavaScript Date object from the 'created_at' property of
                     the user object and toLocaleDateString() is method used to format the date */}
                      {new Date(user.created_at).toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="user-meta">
                    <i className="bi bi-globe">
                      <span className="ps-1">Website</span>
                    </i>
                    <p>{user.blog ? user.blog : "website not available"}</p>
                  </div>
                </div>
              </div>
              <div className="userInfo-bottom-right my-5 ms-4 me-5 p-4">
                <h4>Bio</h4>
                <p>
                  {user.bio ? (
                    user.bio
                  ) : (
                    <p>
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document or a typeface without relying on
                      meaningful content.
                    </p>
                  )}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default UserInfo;
