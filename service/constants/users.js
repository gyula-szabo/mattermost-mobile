// Copyright (c) 2016 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import keyMirror from 'service/utils/key_mirror';

const UserTypes = keyMirror({
    LOGIN_REQUEST: null,
    LOGIN_SUCCESS: null,
    LOGIN_FAILURE: null,

    LOGOUT_REQUEST: null,
    LOGOUT_SUCCESS: null,
    LOGOUT_FAILURE: null,

    PROFILES_REQUEST: null,
    PROFILES_SUCCESS: null,
    PROFILES_FAILURE: null,

    PROFILES_IN_TEAM_REQUEST: null,
    PROFILES_IN_TEAM_SUCCESS: null,
    PROFILES_IN_TEAM_FAILURE: null,

    PROFILES_IN_CHANNEL_REQUEST: null,
    PROFILES_IN_CHANNEL_SUCCESS: null,
    PROFILES_IN_CHANNEL_FAILURE: null,

    PROFILES_NOT_IN_CHANNEL_REQUEST: null,
    PROFILES_NOT_IN_CHANNEL_SUCCESS: null,
    PROFILES_NOT_IN_CHANNEL_FAILURE: null,

    PROFILES_STATUSES_REQUEST: null,
    PROFILES_STATUSES_SUCCESS: null,
    PROFILES_STATUSES_FAILURE: null,

    SESSIONS_REQUEST: null,
    SESSIONS_SUCCESS: null,
    SESSIONS_FAILURE: null,

    REVOKE_SESSION_REQUEST: null,
    REVOKE_SESSION_SUCCESS: null,
    REVOKE_SESSION_FAILURE: null,

    AUDITS_REQUEST: null,
    AUDITS_SUCCESS: null,
    AUDITS_FAILURE: null,

    CHECK_MFA_REQUEST: null,
    CHECK_MFA_SUCCESS: null,
    CHECK_MFA_FAILURE: null,

    AUTOCOMPLETE_IN_CHANNEL_REQUEST: null,
    AUTOCOMPLETE_IN_CHANNEL_SUCCESS: null,
    AUTOCOMPLETE_IN_CHANNEL_FAILURE: null,

    SEARCH_PROFILES_REQUEST: null,
    SEARCH_PROFILES_SUCCESS: null,
    SEARCH_PROFILES_FAILURE: null,

    RECEIVED_ME: null,
    RECEIVED_PROFILES: null,
    RECEIVED_SEARCH_PROFILES: null,
    RECEIVED_PROFILES_IN_TEAM: null,
    RECEIVED_PROFILES_IN_CHANNEL: null,
    RECEIVED_PROFILE_IN_CHANNEL: null,
    RECEIVED_PROFILES_NOT_IN_CHANNEL: null,
    RECEIVED_PROFILE_NOT_IN_CHANNEL: null,
    RECEIVED_SESSIONS: null,
    RECEIVED_REVOKED_SESSION: null,
    RECEIVED_AUDITS: null,
    RECEIVED_STATUSES: null,
    RECEIVED_AUTOCOMPLETE_IN_CHANNEL: null,
    RESET_LOGOUT_STATE: null
});

export default UserTypes;