import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

test('Netlify and fallback redirects point to the same Slack invite', () => {
  const redirects = readFileSync(new URL('../_redirects', import.meta.url), 'utf8')
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8')

  const netlifyTarget = redirects.match(/^\/\s+(\S+)\s+302!?\s*$/m)?.[1]
  const metaTarget = html.match(/content="0;\s*url=([^"]+)"/i)?.[1]
  const fallbackTarget = html.match(/<a\s+href="([^"]+)"/i)?.[1]

  assert.ok(netlifyTarget, 'Netlify must have a root HTTP redirect')
  assert.ok(metaTarget, 'fallback page must have a meta refresh')
  assert.ok(fallbackTarget, 'fallback page must have an invite link')
  assert.equal(netlifyTarget, metaTarget)
  assert.equal(netlifyTarget, fallbackTarget)
  assert.equal(new URL(netlifyTarget).hostname, 'join.slack.com')
  assert.equal(new URL(netlifyTarget).protocol, 'https:')
})
