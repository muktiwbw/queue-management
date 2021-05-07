const Queue = require('./../models/queueModel');

exports.all = async (req, res, next) => {
  try {
    const queues = await Queue.find()

    return res
          .status(200)
          .json({
            status: 'ok',
            data: {
              queues
            }
          });
  } catch (error) {
    return res
          .status(500)
          .json({
            status: 'error',
            data: {
              message: error.message
            }
          });
  }
  
}

exports.store = async (req, res, next) => {
  try {
    //* Get json body from client
    const { name, address, phone, clinic } = req.body
    
    //* Generate a code, ideally can be moved to model as an event and trigger it before save
    let codePrefix = ''

    //*   - Determine which code to use based on clinic
    switch (clinic) {
      case 'umum':
        codePrefix = 'A'
        break;
      case 'gigi':
        codePrefix = 'B'
        break;
      case 'mata':
        codePrefix = 'C'
        break;
      case 'anak':
        codePrefix = 'D'
        break;
      default:
        throw new Error('Unexpected value for clinic.')
    }

    //*   - Get the last code from the same clinic category
    const lastQueue = await Queue.findOne({ clinic }).sort('-createdAt')
    
    //*   - Increment by 1, if >999 set to 001
    let nextQueueNumber = !lastQueue ? 1 : parseInt(lastQueue.code.substring(1)) + 1
    nextQueueNumber = nextQueueNumber >= 1000 ? 1 : nextQueueNumber
    
    //*   - Combine next number with code prefix
    let nextQueue = codePrefix
    if (nextQueueNumber < 10) nextQueue += `00${nextQueueNumber}`
    else if (nextQueueNumber < 100) nextQueue += `0${nextQueueNumber}`
    else nextQueue += nextQueueNumber

    const fields = {
      name, address, phone, clinic, code: nextQueue
    }

    const queue = await Queue.create(fields)

    return res
          .status(201)
          .json({
            status: 'created',
            data: {
              queue
            }
          });
  } catch (error) {
    return res
          .status(500)
          .json({
            status: 'error',
            data: {
              message: error.message
            }
          });    
  }
}

exports.get = async (req, res, next) => {
  try {
    const { queueID } = req.params

    const queue = await Queue.findById(queueID)

    return res
          .status(200)
          .json({
            status: 'ok',
            data: {
              queue
            }
          });
  } catch (error) {
    return res
          .status(500)
          .json({
            status: 'error',
            data: {
              message: error.message
            }
          });  
  }
}