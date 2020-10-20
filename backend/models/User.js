import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'
const UserSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: [true, 'El campo email es requerido'],
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    tokens: [String]
});
UserSchema.pre('save', async function(next) {
    const user = this;
    user.password = await bcrypt.hash(user.password, 9);
    next()
});
UserSchema.statics.checkCredentials = function(credentials) {
    const user = this.findOne({
        email: credentials.email
    });
    if (!user) return null;
    const isMatch = bcrypt.compare(credentials.password, user.password);
    if (!isMatch) return null;
    return user;
}
const UserModel = mongoose.model('User', UserSchema);
export default UserModel