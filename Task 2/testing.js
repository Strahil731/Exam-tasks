import { assert } from "chai";
import { planYourTrip } from "./index.js";

describe("Testing function", function () {

    describe("choosingDestination functionality", function () {
        it("Year different 2024", function () {
            assert.throw(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 2023), "Invalid Year!");
        });

        it("Destination different", function () {
            assert.throw(() => planYourTrip.choosingDestination("Sofia", "Winter", 2024), "This destination is not what you are looking for.");
        });

        it("Input season is Winter", function () {
            assert.equal(planYourTrip.choosingDestination("Ski Resort", "Winter", 2024), "Great choice! The Winter is the perfect time to visit the Ski Resort.");
        });

        it("Input season invalid Winter", function () {
            assert.equal(planYourTrip.choosingDestination("Ski Resort", "Summer", 2024), "Consider visiting during the Winter for the best experience at the Ski Resort.");
        });
    });

    describe("exploreOptions functionality", function () {
        it("Remove correct activities", function () {
            assert.equal(planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking "], 1), "Skiing , Winter Hiking ");
        });

        it("Return array values", function () {
            assert.equal(planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking "], 1), "Skiing , Winter Hiking ");
        });

        it("Input non-array", function () {
            assert.throw(() => planYourTrip.estimateExpenses("Ski", 2), "Invalid Information!");
        });

        it("Input index is non-number", function () {
            assert.throw(() => planYourTrip.estimateExpenses(["Skiing ", "Snowboarding ", "Winter Hiking "], "Ski"), "Invalid Information!");
        });

        it("Input index is not limits array", function () {
            assert.throw(() => planYourTrip.estimateExpenses(["Skiing ", "Snowboarding ", "Winter Hiking "], 4), "Invalid Information!");
            assert.throw(() => planYourTrip.estimateExpenses(["Skiing ", "Snowboarding ", "Winter Hiking "], 4.5), "Invalid Information!");
        });
    });

    describe("estimateExpenses functionality", function () {
        it("Total cost", function () {
            assert.equal(planYourTrip.estimateExpenses(250, 10), "The estimated cost for the trip is $2500.00, plan accordingly.");
        });

        it("Cost less or equal 500", function () {
            assert.equal(planYourTrip.estimateExpenses(4, 5), "The trip is budget-friendly, estimated cost is $20.00.")
        });

        it("Cost more 500", function () {
            assert.equal(planYourTrip.estimateExpenses(250, 10), "The estimated cost for the trip is $2500.00, plan accordingly.")
        });

        it("Distance non-number", function () {
            assert.throw(() => planYourTrip.estimateExpenses("250", 10), "Invalid Information!");
        });

        it("Distance non-number", function () {
            assert.throw(() => planYourTrip.estimateExpenses("250", "10"), "Invalid Information!");
        });

        it("Fuel cost per liter non-number", function () {
            assert.throw(() => planYourTrip.estimateExpenses(250, "10"), "Invalid Information!");
        });

        it("Input are 0", function () {
            assert.throw(() => planYourTrip.estimateExpenses(0, 0), "Invalid Information!");
        });

        it("Input are negative number", function () {
            assert.throw(() => planYourTrip.estimateExpenses(-10, -20), "Invalid Information!");
        });

        it("Input are negative number", function () {
            assert.throw(() => planYourTrip.estimateExpenses(0, -20), "Invalid Information!");
        });
    });
});