/* 
 * This file contains tests that check whether your solution in style.css is correct.
 * Run the tests with `npm run test`
 *
 * You can through this file to learn more about what is being tested, but do not modify it.
 *
 */

const fs = require('fs');
const path = require('path');
const w = require('jest-autograding-reporter').weight

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const styles = fs.readFileSync(path.resolve(__dirname, './style.css'), 'utf8');

jest.dontMock('fs');

describe('The span has the appropriate display', () => {
  beforeAll(() => {
    document.documentElement.innerHTML = html.toString();
    const styleElement = document.createElement('style')
    styleElement.innerHTML = styles.toString();
    document.body.appendChild(styleElement)
  });

  test(w(2, 'span is inline block'), function () {
    const span = document.querySelector('span')
    const style= window.getComputedStyle(span)
    expect(style.display).toBe('inline-block')
  });
})
