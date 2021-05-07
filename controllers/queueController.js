const Queue = require('./../models/queueModel');

exports.all = async (req, res, next) => {
  const queues = await Queue.find()

  return res
        .status(200)
        .json({
          status: 'ok',
          data: {
            queues
          }
        });
}

exports.store = async (req, res, next) => {
  
}

exports.get = async (req, res, next) => {

}