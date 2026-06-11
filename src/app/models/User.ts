import mongoose from 'mongoose';

const UserFormSchema = new mongoose.Schema({
  firstName: String,
  email: String,
  street: String,
  city: String,
});

export default mongoose.models.UserForm || mongoose.model('UserForm', UserFormSchema);