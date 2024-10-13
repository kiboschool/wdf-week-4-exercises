/* 
 * This file contains tests that check whether your solution in style.css is correct.
 * Run the tests with `pnpm run test`
 *
 * You can through this file to learn more about what is being tested, but do not modify it.
 *
 */

const fs = require('fs');
const path = require('path');
const w = require('jest-autograding-reporter').weight

jest.dontMock('fs');

const setupTask = (n) => {
  const html = fs.readFileSync(path.resolve(__dirname, `./task-${n}/index.html`), 'utf8');
  const styles = fs.readFileSync(path.resolve(__dirname, `./task-${n}/style.css`), 'utf8');
  document.documentElement.innerHTML = html.toString();
  const styleElement = document.createElement('style')
  styleElement.innerHTML = styles.toString();
  document.body.appendChild(styleElement)
}

describe('Flexbox Skills', () => {
  test('Task 1', function () {
    setupTask(1) 
    const list = document.querySelector('nav ul')
    const style = window.getComputedStyle(list)
    expect(style.display).toBe('flex')
    expect(style.justifyContent).toBe('space-between')
  });

  test('Task 2', function () {
    setupTask(2) 
    const list = document.querySelector('ul')
    let style = window.getComputedStyle(list)
    expect(style.display).toBe('flex')
    const item = document.querySelector('li')
    style = window.getComputedStyle(item)
    expect(style.flex).not.toBe('')
  });

  test('Task 3', function () {
    setupTask(3) 
    const parent = document.querySelector('.parent')
    let style = window.getComputedStyle(parent)
    expect(style.display).toBe('flex')
    expect(style.justifyContent).toBe('center')
    expect(style.alignItems).toBe('center')
  });

  test('Task 4', function () {
    setupTask(4) 
    const list = document.querySelector('ul')
    let style = window.getComputedStyle(list)
    expect(style.display).toBe('flex')
    expect(style.flexWrap).toBe('wrap')
  });
})
