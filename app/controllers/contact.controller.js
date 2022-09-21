exports.create = (req, res, next) => {
    res.send({
        message: "create handler"
    });
};
exports.findAll = (req, res, next) => {
    res.send({
        message: "findAll handler"
    });
};
exports.findOne = (req, res, next) => {
    res.send({
        message: "findOne handler"
    });
};
exports.update = (req, res, next) => {
    res.send({
        message: "update handler"
    });
};
exports.delete = (req, res, next) => {
    res.send({
        message: "delete handler"
    });
};
exports.deleteAll = (req, res, next) => {
    res.send({
        message: "deleteAll handler"
    });
};
exports.findAllFavorite = (req, res, next) => {
    res.send({
        message:"findAllFavorite handler"
    })
}