const request = require('supertest');
const {
    default: UserModel
} = require('../models/User');
const app = require('../app').default;
describe('/users', () => {
    const user = {
        name: 'Gor',
        email: 'test@email.com',
        password: '1234Asdf*'
    }
    it('POST /register', async() => {
        await request(app)
            .post('/users/register')
            .send(user)
            .expect(201)
            .expect(res => {
                expect(res.body._id).toBeTruthy()
            })
    })
    describe('POST /login', () => {

        it('should log in when correct credentials are provided', async() => {
            await UserModel.create(user);
            await request(app)
                .post('/users/login')
                .send(user)
                .expect(200)
        })
        it('should not be able log in when wrong credentials are provided', async() => {
            await UserModel.create(user);
            await request(app)
                .post('/users/login')
                .send({ email: user.email, password: 'patata' })
                .expect(400)
        })

    })
    afterEach(async() => {
        await UserModel.deleteMany();
    })
})