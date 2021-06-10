import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Adminuser',
        email: 'admin@abcd.com',
        password: bcrypt.hashSync('12345', 10),
        isAdmin: true
    },
    {
        name: 'Saksham',
        email: 'saksham@abcd.com',
        password: bcrypt.hashSync('12345', 10),

    },
    {
        name: 'Not saksham',
        email: 'nasaksham@abcd.com',
        password: bcrypt.hashSync('12345', 10),

    },
]

export default users