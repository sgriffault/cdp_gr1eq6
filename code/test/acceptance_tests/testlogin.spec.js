// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('test_login', function () {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function () {
        await driver.quit()
    })
    it('test_login', async function () {
        await driver.get('http://localhost:8080/')
        await driver.findElement(By.name('username')).click()
        await driver.findElement(By.name('username')).sendKeys('user')
        await driver.findElement(By.name('password')).click()
        await driver.findElement(By.name('password')).sendKeys('pass')
        await driver.findElement(By.css('.w3-btn')).click()
    })
})