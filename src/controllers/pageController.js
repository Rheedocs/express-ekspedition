function home(req, res) {
    res.send("Velkommen til Express ekspeditionen!");
}

function about(req, res) {
    res.send("Her kan du læse om ekspeditionen.");
}

function json(req, res) {
    res.json({
        message: "Hej fra ekspeditionen!",
        status: "ok"
    });
}

function submit(req, res) {
    const name = req.body?.name;

    if (typeof name !== "string" || !name.trim()) {
        return res.status(400).json({
            error: "Navn mangler"
        });
    }

    res.status(200).json({
        message: `Velkommen, ${name}!`
    });
}

function user(req, res) {
    const id = req.params.id;

    if (!Number.isInteger(Number(id)) || Number(id) <= 0) {
        return res.status(400).json({ error: "ID skal være et positivt heltal" });
    }

    res.json({
        userId: id
    });
}

function hello(req, res) {
    const name = req.params.name;

    res.json({
        message: `Hej ${name}!`
    });
}

function calculate(req, res) {
    const a = req.body?.a;
    const b = req.body?.b;

    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return res.status(400).json({
            error: "a og b skal være gyldige tal"
        });
    }

    res.json({
        result: a + b
    });
}

function error(req, res) {
    throw new Error("Noget gik galt!");
}

module.exports = { home, about, json, submit, user, error, hello, calculate };
