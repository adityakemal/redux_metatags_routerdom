import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';

class Profile extends Component {
    render() {
        return (
            <div>
                 <MetaTags>
                    <title>Profile bro</title>
                    <meta name="description" content="profile profile profile profile profile profile profile profile profile profile " />
                </MetaTags>
                <h1>hy im profile</h1>
            </div>
        );
    }
}

export default Profile;