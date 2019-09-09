# slackin-redirect

Redirects traffic from slack.lansing.codes to our Slack inviter, which is
hosted at https://lansingcodes-slackin.herokuapp.com for free on Heroku.

This project is hosted online using GitHub Pages (see the
[`gh-pages`](https://github.com/lansingcodes/slackin-redirect/tree/gh-pages)
branch). A DNS CNAME record points `slack` (.lansing.codes) at this website,
which then directs traffic to the
[Slack inviter](https://github.com/rauchg/slackin) running on Heroku.
