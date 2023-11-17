/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import './GitHubProfile.css';

const GitHubProfile = ({ userData, onBackToSearch }) => {
    const formatDate = (dateString) => {
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <>

            <div id="github-profile-root">
                <div id="header"> <h2 onClick={onBackToSearch}>SEARCH</h2></div>

                <img id='profile-image' src={userData.avatar_url} alt={`${userData.login}'s avatar`} />

                <div id="name-block">
                    <p id="name">{userData.name}</p>
                    <p id="prof-link"><a href={userData.html_url}>@{userData.login}</a></p>
                </div>

                <div id="metadata">
                    <div id="location">

                        <img id="location_icon" src="src/assets/location_icon.png" alt="" />
                        <p>{userData.location}</p>
                    </div>
                    <div id="joined">
                        <img id="joined_icon" src="src/assets/calendar_icon.png" alt="" />
                        <p>Joined Date: {formatDate(userData.created_at)}</p>
                    </div>
                </div>

                <div id="stats">

                    <div id="followers">
                        <p id="count">{userData.followers}</p>
                        <div id="follower_name">
                            <img id="follower_image" src="src/assets/followers_icon.png" alt="" />
                            <p>FOLLOWERS</p>
                        </div>

                    </div>

                    <div id="following">
                        <p id="count"> {userData.following}</p>
                        <div id="following_name">
                            <img id="following_image" src="src/assets/following_icon.png" alt="" />
                            <p>FOLLOWING</p>
                        </div>
                    </div>

                    <div id="repositories">
                        <p id="count">{userData.public_repos}</p>

                        <div id="repository_name">
                            <img id="repository_image" src="src/assets/Repository.png" alt="" />
                            <p>PUBLIC REPOSITORIES</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default GitHubProfile;
