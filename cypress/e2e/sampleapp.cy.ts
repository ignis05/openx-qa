// credentials
const username = 'username'
const password = 'pwd'
const invalidPasswd = '123'
// html selectors
enum Selectors {
	loginInput = 'input[name="UserName"]',
	passwordInput = 'input[name="Password"]',
	submitButton = 'button#login',
	resultMsg = 'label#loginstatus',
}
// label messages
enum ResultMsg {
	LoggedIn = `Welcome, ${username}!`,
	LoggedOut = 'User logged out.',
	Error = 'Invalid username/password',
}

describe('sampleapp login form', () => {
	beforeEach(() => {
		cy.visit('http://uitestingplayground.com/sampleapp')
	})

	it('logs in succesfully', () => {
		cy.get(Selectors.loginInput).fill(username)
		cy.get(Selectors.passwordInput).fill(password)
		cy.get(Selectors.submitButton).click()

		cy.get(Selectors.resultMsg).should('have.text', ResultMsg.LoggedIn)
	})

	it('fails to log in with incorrect credentials', () => {
		cy.get(Selectors.loginInput).fill(username)
		cy.get(Selectors.passwordInput).fill(invalidPasswd)
		cy.get(Selectors.submitButton).click()

		cy.get(Selectors.resultMsg).should('have.text', ResultMsg.Error)
	})

	it('fails to log in with empty credentials', () => {
		cy.get(Selectors.submitButton).click()
		cy.get(Selectors.resultMsg).should('have.text', ResultMsg.Error)
	})

	it('navigates form using tab key', () => {
		cy.get(Selectors.loginInput).fill(username).tab().fill(password).tab().type('{enter}')
		cy.get(Selectors.resultMsg).should('have.text', ResultMsg.LoggedIn)
	})

	it('logs in and logs out', () => {
		// log-in
		cy.get(Selectors.loginInput).fill(username)
		cy.get(Selectors.passwordInput).fill(password)
		cy.get(Selectors.submitButton).click()
		cy.get(Selectors.resultMsg).should('have.text', ResultMsg.LoggedIn)

		// log-out
		cy.get(Selectors.submitButton).click()
		cy.get(Selectors.resultMsg).should('have.text', ResultMsg.LoggedOut)
	})

	it('clears form after logging out', () => {
		// log-in
		cy.get(Selectors.loginInput).fill(username)
		cy.get(Selectors.passwordInput).fill(password)
		cy.get(Selectors.submitButton).click()
		cy.get(Selectors.resultMsg).should('have.text', ResultMsg.LoggedIn)

		// log-out
		cy.get(Selectors.submitButton).click()
		cy.get(Selectors.resultMsg).should('have.text', ResultMsg.LoggedOut)

		cy.get(Selectors.loginInput).should('have.value', '')
		cy.get(Selectors.passwordInput).should('have.value', '')
	})
})
