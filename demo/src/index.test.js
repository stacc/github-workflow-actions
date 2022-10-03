const test = require("ava");
const mathWizard = require("./");

test("can add two numbers", t => {
    const res = mathWizard.add(1, 2);
    t.is(res, 3);
});

test("can figure out very important stuff", t => {
    t.is(mathWizard.isTenThousand(10000), true);
    t.is(mathWizard.isTenThousand(1000), false);
});

test("can figure out more very important stuff", t => {
    t.is(mathWizard.isOdd(1), true);
    t.is(mathWizard.isOdd(2), false);
});
