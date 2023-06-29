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

describe('The recipe cards have the appropriate layout', () => {
  beforeAll(() => {
    document.documentElement.innerHTML = html.toString();
    const styleElement = document.createElement('style')
    styleElement.innerHTML = styles.toString();
    document.body.appendChild(styleElement)
  });

  test('container is a flexbox', function () {
    const container = document.querySelector('.container')
    const style= window.getComputedStyle(container)
    expect(style.display).toBe('flex')
  });
})
