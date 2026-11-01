import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

function redirectTargets(redirects, html) {
  const netlifyTarget = redirects.match(/^\/\s+(\S+)\s+302!\s*$/m)?.[1]
  const refreshTag = [...html.matchAll(/<meta\b[^>]*>/gi)]
    .map(([tag]) => tag)
    .find((tag) => /\shttp-equiv\s*=\s*(["'])refresh\1/i.test(tag))
  const metaTarget = refreshTag?.match(/\scontent\s*=\s*(["'])0;\s*url=([^"']+)\1/i)?.[2]
  return { netlifyTarget, metaTarget }
}

test('Netlify and fallback redirects point to the same Slack invite', () => {
  const redirects = readFileSync(new URL('../_redirects', import.meta.url), 'utf8')
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8')

  const { netlifyTarget, metaTarget } = redirectTargets(redirects, html)
  const fallbackTarget = html.match(/<a\s+href="([^"]+)"/i)?.[1]

  assert.ok(netlifyTarget, 'Netlify must have a root HTTP redirect')
  assert.ok(metaTarget, 'fallback page must have a meta refresh')
  assert.ok(fallbackTarget, 'fallback page must have an invite link')
  assert.equal(netlifyTarget, metaTarget)
  assert.equal(netlifyTarget, fallbackTarget)
  assert.equal(new URL(netlifyTarget).hostname, 'join.slack.com')
  assert.equal(new URL(netlifyTarget).protocol, 'https:')
})

test('rejects shadowed HTTP rules and non-refresh metadata', () => {
  const redirects = '/ https://join.slack.com/invite 302!\n'
  const refresh = '<meta content="0; url=https://join.slack.com/invite" http-equiv="Refresh">'
  assert.equal(redirectTargets(redirects, refresh).metaTarget, 'https://join.slack.com/invite')
  assert.equal(redirectTargets(redirects.replace('302!', '302'), refresh).netlifyTarget, undefined)
  assert.equal(redirectTargets(redirects, refresh.replace('http-equiv="Refresh"', 'name="description"')).metaTarget, undefined)
})
