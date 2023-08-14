describe("Testing Tic Tac Toe", () => {
	beforeEach(() => {
		cy.visit("/game/tictactoe");
	});

	it("Checking Initial Render", () => {
		cy.get("#tic-tac-toe-title").should("exist");
		cy.get("#top-left-tic-tac-toe-button").should("exist");
		cy.get("#top-center-tic-tac-toe-button").should("exist");
		cy.get("#top-right-tic-tac-toe-button").should("exist");
		cy.get("#middle-left-tic-tac-toe-button").should("exist");
		cy.get("#middle-center-tic-tac-toe-button").should("exist");
		cy.get("#middle-right-tic-tac-toe-button").should("exist");
		cy.get("#bottom-left-tic-tac-toe-button").should("exist");
		cy.get("#bottom-center-tic-tac-toe-button").should("exist");
		cy.get("#bottom-right-tic-tac-toe-button").should("exist");
	});

	it("Checking Refresh Button", () => {
		cy.get("#top-left-tic-tac-toe-button").click();
		cy.get("#middle-center-tic-tac-toe-button").click();
		cy.get("#top-right-tic-tac-toe-button").click();
		cy.get("#middle-right-tic-tac-toe-button").click();
		cy.get("#top-center-tic-tac-toe-button").click();
		cy.get("#tic-tac-toe-retry-button").click();
		cy.get("#top-left-tic-tac-toe-button").should("have.text", "");
		cy.get("#middle-center-tic-tac-toe-button").should("have.text", "");
		cy.get("#top-right-tic-tac-toe-button").should("have.text", "");
		cy.get("#middle-right-tic-tac-toe-button").should("have.text", "");
		cy.get("#top-center-tic-tac-toe-button").should("have.text", "");
	});

	it("Checking Stale-Mate condition", () => {
		cy.get("#top-left-tic-tac-toe-button").click();
		cy.get("#top-center-tic-tac-toe-button").click();
		cy.get("#middle-left-tic-tac-toe-button").click();
		cy.get("#middle-center-tic-tac-toe-button").click();
		cy.get("#bottom-center-tic-tac-toe-button").click();
		cy.get("#bottom-left-tic-tac-toe-button").click();
		cy.get("#top-right-tic-tac-toe-button").click();
		cy.get("#middle-right-tic-tac-toe-button").click();
		cy.get("#bottom-right-tic-tac-toe-button").click();
		cy.get("#tic-tac-toe-winner-panel").should(
			"have.text",
			"The Winner is Noone"
		);
	});

	it("Checking X Win condition and Start next round with X", () => {
		cy.get("#top-left-tic-tac-toe-button").click();
		cy.get("#top-center-tic-tac-toe-button").click();
		cy.get("#middle-left-tic-tac-toe-button").click();
		cy.get("#middle-center-tic-tac-toe-button").click();
		cy.get("#bottom-left-tic-tac-toe-button").click();
		cy.get("#tic-tac-toe-winner-panel").should(
			"have.text",
			"The Winner is X"
		);
		cy.get("#tic-tac-toe-retry-button").click();
		cy.get("#top-left-tic-tac-toe-button").click();
		cy.get("#top-left-tic-tac-toe-button").should("have.text", "X");
	});

	it("Checking O Win condition and Start next round with X", () => {
		cy.get("#top-left-tic-tac-toe-button").click();
		cy.get("#top-center-tic-tac-toe-button").click();
		cy.get("#middle-left-tic-tac-toe-button").click();
		cy.get("#middle-center-tic-tac-toe-button").click();
		cy.get("#bottom-right-tic-tac-toe-button").click();
		cy.get("#bottom-center-tic-tac-toe-button").click();
		cy.get("#tic-tac-toe-winner-panel").should(
			"have.text",
			"The Winner is O"
		);
		cy.get("#tic-tac-toe-retry-button").click();
		cy.get("#top-left-tic-tac-toe-button").click();
		cy.get("#top-left-tic-tac-toe-button").should("have.text", "X");
	});
});
