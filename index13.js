const jwt = require('jsonwebtoken');

const generateToken = () => {

    const token = jwt.sign(
        { userId: 1 },
        "secret_key",
        { expiresIn: "1h" }
    );

    console.log(token);
};

generateToken();