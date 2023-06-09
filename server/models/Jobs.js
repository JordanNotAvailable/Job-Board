const { Schema, model } = require("mongoose");
const dateFormat = require('../utils/dateFormat');

const jobSchema = new Schema({
  userId: {
    type: String,
  },
  jobTitle: {
    type: String,
  },
  jobDescription: {
    type: String,
  },
  salary: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Job = model("Job", jobSchema);

module.exports = Job;