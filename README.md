# Slack Inviter Redirect

Redirects traffic from slack.lansing.codes to our Slack inviter, which is
hosted at https://lansingcodes-slackin.herokuapp.com for free on Heroku.

This project is hosted online using Netlify. A DNS CNAME record points
`slack[.lansing.codes]` at the website, which then directs traffic to the
[Slack inviter](https://github.com/rauchg/slackin) running on Heroku.
