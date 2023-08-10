# Slack Inviter Redirect

[![Netlify Status](https://api.netlify.com/api/v1/badges/29f7a1d9-c50f-42c7-a944-9524934bcd87/deploy-status)](https://app.netlify.com/sites/lansingcodes-slackin-redirect/deploys)

Redirects traffic from slack.lansing.codes to our "shared invites" link. The link can be accessed by a Slack administrator at [https://lansingcodes.slack.com/admin/shared_invites](https://lansingcodes.slack.com/admin/shared_invites). ~~Note that these links expire after 9 months, so a reminder should be added to the leadership Slack channel to ensure the URL is updated through a PR to this repo, replacing all references to <https://join.slack.com/t/lansingcodes/shared_invite> in index.html to reference the invite token.~~ The link should no longer expire.

This project is hosted online using Netlify. A DNS CNAME record points
`slack[.lansing.codes]` at the website, which then directs traffic to the
[Slack inviter](https://github.com/rauchg/slackin) running on Heroku.

## License

[Hippocratic 2.1](https://firstdonoharm.dev)

Copyright (c) 2020-Present, Humanity Codes LLC
