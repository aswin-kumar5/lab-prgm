const bcrypt = require('bcrypt');

const hashPassword = async () => {

    const hashed = await bcrypt.hash("mypassword", 10);

    console.log("Hashed:", hashed);

    const match = await bcrypt.compare("mypassword", hashed);

    console.log("Match:", match);
};

hashPassword();