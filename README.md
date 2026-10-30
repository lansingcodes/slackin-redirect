# Slack Inviter Redirect

[![Netlify Status](https://api.netlify.com/api/v1/badges/29f7a1d9-c50f-42c7-a944-9524934bcd87/deploy-status)](https://app.netlify.com/sites/lansingcodes-slackin-redirect/deploys)

Redirects traffic from slack.lansing.codes to our shared invite link. An admin can manage that link at [Slack shared invites](https://lansingcodes.slack.com/admin/shared_invites). If the invite changes, update both `_redirects` and the fallback link in `index.html`.

This project is hosted on Netlify. The `_redirects` rule sends an HTTP 302 to
Slack; `index.html` retains a clickable fallback for static preview.

## Questions

For general support, ask in the [Lansing Codes Slack team](https://slack.lansing.codes/).
Use this repository's [issues](https://github.com/lansingcodes/slackin-redirect/issues)
for bug reports and feature requests about the redirect.

## Stay in touch

- [Slack](https://slack.lansing.codes/)
- [Twitter](https://twitter.com/lansingcodes)
- [Facebook](https://www.facebook.com/LansingCodes/)
- [Website](https://www.lansing.codes/)
- [Newsletter](https://www.lansing.codes/#newsletter)

## License

[Hippocratic 2.1](https://firstdonoharm.dev)

Copyright (c) 2020-Present, Humanity Codes LLC
