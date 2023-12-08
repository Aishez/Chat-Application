const User = require("../models/user");




exports.updateMe = async (req, res, next) => {
    const filteredBody = filterObj(
        req.body,
        "firstName",
        "lastName",
        "about",
        "avatar"
    );

    const userDoc = await User.create(filteredBody);

    res.status(200).json({
        status: "success",
        data: userDoc,
        message: "User Updated successfully",
    });
};
