[![Netlify Status](https://api.netlify.com/api/v1/badges/29f7a1d9-c50f-42c7-a944-9524934bcd87/deploy-status)](https://app.netlify.com/sites/lansingcodes-slackin-redirect/deploys)

# Slack Inviter Redirect

Redirects traffic from slack.lansing.codes to our Slack inviter, which is
hosted at https://lansingcodes-slackin.herokuapp.com for free on Heroku.

This project is hosted online using Netlify. A DNS CNAME record points
`slack[.lansing.codes]` at the website, which then directs traffic to the
[Slack inviter](https://github.com/rauchg/slackin) running on Heroku.

## Code of Conduct
All participants are expected to treat others with respect and follow our [Code of Conduct](https://www.lansing.codes/code-of-conduct/).