import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const fbSchema = new Schema({
  fbHandle: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true }
});

export default mongoose.model('FbData', postSchema);
